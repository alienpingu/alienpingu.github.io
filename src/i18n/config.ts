import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { it } from "./resources/it";
import { en } from "./resources/en";

export const defaultNS = "common";

const initialLang = window.location.pathname.startsWith("/en") ? "en" : "it";

i18n.use(initReactI18next).init({
  lng: initialLang,
  fallbackLng: "it",
  defaultNS,
  ns: ["common", "home", "services", "serviceDetail", "projects", "about", "contact", "notFound", "privacy"],
  resources: { it, en },
  interpolation: {
    escapeValue: false, // React already escapes
  },
});

export default i18n;
