import { combineReducers } from "redux";
import authReducer, { IAuthState } from "./auth/authSlice";
import { apiSlice } from "../api/apiSlice";

import { persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig: PersistConfig<IAuthState> = {
  key: "auth",
  whitelist: ["token"],
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
