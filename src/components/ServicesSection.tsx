
import React from 'react';
import { Scissors, BadgePlus, CutSquare } from 'lucide-react';

const services = [
  {
    name: 'Haircut',
    icon: <Scissors className="h-8 w-8" />,
    description: 'Precision cut tailored to your style and face shape.',
    price: '$35',
  },
  {
    name: 'Beard Trim',
    icon: <CutSquare className="h-8 w-8" />,
    description: 'Shape and style your beard for a refined look.',
    price: '$25',
  },
  {
    name: 'Fade',
    icon: <Scissors className="h-8 w-8" />,
    description: 'Seamless gradient from skin to length of your choice.',
    price: '$40',
  },
  {
    name: 'Hot Towel Shave',
    icon: <CutSquare className="h-8 w-8" />,
    description: 'Classic straight razor shave with hot towel prep.',
    price: '$45',
  },
  {
    name: 'Kids Cut',
    icon: <Scissors className="h-8 w-8" />,
    description: 'Stylish haircuts for the younger gentlemen.',
    price: '$25',
  },
  {
    name: 'Haircut & Beard',
    icon: <BadgePlus className="h-8 w-8" />,
    description: 'Complete package for hair and facial hair styling.',
    price: '$55',
  },
];

const ServicesSection = () => {
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
              className="bg-barber-charcoal border border-barber-gold/10 rounded-lg p-6 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-barber-gold/10 p-3 rounded-full w-fit mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-barber-offwhite">{service.name}</h3>
              <p className="mb-4 text-barber-offwhite/70">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-barber-gold">{service.price}</span>
                <a href="#book" className="text-barber-gold hover:underline text-sm">Book Now →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
