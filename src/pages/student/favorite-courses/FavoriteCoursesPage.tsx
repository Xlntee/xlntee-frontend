import { Box, Container } from "@mui/material";

import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";
import { StudentCourseCard } from "src/widgets/components";
import { CardList } from "src/features";

import { myCourses } from "./data";

const FavoriteCoursesPage = ({ title }: PageProps) => {
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
