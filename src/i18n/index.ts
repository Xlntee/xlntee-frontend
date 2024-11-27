import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(resourcesToBackend((language: any, namespace: any) => import(`../locales/${language}/${namespace}.json`)))
  .init({
    fallbackLng: "uk",
    ns: [
      "common",
      "auth",
      "student",
      "teacher",
      "teacher-landing",
      "student-landing",
      "teacher-preview",
      "teacher-courses",
      "teacher-create-course",
      "dialog-modal",
      "not-found",
      "user-manager"
    ],
    partialBundledLanguages: true,
    initImmediate: true,
    react: {
      useSuspense: false
    }
  });

export const languages = [
  {
    code: "en",
    shortName: "En",
    fullName: "English"
  },
  {
    code: "uk-UA",
    shortName: "Uk",
    fullName: "Ukrainian"
  }
];

export default i18n;
