import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import Header from "../../legacy/header/Header";
import Footer from "../../legacy/footer/Footer";

interface LayoutProps {
  showFooter?: boolean;
}

const PrivateLayout = ({ showFooter = true }: LayoutProps) => {
  return (
    <>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      {showFooter && <Footer />}
    </>
  );
};

export default PrivateLayout;
