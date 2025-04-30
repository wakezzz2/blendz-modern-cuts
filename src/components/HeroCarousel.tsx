
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
    url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2940&auto=format&fit=crop',
    alt: 'Barber shop interior',
  },
  {
    url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2788&auto=format&fit=crop',
    alt: 'Man getting a haircut',
  },
  {
    url: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=2923&auto=format&fit=crop',
    alt: 'Classic barbershop',
  },
  {
    url: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2830&auto=format&fit=crop',
    alt: 'Barber tools',
  },
];

const HeroCarousel = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Carousel className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div 
                className="w-full h-full bg-cover bg-center" 
                style={{ 
                  backgroundImage: `url(${image.url})`,
                  opacity: 0.2,
                }}
                aria-label={image.alt}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
      <div className="absolute inset-0 bg-gradient-to-b from-barber-black via-barber-black/95 to-barber-charcoal"></div>
    </div>
  );
};

export default HeroCarousel;
