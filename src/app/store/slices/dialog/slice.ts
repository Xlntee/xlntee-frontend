import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DialogItem, DialogNames, DialogSize, PayloadDialogProps } from "./type";

export interface IDialogState {
  stack: DialogItem[];
  dialogSize: DialogSize;
}

const initialState: IDialogState = {
  dialogSize: "default",
  stack: []
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openDialog: (state: IDialogState, action: PayloadAction<PayloadDialogProps>) => {
      const { dialogName, dialogProps, options, dialogSize = "default" } = action.payload;
      state.dialogSize = dialogSize;
      state.stack.push({
        dialogName: dialogName,
        dialogProps: dialogProps,
        options: options
      });
    },
    closeDialogByName: (state: IDialogState, action: PayloadAction<{ dialogName: DialogNames }>) => {
      const updateStack = state.stack.filter((dialog) => dialog.dialogName !== action.payload.dialogName);
      state.stack = updateStack;
      state.dialogSize = "default";
    },
    closeAllDialogs: (state: IDialogState) => {
      state.stack = [];
      state.dialogSize = "default";
    },
    closeLatestDialog: (state: IDialogState) => {
      state.stack = state.stack.slice(0, 0);
    }
  }
});

export const { openDialog, closeDialogByName, closeAllDialogs, closeLatestDialog } = dialogSlice.actions;

export default dialogSlice.reducer;
