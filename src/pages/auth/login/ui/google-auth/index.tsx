import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@mui/material";

const GoogleAuth: FC = () => {
  const { t } = useTranslation("auth");

  return (
    <Button aria-label={`${t("login-with")} Google button`} className="auth-form__auth-btn" variant="dark-outline">
      <img src="/assets/google.svg" alt="google" />
    </Button>
  );
};

export default GoogleAuth;
