import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import { Box, List, ListItem, Link } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { AppRoutes } from "src/app/routing/appRoutes";

const NavigationList: FC = () => {
  const { t } = useTranslation("teacher-create-course");
  const { pathname } = useLocation();

  const navList = [
    {
      title: t("general.nav_title"),
      path: AppRoutes.teacher.createCourse
    },
    {
      title: t("landing.nav_title"),
      path: AppRoutes.teacher.createCourseLanding
    },
    {
      title: t("structure.nav_title"),
      path: AppRoutes.teacher.createCourseStructure
    },
    {
      title: t("lecturer.nav_title"),
      path: AppRoutes.teacher.createCourseLecturer
    },
    {
      title: t("price.nav_title"),
      path: AppRoutes.teacher.createCoursePrice
    },
    {
      title: t("advertising.nav_title"),
      path: AppRoutes.teacher.createCourseAdvertising
    }
  ];

  return (
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
          {index === 0 && (
            <Box component="span">
              <CheckCircleIcon color="success" fontSize="small" />
            </Box>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default NavigationList;
