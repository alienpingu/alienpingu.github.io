import { createRoot } from "react-dom/client";
import "./i18n/config";
import { ThemeProvider } from "./components/ThemeProvider";
import App from "./App.tsx";
import { useBadAppleEasterEgg } from "./hooks/use-bad-apple";
import "./index.css";

function Root() {
  useBadAppleEasterEgg();
  return <App />;
}

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <Root />
  </ThemeProvider>
);
