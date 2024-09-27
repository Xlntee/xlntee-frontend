import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Box, Stack, Divider, Button, Typography, Select, MenuItem } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import "./AccountMenu.scss";

const AccountMenu = () => {
  const { i18n } = useTranslation();
  const LCLangKey = "i18nextLng";

  const [lang, setLang] = useState<string>("");

  function onHandleChangeLanguage(lang: string) {
    i18n.changeLanguage(lang);
    setLang(lang);
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
    <Box className="account-menu">
      <Box p="20px">
        <Stack direction="column" alignItems="center" gap="4px">
          <AccountCircleOutlinedIcon className="account-menu__avatar" />
          <Typography variant="h6">@leshalurn</Typography>
        </Stack>
      </Box>
      <Divider />
      <Stack direction="column" alignItems="start" gap="10px" p="20px">
        <Button
          variant="black-outline"
          fullWidth
          startIcon={<SwapHorizIcon fontSize="large" />}
          sx={{ borderRadius: "30px" }}
        >
          User
        </Button>

        <Stack direction="row" alignItems="center" gap="10px" width="100%">
          <LanguageIcon />
          <Select
            size="small"
            fullWidth
            className="language-switcher"
            value={lang}
            onChange={(e) => {
              onHandleChangeLanguage(e.target.value);
            }}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="uk">Ukrainian</MenuItem>
          </Select>
        </Stack>
        <Button variant="black-text" className="account-menu__link">
          Центр підтримки
        </Button>
        <Button variant="black-text" className="account-menu__link">
          Вийти
        </Button>
      </Stack>
    </Box>
  );
};

export default AccountMenu;
