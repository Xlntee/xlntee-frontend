import { FC } from "react";

import { Box, Typography, useTheme } from "@mui/material";

import useInverseColor from "src/shared/hooks/useInverseColor";

type DescriptionProps = {
  text: string;
};

const Description: FC<DescriptionProps> = ({ text }) => {
  const theme = useTheme();
  const { getInverseColor } = useInverseColor();

  return (
    <Box
      p="20px"
      borderRadius="10px"
      bgcolor={getInverseColor(theme.palette.grey["100"], "transparent")}
      border={`1px solid ${getInverseColor("transparent", theme.palette.grey["100"])}`}
    >
      <Typography variant="body2" color="text.primary">
        {text}
      </Typography>
    </Box>
  );
};

export default Description;
