import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Button, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

import { useDispatch } from "react-redux";
import { openDialog } from "src/app/store/slices/dialog/slice";

import "./CourseShare.scss";

const CourseShare: FC = () => {
  const { t } = useTranslation("auth");

  const dispatch = useDispatch();

  function onOpenModal(): void {
    dispatch(
      openDialog({
        dialogName: "STUDENT_COURSE_SHARE_DIALOG",
        dialogSize: "large"
      })
    );
  }

  return (
    <Button startIcon={<ShareIcon />} variant="black-text" className="course-share" onClick={() => onOpenModal()}>
      <Typography variant="caption" textAlign="center">
        {t("share")}
      </Typography>
    </Button>
  );
};

export default CourseShare;
