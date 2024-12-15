import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box } from "@mui/material";

import { HeaderProfile, Footer } from "src/widgets/components";
import { UserRoles } from "src/shared/config/user-role";
import { AppRoutes } from "src/shared/routes";
import { CourseProgress } from "src/widgets/student";

import Tools from "./ui/tools";

import RootLayout from "../../RootLayout";

const CoursePageLayout: FC = () => {
  const { t } = useTranslation("auth");

  return (
    <RootLayout>
      <HeaderProfile
        link={<Link to={AppRoutes.student.myLearning}>{t("student-navigation.my-learning")}</Link>}
        userRole={UserRoles.student}
        tools={<Tools />}
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
