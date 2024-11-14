import Box from "@mui/material/Box";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { InfoCourseComplain, MenuToggler } from "src/features";
import { useAppDispatch, useAppSelector } from "src/app/store/store";
import { closeDialogByName } from "src/app/store/slices/dialog/slice";
import { getAllDialogsSelector, getDialogByName } from "src/app/store/slices/dialog/selectors";

const RefundInfoDialog: FC = () => {
  const { t } = useTranslation("student");
  const dispatch = useAppDispatch();
  const allDialogs = useAppSelector(getAllDialogsSelector);

  function onCloseDialog(): void {
    dispatch(closeDialogByName({ dialogName: "REFUND_INFO_DIALOG" }));
  }

  return (
    <Box className="dialog-box">
      <MenuToggler active={true} onClick={onCloseDialog} className="dialog-box__close-btn" />
      <InfoCourseComplain
        image="/assets/refund.png"
        imageDescription={t("refund.imageDescription")}
        message={t("refund.message", {
          code: getDialogByName(allDialogs, "REFUND_INFO_DIALOG").options.id
        })}
      />
    </Box>
  );
};

export default RefundInfoDialog;
