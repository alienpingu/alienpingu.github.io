import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { usePageMeta } from "@/hooks/use-page-meta";
import { getServices } from "@/data/services";
import { useLanguageSwitcher } from "@/hooks/use-language";
import AbstractBackground from "@/components/AbstractBackground";

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation(["serviceDetail", "common"]);
  const { currentLang } = useLanguageSwitcher();
  const prefix = currentLang === "en" ? "/en" : "";

  const services = getServices(currentLang);
  const service = services.find((s) => s.id === id);

  usePageMeta({
    title: service?.title ?? t("serviceDetail:meta.notFoundTitle"),
    description: service?.headline ?? t("serviceDetail:meta.notFoundDescription"),
  });

  if (!service) {
    return (
      <Layout>
        <AbstractBackground variant="serviceDetail" />
        <section className="min-h-[60vh] flex items-center justify-center relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{t("serviceDetail:notFound.title")}</h1>
            <Link
              to={`${prefix}/services`}
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft size={16} /> {t("serviceDetail:notFound.back")}
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const Icon = service.icon;

  return (
    <Layout>
      <AbstractBackground variant="serviceDetail" />
      {/* Hero */}
      <section className="relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 py-24 relative">
          <Link
            to={`${prefix}/services`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} /> {t("serviceDetail:breadcrumb")}
          </Link>

          <div className="max-w-3xl animate-fade-up">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Icon className="text-primary" size={28} />
            </div>
            <p className="text-primary font-medium text-sm tracking-[0.3em] uppercase mb-4">
              {service.title}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              <span className="text-gradient">{service.headline}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-4xl">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            {t("serviceDetail:process.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">{t("serviceDetail:process.title")}</h2>

          <div className="space-y-8">
            {service.process.map((step) => (
              <div key={step.step} className="flex gap-6 animate-fade-up">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-4xl">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            {t("serviceDetail:features.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">{t("serviceDetail:features.title")}</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={20} />
                <span className="text-foreground/90">{feature}</span>
              </div>
            ))}
          </div>

          <div className="glass rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6">{t("serviceDetail:features.deliverablesTitle")}</h3>
            <ul className="space-y-3">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Technologies */}
      {service.technologies && (
        <section className="container mx-auto px-6 py-16 relative z-10">
          <div className="max-w-4xl">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              {t("serviceDetail:technologies.label")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("serviceDetail:technologies.title")}</h2>
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-3xl">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            {t("serviceDetail:faq.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">{t("serviceDetail:faq.title")}</h2>

          <div className="space-y-6">
            {service.faq.map((item, index) => (
              <div key={index} className="glass rounded-xl p-6">
                <h3 className="font-semibold mb-2">{item.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("serviceDetail:cta.title")}</h2>
          <p className="text-muted-foreground mb-10">{t("serviceDetail:cta.description")}</p>
          <Link
            to={`${prefix}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            {t("serviceDetail:cta.button")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
