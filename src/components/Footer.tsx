import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguageSwitcher } from "@/hooks/use-language";

const Footer = () => {
  const { t } = useTranslation("common");
  const { currentLang } = useLanguageSwitcher();
  const prefix = currentLang === "en" ? "/en" : "";

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link to={`${prefix}/`} className="text-xl font-bold text-gradient">BRTSML</Link>
            <p className="text-sm text-muted-foreground mt-1">{t("footer.tagline")}</p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to={`${prefix}/services`} className="hover:text-foreground transition-colors">{t("nav.services")}</Link>
            <Link to={`${prefix}/projects`} className="hover:text-foreground transition-colors">{t("nav.projects")}</Link>
            <Link to={`${prefix}/about`} className="hover:text-foreground transition-colors">{t("nav.about")}</Link>
            <Link to={`${prefix}/contact`} className="hover:text-foreground transition-colors">{t("nav.contact")}</Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
