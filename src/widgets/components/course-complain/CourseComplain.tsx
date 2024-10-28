import { FC, MouseEvent, useState } from "react";

import { Box, Tooltip, Stack, Button, Menu } from "@mui/material";

import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CreditCardIcon from "@mui/icons-material/CreditCard";

import { DialogModal } from "src/features";
import useDialogModal from "src/hooks/useDialogModal";

import { ComplainForm, RefundForm } from "./ui";

import "./CourseComplain.scss";

enum FormEnum {
  Complain = "complain",
  Refund = "refund"
}

const CourseRate: FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [modalForm, setModalForm] = useState<FormEnum | null>(null);
  const open = Boolean(anchorEl);
  const { openModal, onOpenModal, onCloseModal } = useDialogModal();

  function handleClick(event: MouseEvent<HTMLElement>): void {
    setAnchorEl(event.currentTarget);
  }

  function handleCloseMenu(): void {
    setAnchorEl(null);
  }

  function onHandleClickModal(type: FormEnum): void {
    handleCloseMenu();

    if (type === FormEnum.Complain) setModalForm(FormEnum.Complain);
    if (type === FormEnum.Refund) setModalForm(FormEnum.Refund);

    onOpenModal();
  }

  return (
    <Box className="course-complain">
      <Tooltip title={undefined} className="account-menu-tool">
        <Button
          aria-haspopup="true"
          aria-controls="account-menu"
          aria-expanded={open ? "true" : undefined}
          endIcon={<ArrowDropDownIcon />}
          variant="black-text"
          className="course-complain__toggler"
          onClick={handleClick}
        >
          <NewReleasesOutlinedIcon />
        </Button>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="course-complain-menu"
        open={open}
        onClose={handleCloseMenu}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        className="course-complain-menu"
      >
        <Stack position="relative" direction="column" gap="10px" padding="14px">
          <Button
            variant="black-text"
            startIcon={<NewReleasesOutlinedIcon />}
            className="course-complain-menu__button"
            onClick={() => onHandleClickModal(FormEnum.Complain)}
          >
            Complain
          </Button>
          <Button
            variant="black-text"
            startIcon={<CreditCardIcon />}
            className="course-complain-menu__button"
            onClick={() => onHandleClickModal(FormEnum.Refund)}
          >
            Refund
          </Button>
        </Stack>
      </Menu>
      <DialogModal
        open={openModal}
        className="course-modal"
        size="extra-large"
        showCloseButtonIcon
        handleClose={onCloseModal}
      >
        {modalForm === FormEnum.Complain && <ComplainForm />}
        {modalForm === FormEnum.Refund && <RefundForm />}
      </DialogModal>
    </Box>
  );
};

export default CourseRate;
