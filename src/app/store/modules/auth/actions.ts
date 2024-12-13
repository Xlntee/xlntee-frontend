import Cookies from "js-cookie";
import { cookieKeys } from "src/shared/utils/cookie-keys";

import { AppDispatch } from "../../store";
import { clearAuth } from "../../slices/auth/slice";
import { clearUser } from "../../slices/user/slice";

export const logOut = () => async (dispatch: AppDispatch) => {
  dispatch(clearAuth());
  dispatch(clearUser());
  Cookies.remove(cookieKeys.accessToken);
  Cookies.remove(cookieKeys.refreshToken);
};
