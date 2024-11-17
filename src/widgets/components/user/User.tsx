import { FC, useEffect, useState } from "react";

import { Box, Tooltip, IconButton, Menu } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";

import { getUserRole } from "src/app/store/slices/user/selectors";

import useDialog from "src/hooks/useDialog";
import { AccountMenu } from "../account-menu";

import "./User.scss";

const User: FC = () => {
  const breakpoint = 1024;
  const matches = useMediaQuery(`(min-width:${breakpoint}px)`);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { onOpenDialog } = useDialog();

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    if (matches) {
      setAnchorEl(event.currentTarget);
    } else {
      onOpenDialog({
        dialogName: "USER_MENU_DIALOG",
        dialogSize: "fullscreen"
      });
    }
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const onCloseModal = (): void => {
    setOpenModal(false);
  };

  useEffect(() => {
    if (openModal) {
      onCloseModal();
    }
  }, [getUserRole]);

  return (
    <Box>
      <Tooltip title={undefined} className="account-menu-tool">
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls="account-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <AccountCircleOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        className="account-menu-dropdown"
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <AccountMenu />
      </Menu>
    </Box>
  );
};

export default User;
