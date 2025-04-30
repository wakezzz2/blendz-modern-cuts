
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const BookingSection = () => {
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
    
    // Show success toast
    toast({
      title: "Booking Received!",
      description: "We'll contact you to confirm your appointment.",
      variant: "default",
    });
    
    // Reset form
    setFormData({
      name: '',
      contact: '',
      service: '',
      date: '',
      time: '',
    });
  };

  return (
    <section id="book" className="bg-barber-black">
      <div className="container mx-auto">
        <h2 className="section-title">Book Your Appointment</h2>
        <p className="text-center text-barber-offwhite/80 max-w-2xl mx-auto mb-12">
          Ready for a fresh look? Book your appointment now and experience the MACOR BLENDZ difference.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-barber-charcoal p-8 rounded-lg animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6 text-barber-gold">Schedule Your Visit</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  <option value="haircut">Haircut</option>
                  <option value="beard">Beard Trim</option>
                  <option value="fade">Fade</option>
                  <option value="shave">Hot Towel Shave</option>
                  <option value="kids">Kids Cut</option>
                  <option value="combo">Haircut & Beard</option>
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
                className="w-full py-3 btn btn-primary"
              >
                Book Appointment
              </button>
            </form>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="bg-barber-charcoal p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-6 text-barber-gold">Business Hours</h3>
              <div className="space-y-4">
                {[
                  { day: 'Monday', hours: '9:00 AM - 6:00 PM' },
                  { day: 'Tuesday', hours: '9:00 AM - 6:00 PM' },
                  { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
                  { day: 'Thursday', hours: '9:00 AM - 7:00 PM' },
                  { day: 'Friday', hours: '9:00 AM - 7:00 PM' },
                  { day: 'Saturday', hours: '8:00 AM - 5:00 PM' },
                  { day: 'Sunday', hours: 'Closed' },
                ].map((item) => (
                  <div key={item.day} className="flex justify-between items-center">
                    <span className="text-barber-offwhite">{item.day}</span>
                    <span className={item.day === 'Sunday' ? 'text-barber-gold' : 'text-barber-offwhite/70'}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-barber-charcoal p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-barber-gold">Location</h3>
              <address className="not-italic text-barber-offwhite/70">
                123 Style Street<br />
                Metro City, MC 12345<br />
                United States
              </address>
              
              <div className="mt-4">
                <p className="text-barber-offwhite">Phone: <a href="tel:+15551234567" className="text-barber-gold hover:underline">555-123-4567</a></p>
                <p className="text-barber-offwhite">Email: <a href="mailto:info@macorblendz.com" className="text-barber-gold hover:underline">info@macorblendz.com</a></p>
              </div>
              
              <div className="mt-6 h-48 bg-barber-black/60 rounded flex items-center justify-center">
                <p className="text-barber-gold">Map Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
