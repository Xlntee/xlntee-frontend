import { useTranslation } from "react-i18next";

import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";

import { LandingHeroSection, LandingAboutSection, LandingContactSection } from "src/widgets";
import { SectionFeatures, SectionPriceTable } from "./ui";

const TeacherLandingPage = ({ title }: PageProps) => {
  useTitle(title);

  const { t } = useTranslation("teacher-landing");
  const heroSectionfeatures: string[] = t("teacher-landing.hero-section.features", { returnObjects: true });
  const aboutSectionWords: string[] = t("teacher-landing.about-section.wordList", { returnObjects: true });

  return (
    <>
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
      <SectionFeatures />
      <SectionPriceTable />
      <LandingContactSection />
    </>
  );
};

export default TeacherLandingPage;
