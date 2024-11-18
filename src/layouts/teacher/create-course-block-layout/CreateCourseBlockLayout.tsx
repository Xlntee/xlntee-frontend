import { FC, useEffect } from "react";
import { Outlet, Link as RouterLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import { Box, Container, Stack, Button, Typography } from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

import { closeDrawer } from "src/app/store/slices/drawer/slice";
import { useAppDispatch } from "src/app/store/store";
import { HideMediaContainer } from "src/features/hide-media-container";

import useDrawer from "src/hooks/useDrawer";
import { SidebarMenu } from "./ui";

import "./CreateCourseBlockLayout.scss";

const CreateCourseBlockLayout: FC = () => {
  const { t } = useTranslation("teacher-create-course");
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const { onOpenDrawer, isOpenDrawer } = useDrawer();

  const isOpen = isOpenDrawer("CREATE_COURSE_DRAWER");

  function closeAsideMenu(): void {
    dispatch(closeDrawer());
  }

  function openMenu(): void {
    onOpenDrawer("CREATE_COURSE_DRAWER");
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
        <HideMediaContainer type="up" breakpoint="xl">
          <Button variant="black-contain" onClick={openMenu}>
            {t("course_navigation")}
          </Button>
        </HideMediaContainer>
        <Box pt="20px" className="create-course-layout__grid">
          <HideMediaContainer type="down" breakpoint="xl">
            <Box
              component="aside"
              className={cn("create-course-layout__aside", {
                open: isOpen
              })}
            >
              <SidebarMenu />
            </Box>
          </HideMediaContainer>
          <Box component="section" className="create-course-layout__body">
            <Outlet />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CreateCourseBlockLayout;
