import { FC, useEffect, useState } from "react";
import { Outlet, Link as RouterLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import { Box, Container, Stack, Button, Drawer, Typography } from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

import { MenuToggler } from "src/features";
import { SidebarMenu } from "./ui";

import "./CreateCourseBlockLayout.scss";

const CreateCourseBlockLayout: FC = () => {
  const { t } = useTranslation("teacher-create-course");
  const { pathname } = useLocation();

  const [openCourseNav, setOpenCourseNav] = useState<boolean>(false);

  function closeAsideMenu(): void {
    setOpenCourseNav(false);
  }

  useEffect(() => {
    closeAsideMenu();
  }, [pathname]);

  const LimitError: FC = () => {
    return (
      <Stack direction="row" justifyContent="center" alignItems="center" gap="10px" className="error-limits">
        <ErrorOutlineOutlinedIcon color="error" />
        <Typography variant="body2" fontWeight={300}>
          {t("error-limits-plan")} {""}
          <RouterLink to="#">{t("change_plan")}</RouterLink>
        </Typography>
      </Stack>
    );
  };

  return (
    <Box className="create-course-layout" pt={{ xs: "40px", md: "60px" }} pb="40px">
      <Container className="create-course-layout__container">
        <LimitError />
        <Button
          variant="black-contain"
          className="create-course-layout__menu-opener"
          onClick={() => setOpenCourseNav((prev) => !prev)}
        >
          {t("course_navigation")}
        </Button>
        <Box className="create-course-layout__grid">
          <Box component="aside" className={cn("create-course-layout__aside", { open: openCourseNav })}>
            <SidebarMenu />
          </Box>
          <Box component="section" className="create-course-layout__body">
            <Outlet />
          </Box>
        </Box>
      </Container>
      <Drawer anchor="left" open={openCourseNav} onClose={closeAsideMenu} className="drawer drawer--lg">
        <Box className="drawer__inner">
          <Box className="drawer__header">
            <Typography variant="body1" className="drawer__title">
              {t("course_navigation")}
            </Typography>
            <MenuToggler active={openCourseNav} onClick={closeAsideMenu} className="drawer__close" />
          </Box>
          <Box className="drawer__body">
            <SidebarMenu />
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default CreateCourseBlockLayout;
