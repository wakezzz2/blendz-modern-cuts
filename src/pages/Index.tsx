
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TrendsSection from '@/components/TrendsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import HaircutStylesSection from '@/components/HaircutStylesSection';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

const Index = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleOpenBookingModal = () => {
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-barber-black text-barber-offwhite">
      <Navbar onBookNowClick={handleOpenBookingModal} />
      <HeroSection onBook={handleOpenBookingModal} />
      <AboutSection />
      <ServicesSection onBook={handleOpenBookingModal} />
      <TrendsSection />
      <TestimonialsSection />
      <HaircutStylesSection onBook={handleOpenBookingModal} />
      <Footer />
      
      {/* Booking Modal */}
      <BookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} />
    </div>
  );
};

export default Index;
