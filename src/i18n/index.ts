import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uk",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    ns: [
      "common",
      "auth",
      "teacher",
      "teacher-landing",
      "student-landing",
      "teacher-preview",
      "teacher-courses",
      "teacher-create-course",
      "dialog-modal",
      "help-center",
      "footer"
    ],
    react: {
      useSuspense: false,
    },
  });

export const languages = [
  {
    code: "en",
    shortName: "En",
    fullName: "English",
  },
  {
    code: "uk",
    shortName: "Uk",
    fullName: "Ukrainian",
  },
];

export default i18n;
