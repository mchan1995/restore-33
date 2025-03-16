
import { useState, useRef, useEffect } from "react";
import { Input } from "../ui/input";
import { Send } from "lucide-react";
import { ChatMessage } from "./ChatMessage";
import { ChatHeader } from "./ChatHeader";

export interface Message {
  sender: "user" | "bot";
  content: string;
  timestamp: Date;
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
  
  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage = {
      sender: "user",
      content: inputMessage,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "Thank you for sharing that. Could you tell me if you've noticed any specific activities that make these symptoms worse?",
        "I understand how challenging that can be. Have you tried any exercises or treatments to help with these symptoms so far?",
        "Based on what you've shared, I think we can develop a personalized plan to help strengthen your core. Would you like to schedule a virtual consultation to discuss this further?"
      ];
      
      // Pick a response based on conversation stage
      const botResponseIndex = Math.min(
        Math.floor(messages.length / 2),
        botResponses.length - 1
      );
      
      const botMessage = {
        sender: "bot",
        content: botResponses[botResponseIndex],
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="glass-card rounded-2xl p-6 shadow-soft">
      <ChatHeader />
      
      {/* Chat Messages */}
      <div className="bg-white rounded-lg p-4 border border-neutral-200 h-80 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
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
