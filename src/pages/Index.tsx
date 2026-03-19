
import React from 'react';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import LandingSection from '../components/sections/LandingSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import OldPortfolioSection from "@/components/sections/OldPortfolioSection";
import ContactSection from '../components/sections/ContactSection';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Index = () => {
  const visibleElements = useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <Navigation onNavigate={scrollToSection} />
      <LandingSection />
      <ProjectsSection visibleElements={visibleElements} />
      <OldPortfolioSection visibleElements={visibleElements}/>
      <ExperienceSection />
      <ContactSection visibleElements={visibleElements} />
      <Footer />
    </div>
  );
};

export default Index;
