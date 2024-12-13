import { createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
  email: string;
  isAuth: boolean;
}

const initialState: IAuthState = {
  email: "",
  isAuth: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { email } = action.payload;

      state.email = email;
      state.isAuth = true;
    },
    clearAuth: (state) => {
      state.email = "";
      state.isAuth = false;
    }
  }
});

export const { setCredentials, clearAuth } = authSlice.actions;

export default authSlice.reducer;
