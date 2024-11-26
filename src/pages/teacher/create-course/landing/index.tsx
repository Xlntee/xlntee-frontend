import { FC } from "react";

import { Box } from "@mui/material";

import useTitle from "src/hooks/useTitle";
import { PageProps } from "pages/type";
import { LandingForm } from "src/widgets/forms/create-course";

const LandingPage: FC<PageProps> = ({ title }) => {
  useTitle(title);

  return (
    <Box className="create-course-landing">
      <LandingForm />
    </Box>
  );
};

export default LandingPage;
