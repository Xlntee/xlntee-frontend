import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@mui/material";

const FacebookAuth: FC = () => {
  const { t } = useTranslation("auth");

  return (
    <Button aria-label={`${t("login-with")} facebook button`} className="auth-form__auth-btn" variant="dark-outline">
      <img src="/assets/facebook.svg" alt="facebook" />
    </Button>
  );
};

export default FacebookAuth;
