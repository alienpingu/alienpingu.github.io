import React, { useEffect } from 'react';

// Declare VANTA on Window interface to satisfy TypeScript
declare global {
  interface Window {
    VANTA: {
      FOG: (options: {
        el: string;
        mouseControls: boolean;
        touchControls: boolean;
        gyroControls: boolean;
        minHeight: number;
        minWidth: number;
        highlightColor: number;
        midtoneColor: number;
        lowlightColor: number;
        baseColor: number;
      }) => void;
    };
  }
}

const LandingSection: React.FC = () => {
  useEffect(() => {
    // Initialize Vanta.js fog effect
    if (window.VANTA) {
      window.VANTA.FOG({
        el: "#landing-section",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xc5c5c5,
        midtoneColor: 0xd2d2d2,
        lowlightColor: 0xe8e8e8,
        baseColor: 0xffffff
      });
    }
  }, []);

  return (
    <section id="landing-section" className="min-h-[100vh] flex flex-col justify-center items-center relative overflow-hidden pt-20">
    
      <div className="text-center animate-fade-in relative z-10 flex flex-col items-center">
        <img
          src={'/images/profile-pic.png'} 
          alt="Profile Pic"
          className="mx-auto mb-6 animate-scale-in"
          width={240}
          height={240}
          style={{ objectFit: 'contain' }}
        />
        <h1 className="text-8xl md:text-9xl font-black mb-8 tracking-tighter animate-scale-in">
          BRTSML
        </h1>
        <div
          className="text-2xl md:text-3xl font-light tracking-widest mb-8 animate-fade-in"
          data-animate
        >
          DEVELOPER
        </div>
        <div
          className="w-32 h-1 bg-black mx-auto animate-fade-in"
          data-animate
        ></div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce hidden md:block lg:flex">
        <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
          <div className="w-1 h-3 bg-black rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
