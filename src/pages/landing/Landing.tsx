import Page from "src/components/page/Page";
// import PicturesSection from "./components/pictures-section/PicturesSection";
import TopCoursesSection from "./components/top-courses-section/TopCoursesSection";
import Filter from "components/filter/Filter";
import { Container, Grid } from "@mui/material";
import CourseCard from "components/course-card/CourseCard";
import PicturesSection from "src/pictures-section/PIcturesSection";

const Landing = () => {
  return (
    <Page>
      <PicturesSection />
      <TopCoursesSection />
      <Filter />

      <Container fixed maxWidth="lg" sx={{ my: 8 }}>
        <Grid container spacing={2} columnSpacing={4}>
          {Array.apply(null, Array(12)).map(() => (
            <Grid item xs={4}>
              <CourseCard size="small" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
};

export default Landing;
