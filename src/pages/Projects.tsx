import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import { usePageMeta } from "@/hooks/use-page-meta";

const projectsData = [
  {
    name: "Picco CSS",
    description: "A lightweight CSS library designed for maximum efficiency and simplicity, created from scratch.",
    tags: ["nodejs", "CSS", "Astro"],
    status: "Live",
    website: "https://picco-css.vercel.app/"
  },
  {
    name: "Safe Now EU",
    description: "The Eurozone version of the american safe-now.live",
    tags: ["HTML"],
    status: "Live",
    website: "https://safe-now.eu/"
  },
  {
    name: "Dodici",
    description: "A logic-based game built with P5.js to challenge users' reasoning skills.",
    tags: ["nodejs", "P5.js"],
    status: "Live",
    website: "https://dodici.vercel.app/"
  },
  {
    name: "Acconciature Unisex",
    description: "Created and optimized a scalable, SEO-focused website to enhance online visibility for AcconciatureUnisex.",
    tags: ["Astro", "scss"],
    status: "Live",
    website: "https://acconciature-unisex.com"
  },
  {
    name: "GLM Imperia",
    description: "Developed and managed a high-performance website to improve user experience for GLM Imperia.",
    tags: ["Astro", "TailwindCSS"],
    status: "Live",
    website: "https://glmimperia.com"
  },
  {
    name: "CheckupDigitale",
    description: "CTO for CheckupDigitale, leading a freelance team and defining the technology strategy for innovative digital solutions.",
    tags: ["react"],
    status: "Live",
    website: "https://checkupdigitale.com"
  },
  {
    name: "My Paper Kitchen",
    description: "SSR blog about book and cooking",
    tags: ["Astro", "RSS"],
    status: "Live",
    website: "https://www.mypaper.kitchen/"
  },
];

const Projects = () => {
  const { t } = useTranslation("projects");

  usePageMeta({
    title: t("meta.title"),
    description: t("meta.description"),
  });

  return (
    <Layout>
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-2xl mb-16 animate-fade-up">
          <p className="text-primary font-medium text-sm tracking-widest uppercase">{t("label")}</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">{t("title")}</h1>
          <p className="text-muted-foreground mt-4">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <a
              key={project.name}
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-8 flex flex-col animate-fade-up hover:glow transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  project.status === "Live" ? "bg-primary/10 text-primary" :
                  project.status === "Beta" ? "bg-secondary text-secondary-foreground" :
                  "bg-muted text-muted-foreground"
                }`}>
                  {project.status}
                </span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
