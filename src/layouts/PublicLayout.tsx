import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { Header } from "src/widgets/components";
import Footer from "src/widgets/footer/Footer";
import { RootDialog } from "src/widgets/dialogs/RootDialog";

interface LayoutProps {
  showFooter?: boolean;
}

const PublicLayout: FC<LayoutProps> = ({ showFooter = true }) => {
  return (
    <>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      {showFooter && <Footer />}
      <RootDialog />
    </>
  );
};

export default PublicLayout;
