import { combineReducers } from "redux";
import { persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer, { IAuthState } from "src/pages/auth/login/store/authSlice";
import lessonsReducer from "src/pages/create-course/structure/store/lessonsSlice";

import userReducer from "./slices/user/slice";
import appInitializationReducer from "./slices/appInitialization/slice";
import dialogReducer from "./slices/dialog/slice";
import drawerReducer from "./slices/drawer/slice";
import { apiSlice } from "../api/apiSlice";

const authPersistConfig: PersistConfig<IAuthState> = {
  key: "auth",
  whitelist: ["token"],
  storage
};

const rootReducer = combineReducers({
  appInitialization: appInitializationReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  lessons: lessonsReducer,
  user: userReducer,
  dialog: dialogReducer,
  drawer: drawerReducer,
  [apiSlice.reducerPath]: apiSlice.reducer
});

export default rootReducer;
