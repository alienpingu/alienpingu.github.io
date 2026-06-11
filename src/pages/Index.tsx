import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, Zap, Code2, Settings, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import { useInView } from "@/hooks/use-in-view";
import { getServices } from "@/data/services";
import { getProjects } from "@/data/projects";
import { useLanguageSwitcher } from "@/hooks/use-language";
import ParticleBackground from "@/components/ParticleBackground";

/* ---------- Components ---------- */

const SectionTitle = ({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) => {
  const ref = useInView({ threshold: 0.2 });

  return (
    <div ref={ref} className="max-w-2xl mb-16 scroll-animate">
      <p className="text-primary font-medium text-sm tracking-[0.3em] uppercase mb-4">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
    </div>
  );
};

const ServiceCard = ({
  service,
  delayClass,
}: {
  service: ReturnType<typeof getServices>[number];
  delayClass: string;
}) => {
  const ref = useInView({ threshold: 0.15 });
  const Icon = service.icon;
  const { t } = useTranslation("common");
  const { currentLang } = useLanguageSwitcher();
  const prefix = currentLang === "en" ? "/en" : "";

  return (
    <Link
      to={`${prefix}/services/${service.id}`}
      ref={ref}
      className={`glass rounded-xl p-8 hover:glow transition-all group block scroll-animate ${delayClass}`}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
        <Icon className="text-primary" size={24} />
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
        {t("buttons.learnMore")}{" "}
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
};

const ProjectCard = ({
  project,
  delayClass,
}: {
  project: ReturnType<typeof getProjects>[number];
  delayClass: string;
}) => {
  const ref = useInView({ threshold: 0.15 });
  const { t } = useTranslation("common");

  return (
    <a
      href={project.website}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      className={`glass rounded-xl p-8 flex flex-col hover:glow transition-all group scroll-animate ${delayClass}`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
          {t("labels.live")}
        </span>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {project.name}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-6">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
};

const AboutTeaser = () => {
  const { t } = useTranslation("home");
  const { currentLang } = useLanguageSwitcher();
  const prefix = currentLang === "en" ? "/en" : "";
  const refLeft = useInView({ threshold: 0.2 });
  const refRight = useInView({ threshold: 0.2 });

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div ref={refLeft} className="scroll-animate">
        <p className="text-primary font-medium text-sm tracking-[0.3em] uppercase mb-4">
          {t("about.label")}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
          <span className="text-gradient">{t("about.title")}</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {t("about.bio1")}
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          {t("about.bio2")}
        </p>
        <Link
          to={`${prefix}/about`}
          className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
        >
          {t("about.cta")} <ArrowRight size={16} />
        </Link>
      </div>

      <div ref={refRight} className="glass rounded-xl p-8 scroll-animate scroll-delay-2">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Zap className="text-primary" size={20} />
            </div>
            <div>
              <h4 className="font-semibold mb-1">{t("about.skills.productStrategy")}</h4>
              <p className="text-sm text-muted-foreground">{t("about.skills.productStrategyDesc")}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Code2 className="text-primary" size={20} />
            </div>
            <div>
              <h4 className="font-semibold mb-1">{t("about.skills.fullStack")}</h4>
              <p className="text-sm text-muted-foreground">{t("about.skills.fullStackDesc")}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Settings className="text-primary" size={20} />
            </div>
            <div>
              <h4 className="font-semibold mb-1">{t("about.skills.teamProcess")}</h4>
              <p className="text-sm text-muted-foreground">{t("about.skills.teamProcessDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- Page ---------- */

const Index = () => {
  const { t } = useTranslation(["home", "common"]);
  const { currentLang } = useLanguageSwitcher();
  const prefix = currentLang === "en" ? "/en" : "";

  const services = getServices(currentLang);
  const featuredProjects = getProjects(currentLang).slice(0, 3);

  return (
    <Layout>
      <ParticleBackground />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="container relative mx-auto px-6 py-24 pointer-events-none">
            <div className="max-w-3xl glass rounded-2xl p-8 md:p-12">
              <p className="text-primary font-medium text-sm tracking-[0.3em] uppercase animate-fade-up">
                {t("home:hero.subtitle")}
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold mt-6 leading-[0.95] tracking-tight animate-fade-up-delay-1">
                <span className="text-gradient">{t("home:hero.title")}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-xl animate-fade-up-delay-2">
                {t("home:hero.description")}
              </p>
              <div className="flex flex-wrap gap-4 mt-10 pointer-events-auto animate-fade-up-delay-3">
                <Link
                  to={`${prefix}/projects`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  {t("home:hero.ctaPrimary")} <ArrowRight size={16} />
                </Link>
                <Link
                  to={`${prefix}/contact`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
                >
                  {t("home:hero.ctaSecondary")}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="container mx-auto px-6 py-24 relative">
          <div className="glass rounded-2xl p-8 md:p-12">
            <SectionTitle
              label={t("home:services.label")}
              title={t("home:services.title")}
              subtitle={t("home:services.subtitle")}
            />

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  delayClass={`scroll-delay-${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="container mx-auto px-6 py-24 relative">
          <div className="glass rounded-2xl p-8 md:p-12">
            <SectionTitle
              label={t("home:projects.label")}
              title={t("home:projects.title")}
              subtitle={t("home:projects.subtitle")}
            />

            <div className="grid md:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  delayClass={`scroll-delay-${index + 1}`}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to={`${prefix}/projects`}
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                {t("home:projects.viewAll")} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* About Teaser */}
        <section className="container mx-auto px-6 py-24 relative">
          <div className="glass rounded-2xl p-8 md:p-12">
            <AboutTeaser />
          </div>
        </section>

        {/* CTA Final */}
        <section className="container mx-auto px-6 py-24 relative">
          <div className="glass rounded-2xl p-8 md:p-12">
            <div
              ref={useInView({ threshold: 0.3 })}
              className="max-w-3xl mx-auto text-center scroll-animate"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                {t("home:cta.title")}
                <span className="text-gradient">{t("home:cta.titleGradient")}</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                {t("home:cta.description")}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to={`${prefix}/contact`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  {t("home:cta.contact")} <ArrowRight size={16} />
                </Link>
                <Link
                  to={`${prefix}/services`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
                >
                  {t("home:cta.exploreServices")}
                </Link>
              </div>
            </div>
          </div>
        </section>
    </Layout>
  );
};

export default Index;
