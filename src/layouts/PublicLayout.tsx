import { PropsWithChildren } from "react";
import { Box } from "@mui/material";

import useTitle from "src/hooks/useTitle/useTitle";

import Header from "../../legacy/header/Header";
import Footer from "../../legacy/footer/Footer";

interface PageProps extends PropsWithChildren {
  title?: string;
  showFooter?: boolean;
}

const PublicLayout = ({ title, showFooter = true, children }: PageProps) => {
  useTitle(title);

  return (
    <>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      {showFooter && <Footer />}
    </>
  );
};

export default PublicLayout;
