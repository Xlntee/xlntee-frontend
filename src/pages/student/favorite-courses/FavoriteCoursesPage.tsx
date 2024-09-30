import { Box, Container, Grid } from "@mui/material";

import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";

const FavoriteCoursesPage = ({ title }: PageProps) => {
  useTitle(title);

  return (
    <Box component="section" py={7}>
      <Container>
        <Grid container spacing={2}></Grid>
      </Container>
    </Box>
  );
};

export default FavoriteCoursesPage;
