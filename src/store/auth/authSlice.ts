import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IAuthState {
  token: string;
  email: string;
}

const initialState: IAuthState = {
  token: "",
  email: "",
};

export const selectToken = (state: RootState) => state.auth.token;
export const selectEmail = (state: RootState) => state.auth.email;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken, email } = action.payload;

      state.token = accessToken;
      state.email = email;
    },
    logOut: (state) => {
      state.token = "";
      state.email = "";
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
