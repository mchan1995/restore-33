
import { useState, useRef, useEffect } from "react";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { CtaButton } from "./CtaButton";
import { Check, ChevronRight, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Assessment() {
  const [messages, setMessages] = useState([
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
    <section id="assessment" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-50 rounded-full opacity-40 blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-50 rounded-full opacity-40 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="mb-4">
              Chat with <span className="text-gradient">Dr. ReStore</span>
            </h2>
          </FadeIn>
          <FadeIn delay="100ms">
            <p className="subtitle mx-auto">
              Share your symptoms in your own words and receive personalized guidance from our pelvic health specialist.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Chat Interface */}
          <FadeIn className="w-full">
            <div className="glass-card rounded-2xl p-6 shadow-soft">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-neutral-900">Dr. ReStore</h3>
                  <p className="text-neutral-600 text-sm">Pelvic Health Specialist</p>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="bg-white rounded-lg p-4 border border-neutral-200 h-80 overflow-y-auto mb-4">
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`mb-4 ${message.sender === 'user' ? 'text-right' : ''}`}
                  >
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
          </FadeIn>
          
          {/* Benefits */}
          <div>
            <FadeInStagger
              direction="right"
              containerClassName="space-y-6"
              childDelay={100}
            >
              {[
                {
                  title: "Personalized Assessment",
                  description: "Dr. ReStore analyzes your specific symptoms to create a tailored therapy program just for you.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                      <path d="M16.5 9.4 7.55 4.24" />
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.29 7 12 12 20.71 7" />
                      <line x1="12" x2="12" y1="22" y2="12" />
                    </svg>
                  ),
                },
                {
                  title: "Expert Medical Guidance",
                  description: "Receive evidence-based recommendations from a specialist in pelvic health and core strength.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                      <path d="M12 7.5a3 3 0 1 0 0 6 3 3 0 1 0 0-6z" />
                      <path d="M12 2v2" />
                      <path d="M12 20v2" />
                      <path d="m4.93 4.93 1.41 1.41" />
                      <path d="m17.66 17.66 1.41 1.41" />
                      <path d="M2 12h2" />
                      <path d="M20 12h2" />
                      <path d="m6.34 17.66-1.41 1.41" />
                      <path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                  ),
                },
                {
                  title: "Quick & Private Conversation",
                  description: "Share your concerns in a secure, confidential environment with no appointment needed.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  ),
                },
                {
                  title: "Follow-up Support",
                  description: "After your initial assessment, receive a customized plan and ongoing guidance for your recovery journey.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                  ),
                },
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-purple-50 transition-colors">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-neutral-900 mb-1">{benefit.title}</h3>
                    <p className="text-neutral-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </div>
    </section>
  );
}
