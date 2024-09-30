import { useTranslation } from "react-i18next";

import { Button, Box, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

import "./CourseShare.scss";

const CourseShare = () => {
  const { t } = useTranslation("auth");
  return (
    <Box className="course-share">
      <Button startIcon={<ShareIcon />} variant="black-text" className="course-share__toggler">
        <Typography variant="caption">{t("share")}</Typography>
      </Button>
    </Box>
  );
};

export default CourseShare;
