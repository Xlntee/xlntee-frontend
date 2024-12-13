import { apiSlice } from "src/app/api/apiSlice";

interface IUserLogin {
  username: string;
  password: string;
}

interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
  email: string;
}

export const loginApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, IUserLogin>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
        credentials: "same-origin"
      })
    })
  })
});

export const { useLoginMutation } = loginApiSlice;
