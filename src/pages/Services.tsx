import { Link } from "react-router-dom";
import { ArrowRight, Zap, Code2, Settings } from "lucide-react";
import Layout from "@/components/Layout";
import { usePageMeta } from "@/hooks/use-page-meta";

const services = [
  {
    id: "consulenza",
    icon: Zap,
    title: "Consulenza",
    description: "Analisi strategica, product discovery e validazione di idee. Ti guido dalla visione al lancio con un approccio data-driven.",
    features: ["Product Strategy", "Market Validation", "Technical Advisory", "Growth Planning"],
  },
  {
    id: "sviluppo-custom",
    icon: Code2,
    title: "Sviluppo Custom",
    description: "Sviluppo full-stack di applicazioni web e mobile con architetture moderne, scalabili e manutenibili.",
    features: ["Web Applications", "Mobile Apps", "API & Backend", "Cloud Infrastructure"],
  },
  {
    id: "processo-metodo",
    icon: Settings,
    title: "Processo & Metodo",
    description: "Implementazione di metodologie agili, CI/CD, DevOps e best practices per team di sviluppo ad alte prestazioni.",
    features: ["Agile Coaching", "CI/CD Pipeline", "Code Review", "Team Training"],
  },
];

const Services = () => {
  usePageMeta({
    title: "Services",
    description:
      "Consulenza strategica, sviluppo custom e coaching agile per startup, PMI e enterprise.",
  });

  return (
    <Layout>
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-2xl mb-16 animate-fade-up">
          <p className="text-primary font-medium text-sm tracking-widest uppercase">Services</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Come posso aiutarti</h1>
          <p className="text-muted-foreground mt-4">
            Servizi pensati per startup, PMI e enterprise che vogliono innovare.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              to={`/services/${service.id}`}
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
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-secondary-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                Scopri di più <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
