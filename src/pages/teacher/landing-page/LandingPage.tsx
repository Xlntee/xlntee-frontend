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
        imgWidth="467px"
        imgHeight="467px"
        imgSrc="assets/teacher-landing-hero.png"
        //TODO: Add Alt text for image
        imgAlt=""
      />
      <LandingAboutSection
        title={t("teacher-landing.about-section.title")}
        wordsList={aboutSectionWords}
        description={t("teacher-landing.about-section.description")}
        imgWidth="320px"
        imgHeight="320px"
        imgSrc="assets/teacher-landing-about.png"
        //TODO: Add Alt text for image
        imgAlt=""
      />
      <TeacherFeaturesSection />
      <PriceTable />
      <LandingContactSection />
    </Container>
  );
};

export default TeacherLandingPage;
