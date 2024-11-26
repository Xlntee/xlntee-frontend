import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Button, DialogTitle, DialogActions } from "@mui/material";

import { MenuToggler } from "src/features";
import useDialog from "src/hooks/useDialog";

const DeletePromoCodeDialog: FC = () => {
  const { t } = useTranslation("dialog-modal");

  const { onCloseDialogByName, getOptionsFromDialog } = useDialog();

  function onAgreeDialog(): void {
    const options = getOptionsFromDialog("DELETE_PROMO_CODE_DIALOG");
    console.log("getOptionsFromDialog", options);
  }

  function onCloseDialog(): void {
    onCloseDialogByName("DELETE_PROMO_CODE_DIALOG");
  }

  return (
    <Box className="dialog-box">
      <MenuToggler active={true} onClick={onCloseDialog} className="dialog-box__close-btn" />
      <DialogTitle>{t("dialog_modal_delete_promo_code")}</DialogTitle>
      <DialogActions>
        <Button color={"success"} variant={"black-contain"} autoFocus onClick={onAgreeDialog}>
          {t("dialog_modal_agree")}
        </Button>
        <Button variant="black-text" onClick={onCloseDialog}>
          {t("dialog_modal_disagree")}
        </Button>
      </DialogActions>
    </Box>
  );
};

export default DeletePromoCodeDialog;
