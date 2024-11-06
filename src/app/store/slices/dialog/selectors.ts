import { createSelector } from "@reduxjs/toolkit";

import { IDialogState } from "./slice";
import { RootState } from "../../store";

const selectState = (state: RootState): IDialogState => state.dialog;

export const getIsDialogOpenedSelector = createSelector(selectState, (state) => state.stack.length !== 0);
export const getAllDialogsSelector = createSelector(selectState, (state) => state.stack);
