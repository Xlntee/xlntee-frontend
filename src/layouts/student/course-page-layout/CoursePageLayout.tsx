import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

import { HeaderProfile } from "src/widgets/components";
import Footer from "src/widgets/footer/Footer";
import { UserRole } from "src/shared/utils/enum";
import { Progress } from "src/features";

const CoursePageLayout = () => {
  return (
    <>
      <HeaderProfile userRole={UserRole.STUDENT}>
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
