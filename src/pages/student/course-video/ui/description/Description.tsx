import { FC } from "react";

import { Box, Typography } from "@mui/material";

import { XlnteeColors } from "src/shared/themes/colors";

type DescriptionProps = {
  text: string;
};

const Description: FC<DescriptionProps> = ({ text }) => {
  return (
    <Box bgcolor={XlnteeColors.LightElementColor} p="20px" borderRadius="10px">
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
};

export default Description;
