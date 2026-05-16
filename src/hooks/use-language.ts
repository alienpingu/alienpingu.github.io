import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

export const supportedLanguages = ["it", "en"] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

export const useLanguageSync = () => {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const pathLang = location.pathname.startsWith("/en") ? "en" : "it";
    if (i18n.language !== pathLang) {
      i18n.changeLanguage(pathLang);
    }
  }, [location.pathname, i18n]);
};

export const useLanguageSwitcher = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentLang: SupportedLanguage = location.pathname.startsWith("/en")
    ? "en"
    : "it";

  const switchLanguage = (lang: SupportedLanguage) => {
    if (lang === currentLang) return;

    const currentPath = location.pathname;
    let newPath: string;

    if (lang === "en") {
      // Switching to English: add /en prefix
      newPath = `/en${currentPath}`;
    } else {
      // Switching to Italian: remove /en prefix
      newPath = currentPath.replace(/^\/en/, "") || "/";
    }

    navigate(newPath, { replace: true });
  };

  return { currentLang, switchLanguage };
};
