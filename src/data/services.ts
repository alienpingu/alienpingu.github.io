import type { LucideIcon } from "lucide-react";
import { Zap, Code2, Settings } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  headline: string;
  description: string;
  features: string[];
  process: { step: number; title: string; description: string }[];
  deliverables: string[];
  technologies?: string[];
  faq: { question: string; answer: string }[];
}

export const getServices = (lang: "it" | "en"): Service[] => {
  if (lang === "en") {
    return [
      {
        id: "consulting",
        icon: Zap,
        title: "Consulting",
        headline: "From vision to launch, with a data-driven approach.",
        description:
          "Not every idea deserves to be built. My consulting focuses on rapid validation, product strategy and technical advisory to help you make informed decisions before investing resources in development.",
        features: [
          "Product Strategy — definition of vision, mission and product roadmap",
          "Market Validation — interviews, research and market testing before development",
          "Technical Advisory — tailored technology stack and architecture choice",
          "Growth Planning — acquisition, retention and monetization strategy",
        ],
        process: [
          {
            step: 1,
            title: "Discovery",
            description:
              "We analyze the problem, target market and competitors. We define business objectives and success metrics.",
          },
          {
            step: 2,
            title: "Validation",
            description:
              "We build a conceptual MVP and test the hypothesis with real users. We collect data to decide whether to proceed or pivot.",
          },
          {
            step: 3,
            title: "Strategy",
            description:
              "We define the technical and product roadmap, the ideal stack and the launch plan with realistic budget and timeline.",
          },
          {
            step: 4,
            title: "Growth",
            description:
              "We monitor key metrics, optimize the funnel and plan subsequent iterations to scale.",
          },
        ],
        deliverables: [
          "Product Strategy Document",
          "Market Validation Report",
          "Technical Architecture Proposal",
          "12-month Growth Roadmap",
          "Investor Pitch Deck",
        ],
        faq: [
          {
            question: "How long does a consulting session take?",
            answer:
              "It depends on project complexity. An initial discovery session lasts 2-4 hours. A full validation and strategy cycle typically takes 2-4 weeks.",
          },
          {
            question: "Do I need to already have a product idea?",
            answer:
              "No, we can start from scratch. I also help identify market opportunities and worth-solving problems based on data and trends.",
          },
          {
            question: "Which industries do you cover?",
            answer:
              "I have experience in SaaS B2B, e-commerce, fintech, health-tech and ed-tech. The approach is cross-industry: the methodology adapts to any sector.",
          },
        ],
      },
      {
        id: "custom-development",
        icon: Code2,
        title: "Custom Development",
        headline: "Tailored web and mobile applications, scalable and maintainable.",
        description:
          "From idea to deploy, I develop full-stack solutions with modern technologies. Clean architectures, tested code and cloud-ready infrastructure for products that grow with you.",
        features: [
          "Web Applications — SPA, PWA and SSR with React, Next.js, Astro",
          "Mobile Apps — React Native and high-performance cross-platform solutions",
          "API & Backend — RESTful and GraphQL APIs with Node.js, Python, Go",
          "Cloud Infrastructure — deploy on AWS, Vercel, Railway with CI/CD",
        ],
        process: [
          {
            step: 1,
            title: "Analysis",
            description:
              "We define functional and non-functional requirements, user stories and acceptance criteria. I choose the most suitable technology stack.",
          },
          {
            step: 2,
            title: "Prototype",
            description:
              "I build an interactive wireframe or proof-of-concept to validate UX and architecture before full development.",
          },
          {
            step: 3,
            title: "Development",
            description:
              "Iterative code with weekly sprints, continuous code review and automated tests. I keep you updated on every progress.",
          },
          {
            step: 4,
            title: "Deploy & Support",
            description:
              "Production release with CI/CD, monitoring and documentation. I offer post-launch support and maintenance plans.",
          },
        ],
        deliverables: [
          "Source code on private repository",
          "API and technical documentation",
          "Automated test suite",
          "Configured CI/CD pipeline",
          "Staging and production environment",
        ],
        technologies: [
          "React / Next.js / Astro",
          "TypeScript",
          "Node.js / Python / Go",
          "PostgreSQL / MongoDB",
          "AWS / Vercel / Railway",
          "Docker / Kubernetes",
        ],
        faq: [
          {
            question: "How long does it take to develop an MVP?",
            answer:
              "A functional MVP typically takes 4-8 weeks, depending on complexity. I provide an accurate estimate after the analysis phase.",
          },
          {
            question: "Do you do only frontend or also backend?",
            answer:
              "Full-stack. I manage the entire lifecycle: database, APIs, authentication, payment integrations, deploy and infrastructure.",
          },
          {
            question: "Is the code mine?",
            answer:
              "Absolutely yes. The repository, documentation and all assets are transferred to you at the end of the project. No vendor lock-in.",
          },
        ],
      },
      {
        id: "process-method",
        icon: Settings,
        title: "Process & Method",
        headline: "Agile, CI/CD and best practices for high-performance teams.",
        description:
          "Technology matters, but process makes the difference. I help teams implement agile methodologies, automate delivery and improve code quality through systematic reviews and training.",
        features: [
          "Agile Coaching — introduction of Scrum, Kanban or Shape Up tailored to your needs",
          "CI/CD Pipeline — automation of build, test and deploy with GitHub Actions",
          "Code Review — structured review processes and quality gates",
          "Team Training — practical workshops on TypeScript, React, testing and architecture",
        ],
        process: [
          {
            step: 1,
            title: "Assessment",
            description:
              "I evaluate the team's current state: processes, tooling, code quality and pain points. I identify priority intervention areas.",
          },
          {
            step: 2,
            title: "Roadmap",
            description:
              "We define a gradual transformation plan: which practices to introduce first, which tools to adopt, how to train the team.",
          },
          {
            step: 3,
            title: "Implementation",
            description:
              "I get my hands in the code: I configure CI/CD, introduce testing, automate deploy, do pair programming and live code reviews.",
          },
          {
            step: 4,
            title: "Handover",
            description:
              "I document everything, train the team to autonomy and establish monitoring metrics to ensure continuous improvement.",
          },
        ],
        deliverables: [
          "Process Assessment Report",
          "Configured CI/CD Pipeline",
          "Code Review Guidelines",
          "Testing Strategy Document",
          "Training workshops (2-4 sessions)",
          "Team operational runbook",
        ],
        technologies: [
          "GitHub Actions / GitLab CI",
          "Jest / Vitest / Playwright",
          "Docker / Docker Compose",
          "Terraform / Pulumi",
          "Sentry / Datadog",
          "Linear / Jira / Notion",
        ],
        faq: [
          {
            question: "How long does it take to see results?",
            answer:
              "It depends on the starting situation, but typically within 2-4 weeks the team notices improvements in speed and quality. Full transformation takes 2-3 months.",
          },
          {
            question: "Do we need to stop ongoing development?",
            answer:
              "No. I work in parallel, introducing improvements incrementally without blocking delivery. The goal is to accelerate, not stop.",
          },
          {
            question: "Do you also train junior developers?",
            answer:
              "Yes, in fact I prefer mixed teams. I organize practical workshops on real codebases, with exercises tailored to each team member's level.",
          },
        ],
      },
    ];
  }

  // Italian (default)
  return [
    {
      id: "consulenza",
      icon: Zap,
      title: "Consulenza",
      headline: "Dalla visione al lancio, con un approccio data-driven.",
      description:
        "Non tutte le idee meritano di essere costruite. La mia consulenza si concentra su validazione rapida, strategia di prodotto e advisory tecnico per aiutarti a prendere decisioni informate prima di investire risorse nello sviluppo.",
      features: [
        "Product Strategy — definizione di vision, mission e roadmap prodotto",
        "Market Validation — interviste, ricerca e test di mercato prima dello sviluppo",
        "Technical Advisory — scelta stack tecnologico e architettura su misura",
        "Growth Planning — strategia di acquisizione, retention e monetizzazione",
      ],
      process: [
        {
          step: 1,
          title: "Discovery",
          description:
            "Analizziamo il problema, il mercato target e i competitor. Definiamo gli obiettivi di business e le metriche di successo.",
        },
        {
          step: 2,
          title: "Validazione",
          description:
            "Costruiamo un MVP concettuale e testiamo l'ipotesi con utenti reali. Raccogliamo dati per decidere se procedere o pivotare.",
        },
        {
          step: 3,
          title: "Strategia",
          description:
            "Definiamo la roadmap tecnica e di prodotto, lo stack ideale e il piano di lancio con budget e timeline realistici.",
        },
        {
          step: 4,
          title: "Crescita",
          description:
            "Monitoriamo le metriche chiave, ottimizziamo il funnel e pianifichiamo le iterazioni successive per scalare.",
        },
      ],
      deliverables: [
        "Product Strategy Document",
        "Market Validation Report",
        "Technical Architecture Proposal",
        "Growth Roadmap 12 mesi",
        "Pitch Deck per investitori",
      ],
      faq: [
        {
          question: "Quanto dura una sessione di consulenza?",
          answer:
            "Dipende dalla complessità del progetto. Una sessione di discovery iniziale dura 2-4 ore. Un ciclo completo di validazione e strategia richiede tipicamente 2-4 settimane.",
        },
        {
          question: "Serve avere già un'idea di prodotto?",
          answer:
            "No, possiamo partire da zero. Aiuto anche a identificare opportunità di mercato e problemi worth solving basandomi su dati e trend.",
        },
        {
          question: "Quali settori copri?",
          answer:
            "Ho esperienza in SaaS B2B, e-commerce, fintech, health-tech e ed-tech. L'approccio è trasversale: la metodologia si adatta a qualsiasi settore.",
        },
      ],
    },
    {
      id: "sviluppo-custom",
      icon: Code2,
      title: "Sviluppo Custom",
      headline: "Applicazioni web e mobile su misura, scalabili e manutenibili.",
      description:
        "Dall'idea al deploy, sviluppo soluzioni full-stack con tecnologie moderne. Architetture pulite, codice testato e infrastrutture cloud-ready per prodotti che crescono con te.",
      features: [
        "Web Applications — SPA, PWA e SSR con React, Next.js, Astro",
        "Mobile Apps — React Native e soluzioni cross-platform performanti",
        "API & Backend — RESTful e GraphQL API con Node.js, Python, Go",
        "Cloud Infrastructure — deploy su AWS, Vercel, Railway con CI/CD",
      ],
      process: [
        {
          step: 1,
          title: "Analisi",
          description:
            "Definiamo requisiti funzionali e non funzionali, user stories e acceptance criteria. Scelgo lo stack tecnologico più adatto.",
        },
        {
          step: 2,
          title: "Prototipo",
          description:
            "Costruisco un wireframe interattivo o un proof-of-concept per validare l'UX e l'architettura prima dello sviluppo completo.",
        },
        {
          step: 3,
          title: "Sviluppo",
          description:
            "Codice iterativo con sprint settimanali, code review continua e test automatici. Ti tengo aggiornato su ogni avanzamento.",
        },
        {
          step: 4,
          title: "Deploy & Support",
          description:
            "Rilascio in produzione con CI/CD, monitoraggio e documentazione. Offro supporto post-lancio e piani di manutenzione.",
        },
      ],
      deliverables: [
        "Codice sorgente su repository privata",
        "Documentazione API e tecnica",
        "Test suite automatizzata",
        "Pipeline CI/CD configurata",
        "Ambiente di staging e produzione",
      ],
      technologies: [
        "React / Next.js / Astro",
        "TypeScript",
        "Node.js / Python / Go",
        "PostgreSQL / MongoDB",
        "AWS / Vercel / Railway",
        "Docker / Kubernetes",
      ],
      faq: [
        {
          question: "Quanto tempo ci vuole per sviluppare un MVP?",
          answer:
            "Un MVP funzionale richiede tipicamente 4-8 settimane, a seconda della complessità. Fornisco una stima precisa dopo la fase di analisi.",
        },
        {
          question: "Fai solo frontend o anche backend?",
          answer:
            "Full-stack. Gestisco l'intero ciclo di vita: database, API, autenticazione, integrazioni di pagamento, deploy e infrastruttura.",
        },
        {
          question: "Il codice è mio?",
          answer:
            "Assolutamente sì. Il repository, la documentazione e tutti gli asset ti vengono ceduti al termine del progetto. Nessun vendor lock-in.",
        },
      ],
    },
    {
      id: "processo-metodo",
      icon: Settings,
      title: "Processo & Metodo",
      headline: "Agile, CI/CD e best practices per team ad alte prestazioni.",
      description:
        "La tecnologia conta, ma il processo fa la differenza. Aiuto i team a implementare metodologie agili, automatizzare il delivery e migliorare la qualità del codice attraverso review sistematiche e formazione.",
      features: [
        "Agile Coaching — introduzione di Scrum, Kanban o Shape Up su misura",
        "CI/CD Pipeline — automazione di build, test e deploy con GitHub Actions",
        "Code Review — processi di review strutturati e quality gates",
        "Team Training — workshop pratici su TypeScript, React, testing e architettura",
      ],
      process: [
        {
          step: 1,
          title: "Assessment",
          description:
            "Valuto lo stato attuale del team: processi, tooling, qualità del codice e pain points. Identifico le aree di intervento prioritarie.",
        },
        {
          step: 2,
          title: "Roadmap",
          description:
            "Definiamo un piano di trasformazione graduale: quali pratiche introdurre prima, quali tool adottare, come formare il team.",
        },
        {
          step: 3,
          title: "Implementazione",
          description:
            "Metto le mani nel codice: configuro CI/CD, introduco testing, automatizzo deploy, faccio pair programming e code review live.",
        },
        {
          step: 4,
          title: "Handover",
          description:
            "Documento tutto, formo il team all'autonomia e stabilisco metriche di monitoraggio per garantire il miglioramento continuo.",
        },
      ],
      deliverables: [
        "Process Assessment Report",
        "CI/CD Pipeline configurata",
        "Code Review Guidelines",
        "Testing Strategy Document",
        "Workshop di formazione (2-4 sessioni)",
        "Runbook operativo del team",
      ],
      technologies: [
        "GitHub Actions / GitLab CI",
        "Jest / Vitest / Playwright",
        "Docker / Docker Compose",
        "Terraform / Pulumi",
        "Sentry / Datadog",
        "Linear / Jira / Notion",
      ],
      faq: [
        {
          question: "Quanto tempo serve per vedere risultati?",
          answer:
            "Dipende dalla situazione di partenza, ma tipicamente entro 2-4 settimane il team nota miglioramenti in velocità e qualità. La trasformazione completa richiede 2-3 mesi.",
        },
        {
          question: "Serve interrompere lo sviluppo in corso?",
          answer:
            "No. Lavoro in parallelo, introducendo miglioramenti incrementalmente senza bloccare il delivery. L'obiettivo è accelerare, non fermare.",
        },
        {
          question: "Fai formazione anche per junior developer?",
          answer:
            "Sì, anzi preferisco team misti. Organizzo workshop pratici su codebase reali, con esercizi mirati al livello di ogni membro del team.",
        },
      ],
    },
  ];
};
