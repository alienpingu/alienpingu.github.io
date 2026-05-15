import Layout from "@/components/Layout";
import { usePageMeta } from "@/hooks/use-page-meta";

const products = [
  {
    name: "Mastrobot",
    description: "An innovative product currently in development. Stay tuned for updates.",
    tags: ["AI", "Automation"],
    status: "Coming Soon"
  }
];

const Products = () => {
  usePageMeta({
    title: "Products",
    description: "Scopri i prodotti SaaS e le soluzioni digitali sviluppate da BRTSML.",
  });

  return (
    <Layout>
    <section className="container mx-auto px-6 py-24">
      <div className="max-w-2xl mb-16 animate-fade-up">
        <h1 className="text-4xl md:text-5xl font-bold mt-4">Products</h1>
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
};

export default Products;
