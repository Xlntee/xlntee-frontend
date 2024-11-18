import { FC, useState } from "react";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { useForm } from "react-hook-form";

import useTitle from "src/hooks/useTitle";
import { PageProps } from "pages/type";

import {
  authApiSlice,
  useAcceptPolicyMutation,
  useSignUpMutation,
  useVerifyEmailMutation
} from "src/app/store/slices/auth/api";

import "./RegistartionPage.scss";

interface IFormData {
  email: string;
  password: string;
  code?: string;
}

type RegistrationStateType = "SIGN_UP" | "EMAIL_CONFIRMATION" | "AGREEMENT_ACCEPTION";

const deviceId = "1111";

const RegistrationPage: FC<PageProps> = ({ title }) => {
  useTitle(title);

  const { register, handleSubmit } = useForm<IFormData>();

  const [userId, setUserId] = useState("");

  const [state, setState] = useState<RegistrationStateType>("SIGN_UP");

  const [signUp, { isLoading: isSignUpLoading }] = useSignUpMutation();
  const [verifyEmail, { isLoading: isVerificationLoading }] = useVerifyEmailMutation();
  const [acceptPolicy, { isLoading: isPolicyAcceptionLoading }] = useAcceptPolicyMutation();

  const onSubmit = handleSubmit(async (data) => {
    if (isSignUpLoading || isVerificationLoading || isPolicyAcceptionLoading) return;

    switch (state) {
      case "SIGN_UP": {
        try {
          const res = await signUp({ ...data, deviceId }).unwrap();

          setUserId(res.userId);
          setState("EMAIL_CONFIRMATION");
        } catch (error) {
          console.error(error);
        }
        return;
      }
      case "EMAIL_CONFIRMATION": {
        if (!data.code) return;

        try {
          const res = await verifyEmail({ userId, code: data.code }).unwrap();

          setUserId(res.userId);
          setState("AGREEMENT_ACCEPTION");
        } catch (error) {
          console.error(error);
        }
        return;
      }
      case "AGREEMENT_ACCEPTION": {
        try {
          const res = await acceptPolicy({ userId }).unwrap();

          console.log(res);
        } catch (error) {
          console.error(error);
        }
        return;
      }
    }
  });

  return (
    <ApiProvider api={authApiSlice}>
      <div className="registration-page">
        <form onSubmit={onSubmit} className="registration-page__form">
          <input
            className="registration-page__input"
            type="email"
            {...register("email")}
            autoFocus
            disabled={state !== "SIGN_UP"}
          />
          <input
            className="registration-page__input"
            type="password"
            {...register("password")}
            disabled={state !== "SIGN_UP"}
          />
          <input
            className="registration-page__input"
            type="text"
            {...register("code")}
            disabled={state !== "EMAIL_CONFIRMATION"}
          />
          <button className="registration-page__submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </ApiProvider>
  );
};

export default RegistrationPage;
