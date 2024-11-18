import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { Header, Footer } from "src/widgets/components";
import RootDrawer from "src/widgets/drawers/RootDrawers";
import { RootDialog } from "src/widgets/dialogs/RootDialog";

const PublicLayout: FC = () => {
  return (
    <>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
      <RootDialog />
      <RootDrawer />
    </>
  );
};

export default PublicLayout;
