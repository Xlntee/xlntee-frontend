import { FC } from "react";
import { Box } from "@mui/material";

import useTitle from "src/hooks/useTitle";
import { PageProps } from "pages/type";

const CourseTestPage: FC<PageProps> = ({ title }) => {
  useTitle(title);

  return <Box pb="20px">CourseTestPage</Box>;
};

export default CourseTestPage;
