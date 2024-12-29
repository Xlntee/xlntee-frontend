import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Button, DialogTitle, DialogActions } from "@mui/material";

import { useAppDispatch } from "src/app/store/store";
import { MenuToggler } from "src/shared/ui";

import { deleteLesson } from "pages/teacher/create-course/structure/store/lessonsSlice";

import useDialog from "src/shared/hooks/useDialog";

const DeleteLessonDialog: FC = () => {
  const { t } = useTranslation("dialog-modal");
  const dispatch = useAppDispatch();

  const { onCloseDialogByName, getOptionsFromDialog } = useDialog();

  function onAgreeDialog(): void {
    const options = getOptionsFromDialog("DELETE_LESSON_DIALOG");
    dispatch(
      deleteLesson({
        lessonId: options.id
      })
    );
    onCloseDialog();
  }

  function onCloseDialog(): void {
    onCloseDialogByName("DELETE_LESSON_DIALOG");
  }

  return (
    <Box className="dialog-box">
      <MenuToggler active={true} onClick={onCloseDialog} className="dialog-box__close-btn" />
      <DialogTitle>{t("dialog_modal_delete_lesson")}</DialogTitle>
      <DialogActions>
        <Button color="success" variant={"dark-contain"} autoFocus onClick={onAgreeDialog}>
          {t("dialog_modal_agree")}
        </Button>
        <Button variant="dark-text" onClick={onCloseDialog}>
          {t("dialog_modal_disagree")}
        </Button>
      </DialogActions>
    </Box>
  );
};

export default DeleteLessonDialog;
