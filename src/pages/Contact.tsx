import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mb-16 animate-fade-up">
            <p className="text-primary font-medium text-sm tracking-widest uppercase">Contact</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">Parliamo</h1>
            <p className="text-muted-foreground mt-4">
              Hai un progetto in mente? Scrivimi e troviamo insieme la soluzione migliore.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 animate-fade-up-delay-1">
              {submitted ? (
                <div className="glass rounded-xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Messaggio inviato!</h3>
                  <p className="text-sm text-muted-foreground">Ti risponderò il prima possibile.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Nome"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Oggetto"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <textarea
                    rows={5}
                    placeholder="Il tuo messaggio..."
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    Invia Messaggio <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            <div className="md:col-span-2 space-y-6 animate-fade-up-delay-2">
              <div className="glass rounded-xl p-6">
                <Mail className="text-primary mb-3" size={20} />
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground mt-1">hello@brts.ml</p>
              </div>
              <div className="glass rounded-xl p-6">
                <MapPin className="text-primary mb-3" size={20} />
                <p className="text-sm font-medium">Location</p>
                <p className="text-sm text-muted-foreground mt-1">Italia — Remote First</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
