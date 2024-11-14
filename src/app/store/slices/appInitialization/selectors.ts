import { createSelector } from "@reduxjs/toolkit";

import { IAppInitializationState } from "./slice";
import { RootState } from "../../store";

const selectState = (state: RootState): IAppInitializationState => state.appInitialization;

export const getIsAppLoadingSelector = createSelector(selectState, (state) => state.loading);
