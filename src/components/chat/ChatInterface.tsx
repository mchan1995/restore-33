
import { useState, useRef, useEffect } from "react";
import { Input } from "../ui/input";
import { Send, Calendar } from "lucide-react";
import { ChatMessage } from "./ChatMessage";
import { ChatHeader } from "./ChatHeader";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export interface Message {
  sender: "user" | "bot";
  content: string;
  timestamp: Date;
  isAppointmentLink?: boolean;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      content: "Hello, I'm Dr. ReStore, a pelvic health specialist. I'm here to help you improve your core strength and mobility. Please tell me about your symptoms in your own words.",
      timestamp: new Date()
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showBookingOption, setShowBookingOption] = useState(false);
  
  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      sender: "user",
      content: inputMessage,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    
    // Check if the message contains keywords related to appointments or scheduling
    const appointmentKeywords = ["appointment", "schedule", "booking", "book", "meet", "consultation", "consult", "visit"];
    const containsAppointmentRequest = appointmentKeywords.some(keyword => 
      inputMessage.toLowerCase().includes(keyword)
    );
    
    // Check if the message suggests pelvic health issues
    const pelvicHealthKeywords = ["pelvic", "incontinence", "leakage", "urination", "bladder", "pain", "weak"];
    const suggestsPelvicIssues = pelvicHealthKeywords.some(keyword => 
      inputMessage.toLowerCase().includes(keyword)
    );
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      let botResponse: Message;
      
      if (containsAppointmentRequest || showBookingOption) {
        botResponse = {
          sender: "bot",
          content: "I'd be happy to help you schedule an appointment with Aanchal Dasoar, our pelvic health physiotherapist. You can book a 30-minute consultation using her Calendly scheduling link below.",
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botResponse]);
        
        // Add the appointment link as a separate message
        setTimeout(() => {
          const appointmentLinkMessage: Message = {
            sender: "bot",
            content: "https://calendly.com/physioaanchal/30min",
            timestamp: new Date(),
            isAppointmentLink: true
          };
          
          setMessages(prev => [...prev, appointmentLinkMessage]);
        }, 500);
        
        setShowBookingOption(false);
      } else {
        const botResponses = [
          "Thank you for sharing that. Could you tell me if you've noticed any specific activities that make these symptoms worse?",
          "I understand how challenging that can be. Have you tried any exercises or treatments to help with these symptoms so far?",
          "Based on what you've shared, I think we can develop a personalized plan to help strengthen your core. Would you like to schedule a virtual consultation to discuss this further?"
        ];
        
        // Pick a response based on conversation stage
        const botResponseIndex = Math.min(
          Math.floor((messages.length - 1) / 2),
          botResponses.length - 1
        );
        
        botResponse = {
          sender: "bot",
          content: botResponses[botResponseIndex],
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botResponse]);
        
        // Offer appointment booking if the last bot response is the one suggesting a consultation
        // or if the user's message suggests pelvic health issues
        if (botResponseIndex === 2 || suggestsPelvicIssues) {
          setShowBookingOption(true);
          
          // Add booking suggestion after a short delay
          setTimeout(() => {
            const bookingSuggestion: Message = {
              sender: "bot",
              content: "Would you like to book an appointment with our specialist?",
              timestamp: new Date()
            };
            
            setMessages(prev => [...prev, bookingSuggestion]);
          }, 1000);
        }
      }
    }, 1000);
  };

  const handleBookAppointment = () => {
    const bookingConfirmation: Message = {
      sender: "bot",
      content: "Great! You can book a 30-minute consultation with Aanchal Dasoar using her Calendly scheduling link below.",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, bookingConfirmation]);
    
    // Add the appointment link as a separate message
    setTimeout(() => {
      const appointmentLinkMessage: Message = {
        sender: "bot",
        content: "https://calendly.com/physioaanchal/30min",
        timestamp: new Date(),
        isAppointmentLink: true
      };
      
      setMessages(prev => [...prev, appointmentLinkMessage]);
    }, 500);
    
    setShowBookingOption(false);
  };

  return (
    <div className="glass-card rounded-2xl p-6 shadow-soft">
      <ChatHeader />
      
      {/* Chat Messages */}
      <div className="bg-white rounded-lg p-4 border border-neutral-200 h-80 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
        
        {/* Show booking button if applicable */}
        {showBookingOption && (
          <div className="flex justify-center my-3">
            <Button 
              onClick={handleBookAppointment}
              className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              Book Appointment
            </Button>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Message Input */}
      <form onSubmit={handleSendMessage} className="flex gap-2">
        <Input
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your symptoms here..."
          className="flex-grow"
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg p-2 flex items-center justify-center"
          disabled={!inputMessage.trim()}
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}
