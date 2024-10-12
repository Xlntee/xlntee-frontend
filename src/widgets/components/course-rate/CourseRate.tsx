import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Button, Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import "./CourseRate.scss";

const CourseRate: FC = () => {
  const { t } = useTranslation("auth");

  return (
    <Box className="course-share">
      <Button startIcon={<StarIcon />} variant="black-text" className="course-share__toggler">
        <Typography variant="caption">{t("rate")}</Typography>
      </Button>
    </Box>
  );
};

export default CourseRate;
