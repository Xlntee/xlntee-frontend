import { Box, Container, Grid } from "@mui/material";

import { CourseInfo } from "./ui";

const data = [
  {
    title: "Курс навчає:",
    details: [
      "що таке ООП",
      "Логіка написання коду та основи синтаксису",
      "Основні бібліотеки, як їх використовувати і для чого вони потрібні",
      "З чого почати свій шлях програміста, де набиратись досвіду та на яких платформах",
    ],
  },
  {
    title: "Що потрібно знати:",
    details: [
      "Основні навички роботи в РСН",
      "Як працює код, основні поняття про програмування",
      "Що таке мова програмування та де використовується ця мова",
      "Розуміння різниці фрон-енд та бек-енд розробки",
    ],
  },
];

const SectionCourseInfo = () => {
  return (
    <Box component="section" className="section-course-info">
      <Container>
        <Grid container spacing="20px">
          {data.map((item, index) => (
            <Grid key={index} item xs={12} md={6} display="flex">
              <CourseInfo header={item.title} info={item.details} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionCourseInfo;
