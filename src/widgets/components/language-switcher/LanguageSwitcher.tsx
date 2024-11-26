import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import { Select, MenuItem } from "@mui/material";
import { languages } from "src/i18n";

import "./LanguageSwitcher.scss";

type LanguageSwitcherProps = {
  compact?: boolean;
};

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ compact = false }) => {
  const { i18n } = useTranslation();
  const LCLangKey = "i18nextLng";

  const [lang, setLang] = useState<string>("");

  function onHandleChangeLanguage(language: string): void {
    i18n.changeLanguage(language);
    setLang(language);
  }

  useEffect(() => {
    const langFromLC = localStorage.getItem(LCLangKey);
    if (langFromLC) {
      setLang(langFromLC);
    } else {
      setLang(navigator.language);
    }
  }, []);

  return (
    <Select
      size="small"
      fullWidth
      className={cn("language-switcher", { "language-switcher--compact": compact })}
      value={lang}
      onChange={(e) => {
        onHandleChangeLanguage(e.target.value);
      }}
      inputProps={{
        "aria-label": "Select language"
      }}
    >
      {languages.map((item) => (
        <MenuItem value={item.code} key={item.code}>
          {compact ? item.shortName.toUpperCase() : item.fullName}
        </MenuItem>
      ))}
    </Select>
  );
};

export default LanguageSwitcher;
