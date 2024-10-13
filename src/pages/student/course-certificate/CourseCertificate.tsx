import { FC } from "react";
import { Box, Typography } from "@mui/material";

import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";

const CourseCertificate: FC<PageProps> = ({ title }) => {
  useTitle(title);

  return (
    <Box py={7}>
      <Box maxWidth="500px" marginInline="auto">
        <Box marginInline="auto" maxWidth="224px" width="100%" marginBottom="20px">
          <img src="/assets/congratulations.png" alt="congratulations" />
        </Box>
        <Typography variant="body1">Congratulations!</Typography>
        <Typography variant="body1" fontWeight={300}>
          You’ve successfully completed the course, now you can view and download your certificate below.{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default CourseCertificate;
