import { createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
  token: string;
  email: string;
  isAuth: boolean;
}

const initialState: IAuthState = {
  token: "",
  email: "",
  isAuth: true
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken, email } = action.payload;

      state.token = accessToken;
      state.email = email;
      state.isAuth = true;
    },
    logOut: (state) => {
      state.token = "";
      state.email = "";
    }
  }
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
