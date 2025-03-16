
import React from "react";

interface Message {
  sender: "user" | "bot";
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
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
