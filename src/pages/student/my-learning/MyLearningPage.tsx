import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Container } from "@mui/material";

import useTitle from "src/hooks/useTitle";
import { PageProps } from "pages/type";
import { CardList, CourseCardProgress } from "src/features";
import { AppRoutes } from "src/app/routing/appRoutes";

import { myCourses } from "./data";

const MyLearningPage: FC<PageProps> = ({ title }) => {
  useTitle(title);

  const { t } = useTranslation("student");

  return (
    <Box component="section" py={7}>
      <Container>
        <CardList
          items={myCourses}
          renderCard={(props) => (
            <CourseCardProgress
              title={props.title}
              image={props.image}
              progress={props.progress}
              href={`${AppRoutes.student.courseSingle}/${props.id}/video`}
            />
          )}
          textForEmptyArray={t("dashboard.no-courses")}
        />
      </Container>
    </Box>
  );
};

export default MyLearningPage;
