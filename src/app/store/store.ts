import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";

import rootReducer from "./rootReducer";
import { apiSlice } from "../api/apiSlice";

const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);

export default store;
