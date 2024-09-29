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
      loadPath: "src/i18n/locales/{{lng}}/{{ns}}.json",
    },
    ns: ["teacher-landing", "student-landing", "teacher-preview", "teacher-courses"],
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
