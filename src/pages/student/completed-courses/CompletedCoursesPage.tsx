import { Box, Container, Grid } from "@mui/material";

import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";
import { CourseCardProgress } from "src/features";
import { AppRoutes } from "src/app/routing/appRoutes";

import { myCourses } from "./data";

const CompletedCoursesPage = ({ title }: PageProps) => {
  useTitle(title);

  return (
    <Box component="section" py={7}>
      <Container>
        <Grid container spacing={2}>
          {myCourses.length > 0
            ? myCourses.map((course) => (
                <Grid item key={course.id} xs={12} sm={6} md={4}>
                  <CourseCardProgress
                    title={course.title}
                    image={course.image}
                    progress={course.progress}
                    href={`${AppRoutes.student.myLearning}/${course.id}`}
                  />
                </Grid>
              ))
            : null}
        </Grid>
      </Container>
    </Box>
  );
};

export default CompletedCoursesPage;
