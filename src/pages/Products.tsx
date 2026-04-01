import Layout from "@/components/Layout";

const products = [
  {
    name: "Picco CSS",
    description: "A lightweight CSS library designed for maximum efficiency and simplicity, created from scratch.",
    tags: ["nodejs", "CSS", "Astro", "NPM"],
    status: "Live",
    website: "https://picco-css.vercel.app/"
  },
  {
    name: "Dodici",
    description: "A logic-based game built with P5.js to challenge users' reasoning skills.",
    tags: ["nodejs", "P5.js"],
    status: "Live",
    website: "https://dodici.brtsml.com/"
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
    name: "Pokemon Search Engine",
    description: "A search engine for Pokémon built with Angular to provide a fast and engaging user experience.",
    tags: ["Angular"],
    status: "Live",
    website: "https://pokemon-searchengine.vercel.app/"
  },
  {
    name: "Cocktail Master V2",
    description: "A cocktail search engine built with Angular to provide a fast and intuitive user experience.",
    tags: ["Angular"],
    status: "Live",
    website: "https://cocktail-master-v2.vercel.app/"
  },
  {
    name: "Cocktail Master React",
    description: "A cocktail search engine developed with React and JSS for flexibility and high performance.",
    tags: ["React", "JSS"],
    status: "Live",
    website: "https://cocktail-master-react.vercel.app/"
  },
  {
    name: "Mastrobot",
    description: "An innovative product currently in development. Stay tuned for updates.",
    tags: ["AI", "Automation"],
    status: "Coming Soon"
  }
];

const Products = () => (
  <Layout>
    <section className="container mx-auto px-6 py-24">
      <div className="max-w-2xl mb-16 animate-fade-up">
        <p className="text-primary font-medium text-sm tracking-widest uppercase">Products</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">Projects</h1>
        <p className="text-muted-foreground mt-4">
          A collection of projects I have built, from CSS libraries to full-stack applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product.name} 
            className="glass rounded-xl p-8 flex flex-col animate-fade-up"
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                product.status === "Live" ? "bg-primary/10 text-primary" :
                product.status === "Beta" ? "bg-secondary text-secondary-foreground" :
                "bg-muted text-muted-foreground"
              }`}>
                {product.status}
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{product.description}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {product.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Products;
