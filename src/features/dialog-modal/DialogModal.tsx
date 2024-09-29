import { FC } from "react";
import { useTranslation } from "react-i18next";

import {
  Button,
  Dialog,
  Stack,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  CircularProgress,
} from "@mui/material";

export interface DialogModalProps {
  open: boolean;
  title: string;
  text?: string;
  loading?: boolean;
  handleAgree: () => void;
  handleClose: () => void;
}

const DialogModal: FC<DialogModalProps> = ({ open, title, text, loading, handleAgree, handleClose }) => {
  const { t } = useTranslation("dialog-modal");

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{text ? <DialogContentText>{text}</DialogContentText> : null}</DialogContent>
      <DialogActions>
        <Button color="error" variant="contained" onClick={handleClose}>
          {t("dialog_modal_disagree")}
        </Button>
        <Stack spacing={2} direction="row" alignItems="center">
          <Button color="success" variant="contained" onClick={handleAgree} autoFocus disabled={loading}>
            {t("dialog_modal_agree")}
          </Button>
          {loading ? <CircularProgress size={20} /> : null}
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default DialogModal;
