import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { Header, Footer } from "src/widgets/components";
import { RootDrawer } from "src/widgets/drawers/root-drawer";
import { RootDialog } from "src/widgets/dialogs/root-dialog";

const PublicLayout: FC = () => {
  return (
    <>
      <Header />
      <Box component="main">
        <Outlet />
      </Box>
      <Footer />
      <RootDialog />
      <RootDrawer />
    </>
  );
};

export default PublicLayout;
