import { FC, useEffect, useState } from "react";

import { Box, Container } from "@mui/material";

import { AppRoutes } from "src/shared/routes";
import { CourseCard } from "src/widgets/components";
import useTitle from "src/hooks/useTitle";
import { PageProps } from "pages/type";
import { CardList } from "src/shared/ui";

import CreateCourseButton from "./ui/create-course-button/CreateCourseButton";
import { MockCourse, myCourses } from "./myCourses-mock-data";

const MyCoursesPage: FC<PageProps> = ({ title }) => {
  useTitle(title);

  const [array, setArray] = useState<MockCourse[]>([]);

  const onDelete = (id: string): void => alert(`course with id: ${id} deleted`);
  const onEdit = (id: string): void => alert(`course with id: ${id} editing`);
  const onRestore = (id: string): void => alert(`course with id: ${id} restored`);

  useEffect(() => {
    setArray(myCourses);
  }, []);

  return (
    <Box component="section" py="40px">
      <Container>
        <CardList
          items={array}
          renderCard={(course) => (
            <CourseCard
              title={course.title}
              status={course.status}
              updateTime={course.updateTime}
              imageSrc={course.imgSrc}
              onDelete={() => onDelete(course.id)}
              onEdit={() => onEdit(course.id)}
              onRestore={() => onRestore(course.id)}
            />
          )}
          startCard={<CreateCourseButton path={AppRoutes.teacher.createCourse} />}
          sm={6}
        />
      </Container>
    </Box>
  );
};

export default MyCoursesPage;
