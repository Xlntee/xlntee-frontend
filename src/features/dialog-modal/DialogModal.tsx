import { FC, ReactNode } from "react";

import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import "./DialogModal.scss";

export type DialogModalProps = {
  open: boolean;
  title: string;
  text?: ReactNode;
  loading?: boolean;
  useCloseButton?: boolean;
  showCloseButtonIcon?: boolean;
  type?: "delete" | "send";
  agreeButtonText: string;
  deleteButtonText: string;
  handleAgree: () => void;
  handleClose?: () => void;
};

const DialogModal: FC<DialogModalProps> = ({
  open,
  title,
  text,
  loading,
  useCloseButton,
  showCloseButtonIcon,
  type = "send",
  agreeButtonText,
  deleteButtonText,
  handleAgree,
  handleClose
}) => {
  return (
    <Dialog open={open} onClose={handleClose} className="dialog-modal">
      {showCloseButtonIcon && (
        <Button variant="black-text" onClick={handleClose} className="dialog-modal__close-btn">
          <CloseIcon />
        </Button>
      )}
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{text ? text : null}</DialogContent>
      <DialogActions>
        <Button
          color={type === "send" ? "success" : type === "delete" ? "error" : "info"}
          variant={type === "send" ? "black-contain" : type === "delete" ? "outlined" : "contained"}
          onClick={handleAgree}
          autoFocus
          disabled={loading}
        >
          {agreeButtonText}
        </Button>
        {useCloseButton && (
          <Button variant="black-text" onClick={handleClose}>
            {deleteButtonText}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default DialogModal;
