import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { useForm } from "react-hook-form";

import { authApiSlice, useLoginMutation } from "src/app/store/slices/auth/api";
import useTitle from "src/shared/hooks/useTitle";

import { PageProps } from "pages/type";

import "./LoginPage.scss";

interface IFormData {
  email: string;
  password: string;
}

const deviceId = "string";

const LoginPage: FC<PageProps> = ({ title }) => {
  useTitle(title);

  const { register, handleSubmit } = useForm<IFormData>();

  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const { state } = useLocation();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await login({ ...data, deviceId }).unwrap();

      if (state?.from) {
        navigate(state.from);
      }
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <ApiProvider api={authApiSlice}>
      <div className="login-page">
        <form onSubmit={onSubmit} className="login-page__form">
          <input className="login-page__input" {...register("email")} autoFocus />
          <input className="login-page__input" type="password" {...register("password")} />
          <button className="login-page__submit" type="submit" disabled={isLoginLoading}>
            Login
          </button>
        </form>
      </div>
    </ApiProvider>
  );
};

export default LoginPage;
