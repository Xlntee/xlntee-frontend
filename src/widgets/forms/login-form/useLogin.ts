import { useNavigate } from "react-router-dom";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

import { useAppDispatch } from "src/app/store/store";
import { authApiSlice, useLoginMutation } from "src/app/store/slices/auth/api";
import { cookieKeys } from "src/shared/utils/cookie-keys";
import { getDeviceId } from "src/shared/utils/device";

type LoginProps = {
  email: string;
  password: string;
};

type UseLoginProps = {
  handleLogin: (props: LoginProps) => void;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
};

export function useLogin(): UseLoginProps {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [login, { isLoading, error, isError, isSuccess }] = useLoginMutation();

  async function handleLogin({ email, password }: LoginProps): Promise<void> {
    const response = await login({
      email: email,
      password: password,
      deviceId: getDeviceId()
    }).unwrap();
    document.cookie = encodeURIComponent(cookieKeys.accessToken) + "=" + encodeURIComponent(response.accessToken);
    document.cookie = encodeURIComponent(cookieKeys.refreshToken) + "=" + encodeURIComponent(response.refreshToken);
    await dispatch(authApiSlice.endpoints.getMe.initiate());
    navigate("/");
  }

  return {
    handleLogin,
    isLoading,
    error,
    isError,
    isSuccess
  };
}
