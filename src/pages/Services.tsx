import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { usePageMeta } from "@/hooks/use-page-meta";
import { getServices } from "@/data/services";
import { useLanguageSwitcher } from "@/hooks/use-language";
import AbstractBackground from "@/components/AbstractBackground";

const Services = () => {
  const { t } = useTranslation(["services", "common"]);
  const { currentLang } = useLanguageSwitcher();
  const prefix = currentLang === "en" ? "/en" : "";

  usePageMeta({
    title: t("services:meta.title"),
    description: t("services:meta.description"),
  });

  const services = getServices(currentLang);

  return (
    <Layout>
      <AbstractBackground variant="services" />
      <section className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-2xl mb-16 animate-fade-up">
          <p className="text-primary font-medium text-sm tracking-widest uppercase">{t("services:label")}</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">{t("services:title")}</h1>
          <p className="text-muted-foreground mt-4">{t("services:subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`${prefix}/services/${service.id}`}
              className="glass rounded-xl p-8 hover:glow transition-all animate-fade-up group block"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 4).map((feature) => (
                  <li key={feature} className="text-sm text-secondary-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {feature.split(" — ")[0]}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                {t("common:buttons.learnMore")}{" "}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
