import { Box } from "@mui/material";

import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";

const CourseTestPage = ({ title }: PageProps) => {
  useTitle(title);

  return <Box pb="20px"></Box>;
};

export default CourseTestPage;
