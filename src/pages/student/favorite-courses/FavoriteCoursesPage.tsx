import { Box, Container, Grid } from "@mui/material";

import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";
import { StudentCourseCard } from "src/widgets/components";

const FavoriteCoursesPage = ({ title }: PageProps) => {
  useTitle(title);

  return (
    <Box component="section" py="40px">
      <Container>
        <Grid container spacing="20px">
          <Grid item xs={12} sm={6} md={4}>
            <StudentCourseCard
              id="1"
              image="/assets/temp-course-image2.png"
              title="How to sell anything online."
              date="14.05.2024"
              price={1999}
              newPrice={999}
              discount={20}
              rating={2.8}
              reviews={110}
              href="#"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FavoriteCoursesPage;
