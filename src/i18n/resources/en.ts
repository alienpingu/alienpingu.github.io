export const en = {
  common: {
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    footer: {
      tagline: "Technology Entrepreneur",
      copyright: "© {{year}} BRTSML. All rights reserved. VAT: 14654430967",
    },
    loader: "Loading...",
    buttons: {
      learnMore: "Learn more",
      viewAll: "View all",
      back: "Go back",
      send: "Send",
      sending: "Sending...",
      contact: "Contact me",
      exploreServices: "Explore services",
      backToHome: "Back to Home",
      backToServices: "Back to Services",
      viewProject: "View project",
    },
    labels: {
      live: "Live",
      comingSoon: "Coming Soon",
      beta: "Beta",
    },
    meta: {
      defaultTitle: "BRTSML — Technology Entrepreneur",
      defaultDescription:
        "BRTSML — Technology Entrepreneur. Building the digital future with innovative products and tech solutions for those who want to grow.",
    },
  },
  home: {
    hero: {
      subtitle: "Technology Entrepreneur",
      title: "BRTSML",
      description:
        "Building the digital future — innovative products and tech solutions for those who want to grow.",
      ctaPrimary: "See what I do",
      ctaSecondary: "Let's talk",
    },
    services: {
      label: "Services",
      title: "How I can help",
      subtitle: "Three areas of intervention to turn your vision into reality.",
    },
    projects: {
      label: "Portfolio",
      title: "Featured projects",
      subtitle: "A taste of the projects I've worked on.",
      viewAll: "View all projects",
    },
    about: {
      label: "Who I am",
      title: "Bertocco Samuele",
      bio1:
        "I've always been obsessed with the internet and how it evolves. I started with 3D design and electronic engineering, but my true passion has always been the web. In 2020 I opened my first VAT number and haven't stopped building since.",
      bio2:
        "After experiences in Milan at SopraSteria and Bologna at an innovative startup, today I registered BRTSML and went independent. I choose Italy because I want to \"stay comfortable in the uncomfortable\".",
      cta: "Read my story",
      skills: {
        productStrategy: "Product Strategy",
        productStrategyDesc: "From idea to launch, with data-driven validation.",
        fullStack: "Full-Stack Dev",
        fullStackDesc: "React, Node.js, TypeScript, cloud infrastructure.",
        teamProcess: "Team & Process",
        teamProcessDesc: "Agile, CI/CD, code review, team training.",
      },
    },
    cta: {
      title: "Ready to build ",
      titleGradient: "something great",
      description:
        "Whether you have an idea to validate, a product to develop, or a team to scale, let's find the right path together.",
      contact: "Contact me",
      exploreServices: "Explore services",
    },
  },
  services: {
    meta: {
      title: "Services",
      description:
        "Strategic consulting, custom development and agile coaching for startups, SMBs and enterprises.",
    },
    label: "Services",
    title: "How I can help",
    subtitle: "Services designed for startups, SMBs and enterprises that want to innovate.",
  },
  serviceDetail: {
    meta: {
      notFoundTitle: "Service not found",
      notFoundDescription: "The requested service does not exist.",
    },
    notFound: {
      title: "Service not found",
      back: "Back to services",
    },
    breadcrumb: "All services",
    process: {
      label: "How I work",
      title: "The process",
    },
    features: {
      label: "What it includes",
      title: "Features & Deliverables",
      deliverablesTitle: "Deliverables",
    },
    technologies: {
      label: "Stack",
      title: "Technologies",
    },
    faq: {
      label: "FAQ",
      title: "Frequently asked questions",
    },
    cta: {
      title: "Ready to get started?",
      description: "Tell me about your project and let's find the best solution together.",
      button: "Let's talk about your project",
    },
  },
  projects: {
    meta: {
      title: "Projects",
      description:
        "Real project portfolio: from CSS libraries to full-stack applications, through SEO sites and SaaS platforms.",
    },
    label: "Projects",
    title: "Projects",
    subtitle:
      "A collection of projects I have built, from CSS libraries to full-stack applications.",
  },
  about: {
    meta: {
      title: "About",
      description:
        "The story of Bertocco Samuele: from freelancer to technology entrepreneur, through Milan, SopraSteria and Bologna.",
    },
    label: "About",
    title: "Bertocco Samuele",
    paragraphs: {
      p1: "I've always been obsessed with the internet and how it evolves. At my age I had the privilege of experiencing it firsthand, from its origins to today.",
      p2: "I started with 3D design and electronic engineering, but my true passion has always been the network. In 2020, with the world at a standstill, I rediscovered this drive and opened my first VAT number. What followed was the classic hungry freelancer journey: I offered any IT service, ads and social like a door-to-door salesman, at rock-bottom prices but with a hunger to learn that was priceless.",
      p3: "After Milan I stopped at SopraSteria, where I discovered what it means to work in a structured team. Agile projects, methodologies, real processes. It was formative, but I soon realized I missed that door-to-door dynamism, that freedom to decide quickly.",
      p4: "So I ended up in a very innovative small company in Bologna. Ten intense months, but when my contribution is no longer needed, I recognize it lucidly. It wasn't my shape yet.",
      p5: "Today I registered BRTSML — the domain that encompasses everything I am — and went independent. I chose Italy because I want to \"stay comfortable in the uncomfortable\". This is the moment.",
    },
  },
  contact: {
    meta: {
      title: "Contact",
      description:
        "Contact BRTSML for consulting, custom development or partnerships. Italy — Remote First.",
    },
    label: "Contact",
    title: "Let's talk",
    subtitle: "Have a project in mind? Write to me and let's find the best solution together.",
    form: {
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "Your message...",
      successTitle: "Message sent!",
      successMessage: "I'll get back to you as soon as possible.",
    },
    info: {
      email: "Email",
      location: "Location",
      locationValue: "Italy — Remote First",
    },
  },
  notFound: {
    meta: {
      title: "404",
      description: "Page not found — Back to BRTSML home.",
    },
    label: "Error 404",
    title: "Oops!",
    message: "The page you are looking for does not exist or has been moved.",
    backHome: "Back to Home",
  },
} as const;
