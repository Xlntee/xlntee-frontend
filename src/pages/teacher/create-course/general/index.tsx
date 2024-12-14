import { FC } from "react";

import { Box } from "@mui/material";

import useTitle from "src/shared/hooks/useTitle";
import { PageProps } from "pages/type";

import { GeneralForm } from "src/widgets/forms/create-course";

const GeneralPage: FC<PageProps> = ({ title }) => {
  useTitle(title);

  return (
    <Box className="create-course-general">
      <GeneralForm />
    </Box>
  );
};

export default GeneralPage;
