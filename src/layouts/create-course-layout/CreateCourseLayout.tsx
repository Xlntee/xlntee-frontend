import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import { Box, Container, List, ListItem, Link, Stack, Button, Drawer } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { AppRoutes } from "src/app/routing/appRoutes";
import { MenuToggler, Progress } from "src/features";

import "./CreateCourseLayout.scss";

const CreateCourseLayout = () => {
  const { t, ready } = useTranslation("teacher-create-course");
  const { pathname } = useLocation();

  const [openCourseNav, setOpenCourseNav] = useState<boolean>(false);

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

  function closeAsideMenu() {
    setOpenCourseNav(false);
  }

  function AsideMenu() {
    return (
      <Stack gap="20px" className="create-course-layout__aside-menu">
        <Stack className="create-course-nav" direction="column" gap="10px">
          <List className="create-course-nav__list">
            {navList.map(({ title, path }, index) => (
              <ListItem key={index} className="create-course-nav__item">
                <Link
                  component={NavLink}
                  to={path}
                  className={cn("create-course-nav__link", { "active-page": pathname === path })}
                  onClick={closeAsideMenu}
                >
                  {title}
                </Link>
                {index === 0 && (
                  <Box component="span">
                    <CheckCircleIcon color="success" fontSize="small" />
                  </Box>
                )}
              </ListItem>
            ))}
          </List>
          <Button variant="black-text" size="medium" className="create-course-nav__action" disabled>
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
    );
  }

  return (
    <Box className="create-course-layout" py="40px">
      <Container className="create-course-layout__container">
        <Button
          variant="black-contain"
          className="create-course-layout__menu-opener"
          onClick={() => setOpenCourseNav((prev) => !prev)}
        >
          {t("course_navigation")}
        </Button>
        <Box className="create-course-layout__grid">
          <Box component="aside" className={cn("create-course-layout__aside", { open: openCourseNav })}>
            <AsideMenu />
          </Box>
          <Box component="section" className="create-course-layout__body">
            <Outlet />
          </Box>
        </Box>
      </Container>
      <Drawer anchor="left" open={openCourseNav} onClose={closeAsideMenu}>
        <MenuToggler active={openCourseNav} onClick={closeAsideMenu} className="create-course-layout__menu-close" />
        <AsideMenu />
      </Drawer>
    </Box>
  );
};

export default CreateCourseLayout;
