import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DialogItem, DialogNames, PayloadDialogProps } from "./type";

export interface IDialogState {
  isDialogOpen: boolean;
  stack: DialogItem[];
}

const initialState: IDialogState = {
  isDialogOpen: false,
  stack: []
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openDialog: (state: IDialogState, action: PayloadAction<PayloadDialogProps>) => {
      const { dialogName, dialogProps, options } = action.payload;
      state.stack.push({
        dialogName: dialogName,
        dialogProps: dialogProps,
        options: options
      });
    },
    closeDialogByName: (state: IDialogState, action: PayloadAction<{ dialogName: DialogNames }>) => {
      state.stack = state.stack.filter((dialog) => dialog.dialogName !== action.payload.dialogName);
    },
    closeAllDialogs: (state: IDialogState) => {
      state.stack = [];
    },
    closeLatestDialog: (state: IDialogState) => {
      state.stack = state.stack.slice(0, -1);
    }
  }
});

export const { openDialog, closeDialogByName, closeAllDialogs, closeLatestDialog } = dialogSlice.actions;

export default dialogSlice.reducer;
