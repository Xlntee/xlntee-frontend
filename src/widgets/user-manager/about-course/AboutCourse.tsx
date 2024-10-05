import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Typography, Grid } from "@mui/material";

import { InfoField, TableAboutCourse } from "src/features/user-manager";

const AboutCourse: FC = () => {
  const { t } = useTranslation("user-manager");

  const data = [
    {
      id: "1",
      title: t("courseCategories.category"),
      value: "Програмування"
    },
    {
      id: "2",
      title: t("courseCategories.subcategory"),
      value: "Мови програмування"
    },
    {
      id: "3",
      title: t("courseCategories.theme"),
      value: "Python"
    }
  ];

  return (
    <Box>
      <Typography variant="h6" fontWeight={400} pl="10px">
        {t("about-course.title")}
      </Typography>
      <Box mb="20px">
        <TableAboutCourse price="12,000" sales="143" income="120,000" complains="32" refund="12" rating="4,3" />
      </Box>
      {data.length ? (
        <Grid container spacing="20px">
          {data.map((item) => (
            <Grid item key={item.id} xs={12} sm={4} display="flex">
              <InfoField title={item.title} value={item.value} />
            </Grid>
          ))}
        </Grid>
      ) : null}
    </Box>
  );
};

export default AboutCourse;
