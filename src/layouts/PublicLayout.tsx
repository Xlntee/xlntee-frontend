import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { RootDialog } from "src/widgets/dialogs/RootDialog";
import { Header } from "src/widgets/components";
import Footer from "src/widgets/footer/Footer";

const PublicLayout: FC = () => {
  return (
    <>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
      <RootDialog />
    </>
  );
};

export default PublicLayout;
