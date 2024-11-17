import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DrawerNames, DrawerProps, PayloadDialogProps } from "./type";

export interface IDrawerState {
  drawerName: DrawerNames | null;
  isDrawerOpened: boolean;
  dialogProps: DrawerProps;
}

const initialState: IDrawerState = {
  drawerName: null,
  isDrawerOpened: false,
  dialogProps: {
    direction: "right"
  }
};

const dialogSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    openDrawer: (state: IDrawerState, action: PayloadAction<PayloadDialogProps>) => {
      const { dialogName, props } = action.payload;
      state.drawerName = dialogName;
      state.dialogProps = {
        ...state.dialogProps,
        ...props
      };
      state.isDrawerOpened = true;
    },
    closeDrawer: (state: IDrawerState) => {
      state.isDrawerOpened = false;
      state.drawerName = null;
    }
  }
});

export const { openDrawer, closeDrawer } = dialogSlice.actions;

export default dialogSlice.reducer;
