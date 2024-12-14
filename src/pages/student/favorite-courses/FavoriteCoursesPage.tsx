import { FC } from "react";
import { Box, Container } from "@mui/material";

import useTitle from "src/hooks/useTitle";
import { PageProps } from "pages/type";
import { StudentCourseCard } from "src/widgets/components";
import { CardList } from "src/shared/ui";

import { myCourses } from "./data";

const FavoriteCoursesPage: FC<PageProps> = ({ title }) => {
  useTitle(title);

  return (
    <Box component="section" py="40px">
      <Container>
        <CardList items={myCourses} renderCard={(props) => <StudentCourseCard {...props} />} sm={6} />
      </Container>
    </Box>
  );
};

export default FavoriteCoursesPage;
