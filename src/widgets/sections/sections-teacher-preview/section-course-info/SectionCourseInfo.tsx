import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Container, Grid } from "@mui/material";

import { CourseInfo } from "./ui";

const SectionCourseInfo: FC = () => {
  const { t, ready } = useTranslation("teacher-preview");
  const details1: string[] = t("section-course-info.details1", { returnObjects: true });
  const details2: string[] = t("section-course-info.details2", { returnObjects: true });

  const data = [
    {
      title: t("section-course-info.title1"),
      details: details1
    },
    {
      title: t("section-course-info.title2"),
      details: details2
    }
  ];

  if (!ready) return "";

  return (
    <Box component="section" className="section-course-info">
      <Container>
        <Grid container spacing="20px">
          {data.map((item, index) => (
            <Grid key={index} item xs={12} md={6} display="flex">
              <CourseInfo title={item.title} info={item.details} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionCourseInfo;
