import { FC } from "react";

import { Box, Typography } from "@mui/material";

import "./Description.scss";

type DescriptionProps = {
  text: string;
};

const Description: FC<DescriptionProps> = ({ text }) => {
  return (
    <Box className="course-video-description">
      <Typography variant="body2" color="text.secondary">
        {text}
      </Typography>
    </Box>
  );
};

export default Description;
