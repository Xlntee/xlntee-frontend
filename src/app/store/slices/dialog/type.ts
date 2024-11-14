export type DialogNames =
  | "COMPLAIN_INFO_DIALOG"
  | "REFUND_INFO_DIALOG"
  | "STUDENT_COURSE_COMPLAIN_DIALOG"
  | "STUDENT_COURSE_RATE_DIALOG"
  | "STUDENT_COURSE_REFUND_DIALOG"
  | "STUDENT_COURSE_SHARE_DIALOG"
  | "USER_MENU_DIALOG";

export type PayloadDialogProps = {
  dialogName: DialogNames;
  dialogProps?: object;
  options?: any;
  dialogSize?: DialogSize;
};

export type DialogItem = {
  dialogName: DialogNames;
  dialogProps?: object;
  options?: any;
};

export type DialogSize = "default" | "large" | "extra-large" | "fullscreen";
