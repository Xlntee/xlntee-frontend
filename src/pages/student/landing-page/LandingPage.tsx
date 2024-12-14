import { FC } from "react";
import { useTranslation } from "react-i18next";

import useTitle from "src/shared/hooks/useTitle";
import { PageProps } from "pages/type";
import { SectionLandingHero, SectionLandingAbout, SectionLandingContact } from "src/widgets/sections";
import { SectionFeatures } from "./ui";

const StudentLandingPage: FC<PageProps> = ({ title }) => {
  useTitle(title);

  const { t } = useTranslation("student-landing");
  const heroSectionfeatures: string[] = t("hero-section.features", { returnObjects: true }) as string[];
  const aboutSectionWords: string[] = t("about-section.word-list", { returnObjects: true }) as string[];

  return (
    <>
      <SectionLandingHero
        title={t("hero-section.title")}
        subtitle={t("hero-section.subtitle")}
        buttonTitle={t("hero-section.button")}
        image={{
          src: "assets/student-landing-hero.png",
          alt: t("hero-section.image-alt-text")
        }}
        features={heroSectionfeatures}
      />
      <SectionLandingAbout
        title={t("about-section.title")}
        wordsList={aboutSectionWords}
        description={t("about-section.description")}
        image={{
          src: "assets/student-landing-about.png",
          alt: "about-section.image-alt-text"
        }}
      />
      <SectionFeatures />
      <SectionLandingContact />
    </>
  );
};

export default StudentLandingPage;
