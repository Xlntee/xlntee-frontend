import Cookies from "js-cookie";
import { clearAuth } from "./slice";
import { clearUser } from "../user/slice";
import { AppDispatch } from "../../store";

export const logOut = () => async (dispatch: AppDispatch) => {
  dispatch(clearAuth());
  dispatch(clearUser());
  Cookies.remove("accessToken");
};
