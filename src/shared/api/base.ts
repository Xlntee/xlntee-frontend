import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";
import { RootState } from "src/app/store/store";
import { logOut } from "src/app/store/slices/auth/slice";

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://reqres.in/api",
  // baseUrl: "/api/v1",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  }
});

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
): Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    const refreshRes = await baseQuery("auth/refresh-token", api, extraOptions);

    if (refreshRes?.data) {
      const state = api.getState();
      console.log("state", state);

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};
