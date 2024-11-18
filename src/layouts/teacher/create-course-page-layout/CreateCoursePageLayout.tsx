import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box } from "@mui/material";

import { RootDialog } from "src/widgets/dialogs/RootDialog";
import { HeaderProfile, NotificationToggler, Footer } from "src/widgets/components";
import { AppRoutes } from "src/app/routing/appRoutes";
import { UserRoles } from "src/shared/utils/user-role";
import RootDrawer from "src/widgets/drawers/RootDrawers";
import { CoursePreviewButtons } from "src/widgets/teacher";

const CreateCoursePageLayout: FC = () => {
  const { t } = useTranslation("auth");

  return (
    <>
      <HeaderProfile
        link={<Link to={AppRoutes.teacher.dashboard}>{t("dashboard")}</Link>}
        userRole={UserRoles.teacher}
        tools={<NotificationToggler />}
      >
        <CoursePreviewButtons />
      </HeaderProfile>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
      <RootDialog />
      <RootDrawer />
    </>
  );
};

export default CreateCoursePageLayout;
