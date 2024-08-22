import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";

import { LandingHeroSection, LandingAboutSection, LandingContactSection } from "src/widgets";
import { PriceTable, TeacherFeaturesSection } from "./ui";

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
        <img src="assets/teacher-landing-hero.png" alt={t("teacher-landing.hero-section.imageAltText")} />
      </LandingHeroSection>
      <LandingAboutSection
        title={t("teacher-landing.about-section.title")}
        wordsList={aboutSectionWords}
        description={t("teacher-landing.about-section.description")}
      >
        <img src="assets/teacher-landing-about.png" alt={t("teacher-landing.about-section.imageAltText")} />
      </LandingAboutSection>
      <TeacherFeaturesSection />
      <PriceTable />
      <LandingContactSection />
    </Container>
  );
};

export default TeacherLandingPage;
