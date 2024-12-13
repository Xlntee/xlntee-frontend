import { apiSlice } from "src/app/api/apiSlice";
import { actionsKeys } from "../../actionKeys";
import { IAuthLogin } from "../../modules/auth/types";

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
    login: builder.mutation<ILoginResponse, IAuthLogin>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
        credentials: "same-origin"
      })
    }),
    signUp: builder.mutation<{ userId: string }, any>({
      query: (userInfo: any) => ({
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
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const response = await queryFulfilled;
          dispatch({ type: actionsKeys.authLoginUser, payload: response.data });
        } catch (error) {
          console.log(error);
        }
      }
    })
  })
});

export const { useLoginMutation, useSignUpMutation, useVerifyEmailMutation, useAcceptPolicyMutation } = authApiSlice;
