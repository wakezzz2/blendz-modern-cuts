
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const styles = [
  {
    name: 'TUF GENT',
    description: "A Timeless Cut for Every Gentleman. Low-maintenance with a touch of class, the TUF Gent is the perfect haircut for the modern gentleman. This classic style blends a natural fade on the sides with a manageable length on top, projecting confidence wherever you go.",
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2787&auto=format&fit=crop',
    price: 'PHP 380.00',
  },
  {
    name: 'TONY CUT',
    description: "Low-Key. High Impact. A modern remix of the classic military cut, the TONY CUT offers a clean, confident look without the fuss. Short hair, easy styling—it's perfect for men who want to look sharp but don't have time for quiffs or pompadours. The TONY CUT is all about refined, understated style that lets your confidence do the talking.",
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2940&auto=format&fit=crop',
    price: 'PHP 380.00',
  },
  {
    name: 'THE BANKER CUT',
    description: "Sharp Lines, Sharper Mind. This classic haircut follows the contours of your head for a clean, confident look. The Banker Cut combines a sophisticated taper with a subtle fade at the neckline, offering a versatile style that's perfect for the gentleman who values both practicality and poise.",
    image: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=2080&auto=format&fit=crop',
    price: 'PHP 380.00',
  },
  {
    name: 'BASTARD CUT',
    description: "A Rebellious Classic. Channeling the iconic Scumbag Boogie, the BASTARD CUT is a style that turned heads in America's Golden Age and continues to do so today. Featuring a high fade and a sharp side part, it offers a clean, confident look with just enough length on top for a touch of wave. The BASTARD CUT is for the modern gentleman who appreciates a timeless style with a hint of rebellious spirit.",
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2788&auto=format&fit=crop',
    price: 'PHP 380.00',
  },
  {
    name: 'HOOLIGAN CUT',
    description: "A Timeless Rebellion. The Hooligan Cut offers a versatile canvas for a look that's both sharp and timeless. Channel iconic eras with a classic pompadour, featuring volume on top and a sleek sweep back for an enduringly cool vibe. Alternatively, opt for the clean and polished slick back, a look that exudes understated confidence. With or without a part, the Hooligan Cut allows for a touch of individuality, reflecting your refined taste.",
    image: 'https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?q=80&w=2080&auto=format&fit=crop',
    price: 'PHP 380.00',
  },
  {
    name: 'BUGSY CUT',
    description: "A Defined Edge, Effortless Style. The Bugsy Cut takes inspiration from the clean lines of the classic bald fade but adds an elevated edge. Unlike a buzz cut or military fade, the Bugsy Cut features a precise, defined lineup for a modern and sophisticated look. It's low-maintenance for the modern-day gentleman but still delivers a touch of contemporary style—perfect for those who want a sharp, clean-cut appearance.",
    image: 'https://images.unsplash.com/photo-1621605830738-3836bcb1e206?q=80&w=2070&auto=format&fit=crop',
    price: 'PHP 380.00',
  },
];

const HaircutStylesSection = ({ onBook }: { onBook: () => void }) => {
  return (
    <section id="haircut-styles" className="bg-gradient">
      <div className="container mx-auto">
        <h2 className="section-title">Signature Haircuts</h2>
        <p className="text-center text-barber-offwhite/80 max-w-2xl mx-auto mb-12">
          Our expertly crafted signature cuts are designed to enhance your personal style while maintaining the timeless essence of classic barbering.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {styles.map((style, index) => (
            <Card 
              key={style.name}
              className="bg-barber-charcoal border-barber-gold/10 text-barber-offwhite overflow-hidden card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-anton tracking-wide text-barber-gold">
                  {style.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-barber-offwhite/90 mb-4 text-sm h-32 overflow-y-auto custom-scrollbar pr-2">
                  {style.description}
                </CardDescription>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-barber-gold">{style.price}</span>
                  <button 
                    onClick={onBook} 
                    className="px-4 py-2 bg-barber-gold text-barber-black rounded hover:bg-barber-gold/90 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HaircutStylesSection;
