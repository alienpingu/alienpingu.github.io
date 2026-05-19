import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useLanguageSwitcher } from "@/hooks/use-language";
import AbstractBackground from "@/components/AbstractBackground";

const NotFound = () => {
  const { t } = useTranslation("notFound");
  const { currentLang } = useLanguageSwitcher();
  const prefix = currentLang === "en" ? "/en" : "";

  usePageMeta({
    title: t("meta.title"),
    description: t("meta.description"),
  });

  return (
    <Layout>
      <AbstractBackground variant="notFound" />
      <section className="min-h-[80vh] flex items-center justify-center relative z-10">
        <div className="text-center max-w-lg mx-auto px-6">
          <p className="text-primary font-medium text-sm tracking-[0.3em] uppercase mb-4">
            {t("label")}
          </p>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6">
            <span className="text-gradient">{t("title")}</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-10">
            {t("message")}
          </p>
          <Link
            to={`${prefix}/`}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            {t("backHome")}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
