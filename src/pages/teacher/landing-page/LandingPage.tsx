import { Container } from "@mui/material";
import PriceTable from "./ui/PriceTable";
import { useTranslation } from "react-i18next";
import LandingHeroSection from "src/widgets/landing-hero-section/LandingHeroSection";
import LandingAboutSection from "src/widgets/landing-about-section/LandingAboutSection";
import LandingContactSection from "src/widgets/landing-contact-section/LandingContactSection";
import TeacherFeaturesSection from "./ui/TeacherFeaturesSection";

const TeacherLandingPage = () => {
  const { t } = useTranslation("teacher-landing");
  const heroSectionfeatures: string[] = t("teacher-landing.hero-section.features", { returnObjects: true });
  const aboutSectionWords: string[] = t("teacher-landing.about-section.wordList", { returnObjects: true });

  return (
    <Container>
      <LandingHeroSection
        title={t("teacher-landing.hero-section.title")}
        subtitle={t("teacher-landing.hero-section.subtitle")}
        buttonTitle={t("teacher-landing.hero-section.heroButton")}
        features={heroSectionfeatures}
      >
        {/* TODO: Add Alt text for image */}
        <img width="457px" height="457px" src="assets/teacher-landing-hero.png" alt="" />
      </LandingHeroSection>
      <LandingAboutSection
        title={t("teacher-landing.about-section.title")}
        wordsList={aboutSectionWords}
        description={t("teacher-landing.about-section.description")}
      >
        {/* TODO: Add Alt text for image */}
        <img width="320px" height="320px" src="assets/teacher-landing-about.png" alt="" />
      </LandingAboutSection>
      <TeacherFeaturesSection />
      <PriceTable />
      <LandingContactSection />
    </Container>
  );
};

export default TeacherLandingPage;
