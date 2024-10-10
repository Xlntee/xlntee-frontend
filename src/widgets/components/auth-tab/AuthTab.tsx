import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box } from "@mui/material";

import { AppRoutes } from "src/app/routing/appRoutes";
import { UserRole } from "src/shared/utils/enum";

import "./AuthTab.scss";

interface AuthTabProps {
  children?: React.ReactNode;
}

const AuthTab: FC<AuthTabProps> = ({ children }) => {
  const { t } = useTranslation("auth");

  return (
    <Box className="auth-tab">
      <Box className="auth-tab__tablist">
        <NavLink to={AppRoutes.auth.login} className="auth-tab__button">
          {t("login")}
        </NavLink>
        <NavLink to={`${AppRoutes.auth.registration}/${UserRole.STUDENT}`} className="auth-tab__button">
          {t("registration")}
        </NavLink>
      </Box>
      <Box className="auth-tab__panel">{children}</Box>
    </Box>
  );
};

export default AuthTab;
