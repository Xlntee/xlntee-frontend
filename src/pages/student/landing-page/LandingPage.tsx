import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import LandingHeroSection from "src/widgets/landing-hero-section/LandingHeroSection";
import LandingAboutSection from "src/widgets/landing-about-section/LandingAboutSection";
import LandingContactSection from "src/widgets/landing-contact-section/LandingContactSection";
import StudentFeaturesSection from "./ui/StudentFeaturesSection";

const StudentLandingPage = () => {
  const { t } = useTranslation("student-landing");
  const heroSectionfeatures: string[] = t("student-landing.hero-section.features", { returnObjects: true });
  const aboutSectionWords: string[] = t("student-landing.about-section.wordList", { returnObjects: true });

  return (
    <Container>
      <LandingHeroSection
        title={t("student-landing.hero-section.title")}
        subtitle={t("student-landing.hero-section.subtitle")}
        buttonTitle={t("student-landing.hero-section.heroButton")}
        features={heroSectionfeatures}
      >
        <img src="assets/student-landing-hero.png" alt={t("student-landing.hero-section.imageAltText")} />
      </LandingHeroSection>
      <LandingAboutSection
        title={t("student-landing.about-section.title")}
        wordsList={aboutSectionWords}
        description={t("student-landing.about-section.description")}
      >
        <img src="assets/student-landing-about.png" alt={t("student-landing.about-section.imageAltText")} />
      </LandingAboutSection>
      <StudentFeaturesSection />
      <LandingContactSection />
    </Container>
  );
};

export default StudentLandingPage;
