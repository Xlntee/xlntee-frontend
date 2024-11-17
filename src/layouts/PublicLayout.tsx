import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { RootDialog } from "src/widgets/dialogs/RootDialog";
import { Header } from "src/widgets/components";
import Footer from "src/widgets/footer/Footer";
import RootDrawer from "src/widgets/drawers/RootDrawers";

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
