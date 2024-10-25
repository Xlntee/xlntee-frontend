import { FC, ReactNode } from "react";
import cn from "classnames";

import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import "./DialogModal.scss";

export type DialogModalProps = {
  open: boolean;
  title?: string;
  children?: ReactNode;
  loading?: boolean;
  showCloseButtonIcon?: boolean;
  type?: "delete" | "send";
  primaryButtonText?: string;
  secondaryButtonText?: string;
  size?: "default" | "large";
  handleAgree: () => void;
  handleClose?: () => void;
};

const DialogModal: FC<DialogModalProps> = ({
  open,
  title,
  children,
  loading,
  showCloseButtonIcon,
  type = "send",
  size = "default",
  primaryButtonText,
  secondaryButtonText,
  handleAgree,
  handleClose
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className={cn("dialog-modal", { "dialog-modal--large": size === "large" })}
    >
      {showCloseButtonIcon && (
        <Button variant="black-text" onClick={handleClose} className="dialog-modal__close-btn">
          <CloseIcon />
        </Button>
      )}
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
      {(primaryButtonText || secondaryButtonText) && (
        <DialogActions>
          {primaryButtonText && (
            <Button
              color={type === "send" ? "success" : type === "delete" ? "error" : "info"}
              variant={type === "send" ? "black-contain" : type === "delete" ? "outlined" : "contained"}
              onClick={handleAgree}
              autoFocus
              disabled={loading}
            >
              {primaryButtonText}
            </Button>
          )}
          {secondaryButtonText && (
            <Button variant="black-text" onClick={handleClose}>
              {secondaryButtonText}
            </Button>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default DialogModal;
