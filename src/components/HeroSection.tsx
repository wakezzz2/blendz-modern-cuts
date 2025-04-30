
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const HeroSection = () => {
  const [text] = useTypewriter({
    words: ['Precision Cuts', 'Skin Fades', 'Beard Line-ups', 'Classic Styles. Modern Edge.'],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <section id="home" className="h-screen relative bg-barber-black overflow-hidden flex items-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-barber-black via-barber-black/95 to-barber-charcoal z-0"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2940&auto=format&fit=crop')] 
                 bg-cover bg-center opacity-20 z-[-1]"
      ></div>
      
      <div className="container mx-auto px-4 z-10 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-in-top text-gradient">
            MACOR BLENDZ
          </h1>
          <div className="h-16 mb-8">
            <h2 className="text-2xl md:text-4xl text-barber-offwhite mb-8">
              <span>{text}</span>
              <Cursor cursorColor="#D4AF37" />
            </h2>
          </div>
          <p className="text-xl text-barber-offwhite/80 mb-10 animate-fade-in">
            Where precision meets style in every cut
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-slide-in-bottom">
            <a href="#book" className="btn btn-primary text-lg py-3 px-8">
              Book Now
            </a>
            <a href="#styles" className="btn btn-outline text-lg py-3 px-8">
              View Styles
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
