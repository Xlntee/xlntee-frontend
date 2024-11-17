import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box } from "@mui/material";

import { InfoCourseComplain, MenuToggler } from "src/features";
import useDialog from "src/hooks/useDialog";

const ComplainInfoDialog: FC = () => {
  const { t } = useTranslation("student");
  const { getOptionsFromDialog, onCloseDialogByName } = useDialog();

  function onCloseDialog(): void {
    onCloseDialogByName("COMPLAIN_INFO_DIALOG");
  }

  return (
    <Box className="dialog-box">
      <MenuToggler active={true} onClick={onCloseDialog} className="dialog-box__close-btn" />
      <InfoCourseComplain
        image="/assets/complain.png"
        imageDescription={t("complain.imageDescription")}
        message={t("complain.message", {
          code: getOptionsFromDialog("COMPLAIN_INFO_DIALOG").id
        })}
      />
    </Box>
  );
};

export default ComplainInfoDialog;
