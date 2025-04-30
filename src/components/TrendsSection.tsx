
import React from 'react';

const styles = [
  {
    name: 'Classic Fade',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2787&auto=format&fit=crop',
    description: 'Clean and timeless style',
  },
  {
    name: 'Burst Fade',
    image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=2923&auto=format&fit=crop',
    description: 'Popular with Gen Z',
  },
  {
    name: 'Taper Fade',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2787&auto=format&fit=crop',
    description: 'Sharp & Clean Finish',
  },
  {
    name: 'Textured Crop',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2080&auto=format&fit=crop',
    description: 'Modern texture on top',
  },
  {
    name: 'Pompadour',
    image: 'https://images.unsplash.com/photo-1625145715770-9380d4726254?q=80&w=2080&auto=format&fit=crop',
    description: 'Classic volume with modern edge',
  },
  {
    name: 'Slick Back',
    image: 'https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?q=80&w=2080&auto=format&fit=crop',
    description: 'Sophisticated and sleek',
  }
];

const TrendsSection = () => {
  return (
    <section id="styles" className="bg-gradient">
      <div className="container mx-auto">
        <h2 className="section-title">🔥 Trending Styles</h2>
        <p className="text-center text-barber-offwhite/80 max-w-2xl mx-auto mb-12">
          Stay ahead of the curve with these popular styles that our clients are loving right now. Our barbers are masters at these cuts and many more.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {styles.map((style, index) => (
            <div 
              key={style.name} 
              className="group rounded-lg overflow-hidden relative card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={style.image} 
                  alt={style.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-barber-black via-transparent to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold mb-1 text-barber-offwhite">{style.name}</h3>
                <p className="text-barber-gold text-sm">{style.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <a href="#book" className="btn btn-primary">Book This Style</a>
        </div>
      </div>
    </section>
  );
};

export default TrendsSection;
