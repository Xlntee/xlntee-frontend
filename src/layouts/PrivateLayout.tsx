import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

import { HeaderProfile } from "src/widgets/components";
import Footer from "src/widgets/footer/Footer";
import { UserRole } from "src/shared/utils/enum";

interface PrivateLayoutProps {
  userRole: UserRole;
}

const PrivateLayout: FC<PrivateLayoutProps> = ({ userRole }) => {
  return (
    <>
      <HeaderProfile userRole={userRole} />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default PrivateLayout;
