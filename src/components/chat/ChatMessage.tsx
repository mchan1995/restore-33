
import React from "react";
import { Calendar } from "lucide-react";
import { Button } from "../ui/button";

interface Message {
  sender: "user" | "bot";
  content: string;
  timestamp: Date;
  isAppointmentLink?: boolean;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  // Special rendering for appointment links
  if (message.isAppointmentLink) {
    return (
      <div className="mb-4 text-center">
        <a 
          href={message.content} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center px-4 py-2 gap-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Calendar className="h-4 w-4" />
          Schedule Appointment with Aanchal Dasoar
        </a>
        <div className="text-xs text-neutral-500 mt-1">
          {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </div>
      </div>
    );
  }
  
  // Standard message rendering
  return (
    <div className={`mb-4 ${message.sender === 'user' ? 'text-right' : ''}`}>
      <div 
        className={`inline-block max-w-[80%] rounded-lg px-4 py-2 ${
          message.sender === 'user' 
            ? 'bg-purple-600 text-white rounded-tr-none' 
            : 'bg-neutral-100 text-neutral-800 rounded-tl-none'
        }`}
      >
        {message.content}
      </div>
      <div className="text-xs text-neutral-500 mt-1">
        {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
      </div>
    </div>
  );
}
