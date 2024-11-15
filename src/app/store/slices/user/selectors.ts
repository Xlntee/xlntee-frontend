import { createSelector } from "@reduxjs/toolkit";

import { IUserState } from "./slice";
import { RootState } from "../../store";

const selectState = (state: RootState): IUserState => state.user;

export const getUserRole = createSelector(selectState, (state) => state.role);
