import { FC } from "react";
import { Link } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import { XlnteeColors } from "src/shared/themes/colors";

import "./CreateCourseButton.scss";

type CreateCourseButtonProps = {
  path: string;
};

const CreateCourseButton: FC<CreateCourseButtonProps> = ({ path }) => {
  return (
    <Link to={path} className="course-btn-card">
      <Box className="course-btn-card__inner-box">
        <Typography variant="h2" color={XlnteeColors.DarkColor} fontWeight={900}>
          +
        </Typography>
      </Box>
    </Link>
  );
};

export default CreateCourseButton;
