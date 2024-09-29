import { Outlet } from "react-router-dom";

import { Box, Stack } from "@mui/material";

import { HeaderProfile } from "src/widgets/components";
import Footer from "src/widgets/footer/Footer";
import { UserRole } from "src/shared/utils/enum";

const CoursePageLayout = () => {
  return (
    <>
      <HeaderProfile className="header-profile--create-course" userRole={UserRole.STUDENT}>
        <Stack direction="row" gap="14px"></Stack>
      </HeaderProfile>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default CoursePageLayout;
