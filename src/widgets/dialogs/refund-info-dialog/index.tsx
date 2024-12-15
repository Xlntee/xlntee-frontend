import Box from "@mui/material/Box";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { InfoCourseComplain, MenuToggler } from "src/shared/ui";
import useDialog from "src/shared/hooks/useDialog";

const RefundInfoDialog: FC = () => {
  const { t } = useTranslation("student");
  const { getOptionsFromDialog, onCloseDialogByName } = useDialog();

  function onCloseDialog(): void {
    onCloseDialogByName("REFUND_INFO_DIALOG");
  }

  return (
    <Box className="dialog-box">
      <MenuToggler active={true} onClick={onCloseDialog} className="dialog-box__close-btn" />
      <InfoCourseComplain
        image="/assets/refund.png"
        imageDescription={t("refund.image-description")}
        message={t("refund.message", {
          code: getOptionsFromDialog("REFUND_INFO_DIALOG").id
        })}
      />
    </Box>
  );
};

export default RefundInfoDialog;
