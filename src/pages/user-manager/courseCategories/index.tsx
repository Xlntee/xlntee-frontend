import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Container, Grid } from "@mui/material";

import { CourseCategories } from "src/features/user-manager";

const CourseCategoriesPage: FC = () => {
  const { t } = useTranslation("user-manager");

  const categories = ["Програмування", "Дизайн", "Музика", "Математика"];
  const subcategories = ["Мови програмування", "Графічний дизайн", "Гітара"];
  const themes = ["Python", "JS", "React", "Adobe PS"];

  return (
    <Box component="section" py="40px">
      <Container>
        <Grid container spacing="16px">
          <Grid item xs={12} sm={6} md={4} display="flex">
            <CourseCategories title={t("courseCategories.name")} items={categories} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} display="flex">
            <CourseCategories title={t("courseCategories.subcategories")} items={subcategories} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} display="flex">
            <CourseCategories title={t("courseCategories.themes")} items={themes} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CourseCategoriesPage;
