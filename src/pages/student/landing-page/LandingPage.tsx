import { useTranslation } from "react-i18next";

import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";
import { SectionLandingHero, SectionLandingAbout, SectionLandingContact } from "src/widgets/sections";
import { SectionFeatures } from "./ui";

const StudentLandingPage = ({ title }: PageProps) => {
  useTitle(title);

  const { t } = useTranslation("student-landing");
  const heroSectionfeatures: string[] = t("student-landing.hero-section.features", { returnObjects: true });
  const aboutSectionWords: string[] = t("student-landing.about-section.wordList", { returnObjects: true });

  return (
    <>
      <SectionLandingHero
        title={t("student-landing.hero-section.title")}
        subtitle={t("student-landing.hero-section.subtitle")}
        buttonTitle={t("student-landing.hero-section.heroButton")}
        image={{
          src: "assets/student-landing-hero.png",
          alt: t("student-landing.hero-section.imageAltText"),
        }}
        features={heroSectionfeatures}
      />
      <SectionLandingAbout
        title={t("student-landing.about-section.title")}
        wordsList={aboutSectionWords}
        description={t("student-landing.about-section.description")}
        image={{
          src: "assets/student-landing-about.png",
          alt: "student-landing.about-section.imageAltText",
        }}
      />
      <SectionFeatures />
      <SectionLandingContact />
    </>
  );
};

export default StudentLandingPage;
