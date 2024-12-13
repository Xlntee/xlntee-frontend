import { Middleware } from "@reduxjs/toolkit";

import { actionsKeys } from "../actionKeys";
import { setCredentials } from "../slices/auth/slice";
import { setRole } from "../slices/user/slice";

export const authUserMiddleware: Middleware = (storeAPI) => (next) => (action) => {
  if (action.type === actionsKeys.authLoginUser) {
    try {
      const { email, accessToken, role } = action.payload;
      // const role = "teacher"; // temp for test

      storeAPI.dispatch(
        setCredentials({
          email,
          accessToken
        })
      );
      storeAPI.dispatch(
        setRole({
          role: role
        })
      );
    } catch (error) {
      console.log(error);
    }
  } else {
    return next(action);
  }
};
