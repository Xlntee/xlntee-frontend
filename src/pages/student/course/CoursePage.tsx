import { Box, Container } from "@mui/material";

import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";

const CoursePage = ({ title }: PageProps) => {
  useTitle(title);

  return (
    <Box py={7}>
      <Container>Student course page</Container>
    </Box>
  );
};

export default CoursePage;
