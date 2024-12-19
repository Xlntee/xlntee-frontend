import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Stack, Typography } from "@mui/material";

import { LoginForm } from "./ui";
import GoogleAuth from "./ui/google-auth";
import FacebookAuth from "./ui/facebook-auth";

const LoginPage: FC = () => {
  const { t } = useTranslation("auth");

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="center" gap="20px" mb="20px">
        <Typography variant="body2" color="text.primary">
          {t("login-with")}
        </Typography>
        <Stack direction="row" gap="20px">
          <GoogleAuth />
          <FacebookAuth />
        </Stack>
      </Stack>
      <LoginForm />
    </>
  );
};

export default LoginPage;
