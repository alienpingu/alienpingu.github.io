import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";

const Products = lazy(() => import("./pages/Products"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse flex flex-col items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-primary/20" />
      <div className="text-muted-foreground text-sm">Caricamento...</div>
    </div>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
