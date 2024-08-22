// import PicturesSection from "./components/pictures-section/PicturesSection";
import TopCoursesSection from "./components/top-courses-section/TopCoursesSection";
import Filter from "../filter/Filter";
import { Container, Grid } from "@mui/material";
import CourseCard from "../course-card/CourseCard";
import PicturesSection from "../pictures-section/PIcturesSection";
// import { useGetCoursesQuery } from "src/entities/course/api/coursesApiSlice";
// import { useState } from "react";
// import { CoursesQueryParams } from "src/entities/course/api/requestModel";
// import { SortOptions } from "src/shared/api/sorting";
import { PublicLayout } from "src/layouts";

const Landing = () => {
  // const [query, setQuery] = useState<CoursesQueryParams>({ sort: SortOptions.DESC });

  // const { data, isLoading, isFetching, error } = useGetCoursesQuery(query);

  return (
    <PublicLayout>
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
    </PublicLayout>
  );
};

export default Landing;
