import { apiSlice } from "src/app/api/apiSlice";
import { setRole } from "../user/slice";
import { setCredentials } from "./slice";

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
  email: string;
  status: "EMAIL_VERIFICATION";
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, IUserInfoBody>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
        credentials: "same-origin"
      })
    }),
    signUp: builder.mutation<{ userId: string }, IUserInfoBody>({
      query: (userInfo: IUserInfoBody) => ({
        url: "/auth/signup/personal-data",
        method: "POST",
        body: { ...userInfo }
      })
    }),
    verifyEmail: builder.mutation<{ userId: string }, IVerificationData>({
      query: (data: IVerificationData) => ({
        url: "/auth/signup/email",
        method: "POST",
        body: { ...data }
      })
    }),
    acceptPolicy: builder.mutation<ILoginResponse, { userId: string }>({
      query: (data: IVerificationData) => ({
        url: "auth/signup/privacy-policy/accept",
        method: "POST",
        body: { ...data }
      })
    }),
    getMe: builder.query<ILoginResponse, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
        credentials: "same-origin"
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const response = await queryFulfilled;
          const { email, accessToken } = response.data;
          await dispatch(
            setCredentials({
              email,
              accessToken
            })
          );
          await dispatch(
            setRole({
              role: "teacher"
            })
          );
        } catch (error) {
          console.log(error);
        }
      }
    })
  })
});

export const { useLoginMutation, useSignUpMutation, useVerifyEmailMutation, useAcceptPolicyMutation } = authApiSlice;
