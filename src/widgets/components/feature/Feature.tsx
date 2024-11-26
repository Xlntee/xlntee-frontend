import { FC } from "react";
import cn from "classnames";

import { Box, Typography } from "@mui/material";

import "./Feature.scss";

type FeatureProps = {
  icon: JSX.Element;
  caption: string;
  description: string;
  className: string;
};

const Feature: FC<FeatureProps> = ({ icon, caption, description, className }) => {
  return (
    <Box className={cn("feature", className)} display="flex" gap="10px">
      <Box className="feature__icon" flex="0 1 22px" pt="4px">
        {icon}
      </Box>
      <Box className="feature__content" flex="1">
        <Box className="feature__title-wrapper">
          <Typography className="feature__title" color="primary" variant="body1">
            {caption}
          </Typography>
        </Box>
        <Typography className="feature__description" fontWeight={300} variant="body1">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default Feature;
