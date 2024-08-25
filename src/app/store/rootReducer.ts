import { combineReducers } from "redux";
import { persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer, { IAuthState } from "src/pages/login/store/authSlice";
import { apiSlice } from "../api/apiSlice";

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
