export interface Project {
  name: string;
  description: string;
  tags: string[];
  status: "Live" | "Beta" | "comingSoon";
  website: string;
}

export const getProjects = (lang: "it" | "en"): Project[] => {
  if (lang === "en") {
    return [
      {
        name: "Picco CSS",
        description: "A lightweight CSS library designed for maximum efficiency and simplicity, created from scratch.",
        tags: ["nodejs", "CSS", "Astro"],
        status: "Live",
        website: "https://picco-css.vercel.app/",
      },
      {
        name: "Safe Now EU",
        description: "The Eurozone version of the american safe-now.live",
        tags: ["HTML"],
        status: "Live",
        website: "https://safe-now.eu/",
      },
      {
        name: "Dodici",
        description: "A logic-based game built with P5.js to challenge users' reasoning skills.",
        tags: ["nodejs", "P5.js"],
        status: "Live",
        website: "https://dodici.vercel.app/",
      },
      {
        name: "Acconciature Unisex",
        description: "Created and optimized a scalable, SEO-focused website to enhance online visibility for AcconciatureUnisex.",
        tags: ["Astro", "scss"],
        status: "Live",
        website: "https://acconciature-unisex.com",
      },
      {
        name: "GLM Imperia",
        description: "Developed and managed a high-performance website to improve user experience for GLM Imperia.",
        tags: ["Astro", "TailwindCSS"],
        status: "Live",
        website: "https://glmimperia.com",
      },
      {
        name: "CheckupDigitale",
        description: "CTO for CheckupDigitale, leading a freelance team and defining the technology strategy for innovative digital solutions.",
        tags: ["react"],
        status: "Live",
        website: "https://checkupdigitale.com",
      },
      {
        name: "My Paper Kitchen",
        description: "SSR blog about book and cooking",
        tags: ["Astro", "RSS"],
        status: "Live",
        website: "https://www.mypaper.kitchen/",
      },
      {
        name: "bad-apple-console",
        description: "Play the Bad Apple! music video inside Chrome DevTools at 30fps with zero runtime overhead. A lightweight npm package that renders ASCII frames directly in the console.",
        tags: ["nodejs", "console", "video", "easter-egg"],
        status: "Live",
        website: "https://www.npmjs.com/package/bad-apple-console",
      },
      {
        name: "captcha-breaker",
        description: "Traditional Computer Vision + OCR tool for extracting text from CAPTCHA-like images. No deep learning, no LLMs — just OpenCV, Tesseract, and clever preprocessing.",
        tags: ["Python", "OpenCV", "OCR", "Tesseract"],
        status: "Live",
        website: "https://github.com/alienpingu/captcha-breaker",
      },
    ];
  }

  return [
    {
      name: "Picco CSS",
      description: "Una libreria CSS leggera progettata per massima efficienza e semplicità, creata da zero.",
      tags: ["nodejs", "CSS", "Astro"],
      status: "Live",
      website: "https://picco-css.vercel.app/",
    },
    {
      name: "Safe Now EU",
      description: "La versione Eurozone del sito americano safe-now.live",
      tags: ["HTML"],
      status: "Live",
      website: "https://safe-now.eu/",
    },
    {
      name: "Dodici",
      description: "Un gioco basato sulla logica costruito con P5.js per sfidare le capacità di ragionamento.",
      tags: ["nodejs", "P5.js"],
      status: "Live",
      website: "https://dodici.vercel.app/",
    },
    {
      name: "Acconciature Unisex",
      description: "Creato e ottimizzato un sito web scalabile e SEO-focused per aumentare la visibilità online di AcconciatureUnisex.",
      tags: ["Astro", "scss"],
      status: "Live",
      website: "https://acconciature-unisex.com",
    },
    {
      name: "GLM Imperia",
      description: "Sviluppato e gestito un sito web ad alte prestazioni per migliorare l'esperienza utente di GLM Imperia.",
      tags: ["Astro", "TailwindCSS"],
      status: "Live",
      website: "https://glmimperia.com",
    },
    {
      name: "CheckupDigitale",
      description: "CTO per CheckupDigitale, guidando un team freelance e definendo la strategia tecnologica per soluzioni digitali innovative.",
      tags: ["react"],
      status: "Live",
      website: "https://checkupdigitale.com",
    },
    {
      name: "My Paper Kitchen",
      description: "Blog SSR su libri e cucina",
      tags: ["Astro", "RSS"],
      status: "Live",
      website: "https://www.mypaper.kitchen/",
    },
    {
      name: "bad-apple-console",
      description: "Riproduci il video musicale di Bad Apple! nella console di Chrome DevTools a 30fps con zero overhead runtime. Un pacchetto npm leggero che renderizza frame ASCII direttamente nella console.",
      tags: ["nodejs", "console", "video", "easter-egg"],
      status: "Live",
      website: "https://www.npmjs.com/package/bad-apple-console",
    },
    {
      name: "captcha-breaker",
      description: "Strumento di Computer Vision tradizionale + OCR per estrarre testo da immagini CAPTCHA. Niente deep learning, niente LLM — solo OpenCV, Tesseract e preprocessing intelligente.",
      tags: ["Python", "OpenCV", "OCR", "Tesseract"],
      status: "Live",
      website: "https://github.com/alienpingu/captcha-breaker",
    },
  ];
};
