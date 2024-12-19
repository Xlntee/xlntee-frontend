import { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Stack, Typography } from "@mui/material";

import { AppRoutes } from "src/shared/routes";
import { PasswordField, TextField, RootForm } from "src/shared/ui";

import { loginApiSlice } from "./api";
import { useLogin } from "./useLogin";
import { useValidationSchema } from "./validation";

export type LoginFormFields = {
  email: string;
  password: string;
};

const LoginForm: FC = () => {
  const { t } = useTranslation("auth");
  const { handleLogin, isLoading } = useLogin();

  const methods = useForm<LoginFormFields>({
    resolver: yupResolver(useValidationSchema()),
    mode: "onSubmit"
  });

  async function onSubmit(props: LoginFormFields): Promise<void> {
    try {
      handleLogin(props);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <ApiProvider api={loginApiSlice}>
      <RootForm methods={methods} onSubmit={onSubmit} className="auth-form login-form">
        <Stack direction="column" gap="20px">
          <TextField name="email" type="text" aria-label="email input" placeholder={t("email-placeholder")} />
          <PasswordField name="password" aria-label="password input" placeholder={t("password-placeholder")} />
          <Button
            aria-label="login button"
            variant="contained"
            type="submit"
            disabled={isLoading}
            className="auth-form__btn-submit"
          >
            {t("login")}
          </Button>
          <Stack direction="column" gap="4px">
            <Typography variant="caption" className="auth-form__caption-text" color="text.primary">
              {t("forgot-password")}? <Link to={AppRoutes.auth.passwordUpdate}>{t("recover-password")}</Link>
            </Typography>
            <Typography variant="caption" className="auth-form__caption-text" color="text.primary">
              {t("no-account")}? <Link to={AppRoutes.auth.registration}>{t("sign-up")}</Link>
            </Typography>
          </Stack>
        </Stack>
      </RootForm>
    </ApiProvider>
  );
};

export default LoginForm;
