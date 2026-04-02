import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    <section className="container mx-auto px-6 py-24">
      <div className="max-w-3xl animate-fade-up">
        <p className="text-primary font-medium text-sm tracking-widest uppercase">About</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">Bertocco Samuele</h1>

        <div className="mt-12 space-y-6 text-foreground/80 leading-relaxed">
          <p>
            Sono sempre stato ossessionato da internet e da come evolve. Alla mia età ho avuto il privilegio di viverlo in prima persona, dalle origini fino a oggi.
          </p>
          <p>
            Ho iniziato con design 3D e progettazione elettronica, ma la vera passione è sempre stata la rete. Nel 2020, con il mondo fermo, ho riscoperto questa spinta e ho aperto la mia prima partita IVA. Quello che seguì fu il classico percorso del freelancer affamato: ho offerto qualsiasi servizio IT, ads e social come un venditore porta a porta, a prezzi stracciati ma con una fame di imparare che non aveva prezzo.
          </p>
          <p>
            Dopo Milano ho fatto tappa in SopraSteria, dove ho scoperto cosa significa lavorare in team strutturato. Progetti Agile, metodologie, processi veri. È stato formativo, ma ho capito presto che mi mancava quel dinamismo del "porta a porta", quella libertà di decidere velocemente.
          </p>
          <p>
            Così sono finito in una piccola realtà molto innovativa a Bologna. Dieci mesi intensi, ma quando il mio contributo non è più necessario, lo riconosco lucidamente. Non era ancora la mia forma.
          </p>
          <p>
            Oggi ho registrato BRTSML — il dominio che racchiude tutto quello che sono — e mi sono messo in proprio. Ho scelto l'Italia perché voglio "stare comodo nello scomodo". Questo è il momento.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
