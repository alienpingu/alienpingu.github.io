import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { useLanguageSwitcher } from "@/hooks/use-language";
import NorrisText from "./NorrisText";

const isActive = (pathname: string, path: string) => {
  if (path === "/" || path === "/en" || path === "/en/") {
    return pathname === "/" || pathname === "/en" || pathname === "/en/";
  }
  return pathname === path || pathname.startsWith(path + "/");
};

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { currentLang } = useLanguageSwitcher();
  const { t } = useTranslation("common");

  const prefix = currentLang === "en" ? "/en" : "";

  const navItems = [
    { label: t("nav.home"), path: `${prefix}/` },
    { label: t("nav.services"), path: `${prefix}/services` },
    { label: t("nav.projects"), path: `${prefix}/projects` },
    { label: t("nav.about"), path: `${prefix}/about` },
    { label: t("nav.contact"), path: `${prefix}/contact` },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to={`${prefix}/`} className="norris-text text-xl font-bold tracking-tight">
          <NorrisText text="BRTSML" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive(location.pathname, item.path)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-2 pl-2 border-l border-border flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            className="text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-border">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive(location.pathname, item.path)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
