import { Box } from "@mui/material";
import StudentHeroSection from "./ui/StudentHeroSection";
import ConstactSection from "../teacher-landing-page/ui/ConstactSection";
import StudentAboutSection from "./ui/StudentAboutSection";
import StudentHowItWorks from "./ui/StudentHowItWorks";

const StudentLandingPage = () => {
  return (
    <>
      <Box
        sx={{ margin: "0 auto", maxWidth: "1280px", display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <StudentHeroSection />
        <StudentAboutSection />
        <StudentHowItWorks />
        <ConstactSection />
      </Box>
    </>
  );
};

export default StudentLandingPage;
