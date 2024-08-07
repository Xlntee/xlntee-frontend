import { Box } from "@mui/material";
import HeroSection from "./ui/HeroSection";
import HowItWorks from "./ui/HowItWorks";
import PriceTable from "./ui/PriceTable";
import ConstactSection from "./ui/ConstactSection";
import AboutSection from "./ui/AboutSection";

const TeacherLandingPage = () => {
  return (
    <>
      <Box
        sx={{ margin: "0 auto", maxWidth: "1280px", display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <HeroSection />
        <AboutSection/>
        <HowItWorks />
        <PriceTable />
        <ConstactSection />
      </Box>
    </>
  );
};

export default TeacherLandingPage;
