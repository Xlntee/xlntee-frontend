import { FC } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

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
          <Button
            aria-label="login with google button"
            className="auth-form__auth-btn"
            variant="black-outline"
            startIcon={<GoogleIcon />}
          >
            Log in with Google
          </Button>
          <Button
            aria-label="login with facebook button"
            className="auth-form__auth-btn"
            variant="black-outline"
            startIcon={<FacebookOutlined />}
          >
            Log in with Facebook
          </Button>
          <TextField
            {...register("email")}
            error={!!errors.email?.message}
            helperText={errors.email?.message}
            aria-label="email input"
            type="email"
            placeholder="Email"
            autoFocus
          />
          <TextField
            {...register("password")}
            error={!!errors.password?.message}
            helperText={errors.password?.message}
            aria-label="password input"
            type="password"
            placeholder="Password"
          />
          <Button
            aria-label="login button"
            variant="contained"
            type="submit"
            disabled={isLoginLoading}
            className="auth-form__btn-submit"
          >
            Log in
          </Button>
          <Stack direction="column" gap="4px" textAlign="center">
            <Typography variant="caption" className="auth-form__caption-text">
              Forgot password? <Link to={AppRoutes.authPasswordUpdate}>recover your pasword</Link>
            </Typography>
            <Typography variant="caption" className="auth-form__caption-text">
              Have no account? <Link to={`${AppRoutes.authTypeRegistration}/${role}`}>Sign up</Link>
            </Typography>
          </Stack>
        </Stack>
      </form>
    </ApiProvider>
  );
};

export default LoginForm;
