import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Button, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import useDialog from "src/hooks/useDialog";
import { HideMediaContainer } from "src/features/hide-media-container";

import "./CourseRate.scss";

const CourseRate: FC = () => {
  const { t } = useTranslation("auth");
  const { onOpenDialog } = useDialog();

  function onOpenModal(): void {
    onOpenDialog({
      dialogName: "STUDENT_COURSE_RATE_DIALOG",
      dialogSize: "large"
    });
  }

  return (
    <Button startIcon={<StarIcon />} variant="black-text" className="course-rate" onClick={onOpenModal}>
      <HideMediaContainer type="down" breakpoint="md">
        <Typography variant="caption">{t("rate")}</Typography>
      </HideMediaContainer>
    </Button>
  );
};

export default CourseRate;
