import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { useForm } from "react-hook-form";

import { useAppDispatch } from "src/app/store/store";
import { PublicLayout } from "src/layouts";

import { setCredentials } from "./store/authSlice";
import { authApiSlice, useLoginMutation } from "./api/authApiSlice";

import "./LoginPage.scss";

interface IFormData {
  email: string;
  password: string;
}

const deviceId = "string";

const LoginPage: FC = () => {
  const { register, handleSubmit } = useForm<IFormData>();

  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const { state } = useLocation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

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
      <PublicLayout>
        <div className="login-page">
          <form onSubmit={onSubmit} className="login-page__form">
            <input className="login-page__input" {...register("email")} autoFocus />
            <input className="login-page__input" type="password" {...register("password")} />
            <button className="login-page__submit" type="submit" disabled={isLoginLoading}>
              Login
            </button>
          </form>
        </div>
      </PublicLayout>
    </ApiProvider>
  );
};

export default LoginPage;
