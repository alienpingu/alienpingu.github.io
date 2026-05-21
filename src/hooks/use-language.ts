import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { getServices } from "@/data/services";

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

  // Build bidirectional slug map for service detail pages
  const slugMap = useMemo(() => {
    const itServices = getServices("it");
    const enServices = getServices("en");
    const map = new Map<string, string>();
    itServices.forEach((it, i) => {
      const en = enServices[i];
      if (en) {
        map.set(it.id, en.id);
        map.set(en.id, it.id);
      }
    });
    return map;
  }, []);

  const switchLanguage = (lang: SupportedLanguage) => {
    if (lang === currentLang) return;

    const currentPath = location.pathname;
    let newPath: string;

    // Handle service detail pages with language-specific slugs
    const serviceDetailMatch = currentPath.match(
      /^(\/en)?\/services\/([^/]+)$/
    );
    if (serviceDetailMatch) {
      const currentSlug = serviceDetailMatch[2];
      const mappedSlug = slugMap.get(currentSlug);
      if (mappedSlug) {
        if (lang === "en") {
          newPath = `/en/services/${mappedSlug}`;
        } else {
          newPath = `/services/${mappedSlug}`;
        }
        navigate(newPath, { replace: true });
        return;
      }
    }

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
