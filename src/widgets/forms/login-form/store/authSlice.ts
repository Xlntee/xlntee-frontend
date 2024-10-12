import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/app/store/store";

export interface IAuthState {
  token: string;
  email: string;
}

const initialState: IAuthState = {
  token: "",
  email: ""
};

type CredentialsPayload = {
  accessToken: string;
  email: string;
};

export const selectToken = (state: RootState): string => state.auth.token;
export const selectEmail = (state: RootState): string => state.auth.email;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state: IAuthState, action: PayloadAction<CredentialsPayload>) => {
      const { accessToken, email } = action.payload;

      state.token = accessToken;
      state.email = email;
    },
    logOut: (state) => {
      state.token = "";
      state.email = "";
    }
  }
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
