import { FC } from "react";
import { useTranslation } from "react-i18next";

import { PageProps } from "pages/type";

import useTitle from "src/hooks/useTitle";
import { SectionLandingHero, SectionLandingAbout, SectionLandingContact } from "src/widgets/sections";
import { SectionFeatures, SectionPricePlan } from "./ui";

const TeacherLandingPage: FC<PageProps> = ({ title }) => {
  useTitle(title);

  const { t } = useTranslation("teacher-landing");
  const heroSectionfeatures: string[] = t("hero-section.features", { returnObjects: true });
  const aboutSectionWords: string[] = t("about-section.word-list", { returnObjects: true });

  return (
    <>
      <SectionLandingHero
        title={t("hero-section.title")}
        subtitle={t("hero-section.subtitle")}
        buttonTitle={t("hero-section.button")}
        image={{
          src: "assets/teacher-landing-hero.webp",
          alt: t("hero-section.image-alt-text")
        }}
        features={heroSectionfeatures}
      />
      <SectionLandingAbout
        title={t("about-section.title")}
        wordsList={aboutSectionWords}
        description={t("about-section.description")}
        image={{
          src: "assets/teacher-landing-about.webp",
          alt: t("about-section.image-alt-text")
        }}
      />
      <SectionFeatures />
      <SectionPricePlan />
      <SectionLandingContact />
    </>
  );
};

export default TeacherLandingPage;
