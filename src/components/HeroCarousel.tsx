
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const images = [
  {
    url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2787&auto=format&fit=crop',
    alt: 'Classic fade haircut',
  },
  {
    url: 'https://images.unsplash.com/photo-1593702288056-f173ac9664d5?q=80&w=2070&auto=format&fit=crop',
    alt: 'Modern pompadour style',
  },
  {
    url: 'https://images.unsplash.com/photo-1519500099198-fd81846b8f03?q=80&w=2070&auto=format&fit=crop',
    alt: 'Professional barber service',
  },
  {
    url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop',
    alt: 'Barber tools and styling',
  },
  {
    url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2788&auto=format&fit=crop',
    alt: 'Classic gentleman haircut',
  },
];

const HeroCarousel = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Carousel className="w-full h-full" opts={{ loop: true, autoplay: true, interval: 5000 }}>
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-10000 hover:scale-105" 
                style={{ 
                  backgroundImage: `url(${image.url})`,
                  opacity: 0.3,
                }}
                aria-label={image.alt}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-barber-gold/70 text-barber-black hover:bg-barber-gold" />
        <CarouselNext className="right-4 bg-barber-gold/70 text-barber-black hover:bg-barber-gold" />
      </Carousel>
      <div className="absolute inset-0 bg-gradient-to-b from-barber-black via-barber-black/95 to-barber-charcoal"></div>
    </div>
  );
};

export default HeroCarousel;
