
import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send, Scissors } from 'lucide-react';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! Thanks for visiting Macor Blendz. How can we help you today?", isUser: false }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Add bounce animation to the latest message
      const messagesElement = document.getElementById('chat-messages');
      if (messagesElement) {
        messagesElement.scrollTop = messagesElement.scrollHeight;
      }
    }
  }, [messages, isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    
    // If opening the chat and there's only one message, add welcome message after a delay
    if (!isOpen && messages.length === 1) {
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [
            ...prev, 
            { text: "We offer a variety of haircut styles. Would you like to book an appointment?", isUser: false }
          ]);
        }, 2000);
      }, 1000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message
    setMessages([...messages, { text: message, isUser: true }]);
    setMessage('');
    
    // Simulate typing indicators
    setTimeout(() => {
      setIsTyping(true);
      
      // Simulate response after a typing delay
      setTimeout(() => {
        setIsTyping(false);
        
        let response = "";
        if (message.toLowerCase().includes("book") || message.toLowerCase().includes("appointment")) {
          response = "Great! You can book an appointment by clicking the 'Book Now' button at the top of the page. Is there a specific style you're interested in?";
        } else if (message.toLowerCase().includes("style") || message.toLowerCase().includes("haircut")) {
          response = "We offer various signature styles including TUF GENT, TONY CUT, BANKER CUT, BASTARD CUT, HOOLIGAN CUT, and BUGSY CUT. Check out our Styles section to see examples!";
        } else if (message.toLowerCase().includes("price") || message.toLowerCase().includes("cost")) {
          response = "Our standard haircuts are priced at PHP 380.00. We also offer package deals for regular customers!";
        } else if (message.toLowerCase().includes("hello") || message.toLowerCase().includes("hi")) {
          response = "Hello there! How can I help you today? Looking for a new style or want to book an appointment?";
        } else {
          response = "Thanks for your message! We'll get back to you soon. If you'd like immediate assistance, you can call us at 0920-788-1577 or book an appointment online.";
        }
        
        setMessages(prev => [...prev, { text: response, isUser: false }]);
      }, 1500);
    }, 500);
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
          <div id="chat-messages" className="p-4 h-80 overflow-y-auto flex flex-col gap-3 custom-scrollbar">
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
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="mr-auto bg-barber-black/60 text-barber-offwhite p-3 rounded-lg flex gap-1 animate-fade-in">
                <span className="w-2 h-2 bg-barber-gold rounded-full animate-pulse"></span>
                <span className="w-2 h-2 bg-barber-gold rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></span>
                <span className="w-2 h-2 bg-barber-gold rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></span>
              </div>
            )}
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
              disabled={!message.trim()}
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
      
      {/* Floating button */}
      <button
        onClick={toggleChat}
        className={`bg-barber-gold text-barber-black rounded-full p-4 shadow-lg hover:scale-110 transition-all ${isOpen ? 'scale-90' : ''} relative`}
      >
        {!isOpen && messages.length > 1 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center animate-pulse">
            1
          </span>
        )}
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default FloatingChat;
