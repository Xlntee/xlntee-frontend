import { PropsWithChildren } from "react";
import Footer from "../footer/Footer";
import useTitle from "src/hooks/useTitle/useTitle";
import Header from "../header/Header";
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
      <Box component="main">{children}</Box>

      {showFooter && <Footer />}
    </>
  );
};

export default Page;
