import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import { usePageMeta } from "@/hooks/use-page-meta";

const About = () => {
  const { t } = useTranslation("about");

  usePageMeta({
    title: t("meta.title"),
    description: t("meta.description"),
  });

  return (
    <Layout>
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-3xl animate-fade-up">
          <p className="text-primary font-medium text-sm tracking-widest uppercase">{t("label")}</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">{t("title")}</h1>

          <div className="mt-12 space-y-6 text-foreground/80 leading-relaxed">
            <p>{t("paragraphs.p1")}</p>
            <p>{t("paragraphs.p2")}</p>
            <p>{t("paragraphs.p3")}</p>
            <p>{t("paragraphs.p4")}</p>
            <p>{t("paragraphs.p5")}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
