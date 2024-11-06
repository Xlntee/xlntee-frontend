import { FC } from "react";

import { Box } from "@mui/material";

import { useAppDispatch } from "src/app/store/store";
import { closeDialogByName } from "src/app/store/slices/dialog/slice";

import { MenuToggler } from "src/features";
import { AccountMenu } from "src/widgets/components/account-menu";

import "./UserMenuDialog.scss";

const UserMenuDialog: FC = () => {
  const dispatch = useAppDispatch();

  function close(): void {
    dispatch(closeDialogByName({ dialogName: "USER_MENU_DIALOG" }));
  }

  return (
    <Box className="dialog-box dialog-box--fullscreen user-menu-dialog">
      <MenuToggler active={true} onClick={close} className="dialog-box__close-btn" />
      <AccountMenu />
    </Box>
  );
};

export default UserMenuDialog;
