import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { HeaderProfile } from "src/widgets/components";

const PrivateLayout = () => {
  return (
    <>
      <HeaderProfile type="teacher" />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default PrivateLayout;
