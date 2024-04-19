import "./LoginPage.scss";

import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { FC } from "react";
import { authApiSlice, useLoginMutation } from "../../store/auth/authApiSlice";
import { useForm } from "react-hook-form";
import Page from "components/page/Page";
import { useAppDispatch } from "src/store/store";
import { setCredentials } from "src/store/auth/authSlice";
import { useLocation, useNavigate } from "react-router-dom";

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
      <Page>
        <div className="login-page">
          <form onSubmit={onSubmit} className="login-page__form">
            <input className="login-page__input"  {...register("email")} autoFocus />
            <input className="login-page__input" type="password" {...register("password")} />
            <button className="login-page__submit" type="submit" disabled={isLoginLoading}>
              Login
            </button>
          </form>
        </div>
      </Page>
    </ApiProvider>
  );
};

export default LoginPage;
