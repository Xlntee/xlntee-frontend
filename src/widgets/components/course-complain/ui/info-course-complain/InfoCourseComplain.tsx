import { FC } from "react";

import { Stack, Box, Typography } from "@mui/material";

interface InfoCourseComplainProps {
  image: string;
  imageDescription: string;
  message: string;
}

const InfoCourseComplain: FC<InfoCourseComplainProps> = ({ image, imageDescription, message }) => {
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
        <Typography variant="body1" mb="20px" dangerouslySetInnerHTML={{ __html: message }} />
      </Box>
    </Stack>
  );
};

export default InfoCourseComplain;
