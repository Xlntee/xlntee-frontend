import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Container } from "@mui/material";

import useTitle from "src/shared/hooks/useTitle";
import { PageProps } from "pages/type";
import { CardList, CourseCardProgress } from "src/shared/ui";
import { AppRoutes } from "src/shared/routes";

import { myCourses } from "./data";

const MyLearningPage: FC<PageProps> = ({ title }) => {
  useTitle(title);

  const { t } = useTranslation("student");

  return (
    <Box component="section" py="40px">
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
