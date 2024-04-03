import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IAuthState {
  token: string;
}

const initialState: IAuthState = {
  token: "",
};

export const selectToken = (state: RootState) => state.auth.token;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;

      state.token = accessToken;
    },
    logOut: (state) => {
      state.token = "";
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
