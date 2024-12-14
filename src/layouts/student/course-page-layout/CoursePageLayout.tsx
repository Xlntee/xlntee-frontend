import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, Stack } from "@mui/material";

import { CourseComplain, CourseRate, CourseShare, HeaderProfile, Footer } from "src/widgets/components";
import { UserRoles } from "src/shared/config/user-role";
import { AppRoutes } from "src/shared/routes";
import { CourseProgress } from "src/widgets/student";

import RootLayout from "src/layouts/RootLayout";

const CoursePageLayout: FC = () => {
  const { t } = useTranslation("auth");

  return (
    <RootLayout>
      <HeaderProfile
        link={<Link to={AppRoutes.student.myLearning}>{t("student-navigation.my-learning")}</Link>}
        userRole={UserRoles.student}
        tools={
          <Stack direction="row" gap={{ xs: "8px", md: "14px" }} alignItems="center">
            <CourseRate />
            <CourseShare />
            <CourseComplain />
          </Stack>
        }
      >
        <Box maxWidth="300px" width="100%">
          <CourseProgress />
        </Box>
      </HeaderProfile>
      <Box component="main">
        <Outlet />
      </Box>
      <Footer />
    </RootLayout>
  );
};

export default CoursePageLayout;
