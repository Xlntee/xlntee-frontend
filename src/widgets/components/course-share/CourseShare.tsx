import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Button, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

import useDialog from "src/shared/hooks/useDialog";
import { HideMediaContainer } from "src/shared/ui";

import "./CourseShare.scss";

const CourseShare: FC = () => {
  const { t } = useTranslation("auth");
  const { onOpenDialog } = useDialog();

  function onOpenModal(): void {
    onOpenDialog({
      dialogName: "STUDENT_COURSE_SHARE_DIALOG",
      dialogSize: "large"
    });
  }

  return (
    <Button startIcon={<ShareIcon />} variant="black-text" className="course-share" onClick={() => onOpenModal()}>
      <HideMediaContainer type="down" breakpoint="md">
        <Typography variant="caption" textAlign="center">
          {t("share")}
        </Typography>
      </HideMediaContainer>
    </Button>
  );
};

export default CourseShare;
