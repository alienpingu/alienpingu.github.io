import { Globe } from "lucide-react";
import { useLanguageSwitcher } from "@/hooks/use-language";

const LanguageSwitcher = () => {
  const { currentLang, switchLanguage } = useLanguageSwitcher();

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <Globe size={14} className="text-muted-foreground mr-1" />
      <button
        onClick={() => switchLanguage("it")}
        className={`px-2 py-1 rounded transition-colors ${
          currentLang === "it"
            ? "text-primary"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Switch to Italian"
      >
        IT
      </button>
      <span className="text-border">|</span>
      <button
        onClick={() => switchLanguage("en")}
        className={`px-2 py-1 rounded transition-colors ${
          currentLang === "en"
            ? "text-primary"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
