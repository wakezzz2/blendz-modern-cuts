
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'James Wilson',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop',
    quote: 'Cleanest cut in town! Been coming here for 2 years and never been disappointed. The attention to detail is unmatched.',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop',
    quote: 'MACOR BLENDZ is the only place I trust with my hair. My fade always looks fresh for weeks after the cut.',
  },
  {
    id: 3,
    name: 'Daniel Rodriguez',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop',
    quote: 'Great atmosphere, skilled barbers, and always on time. The hot towel shave is an experience every man should try!',
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="testimonial-gradient py-24">
      <div className="container mx-auto">
        <h2 className="section-title">Client Testimonials</h2>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="min-w-full p-6"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-barber-gold">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <blockquote className="text-xl md:text-2xl italic mb-6 text-barber-offwhite">
                      "{testimonial.quote}"
                    </blockquote>
                    <p className="text-barber-gold font-semibold">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  current === index ? 'bg-barber-gold' : 'bg-barber-gold/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
