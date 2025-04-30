
import React, { useState, useEffect } from 'react';
import { Scissors } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-barber-black/95 shadow-md shadow-barber-gold/10 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-barber-gold">
          <Scissors className="h-6 w-6" />
          <span className="font-anton text-xl">MACOR BLENDZ</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Services', 'Styles', 'Testimonials', 'Book'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-barber-offwhite hover:text-barber-gold transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#book"
          className="btn btn-primary hidden md:inline-flex"
        >
          Book Now
        </a>
        <button className="md:hidden text-barber-gold">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
