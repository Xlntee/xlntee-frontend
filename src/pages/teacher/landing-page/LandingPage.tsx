import { useTranslation } from "react-i18next";

import { PageProps } from "pages/type";

import useTitle from "src/hooks/useTitle/useTitle";
import { SectionLandingHero, SectionLandingAbout, SectionLandingContact } from "src/widgets/sections";
import { SectionFeatures, SectionPriceTable } from "./ui";

const TeacherLandingPage = ({ title }: PageProps) => {
  useTitle(title);

  const { t } = useTranslation("teacher-landing");
  const heroSectionfeatures: string[] = t("teacher-landing.hero-section.features", { returnObjects: true });
  const aboutSectionWords: string[] = t("teacher-landing.about-section.wordList", { returnObjects: true });

  return (
    <>
      <SectionLandingHero
        title={t("teacher-landing.hero-section.title")}
        subtitle={t("teacher-landing.hero-section.subtitle")}
        buttonTitle={t("teacher-landing.hero-section.heroButton")}
        image={{
          src: "assets/teacher-landing-hero.png",
          alt: t("teacher-landing.hero-section.imageAltText"),
        }}
        features={heroSectionfeatures}
      />
      <SectionLandingAbout
        title={t("teacher-landing.about-section.title")}
        wordsList={aboutSectionWords}
        description={t("teacher-landing.about-section.description")}
        image={{
          src: "assets/teacher-landing-about.png",
          alt: t("teacher-landing.about-section.imageAltText"),
        }}
      />
      <SectionFeatures />
      <SectionPriceTable />
      <SectionLandingContact />
    </>
  );
};

export default TeacherLandingPage;
