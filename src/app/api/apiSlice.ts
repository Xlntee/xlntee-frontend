import Cookies from "js-cookie";
import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

import { cookieKeys } from "src/shared/config/cookie-keys";

import { setCredentials } from "../store/slices/auth/slice";
import { logOut } from "../store/modules/auth/actions";

const baseQuery = fetchBaseQuery({
  baseUrl: "/api/v1",
  credentials: "include",
  // baseUrl: "https://dummyjson.com", // temp for test
  // credentials: "same-origin", // temp for test
  prepareHeaders: (headers) => {
    const token = Cookies.get(cookieKeys.accessToken);

    headers.set("Content-Type", "application/json");

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  }
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
): Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    const refreshToken = Cookies.get(cookieKeys.refreshToken);

    Cookies.remove(cookieKeys.accessToken);

    const refreshRes = await baseQuery(
      {
        url: "auth/refresh",
        method: "POST",
        body: { token: refreshToken }
      },
      api,
      extraOptions
    );

    if (refreshRes?.data) {
      const state = api.getState();

      api.dispatch(setCredentials({ ...refreshRes.data, state }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({})
});
