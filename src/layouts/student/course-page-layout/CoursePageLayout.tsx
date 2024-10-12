import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Box, Stack } from "@mui/material";

import { CourseComplain, CourseRate, CourseShare, HeaderProfile } from "src/widgets/components";
import Footer from "src/widgets/footer/Footer";
import { UserRole } from "src/shared/utils/enum";
import { Progress } from "src/features";

const CoursePageLayout: FC = () => {
  return (
    <>
      <HeaderProfile
        userRole={UserRole.STUDENT}
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
    </>
  );
};

export default CoursePageLayout;
