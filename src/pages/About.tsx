import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    <section className="container mx-auto px-6 py-24">
      <div className="max-w-3xl animate-fade-up">
        <p className="text-primary font-medium text-sm tracking-widest uppercase">About</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">Chi sono</h1>

        <div className="mt-12 space-y-6 text-foreground/80 leading-relaxed">
          <p>
            Sono un imprenditore tech con oltre 10 anni di esperienza nello sviluppo di prodotti digitali.
            Il mio percorso è iniziato come sviluppatore full-stack e si è evoluto nella creazione
            e nel lancio di prodotti SaaS di successo.
          </p>
          <p>
            Credo fermamente che la tecnologia debba essere al servizio delle persone e del business.
            Per questo combino competenze tecniche profonde con una visione imprenditoriale,
            aiutando aziende e startup a trasformare idee in prodotti concreti.
          </p>
          <p>
            La mia missione è costruire il futuro digitale — un prodotto alla volta.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-8">
          {[
            { label: "Anni di esperienza", value: "10+" },
            { label: "Prodotti lanciati", value: "8" },
            { label: "Clienti serviti", value: "50+" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-gradient">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-xl font-semibold mb-6">Tech Stack Preferito</h2>
          <div className="flex flex-wrap gap-3">
            {["TypeScript", "React", "Node.js", "Python", "PostgreSQL", "AWS", "Docker", "Kubernetes", "Next.js", "Tailwind CSS"].map((tech) => (
              <span key={tech} className="text-sm px-4 py-2 rounded-lg bg-secondary text-secondary-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
