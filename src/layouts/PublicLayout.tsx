import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { Header, Footer } from "src/widgets/components";

import RootLayout from "./RootLayout";

const PublicLayout: FC = () => {
  return (
    <RootLayout>
      <Header />
      <Box component="main">
        <Outlet />
      </Box>
      <Footer />
    </RootLayout>
  );
};

export default PublicLayout;
