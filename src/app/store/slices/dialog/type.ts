export type DialogNames = "USER_MENU_DIALOG";

export type PayloadDialogProps = {
  dialogName: DialogNames;
  dialogProps?: object;
  options?: object;
};

export type DialogItem = {
  dialogName: DialogNames;
  dialogProps?: object;
  options?: object;
};
