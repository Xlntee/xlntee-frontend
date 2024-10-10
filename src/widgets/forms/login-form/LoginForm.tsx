import { FC } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { useTranslation } from "react-i18next";

import { Button, Stack, TextField, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { FacebookOutlined } from "@mui/icons-material";

import { useAppDispatch } from "src/app/store/store";
import { setCredentials } from "pages/auth/login/store/authSlice";
import { AppRoutes } from "src/app/routing/appRoutes";

import { authApiSlice, useLoginMutation } from "./api/authApiSlice";

import { LoginFormValues, validationSchema } from "./validation";

const deviceId = "string";

const LoginForm: FC = () => {
  const { role } = useParams();
  const { t } = useTranslation("auth");

  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<LoginFormValues>({
    resolver: yupResolver(validationSchema),
    mode: "onSubmit",
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await login({ ...data, deviceId }).unwrap();

      dispatch(setCredentials(res));

      if (state?.from) {
        navigate(state.from);
      }
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <ApiProvider api={authApiSlice}>
      <form onSubmit={onSubmit} className="auth-form">
        <Stack direction="column" gap="20px">
          <Stack direction="row" alignItems="center" justifyContent="center" gap="20px">
            <Typography variant="body2">{t("login-with")}</Typography>
            <Stack direction="row" gap="20px">
              <Button
                aria-label={`${t("login-with")} Google button`}
                className="auth-form__auth-btn"
                variant="black-outline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 326667 333333"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path
                    d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
                    fill="#4285f4"
                  />
                  <path
                    d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
                    fill="#34a853"
                  />
                  <path
                    d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
                    fill="#fbbc04"
                  />
                  <path
                    d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
                    fill="#ea4335"
                  />
                </svg>
              </Button>
              <Button
                aria-label={`${t("login-with")} facebook button`}
                className="auth-form__auth-btn"
                variant="black-outline"
              >
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32">
                  <path
                    fill="#1877f2"
                    d="M31.997 15.999c0-8.836-7.163-15.999-15.999-15.999s-15.999 7.163-15.999 15.999c0 7.985 5.851 14.604 13.499 15.804v-11.18h-4.062v-4.625h4.062v-3.525c0-4.010 2.389-6.225 6.043-6.225 1.75 0 3.581 0.313 3.581 0.313v3.937h-2.017c-1.987 0-2.607 1.233-2.607 2.498v3.001h4.437l-0.709 4.625h-3.728v11.18c7.649-1.2 13.499-7.819 13.499-15.804z"
                  ></path>
                </svg>
              </Button>
            </Stack>
          </Stack>
          <TextField
            {...register("email")}
            error={!!errors.email?.message}
            helperText={errors.email?.message}
            aria-label="email input"
            type="email"
            placeholder={t("email-placeholder")}
            autoFocus
          />
          <TextField
            {...register("password")}
            error={!!errors.password?.message}
            helperText={errors.password?.message}
            aria-label="password input"
            type="password"
            placeholder={t("password-placeholder")}
          />
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
              {t("no-account")}? <Link to={`${AppRoutes.auth.registration}/${role}`}>{t("sign-up")}</Link>
            </Typography>
          </Stack>
        </Stack>
      </form>
    </ApiProvider>
  );
};

export default LoginForm;
