import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";
import { RootState } from "src/app/store/store";
import { setCredentials } from "../store/slices/auth/slice";
import Cookies from "js-cookie";
import { logOut } from "../store/slices/auth/logout";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://dummyjson.com",
  // baseUrl: "/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token || Cookies.get("accessToken");

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

  if (result?.error?.status === 403) {
    const refreshRes = await baseQuery("auth/refresh-token", api, extraOptions);

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
