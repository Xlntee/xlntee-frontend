import { FC } from "react";
import { Link } from "react-router-dom";

import { Box, Typography } from "@mui/material";
import { Progress } from "../progress";

import "./CourseCardProgress.scss";

type CourseCardProgressProps = {
  image?: string;
  title: string;
  progress?: number;
  href: string;
};

const CourseCardProgress: FC<CourseCardProgressProps> = ({ title, image, progress = 0, href }) => {
  return (
    <Box className="course-card-progress">
      <Box className="course-card-progress__image">
        <img src={image} alt={title} />
      </Box>
      <Box className="course-card-progress__body">
        <Typography variant="body2" className="course-card-progress__title">
          {title}
        </Typography>
        <Progress size="sm" value={progress} className="course-card-progress__progress" />
      </Box>

      <Link className="course-card-progress__link" aria-label={`link to course ${title}`} to={href} />
    </Box>
  );
};

export default CourseCardProgress;
