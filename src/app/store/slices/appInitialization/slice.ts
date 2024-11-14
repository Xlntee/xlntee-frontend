import { createSlice } from "@reduxjs/toolkit";

export interface IAppInitializationState {
  loading: boolean;
}

const appInitializationSlice = createSlice({
  name: "dialog",
  initialState: {
    loading: false
  },
  reducers: {
    startLoading: (state: IAppInitializationState) => {
      state.loading = true;
    },
    stopLoading: (state: IAppInitializationState) => {
      state.loading = false;
    }
  }
});

export default appInitializationSlice.reducer;
