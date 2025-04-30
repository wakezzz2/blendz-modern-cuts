
import React from 'react';
import { Scissors, Award, Clock } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-gradient">
      <div className="container mx-auto">
        <h2 className="section-title">About Us</h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="w-full md:w-1/2 aspect-square relative overflow-hidden rounded-lg animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2787&auto=format&fit=crop"
              alt="Barber Shop Interior"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-barber-black via-transparent to-transparent"></div>
          </div>
          
          <div className="w-full md:w-1/2 animate-slide-in-right">
            <h3 className="text-3xl font-semibold mb-4 text-barber-gold">The MACOR BLENDZ Story</h3>
            <p className="mb-6 text-lg">
              Founded on a passion for precision and style, MACOR BLENDZ has been delivering premium grooming experiences since 2018. Our master barbers blend traditional techniques with modern trends to create looks that are uniquely yours.
            </p>
            <p className="mb-8 text-lg">
              More than just a haircut, we provide an experience. From the moment you walk in, you'll feel the difference that comes from our dedication to craft and customer service.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-barber-gold/10 p-4 rounded-full mb-3">
                  <Scissors className="h-8 w-8 text-barber-gold" />
                </div>
                <h4 className="font-semibold text-barber-offwhite">Expert Cuts</h4>
                <p className="text-barber-offwhite/70 text-sm">Master barbers with years of experience</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-barber-gold/10 p-4 rounded-full mb-3">
                  <Award className="h-8 w-8 text-barber-gold" />
                </div>
                <h4 className="font-semibold text-barber-offwhite">Premium Products</h4>
                <p className="text-barber-offwhite/70 text-sm">Only the best products for your hair</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-barber-gold/10 p-4 rounded-full mb-3">
                  <Clock className="h-8 w-8 text-barber-gold" />
                </div>
                <h4 className="font-semibold text-barber-offwhite">Efficient Service</h4>
                <p className="text-barber-offwhite/70 text-sm">In and out with no wasted time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
