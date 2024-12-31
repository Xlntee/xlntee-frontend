import { FC } from "react";
import { Link } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import "./CreateCourseButton.scss";

type CreateCourseButtonProps = {
  path: string;
};

const CreateCourseButton: FC<CreateCourseButtonProps> = ({ path }) => {
  return (
    <Link to={path} className="course-btn-card base-shadow-with-hover">
      <Box component="span" className="course-btn-card__inner-box">
        <Typography color="grey.900" component="span" fontWeight={900}>
          +
        </Typography>
      </Box>
    </Link>
  );
};

export default CreateCourseButton;
