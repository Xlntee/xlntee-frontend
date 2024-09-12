import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { HeaderProfile } from "src/widgets/profile-header";

const PrivateLayout = () => {
  return (
    <>
      <HeaderProfile />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default PrivateLayout;
