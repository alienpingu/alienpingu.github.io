import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import { Shield, Eye, Database, Globe, Mail } from "lucide-react";

const Section = ({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="text-primary" size={20} />
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
    <div className="pl-[52px] text-muted-foreground leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

const Privacy = () => {
  const { t } = useTranslation("privacy");

  return (
    <Layout>
      <section className="container mx-auto px-6 py-24 relative">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            <p className="text-primary font-medium text-sm tracking-[0.3em] uppercase mb-4">
              {t("label")}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              {t("title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("subtitle")}
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              {t("lastUpdated", { date: "22/05/2026" })}
            </p>
          </div>

          <Section icon={Eye} title={t("sections.overview.title")}>
            <p>{t("sections.overview.content")}</p>
          </Section>

          <Section icon={Database} title={t("sections.collected.title")}>
            <p>{t("sections.collected.intro")}</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t("sections.collected.items.essential")}</li>
              <li>{t("sections.collected.items.analytics")}</li>
              <li>{t("sections.collected.items.noPersonal")}</li>
            </ul>
          </Section>

          <Section icon={Shield} title={t("sections.cookies.title")}>
            <p>{t("sections.cookies.content")}</p>
            <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
              <p className="font-medium text-foreground mb-2">{t("sections.cookies.types.essential.label")}</p>
              <p className="text-sm">{t("sections.cookies.types.essential.description")}</p>
            </div>
            <div className="mt-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
              <p className="font-medium text-foreground mb-2">{t("sections.cookies.types.analytics.label")}</p>
              <p className="text-sm">{t("sections.cookies.types.analytics.description")}</p>
            </div>
          </Section>

          <Section icon={Globe} title={t("sections.thirdParties.title")}>
            <p>{t("sections.thirdParties.content")}</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Cloudflare, Inc.</strong> — {t("sections.thirdParties.cloudflare")}
              </li>
            </ul>
          </Section>

          <Section icon={Mail} title={t("sections.contact.title")}>
            <p>{t("sections.contact.content")}</p>
            <p className="mt-2">
              <strong>{t("sections.contact.emailLabel")}:</strong>{" "}
              <a href="mailto:info@brts.ml" className="text-primary hover:underline">
                info@brts.ml
              </a>
            </p>
            <p className="mt-1">
              <strong>{t("sections.contact.addressLabel")}:</strong>{" "}
              {t("sections.contact.address")}
            </p>
          </Section>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
