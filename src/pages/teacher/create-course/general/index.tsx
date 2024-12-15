import { FC } from "react";

import { Box } from "@mui/material";

import useTitle from "src/shared/hooks/useTitle";
import { PageProps } from "pages/type";

import { GeneralForm } from "./ui";

const GeneralPage: FC<PageProps> = ({ title }) => {
  useTitle(title);

  return (
    <Box className="create-course-general">
      <GeneralForm />
    </Box>
  );
};

export default GeneralPage;
