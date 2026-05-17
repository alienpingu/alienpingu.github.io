import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";

const Services = lazy(() => import(/* webpackPrefetch: true */ "./pages/Services"));
const ServiceDetail = lazy(() => import(/* webpackPrefetch: true */ "./pages/ServiceDetail"));
const Projects = lazy(() => import(/* webpackPrefetch: true */ "./pages/Projects"));
const About = lazy(() => import(/* webpackPrefetch: true */ "./pages/About"));
const Contact = lazy(() => import(/* webpackPrefetch: true */ "./pages/Contact"));
const NotFound = lazy(() => import(/* webpackPrefetch: true */ "./pages/NotFound"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse flex flex-col items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-primary/20" />
      <div className="text-muted-foreground text-sm">Loading...</div>
    </div>
  </div>
);

const routeConfigs = [
  { path: "/", element: <Index /> },
  { path: "/services", element: <Services /> },
  { path: "/services/:id", element: <ServiceDetail /> },
  { path: "/projects", element: <Projects /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
];

const App = () => (
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <ScrollToTop />
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routeConfigs.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        {/* English routes */}
        {routeConfigs.map((route) => (
          <Route
            key={`en-${route.path}`}
            path={`/en${route.path === "/" ? "" : route.path}`}
            element={route.element}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
