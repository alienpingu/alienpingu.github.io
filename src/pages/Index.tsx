import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Code2, Settings, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useInView } from "@/hooks/use-in-view";
import { services } from "@/data/services";
import type { Service } from "@/data/services";

const HeroScene = lazy(() => import("@/components/HeroScene"));

const HeroSceneFallback = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
);

const featuredProjects = [
  {
    name: "Picco CSS",
    description:
      "A lightweight CSS library designed for maximum efficiency and simplicity, created from scratch.",
    tags: ["nodejs", "CSS", "Astro"],
    website: "https://picco-css.vercel.app/",
  },
  {
    name: "CheckupDigitale",
    description:
      "CTO for CheckupDigitale, leading a freelance team and defining the technology strategy for innovative digital solutions.",
    tags: ["react", "Strategy", "Leadership"],
    website: "https://checkupdigitale.com",
  },
  {
    name: "GLM Imperia",
    description:
      "Developed and managed a high-performance website to improve user experience for GLM Imperia.",
    tags: ["Astro", "TailwindCSS", "Performance"],
    website: "https://glmimperia.com",
  },
];

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
  service: Service;
  delayClass: string;
}) => {
  const ref = useInView({ threshold: 0.15 });
  const Icon = service.icon;

  return (
    <Link
      to={`/services/${service.id}`}
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
          <li
            key={feature}
            className="text-sm text-secondary-foreground flex items-center gap-2"
          >
            <span className="w-1 h-1 rounded-full bg-primary" />
            {feature.split(" — ")[0]}
          </li>
        ))}
      </ul>
      <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
        Scopri di più{" "}
        <ArrowRight
          size={14}
          className="transition-transform group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
};

const ProjectCard = ({
  project,
  delayClass,
}: {
  project: (typeof featuredProjects)[number];
  delayClass: string;
}) => {
  const ref = useInView({ threshold: 0.15 });

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
          Live
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
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
};

const AboutTeaser = () => {
  const refLeft = useInView({ threshold: 0.2 });
  const refRight = useInView({ threshold: 0.2 });

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div ref={refLeft} className="scroll-animate">
        <p className="text-primary font-medium text-sm tracking-[0.3em] uppercase mb-4">
          Chi sono
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
          <span className="text-gradient">Bertocco Samuele</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Sono sempre stato ossessionato da internet e da come evolve. Ho
          iniziato con design 3D e progettazione elettronica, ma la vera
          passione è sempre stata la rete. Nel 2020 ho aperto la mia prima
          partita IVA e da allora non ho mai smesso di costruire.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Dopo esperienze a Milano in SopraSteria e Bologna in una startup
          innovativa, oggi ho registrato BRTSML e mi sono messo in proprio.
          Scelgo l'Italia perché voglio "stare comodo nello scomodo".
        </p>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
        >
          Leggi la mia storia <ArrowRight size={16} />
        </Link>
      </div>

      <div
        ref={refRight}
        className="glass rounded-xl p-8 scroll-animate scroll-delay-2"
      >
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Zap className="text-primary" size={20} />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Product Strategy</h4>
              <p className="text-sm text-muted-foreground">
                Dall'idea al lancio, con validazione data-driven.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Code2 className="text-primary" size={20} />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Full-Stack Dev</h4>
              <p className="text-sm text-muted-foreground">
                React, Node.js, TypeScript, cloud infrastructure.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Settings className="text-primary" size={20} />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Team & Process</h4>
              <p className="text-sm text-muted-foreground">
                Agile, CI/CD, code review, formazione team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- Page ---------- */

const Index = () => {
  usePageMeta({
    title: "Home",
    description:
      "BRTSML — Technology Entrepreneur. Costruisco il futuro digitale con prodotti innovativi e soluzioni tech per chi vuole crescere.",
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Suspense fallback={<HeroSceneFallback />}>
          <HeroScene />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

        <div className="container relative mx-auto px-6 py-24 pointer-events-none">
          <div className="max-w-3xl">
            <p className="text-primary font-medium text-sm tracking-[0.3em] uppercase animate-fade-up">
              Technology Entrepreneur
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold mt-6 leading-[0.95] tracking-tight animate-fade-up-delay-1">
              <span className="text-gradient">BRTSML</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-xl animate-fade-up-delay-2">
              Costruisco il futuro digitale — prodotti innovativi e soluzioni
              tech per chi vuole crescere.
            </p>
            <div className="flex flex-wrap gap-4 mt-10 pointer-events-auto animate-fade-up-delay-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Scopri cosa faccio <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
              >
                Parliamo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-6 py-24">
        <SectionTitle
          label="Servizi"
          title="Come posso aiutarti"
          subtitle="Tre aree di intervento per trasformare la tua visione in realtà."
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
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-6 py-24">
        <SectionTitle
          label="Portfolio"
          title="Progetti in evidenza"
          subtitle="Un assaggio dei progetti su cui ho lavorato."
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
            to="/projects"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Vedi tutti i progetti <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* About Teaser */}
      <section className="container mx-auto px-6 py-24">
        <AboutTeaser />
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-6 py-24">
        <div
          ref={useInView({ threshold: 0.3 })}
          className="max-w-3xl mx-auto text-center scroll-animate"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Pronto a costruire{" "}
            <span className="text-gradient">qualcosa di grande</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Che tu abbia un'idea da validare, un prodotto da sviluppare o un
            team da scalare, troviamo insieme la strada giusta.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Contattami <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
            >
              Esplora i servizi
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
