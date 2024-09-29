import { combineReducers } from "redux";
import { persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer, { IAuthState } from "src/pages/auth/login/store/authSlice";
import lessonsReducer from "src/pages/create-course/structure/store/lessonsSlice";
import { apiSlice } from "../api/apiSlice";

const authPersistConfig: PersistConfig<IAuthState> = {
  key: "auth",
  whitelist: ["token"],
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  lessons: lessonsReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
