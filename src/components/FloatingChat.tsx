
import React, { useState } from 'react';
import { MessageSquare, X, Send, Scissors } from 'lucide-react';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! Thanks for visiting Macor Blendz. How can we help you today?", isUser: false }
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message
    setMessages([...messages, { text: message, isUser: true }]);
    setMessage('');
    
    // Simulate response after a short delay
    setTimeout(() => {
      let response = "Thanks for your message! We'll get back to you soon. If you'd like to book an appointment, you can click the 'Book Now' button at the top of the page.";
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat window */}
      {isOpen && (
        <div className="bg-barber-charcoal border border-barber-gold/20 rounded-lg shadow-lg w-80 mb-4 animate-scale-in overflow-hidden">
          {/* Header */}
          <div className="bg-barber-black p-3 border-b border-barber-gold/20 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Scissors className="h-5 w-5 text-barber-gold" />
              <h3 className="font-bold text-barber-gold">Macor Blendz Chat</h3>
            </div>
            <button onClick={toggleChat} className="text-barber-offwhite hover:text-barber-gold">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Messages */}
          <div className="p-4 h-80 overflow-y-auto flex flex-col gap-3 custom-scrollbar">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`${msg.isUser ? 'ml-auto bg-barber-gold text-barber-black' : 'mr-auto bg-barber-black/60 text-barber-offwhite'} 
                          p-3 rounded-lg max-w-[80%] animate-fade-in`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {msg.text}
              </div>
            ))}
          </div>
          
          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-barber-gold/20 p-3 flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-barber-black text-barber-offwhite border border-barber-gold/20 rounded-md px-3 py-2 focus:outline-none focus:border-barber-gold"
            />
            <button 
              type="submit"
              className="bg-barber-gold text-barber-black rounded-md p-2 hover:bg-barber-gold/90 transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
      
      {/* Floating button */}
      <button
        onClick={toggleChat}
        className={`bg-barber-gold text-barber-black rounded-full p-4 shadow-lg hover:scale-110 transition-transform ${isOpen ? 'scale-90' : ''}`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default FloatingChat;
