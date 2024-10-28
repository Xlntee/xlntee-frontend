import { FC } from "react";

import { Stack, Box, Typography } from "@mui/material";

interface InfoCourseComplainProps {
  image: string;
  imageDescription: string;
  message1: string;
  message2: string;
  code: string;
}

const InfoCourseComplain: FC<InfoCourseComplainProps> = ({ image, imageDescription, message1, code, message2 }) => {
  return (
    <Stack
      direction={{ sm: "row" }}
      gap={{ xs: "20px", md: "40px" }}
      justifyContent={{ sm: "center" }}
      alignItems={{ sm: "center" }}
    >
      <Box maxWidth="280px" width="100%" marginInline="auto">
        <img src={image} alt={imageDescription} width="100%" />
      </Box>
      <Box maxWidth={{ md: "380px" }} width="100%">
        <Typography variant="body1" mb="20px">
          {message1} <strong>{code}</strong>
        </Typography>
        <Typography variant="body1">{message2}</Typography>
      </Box>
    </Stack>
  );
};

export default InfoCourseComplain;
