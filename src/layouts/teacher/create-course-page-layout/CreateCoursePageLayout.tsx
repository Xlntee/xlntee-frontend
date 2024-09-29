import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, Stack, Button } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

import { HeaderProfile } from "src/widgets/components";
import Footer from "src/widgets/footer/Footer";
import { AppRoutes } from "src/app/routing/appRoutes";
import { UserRole } from "src/shared/utils/enum";

const CreateCoursePageLayout = () => {
  const { t } = useTranslation("auth");
  const { t: tTeacherCreateCourse } = useTranslation("teacher-create-course");

  return (
    <>
      <HeaderProfile link={<Link to={AppRoutes.teacher.dashboard}>{t("dashboard")}</Link>} userRole={UserRole.TEACHER}>
        <Stack direction="row" gap="14px">
          <Button
            className="button-preview"
            variant="black-outline"
            size="small"
            startIcon={<RemoveRedEyeIcon />}
            disabled
          >
            {tTeacherCreateCourse("button-landing-text")}
          </Button>
          <Button
            className="button-preview"
            variant="black-outline"
            size="small"
            startIcon={<SentimentSatisfiedAltIcon />}
            disabled
          >
            {tTeacherCreateCourse("button-preview-text")}
          </Button>
        </Stack>
      </HeaderProfile>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default CreateCoursePageLayout;
