import { useState } from "react";

import { Box, Tooltip, IconButton, Menu, Modal } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";

import { AccountMenu } from "./ui";

import "./User.scss";
import { MenuToggler } from "src/features";

const User = () => {
  const breakpoint = 1024;

  const matches = useMediaQuery(`(min-width:${breakpoint}px)`);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (matches) {
      setAnchorEl(event.currentTarget);
    } else {
      setOpenModal(true);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

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
      <Modal open={openModal} onClose={onCloseModal} className="account-menu-modal">
        <Box className="account-menu-modal__inner">
          <MenuToggler active={openModal} onClick={onCloseModal} />
          <AccountMenu />
        </Box>
      </Modal>
    </Box>
  );
};

export default User;
