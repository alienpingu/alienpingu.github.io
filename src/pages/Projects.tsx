import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import { usePageMeta } from "@/hooks/use-page-meta";
import AbstractBackground from "@/components/AbstractBackground";
import { getProjects } from "@/data/projects";
import { useLanguageSwitcher } from "@/hooks/use-language";

const Projects = () => {
  const { t } = useTranslation(["projects", "common"]);
  const { currentLang } = useLanguageSwitcher();
  const projects = getProjects(currentLang);

  usePageMeta({
    title: t("projects:meta.title"),
    description: t("projects:meta.description"),
  });

  const statusLabel = (status: string) => {
    if (status === "Live") return t("common:labels.live");
    if (status === "Beta") return t("common:labels.beta");
    return t("common:labels.comingSoon");
  };

  return (
    <Layout>
      <AbstractBackground variant="projects" />
      <section className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-2xl mb-16 animate-fade-up">
          <p className="text-primary font-medium text-sm tracking-widest uppercase">{t("projects:label")}</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">{t("projects:title")}</h1>
          <p className="text-muted-foreground mt-4">{t("projects:subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
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
                  {statusLabel(project.status)}
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
