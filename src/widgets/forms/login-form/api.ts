import { apiSlice } from "src/app/api/apiSlice";
import { setCredentials } from "src/app/store/slices/auth/slice";
import { setRole } from "src/app/store/slices/user/slice";
import Cookies from "js-cookie";

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
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const response = await queryFulfilled;
          const { email, accessToken } = response.data;

          Cookies.set("accessToken", accessToken);

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

export const { useLoginMutation } = loginApiSlice;
