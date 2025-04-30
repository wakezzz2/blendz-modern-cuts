
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from '@/hooks/use-toast';

const BookingModal = ({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: '',
    date: '',
    time: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking form submitted:', formData);
    
    toast({
      title: "Booking Received!",
      description: "We'll contact you to confirm your appointment.",
      variant: "default",
    });
    
    setFormData({
      name: '',
      contact: '',
      service: '',
      date: '',
      time: '',
    });

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-barber-charcoal text-barber-offwhite border border-barber-gold/20 max-w-md w-full">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-barber-gold text-center">Book Your Appointment</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-barber-offwhite">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-barber-black text-barber-offwhite border border-barber-gold/30 focus:border-barber-gold focus:outline-none"
            />
          </div>
          
          <div>
            <label htmlFor="contact" className="block mb-2 text-barber-offwhite">Email or Phone</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-barber-black text-barber-offwhite border border-barber-gold/30 focus:border-barber-gold focus:outline-none"
            />
          </div>
          
          <div>
            <label htmlFor="service" className="block mb-2 text-barber-offwhite">Service</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-barber-black text-barber-offwhite border border-barber-gold/30 focus:border-barber-gold focus:outline-none"
            >
              <option value="">Select a service</option>
              <option value="tufgent">TUF GENT - PHP 380.00</option>
              <option value="tonycut">TONY CUT - PHP 380.00</option>
              <option value="banker">THE BANKER CUT - PHP 380.00</option>
              <option value="bastard">BASTARD CUT - PHP 380.00</option>
              <option value="hooligan">HOOLIGAN CUT - PHP 380.00</option>
              <option value="bugsy">BUGSY CUT - PHP 380.00</option>
              <option value="beard">Beard Trim - PHP 200.00</option>
              <option value="shave">Hot Towel Shave - PHP 350.00</option>
              <option value="kids">Kids Cut - PHP 250.00</option>
              <option value="combo">Haircut & Beard - PHP 550.00</option>
            </select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block mb-2 text-barber-offwhite">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-barber-black text-barber-offwhite border border-barber-gold/30 focus:border-barber-gold focus:outline-none"
              />
            </div>
            
            <div>
              <label htmlFor="time" className="block mb-2 text-barber-offwhite">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-barber-black text-barber-offwhite border border-barber-gold/30 focus:border-barber-gold focus:outline-none"
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 btn btn-primary mt-4"
          >
            Book Appointment
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
