
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from '@/hooks/use-toast';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const BookingModal = ({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: '',
    time: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format date for submission
    const formattedDate = date ? format(date, 'yyyy-MM-dd') : '';
    
    console.log('Booking form submitted:', {
      ...formData,
      date: formattedDate
    });
    
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
      time: '',
    });
    setDate(undefined);

    onOpenChange(false);
  };

  // Available time slots
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM", 
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM", "05:00 PM"
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-barber-charcoal text-barber-offwhite border border-barber-gold/20 max-w-md w-full animate-in fade-in-0 zoom-in-95 duration-300">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-barber-gold text-center">Book Your Appointment</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-1">
            <label htmlFor="name" className="block text-sm font-medium text-barber-offwhite">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-barber-black text-barber-offwhite border border-barber-gold/30 focus:border-barber-gold focus:outline-none transition-all duration-200"
              placeholder="Enter your name"
            />
          </div>
          
          <div className="space-y-1">
            <label htmlFor="contact" className="block text-sm font-medium text-barber-offwhite">Email or Phone</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-barber-black text-barber-offwhite border border-barber-gold/30 focus:border-barber-gold focus:outline-none transition-all duration-200"
              placeholder="Enter your contact information"
            />
          </div>
          
          <div className="space-y-1">
            <label htmlFor="service" className="block text-sm font-medium text-barber-offwhite">Service</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-barber-black text-barber-offwhite border border-barber-gold/30 focus:border-barber-gold focus:outline-none transition-all duration-200"
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
            <div className="space-y-1">
              <label className="block text-sm font-medium text-barber-offwhite">Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full border-barber-gold/30 bg-barber-black text-barber-offwhite hover:bg-barber-black/90 hover:text-barber-gold pl-3 text-left font-normal flex justify-between items-center",
                      !date && "text-barber-offwhite/60"
                    )}
                  >
                    {date ? format(date, "MMMM d, yyyy") : "Select date"}
                    <CalendarIcon className="h-4 w-4 opacity-70" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-barber-black border border-barber-gold/30">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                    className="p-3 pointer-events-auto bg-barber-black text-barber-offwhite"
                    classNames={{
                      day_selected: "bg-barber-gold text-barber-black hover:bg-barber-gold hover:text-barber-black",
                      day_today: "bg-barber-black text-barber-gold",
                      day: "text-barber-offwhite hover:bg-barber-gold/20"
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-1">
              <label htmlFor="time" className="block text-sm font-medium text-barber-offwhite">Time</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full border-barber-gold/30 bg-barber-black text-barber-offwhite hover:bg-barber-black/90 hover:text-barber-gold pl-3 text-left font-normal flex justify-between items-center",
                      !formData.time && "text-barber-offwhite/60"
                    )}
                  >
                    {formData.time ? formData.time : "Select time"}
                    <Clock className="h-4 w-4 opacity-70" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-52 p-0 bg-barber-black border border-barber-gold/30">
                  <div className="max-h-60 overflow-y-auto p-1">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant="ghost"
                        className="w-full justify-start font-normal text-barber-offwhite hover:text-barber-gold hover:bg-barber-black/90"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, time: time }));
                        }}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 btn btn-primary mt-4 transition-all duration-300 hover:scale-105"
          >
            Book Appointment
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
