import { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Stack, Button } from "@mui/material";

import { AppRoutes } from "src/app/routing/appRoutes";
import { useAuth } from "src/hooks/useAuth";

import { LanguageSwitcher } from "../language-switcher";

const HeaderTools: FC = () => {
  const { t } = useTranslation("auth");
  const { isAuth } = useAuth();

  return (
    <Stack direction="row" alignItems="center" gap="10px" className="header__tools">
      <LanguageSwitcher compact />
      {!isAuth && (
        <Button
          component={Link}
          to={AppRoutes.auth.login}
          variant="black-contain"
          size="small"
          className="button-rounded-sm"
          sx={{ paddingInline: "20px" }}
        >
          {t("login")}
        </Button>
      )}
    </Stack>
  );
};

export default HeaderTools;
