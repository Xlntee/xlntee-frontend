import { apiSlice } from "../../api/apiSlice";

interface IUserInfoBody {
  email: string;
  password: string;
  deviceId: string;
}

interface IVerificationData {
  userId: string;
  code: string;
}

interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
  status: "EMAIL_VERIFICATION";
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, IUserInfoBody>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    signUp: builder.mutation<{ userId: string }, IUserInfoBody>({
      query: (userInfo: IUserInfoBody) => ({
        url: "/auth/signup/personal-data",
        method: "POST",
        body: { ...userInfo },
      }),
    }),
    verifyEmail: builder.mutation<{ userId: string }, IVerificationData>({
      query: (data: IVerificationData) => ({
        url: "/auth/signup/email",
        method: "POST",
        body: { ...data },
      }),
    }),
    acceptPolicy: builder.mutation<ILoginResponse, { userId: string }>({
      query: (data: IVerificationData) => ({
        url: "auth/signup/privacy-policy/accept",
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation, useVerifyEmailMutation, useAcceptPolicyMutation } = authApiSlice;
