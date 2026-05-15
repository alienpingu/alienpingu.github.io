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

export const services: Service[] = [
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
