import { lazy } from "react";
// import { UserMenuDialog } from "./UserMenuDialog";

const dialogs = { USER_MENU_DIALOG: lazy(() => import("./UserMenuDialog/UserMenuDialog")) };

export default dialogs;
