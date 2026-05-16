import { createRoot } from "react-dom/client";
import "./i18n/config";
import { ThemeProvider } from "./components/ThemeProvider";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
