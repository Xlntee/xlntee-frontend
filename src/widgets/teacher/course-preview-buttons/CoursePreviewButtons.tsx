import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Stack, Button } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const CoursePreviewButtons: FC = () => {
  const { t } = useTranslation("teacher-create-course");

  return (
    <Stack direction="row" gap="14px">
      <Button
        className="button-preview button-rounded-md"
        variant="dark-outline"
        size="small"
        startIcon={<RemoveRedEyeIcon />}
        disabled
      >
        {t("button-landing-text")}
      </Button>
      <Button
        className="button-preview button-rounded-md"
        variant="dark-outline"
        size="small"
        startIcon={<SentimentSatisfiedAltIcon />}
        disabled
      >
        {t("button-preview-text")}
      </Button>
    </Stack>
  );
};

export default CoursePreviewButtons;
