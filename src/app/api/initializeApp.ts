import { startLoading, stopLoading } from "../store/slices/appInitialization/slice";
import { authApiSlice } from "../store/slices/auth/api";
import { AppDispatch } from "../store/store";

export const initializeApp = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(startLoading());
    await dispatch(authApiSlice.endpoints.getMe.initiate());
  } finally {
    dispatch(stopLoading());
  }
};
