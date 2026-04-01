import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Code2, Lightbulb } from "lucide-react";
import Layout from "@/components/Layout";
import HeroScene from "@/components/HeroScene";

const valuePropItems = [
  {
    icon: Rocket,
    title: "Prodotti SaaS",
    description: "Creo e lancio prodotti digitali scalabili che risolvono problemi reali.",
  },
  {
    icon: Code2,
    title: "Sviluppo Custom",
    description: "Sviluppo soluzioni su misura con tecnologie moderne e architetture solide.",
  },
  {
    icon: Lightbulb,
    title: "Consulenza Strategica",
    description: "Aiuto aziende a trasformare idee in prodotti digitali di successo.",
  },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <HeroScene />
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
            Costruisco il futuro digitale — prodotti innovativi e soluzioni tech per chi vuole crescere.
          </p>
          <div className="flex flex-wrap gap-4 mt-10 pointer-events-auto animate-fade-up-delay-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Scopri i Prodotti <ArrowRight size={16} />
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

    {/* Value Props */}
    <section className="container mx-auto px-6 py-24">
      <div className="grid md:grid-cols-3 gap-8">
        {valuePropItems.map((item) => (
          <div
            key={item.title}
            className="glass rounded-xl p-8 hover:glow transition-shadow group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <item.icon className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Index;
