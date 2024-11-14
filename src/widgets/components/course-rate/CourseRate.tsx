import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Button, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import { useDispatch } from "react-redux";
import { openDialog } from "src/app/store/slices/dialog/slice";

import "./CourseRate.scss";

const CourseRate: FC = () => {
  const { t } = useTranslation("auth");

  const dispatch = useDispatch();

  function onOpenModal(): void {
    dispatch(
      openDialog({
        dialogName: "STUDENT_COURSE_RATE_DIALOG",
        dialogSize: "large"
      })
    );
  }

  return (
    <Button startIcon={<StarIcon />} variant="black-text" className="course-share" onClick={() => onOpenModal()}>
      <Typography variant="caption">{t("rate")}</Typography>
    </Button>
  );
};

export default CourseRate;
