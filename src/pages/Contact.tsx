import { useTranslation } from "react-i18next";
import { Mail, MapPin, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import Layout from "@/components/Layout";
import { usePageMeta } from "@/hooks/use-page-meta";
import AbstractBackground from "@/components/AbstractBackground";

const FORM_ACTION = "https://api.formbee.dev/formbee/48a6b226-43cd-4d23-9a9e-839fb95789a8";

const Contact = () => {
  const { t } = useTranslation("contact");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  usePageMeta({
    title: t("meta.title"),
    description: t("meta.description"),
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(FORM_ACTION, {
        method: "POST",
        body: formData,
      });
      setSubmitted(true);
    } catch {
      // Silently fail
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <AbstractBackground variant="contact" />
      <section className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mb-16 animate-fade-up">
            <p className="text-primary font-medium text-sm tracking-widest uppercase">{t("label")}</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">{t("title")}</h1>
            <p className="text-muted-foreground mt-4">{t("subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 animate-fade-up-delay-1">
              {submitted ? (
                <div className="glass rounded-xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t("form.successTitle")}</h3>
                  <p className="text-sm text-muted-foreground">{t("form.successMessage")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder={t("form.namePlaceholder")}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder={t("form.emailPlaceholder")}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    placeholder={t("form.subjectPlaceholder")}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <textarea
                    name="message"
                    rows={5}
                    placeholder={t("form.messagePlaceholder")}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? t("form.sending") : t("form.send")} <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            <div className="md:col-span-2 space-y-6 animate-fade-up-delay-2">
              <div className="glass rounded-xl p-6">
                <Mail className="text-primary mb-3" size={20} />
                <p className="text-sm font-medium">{t("info.email")}</p>
                <p className="text-sm text-muted-foreground mt-1">hello@brts.ml</p>
              </div>
              <div className="glass rounded-xl p-6">
                <MapPin className="text-primary mb-3" size={20} />
                <p className="text-sm font-medium">{t("info.location")}</p>
                <p className="text-sm text-muted-foreground mt-1">{t("info.locationValue")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
