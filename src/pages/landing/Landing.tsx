import Page from "src/widgets/page/Page";
// import PicturesSection from "./components/pictures-section/PicturesSection";
import TopCoursesSection from "./components/top-courses-section/TopCoursesSection";
import Filter from "src/widgets/filter/Filter";
import { Container, Grid } from "@mui/material";
import CourseCard from "src/widgets/course-card/CourseCard";
import PicturesSection from "src/widgets/pictures-section/PIcturesSection";
import { useGetCoursesQuery } from "src/entities/course/api/coursesApiSlice";
import { useState } from "react";
import { CoursesQueryParams } from "src/entities/course/api/requestModel";
import { SortOptions } from "src/shared/api/sorting";

const Landing = () => {
  const [query, setQuery] = useState<CoursesQueryParams>({ sort: SortOptions.DESC });

  const { data, isLoading, isFetching, error } = useGetCoursesQuery(query);

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
