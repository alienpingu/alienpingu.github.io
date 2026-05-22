import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Cookie, X, ChevronRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguageSwitcher } from "@/hooks/use-language";

interface ConsentState {
  dismissed: boolean;
  timestamp: number;
}

const STORAGE_KEY = "brtsml-consent";

const getStoredConsent = (): ConsentState | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentState;
  } catch {
    return null;
  }
};

const storeConsent = () => {
  const state: ConsentState = {
    dismissed: true,
    timestamp: Date.now(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const CookieBanner = () => {
  const { t } = useTranslation("privacy");
  const { currentLang } = useLanguageSwitcher();
  const prefix = currentLang === "en" ? "/en" : "";
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    // Show banner if never dismissed or dismissed more than 6 months ago
    if (!stored) {
      setIsVisible(true);
      return;
    }
    const sixMonths = 6 * 30 * 24 * 60 * 60 * 1000;
    if (Date.now() - stored.timestamp > sixMonths) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    storeConsent();
    setIsVisible(false);
    setShowSettings(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Bottom Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-border animate-fade-up">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Cookie className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-foreground">
                  {t("banner.message")}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {t("banner.noCookies")}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => setShowSettings(true)}
                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
              >
                {t("banner.settings")} <ChevronRight size={14} />
              </button>
              <Link
                to={`${prefix}/privacy`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("banner.privacyLink")}
              </Link>
              <button
                onClick={handleDismiss}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                {t("banner.understood")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="glass rounded-2xl p-6 max-w-lg w-full shadow-2xl animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">{t("settings.title")}</h3>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="p-1 rounded-lg hover:bg-secondary transition-colors"
              >
                <X size={18} className="text-muted-foreground" />
              </button>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              {t("settings.description")}
            </p>

            <div className="space-y-4 mb-6">
              {/* Essential */}
              <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="font-medium text-sm">{t("settings.categories.essential.label")}</span>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {t("settings.alwaysActive")}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground pl-6">
                  {t("settings.categories.essential.description")}
                </p>
              </div>

              {/* Analytics */}
              <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Cookie className="w-4 h-4 text-primary" />
                    <span className="font-medium text-sm">{t("settings.categories.analytics.label")}</span>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {t("settings.alwaysActive")}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground pl-6">
                  {t("settings.categories.analytics.description")}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-secondary transition-colors"
              >
                {t("settings.close")}
              </button>
              <button
                onClick={handleDismiss}
                className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                {t("settings.confirm")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
