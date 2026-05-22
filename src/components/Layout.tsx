import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";
import { useLanguageSync } from "@/hooks/use-language";

const Layout = ({ children }: { children: ReactNode }) => {
  useLanguageSync();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Layout;
