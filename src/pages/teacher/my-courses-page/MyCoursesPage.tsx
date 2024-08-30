import { useTranslation } from "react-i18next";

import { Box, Container, Grid, Typography } from "@mui/material";

import CourseCard from "src/widgets/course-card/CourseCard";

import { AppRoutes } from "src/app/routing/appRoutes";
import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";

import CreateCourseButton from "./ui/create-course-button/CreateCourseButton";
import { MockCourse, myCourses } from "./myCourses-mock-data";

const MyCoursesPage = ({ title }: PageProps) => {
  useTitle(title);

  const { t } = useTranslation("teacher-courses");

  const deleteHandler = (course: MockCourse) => alert(`course with id: ${course.id} deleted`);
  const editHandler = (course: MockCourse) => alert(`course with id: ${course.id} editing`);
  const restoreHandler = (course: MockCourse) => alert(`course with id: ${course.id} restored`);

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
            <CreateCourseButton path={AppRoutes.createCourse} />
          </Grid>
          {myCourses.length > 0 ? (
            myCourses.map((course) => (
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
            ))
          ) : (
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h3" align="center">
                {t("courses-no-courses")}
              </Typography>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default MyCoursesPage;
