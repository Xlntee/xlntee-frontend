import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import { Box, Grid, Container, List, ListItem, Link, Stack, Button } from "@mui/material";

import { AppRoutes } from "src/app/routing/appRoutes";
import { Progress } from "src/features";

import "./CreateCourseLayout.scss";

const CreateCourseLayout = () => {
  const { t, ready } = useTranslation("teacher-create-course");
  const { pathname } = useLocation();

  if (!ready) return "";

  const navList = [
    {
      title: t("general.nav_title"),
      path: AppRoutes.createCourse,
    },
    {
      title: t("landing.nav_title"),
      path: AppRoutes.createCourseLanding,
    },
    {
      title: t("structure.nav_title"),
      path: AppRoutes.createCourseStructure,
    },
    {
      title: t("lecturer.nav_title"),
      path: AppRoutes.createCourseLecturer,
    },
    {
      title: t("price.nav_title"),
      path: AppRoutes.createCoursePrice,
    },
    {
      title: t("advertising.nav_title"),
      path: AppRoutes.createCourseAdvertising,
    },
  ];

  return (
    <Box className="create-course-layout" py="40px">
      <Container>
        <Grid container gap={{ lg: "32px" }} rowGap="20px">
          <Grid component="aside" item maxWidth={{ lg: "250px" }} width="100%">
            <Stack gap="20px">
              <Stack className="create-course-nav" direction="column" gap="10px">
                <List className="create-course-nav__list">
                  {navList.map(({ title, path }, index) => (
                    <ListItem key={index} className="create-course-nav__item">
                      <Link
                        component={NavLink}
                        to={path}
                        className={cn("create-course-nav__link", { "active-page": pathname === path })}
                      >
                        {title}
                      </Link>
                    </ListItem>
                  ))}
                </List>
                <Button variant="black-text" size="medium" className="create-course-nav__action">
                  {t("publish.nav_title")}
                </Button>
              </Stack>
              <Stack gap="10px">
                <Progress value={0} title={t("storage")} color="warning">
                  11/120 ГБ
                </Progress>
                <Progress value={0} title={t("students")} color="info">
                  0/100
                </Progress>
                <Button
                  size="small"
                  variant="black-contain"
                  sx={{
                    borderRadius: "20px",
                  }}
                >
                  {t("change_plan")}
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid component="section" item flex={1}>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CreateCourseLayout;
