import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box } from "@mui/material";

import { HeaderProfile, NotificationToggler, Footer } from "src/widgets/components";
import { AppRoutes } from "src/shared/routes";
import { UserRoles } from "src/shared/config/user-role";
import { CoursePreviewButtons } from "src/widgets/teacher";

import RootLayout from "src/layouts/RootLayout";

const CreateCoursePageLayout: FC = () => {
  const { t } = useTranslation("auth");

  return (
    <RootLayout>
      <HeaderProfile
        link={<Link to={AppRoutes.teacher.dashboard}>{t("dashboard")}</Link>}
        userRole={UserRoles.teacher}
        tools={<NotificationToggler />}
      >
        <CoursePreviewButtons />
      </HeaderProfile>
      <Box component="main">
        <Outlet />
      </Box>
      <Footer />
    </RootLayout>
  );
};

export default CreateCoursePageLayout;
