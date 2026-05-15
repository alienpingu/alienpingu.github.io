import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { usePageMeta } from "@/hooks/use-page-meta";

const NotFound = () => {
  usePageMeta({
    title: "404",
    description: "Pagina non trovata — Torna alla home di BRTSML.",
  });

  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center max-w-lg mx-auto px-6">
          <p className="text-primary font-medium text-sm tracking-[0.3em] uppercase mb-4">
            Error 404
          </p>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6">
            <span className="text-gradient">Oops!</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-10">
            La pagina che stai cercando non esiste o è stata spostata.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <ArrowLeft size={16} /> Torna alla Home
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
