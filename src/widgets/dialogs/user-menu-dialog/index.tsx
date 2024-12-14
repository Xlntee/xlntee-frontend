import { FC } from "react";

import { Box } from "@mui/material";

import { MenuToggler } from "src/shared/ui";
import { AccountMenu } from "src/widgets/components/account-menu";
import useDialog from "src/shared/hooks/useDialog";

import "./UserMenuDialog.scss";

const UserMenuDialog: FC = () => {
  const { onCloseDialogByName } = useDialog();

  function onCloseDialog(): void {
    onCloseDialogByName("USER_MENU_DIALOG");
  }

  return (
    <Box className="dialog-box dialog-box--fullscreen user-menu-dialog">
      <MenuToggler active={true} onClick={onCloseDialog} className="dialog-box__close-btn" />
      <AccountMenu />
    </Box>
  );
};

export default UserMenuDialog;
