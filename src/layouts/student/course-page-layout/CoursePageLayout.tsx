import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, Stack } from "@mui/material";

import { RootDialog } from "src/widgets/dialogs/RootDialog";
import { CourseComplain, CourseRate, CourseShare, HeaderProfile } from "src/widgets/components";
import Footer from "src/widgets/footer/Footer";
import { UserRoles } from "src/shared/utils/user-role";
import { Progress } from "src/features";
import { AppRoutes } from "src/app/routing/appRoutes";

const CoursePageLayout: FC = () => {
  const { t } = useTranslation("auth");

  return (
    <>
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
          <Progress value={60} showValue={true} />
        </Box>
      </HeaderProfile>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
      <RootDialog />
    </>
  );
};

export default CoursePageLayout;
