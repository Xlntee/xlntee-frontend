import { PropsWithChildren } from "react";
import Footer from "../../../legacy/footer/Footer";
import useTitle from "src/hooks/useTitle/useTitle";
import Header from "../../../legacy/header/Header";
import { Box } from "@mui/material";

interface PageProps extends PropsWithChildren {
  title?: string;
  showFooter?: boolean;
}

const Page = ({ title, showFooter = true, children }: PageProps) => {
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

export default Page;
