import { Box } from "@mui/material";
import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";

const CreateCoursePage = ({ title }: PageProps) => {
  useTitle(title);

  return <Box>CreateCoursePage</Box>;
};

export default CreateCoursePage;
