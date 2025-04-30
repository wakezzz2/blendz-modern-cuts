
import React from 'react';
import { Scissors, BadgePlus, Ruler } from 'lucide-react';

const services = [
  {
    name: 'Haircut',
    icon: <Scissors className="h-8 w-8" />,
    description: 'Precision cut tailored to your style and face shape. Includes consultation, shampoo, and styling.',
    price: 'PHP 380.00',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2788&auto=format&fit=crop',
    details: 'Our signature haircuts are performed by expert barbers who understand the importance of precision and detail. Each haircut includes a consultation to understand your preferences.',
  },
  {
    name: 'Beard Trim',
    icon: <Ruler className="h-8 w-8" />,
    description: 'Shape and style your beard for a refined look. Includes hot towel treatment.',
    price: 'PHP 200.00',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2830&auto=format&fit=crop',
    details: 'A proper beard trim enhances your facial features and keeps you looking polished. We use premium oils and balms to condition your beard during the service.',
  },
  {
    name: 'Fade',
    icon: <Scissors className="h-8 w-8" />,
    description: 'Seamless gradient from skin to length of your choice. Various fade styles available.',
    price: 'PHP 380.00',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2787&auto=format&fit=crop',
    details: 'Our fades are executed with precision tools and techniques. Whether you prefer a high, mid, or low fade, our barbers are experts in creating that perfect gradient.',
  },
  {
    name: 'Hot Towel Shave',
    icon: <Ruler className="h-8 w-8" />,
    description: 'Classic straight razor shave with hot towel prep. The ultimate pampering experience.',
    price: 'PHP 350.00',
    image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=2923&auto=format&fit=crop',
    details: 'This traditional service begins with warm towels to soften your facial hair, followed by a luxurious lather and precision straight razor technique. Finished with a soothing aftershave.',
  },
  {
    name: 'Kids Cut',
    icon: <Scissors className="h-8 w-8" />,
    description: 'Stylish haircuts for the younger gentlemen. Patient and friendly service.',
    price: 'PHP 250.00',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2940&auto=format&fit=crop',
    details: 'We make haircuts fun for kids! Our barbers are experienced in working with children of all ages, ensuring a comfortable and positive experience.',
  },
  {
    name: 'Haircut & Beard',
    icon: <BadgePlus className="h-8 w-8" />,
    description: 'Complete package for hair and facial hair styling. Our most popular service.',
    price: 'PHP 550.00',
    image: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=2080&auto=format&fit=crop',
    details: 'The complete package for the modern gentleman. Includes a precision haircut and a detailed beard trim, giving you a fully refreshed and polished look.',
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
              className="bg-gradient-to-br from-barber-charcoal to-barber-black border border-barber-gold/10 rounded-lg overflow-hidden card-hover relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-barber-gold/10 p-3 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-barber-offwhite">{service.name}</h3>
                </div>
                
                <p className="mb-4 text-barber-offwhite/70">{service.description}</p>
                
                <div className="bg-barber-charcoal/50 p-4 rounded-md mb-4">
                  <p className="text-sm text-barber-offwhite/80">{service.details}</p>
                </div>
                
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
