import { createSelector } from "@reduxjs/toolkit";

import { IDialogState } from "./slice";
import { RootState } from "../../store";
import { DialogItem, DialogNames } from "./type";

const selectState = (state: RootState): IDialogState => state.dialog;

export const getIsDialogOpenedSelector = createSelector(selectState, (state) => state.stack.length !== 0);

export const getDialogSizeSelector = createSelector(selectState, (state) => state.dialogSize);

export const getAllDialogsSelector = createSelector(selectState, (state) => state.stack);

export const getDialogByName = (dialogs: DialogItem[], dialogName: DialogNames): DialogItem => {
  let obj = null;

  for (let item of dialogs) {
    if (item.dialogName === dialogName) {
      obj = item;
      break;
    }
  }

  return obj as DialogItem;
};
