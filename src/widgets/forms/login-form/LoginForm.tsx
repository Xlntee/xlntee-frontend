import { FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { useTranslation } from "react-i18next";

import { Button, Stack, Typography } from "@mui/material";
import { RootForm } from "src/widgets/forms";
import { PasswordField, TextField } from "src/features/form-fields";

import { useAppDispatch } from "src/app/store/store";
import { AppRoutes } from "src/app/routing/appRoutes";

import { useValidationSchema } from "./validation";
import { authApiSlice, useLoginMutation } from "src/app/store/slices/auth/api";
import { setCredentials } from "src/app/store/slices/auth/slice";

export type LoginFormFields = {
  email: string;
  password: string;
};

const deviceId = "string";

const LoginForm: FC = () => {
  const { t } = useTranslation("auth");
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login, { isLoading: isLoginLoading }] = useLoginMutation();

  const methods = useForm<LoginFormFields>({
    resolver: yupResolver(useValidationSchema()),
    mode: "onSubmit"
  });

  async function onSubmit(data: LoginFormFields): Promise<void> {
    try {
      const res = await login({ ...data, deviceId }).unwrap();

      dispatch(setCredentials(res));

      if (state?.from) {
        navigate(state.from);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ApiProvider api={authApiSlice}>
      <RootForm methods={methods} onSubmit={onSubmit} className="auth-form">
        <Stack direction="column" gap="20px">
          <Stack direction="row" alignItems="center" justifyContent="center" gap="20px">
            <Typography variant="body2">{t("login-with")}</Typography>
            <Stack direction="row" gap="20px">
              <Button
                aria-label={`${t("login-with")} Google button`}
                className="auth-form__auth-btn"
                variant="black-outline"
              >
                <img src="/assets/google.svg" alt="google" />
              </Button>
              <Button
                aria-label={`${t("login-with")} facebook button`}
                className="auth-form__auth-btn"
                variant="black-outline"
              >
                <img src="/assets/facebook.svg" alt="facebook" />
              </Button>
            </Stack>
          </Stack>
          <TextField name="email" type="email" aria-label="email input" placeholder={t("email-placeholder")} />
          <PasswordField name="password" aria-label="password input" placeholder={t("password-placeholder")} />
          <Button
            aria-label="login button"
            variant="contained"
            type="submit"
            disabled={isLoginLoading}
            className="auth-form__btn-submit"
          >
            {t("login")}
          </Button>
          <Stack direction="column" gap="4px">
            <Typography variant="caption" className="auth-form__caption-text">
              {t("forgot-password")}? <Link to={AppRoutes.auth.passwordUpdate}>{t("recover-password")}</Link>
            </Typography>
            <Typography variant="caption" className="auth-form__caption-text">
              {t("no-account")}? <Link to={AppRoutes.auth.registration}>{t("sign-up")}</Link>
            </Typography>
          </Stack>
        </Stack>
      </RootForm>
    </ApiProvider>
  );
};

export default LoginForm;
