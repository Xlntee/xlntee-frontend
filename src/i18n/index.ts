import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import HttpBackend from "i18next-http-backend";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    // .use(HttpBackend)
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uk",
    // debug: true,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    ns: ["teacher-landing", "student-landing"],
    // interpolation: {
    //   escapeValue: false,
    // },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
