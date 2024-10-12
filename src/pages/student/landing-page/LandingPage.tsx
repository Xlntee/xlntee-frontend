import { useTranslation } from "react-i18next";

import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";
import { SectionLandingHero, SectionLandingAbout, SectionLandingContact } from "src/widgets/sections";
import { SectionFeatures } from "./ui";

const StudentLandingPage = ({ title }: PageProps) => {
  useTitle(title);

  const { t } = useTranslation("student-landing");
  const heroSectionfeatures: string[] = t("hero-section.features", { returnObjects: true });
  const aboutSectionWords: string[] = t("about-section.wordList", { returnObjects: true });

  return (
    <>
      <SectionLandingHero
        title={t("hero-section.title")}
        subtitle={t("hero-section.subtitle")}
        buttonTitle={t("hero-section.button")}
        image={{
          src: "assets/student-landing-hero.png",
          alt: t("hero-section.imageAltText"),
        }}
        features={heroSectionfeatures}
      />
      <SectionLandingAbout
        title={t("about-section.title")}
        wordsList={aboutSectionWords}
        description={t("about-section.description")}
        image={{
          src: "assets/student-landing-about.png",
          alt: "about-section.imageAltText",
        }}
      />
      <SectionFeatures />
      <SectionLandingContact />
    </>
  );
};

export default StudentLandingPage;
