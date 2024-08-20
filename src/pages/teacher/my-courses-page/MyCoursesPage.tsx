import { Box, Container, Grid } from "@mui/material";
import CreateCourseButton from "./ui/create-course-button/CreateCourseButton";
import CourseCard from "src/widgets/course-card/CourseCard";
import { MockCourse, myCourses } from "./myCourses-mock-data";
import { AppRoutes } from "src/app/routing/appRoutes";
import { PageProps } from "pages/type";
import useTitle from "src/hooks/useTitle/useTitle";

const MyCoursesPage = ({ title }: PageProps) => {
  useTitle(title);

  const deleteHandler = (course: MockCourse) => alert(`course with id: ${course.id} deleted`);
  const editHandler = (course: MockCourse) => alert(`course with id: ${course.id} editing`);
  const restoreHandler = (course: MockCourse) => alert(`course with id: ${course.id} restored`);

  return (
    <Box component="section" py={7}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} display="flex">
            <CreateCourseButton RoutingTo={AppRoutes.createCourse} />
          </Grid>
          {myCourses.map((course) => (
            <Grid item key={course.id} xs={12} sm={6} md={4}>
              <CourseCard
                title={course.title}
                status={course.status}
                updateTime={course.updateTime}
                imageSrc={course.imgSrc}
                onDelete={() => deleteHandler(course)}
                onEdit={() => editHandler(course)}
                onRestore={() => restoreHandler(course)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MyCoursesPage;
