import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Button, DialogTitle, DialogActions } from "@mui/material";

import { useAppDispatch } from "src/app/store/store";
import { MenuToggler } from "src/shared/ui";

import { deleteLecture } from "pages/teacher/create-course/structure/store/lessonsSlice";

import useDialog from "src/hooks/useDialog";

const DeleteLectureDialog: FC = () => {
  const { t } = useTranslation("dialog-modal");
  const dispatch = useAppDispatch();

  const { onCloseDialogByName, getOptionsFromDialog } = useDialog();

  function onAgreeDialog(): void {
    const options = getOptionsFromDialog("DELETE_LECTURE_DIALOG");
    dispatch(
      deleteLecture({
        lessonId: options.lessonId,
        lectureId: options.lectureId
      })
    );
    onCloseDialog();
  }

  function onCloseDialog(): void {
    onCloseDialogByName("DELETE_LECTURE_DIALOG");
  }

  return (
    <Box className="dialog-box">
      <MenuToggler active={true} onClick={onCloseDialog} className="dialog-box__close-btn" />
      <DialogTitle>{t("dialog_modal_delete_lecture")}</DialogTitle>
      <DialogActions>
        <Button color="success" variant={"black-contain"} autoFocus onClick={onAgreeDialog}>
          {t("dialog_modal_agree")}
        </Button>
        <Button variant="black-text" onClick={onCloseDialog}>
          {t("dialog_modal_disagree")}
        </Button>
      </DialogActions>
    </Box>
  );
};

export default DeleteLectureDialog;
