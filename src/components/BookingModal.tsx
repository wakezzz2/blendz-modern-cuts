
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { format } from "date-fns";
import { CalendarIcon, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const availableTimeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", 
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
];

const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("TUF GENT");
  const [step, setStep] = useState(1);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) setStep(2);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !selectedTime || !name || !phone) return;
    
    toast({
      title: "Booking Confirmed!",
      description: `Your appointment is scheduled for ${format(date, "EEEE, MMMM do, yyyy")} at ${selectedTime}.`,
      variant: "default",
    });
    
    // Reset form
    setDate(undefined);
    setSelectedTime(null);
    setName("");
    setPhone("");
    setService("TUF GENT");
    setStep(1);
    onOpenChange(false);
  };

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0; // Sunday is unavailable
  };

  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const resetBooking = () => {
    setStep(1);
    setDate(undefined);
    setSelectedTime(null);
  };

  const services = [
    "TUF GENT", "TONY CUT", "THE BANKER CUT",
    "BASTARD CUT", "HOOLIGAN CUT", "BUGSY CUT"
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-barber-charcoal text-barber-offwhite border-barber-gold/20 max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl text-barber-gold font-anton tracking-wide">Book Your Appointment</DialogTitle>
          <DialogDescription className="text-barber-offwhite/80">
            Select a date, time and service for your next haircut.
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          {/* Step indicator */}
          <div className="flex items-center justify-center mb-6">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-barber-gold text-barber-black' : 'bg-barber-black/60 text-barber-offwhite/60'}`}>1</div>
            <div className={`h-1 w-10 ${step >= 2 ? 'bg-barber-gold' : 'bg-barber-black/60'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-barber-gold text-barber-black' : 'bg-barber-black/60 text-barber-offwhite/60'}`}>2</div>
            <div className={`h-1 w-10 ${step >= 3 ? 'bg-barber-gold' : 'bg-barber-black/60'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-barber-gold text-barber-black' : 'bg-barber-black/60 text-barber-offwhite/60'}`}>3</div>
          </div>
          
          {/* Step 1: Select Date */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <CalendarIcon className="h-5 w-5 text-barber-gold" />
                <h3 className="text-lg font-semibold">Select Date</h3>
              </div>
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateSelect}
                  disabled={(date) => isPastDate(date) || isWeekend(date)}
                  className="border border-barber-gold/20 rounded-md bg-barber-black p-3 pointer-events-auto"
                />
              </div>
            </div>
          )}
          
          {/* Step 2: Select Time */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-barber-gold" />
                  <h3 className="text-lg font-semibold">Select Time</h3>
                </div>
                <div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={resetBooking} 
                    className="text-barber-gold hover:text-barber-gold/80"
                  >
                    Change Date
                  </Button>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-barber-gold font-semibold text-center">
                  {date && format(date, "EEEE, MMMM do, yyyy")}
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {availableTimeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className={cn(
                      "py-3 px-2 rounded-md border transition-all duration-200 hover:scale-105",
                      selectedTime === time 
                        ? "bg-barber-gold text-barber-black border-barber-gold" 
                        : "bg-barber-black/70 border-barber-gold/30 hover:border-barber-gold"
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Step 3: Personal Details & Service */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">Your Details</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setStep(2)}
                  className="text-barber-gold hover:text-barber-gold/80"
                >
                  Change Time
                </Button>
              </div>
              
              <div className="mb-4">
                <p className="text-barber-gold font-semibold text-center">
                  {date && format(date, "EEEE, MMMM do, yyyy")} at {selectedTime}
                </p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-3 py-2 bg-barber-black border border-barber-gold/30 rounded-md focus:outline-none focus:border-barber-gold"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full px-3 py-2 bg-barber-black border border-barber-gold/30 rounded-md focus:outline-none focus:border-barber-gold"
                    placeholder="Your contact number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="service">
                    Preferred Style
                  </label>
                  <select
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2 bg-barber-black border border-barber-gold/30 rounded-md focus:outline-none focus:border-barber-gold"
                  >
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-barber-black">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit"
                  className="w-full bg-barber-gold text-barber-black hover:bg-barber-gold/90 font-medium py-2"
                >
                  Confirm Booking
                </Button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
