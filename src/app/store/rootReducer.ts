import { combineReducers } from "redux";
import { persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

import lessonsReducer from "pages/teacher/create-course/structure/store/lessonsSlice";

import { apiSlice } from "../api/apiSlice";
import userReducer from "./slices/user/slice";
import appInitializationReducer from "./slices/appInitialization/slice";
import dialogReducer from "./slices/dialog/slice";
import drawerReducer from "./slices/drawer/slice";
import authReducer, { IAuthState } from "./slices/auth/slice";

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
