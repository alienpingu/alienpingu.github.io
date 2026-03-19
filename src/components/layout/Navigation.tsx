import React, { useState } from 'react';

interface NavigationProps {
  onNavigate: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto ">
        <div className="text-2xl font-black mr-4">BRTSML</div>
        {/* Hamburger button for mobile */}
        <div className="md:hidden">
        <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="hover:bg-black hover:text-white transition-all duration-200 px-4 py-2 font-bold text-3xl"
        >
        ☰
        </button>
        </div>
        {/* Navigation links */}
        <div
          className={`flex gap-8 md:flex ${
        isMenuOpen ? 'flex' : 'hidden'
          } flex-col md:flex-row absolute md:static top-20 left-0 w-full bg-white md:bg-transparent border-t-4 md:border-none border-black p-4 md:p-0`}
        >
          <button
        onClick={() => {
          onNavigate('projects');
          setIsMenuOpen(false);
        }}
        className="hover:bg-black hover:text-white transition-all duration-200 px-4 py-2 border-2 border-transparent hover:border-black font-bold"
          >
        PROJECTS
          </button>
          <button
        onClick={() => {
          onNavigate('experience');
          setIsMenuOpen(false);
        }}
        className="hover:bg-black hover:text-white transition-all duration-200 px-4 py-2 border-2 border-transparent hover:border-black font-bold"
          >
        EXPERIENCE
          </button>
          <button
        onClick={() => {
          onNavigate('contact');
          setIsMenuOpen(false);
        }}
        className="hover:bg-black hover:text-white transition-all duration-200 px-4 py-2 border-2 border-transparent hover:border-black font-bold"
          >
        CONTACT
          </button>
          <button
            onClick={() => {
              onNavigate("old-portfolio");
              setIsMenuOpen(false);
            }}
            className="hover:bg-black hover:text-white transition-all duration-200 px-4 py-2 border-2 border-transparent hover:border-black font-bold"
          >
            OLD PORTFOLIO
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
