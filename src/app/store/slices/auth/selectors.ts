import { createSelector } from "@reduxjs/toolkit";

import { IAuthState } from "./slice";
import { RootState } from "../../store";

const selectState = (state: RootState): IAuthState => state.auth;

export const getIsAuthSelector = createSelector(selectState, (state) => state.isAuth);
