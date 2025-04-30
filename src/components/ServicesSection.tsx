
import React from 'react';
import { Scissors, BadgePlus, Ruler } from 'lucide-react';

const services = [
  {
    name: 'Haircut',
    icon: <Scissors className="h-8 w-8" />,
    description: 'Precision cut tailored to your style and face shape.',
    price: 'PHP 380.00',
  },
  {
    name: 'Beard Trim',
    icon: <Ruler className="h-8 w-8" />,
    description: 'Shape and style your beard for a refined look.',
    price: 'PHP 200.00',
  },
  {
    name: 'Fade',
    icon: <Scissors className="h-8 w-8" />,
    description: 'Seamless gradient from skin to length of your choice.',
    price: 'PHP 380.00',
  },
  {
    name: 'Hot Towel Shave',
    icon: <Ruler className="h-8 w-8" />,
    description: 'Classic straight razor shave with hot towel prep.',
    price: 'PHP 350.00',
  },
  {
    name: 'Kids Cut',
    icon: <Scissors className="h-8 w-8" />,
    description: 'Stylish haircuts for the younger gentlemen.',
    price: 'PHP 250.00',
  },
  {
    name: 'Haircut & Beard',
    icon: <BadgePlus className="h-8 w-8" />,
    description: 'Complete package for hair and facial hair styling.',
    price: 'PHP 550.00',
  },
];

const ServicesSection = ({ onBook }: { onBook: () => void }) => {
  return (
    <section id="services" className="bg-barber-black">
      <div className="container mx-auto">
        <h2 className="section-title">Our Services</h2>
        <p className="text-center text-barber-offwhite/80 max-w-2xl mx-auto mb-12">
          At MACOR BLENDZ, we offer a range of premium grooming services to keep you looking sharp. Each service includes a consultation to ensure you get exactly what you want.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.name}
              className="bg-gradient-to-br from-barber-charcoal to-barber-black border border-barber-gold/10 rounded-lg p-6 card-hover relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated backdrop */}
              <div className="absolute inset-0 bg-barber-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-barber-gold/10 p-3 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-barber-offwhite">{service.name}</h3>
                </div>
                
                <p className="mb-6 text-barber-offwhite/70">{service.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-barber-gold">{service.price}</span>
                  <button 
                    onClick={onBook} 
                    className="text-barber-gold border border-barber-gold hover:bg-barber-gold hover:text-barber-black transition-colors duration-300 px-4 py-2 rounded-full text-sm"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
