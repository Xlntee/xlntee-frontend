import { FC } from "react";

import { Box, Typography } from "@mui/material";

import "./PlaceholderCard.scss";

interface PlaceholderCardProps {
  text: string;
}

const PlaceholderCard: FC<PlaceholderCardProps> = ({ text }) => {
  return (
    <Box className="placeholder-card">
      <Typography variant="body2" className="placeholder-card__text">
        {text}
      </Typography>
    </Box>
  );
};

export default PlaceholderCard;
