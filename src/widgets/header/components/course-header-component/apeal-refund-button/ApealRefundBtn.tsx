import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import "./ApealRefundBtn.scss";
import { Link } from "react-router-dom";
import ApealModal from "./ApealModal";
import WarningModal from "./WarningModal";

const ApealRefundBtn = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [isWarningOpen, setIsWarningOpen] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  const handleOpenWarning = () => setIsWarningOpen(true);
  const handleCloseWarning = () => setIsWarningOpen(false);

  const handleApealClick = () => {
    if (isDisabled) {
      handleOpenWarning();
    } else {
      handleOpenModal();
    }
  };

  return (
    <div className="apeal-refund-block">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <NewReleasesOutlinedIcon fontSize="large" sx={{ color: "#fff" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={handleApealClick}
          sx={{ fontFamily: "Inter, sans-serif", color: isDisabled ? "#828282" : "#000" }}
        >
          <NewReleasesOutlinedIcon />
          Поскаржитись
        </MenuItem>
        <MenuItem>
          <Link to="#" className="apeal-refund-block__apeal-link">
            <PaidOutlinedIcon />
            Повернути кошти
          </Link>
        </MenuItem>
      </Menu>
      <ApealModal isOpenModal={isOpenModal} handleCloseModal={handleCloseModal} />
      <WarningModal isModalOpen={isWarningOpen} handleCloseModal={handleCloseWarning} />
    </div>
  );
};

export default ApealRefundBtn;
