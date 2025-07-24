
import React from 'react';
import { Instagram, Facebook, Scissors } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-barber-black border-t border-barber-gold/20 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="h-6 w-6 text-barber-gold" />
              <h3 className="font-anton text-xl text-barber-gold">MACOR BLENDZ</h3>
            </div>
            <p className="text-barber-offwhite/70 mb-6">
              Premium men's grooming experience, delivering classic styles with modern techniques. Founded in October 1, 2020.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-barber-offwhite hover:text-barber-gold transition-colors">
                <Instagram />
              </a>
              <a href="https://facebook.com" className="text-barber-offwhite hover:text-barber-gold transition-colors">
                <Facebook />
              </a>
              <a href="https://tiktok.com" className="text-barber-offwhite hover:text-barber-gold transition-colors">
                <Scissors />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-barber-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Styles', 'Testimonials', 'Book'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-barber-offwhite/70 hover:text-barber-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-barber-gold mb-4">Contact Us</h3>
            <address className="not-italic space-y-2 text-barber-offwhite/70">
              <p>Capoocan, Leyte</p>
              <p>Philippines</p>
              <p className="pt-2">
                <a href="tel:+639207881577" className="hover:text-barber-gold transition-colors">
                  0920-788-1577
                </a>
              </p>
              <p>
                <a href="mailto:info@macorblendz.com" className="hover:text-barber-gold transition-colors">
                  info@macorblendz.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="section-divider"></div>
        
        <div className="text-center text-barber-offwhite/50 text-sm">
          <p>&copy; {new Date().getFullYear()} MACOR BLENDZ. All rights reserved.</p>
          <p className="mt-2">
            Designed by Clarence Emmanuel Jamora
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
