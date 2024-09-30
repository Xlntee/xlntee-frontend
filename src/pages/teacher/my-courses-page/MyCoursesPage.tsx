import { Box, Container, Grid } from "@mui/material";

import CourseCard from "src/widgets/course-card/CourseCard";

import { AppRoutes } from "src/app/routing/appRoutes";
import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";

import CreateCourseButton from "./ui/create-course-button/CreateCourseButton";
import { myCourses } from "./myCourses-mock-data";

const MyCoursesPage = ({ title }: PageProps) => {
  useTitle(title);

  const onDelete = (id: string) => alert(`course with id: ${id} deleted`);
  const onEdit = (id: string) => alert(`course with id: ${id} editing`);
  const onRestore = (id: string) => alert(`course with id: ${id} restored`);

  return (
    <Box component="section" py={7}>
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            sx={{
              minHeight: myCourses.length === 0 ? "20vh" : "auto",
            }}
          >
            <CreateCourseButton path={AppRoutes.teacher.createCourse} />
          </Grid>
          {myCourses.length > 0
            ? myCourses.map((course) => (
                <Grid item key={course.id} xs={12} sm={6} md={4}>
                  <CourseCard
                    title={course.title}
                    status={course.status}
                    updateTime={course.updateTime}
                    imageSrc={course.imgSrc}
                    onDelete={() => onDelete(course.id)}
                    onEdit={() => onEdit(course.id)}
                    onRestore={() => onRestore(course.id)}
                  />
                </Grid>
              ))
            : null}
        </Grid>
      </Container>
    </Box>
  );
};

export default MyCoursesPage;
