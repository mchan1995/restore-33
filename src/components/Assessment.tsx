
import { FadeIn } from "./FadeIn";
import { ChatInterface } from "./chat/ChatInterface";
import { BenefitsList } from "./chat/BenefitsList";

export function Assessment() {
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
            <ChatInterface />
          </FadeIn>
          
          {/* Benefits */}
          <div>
            <BenefitsList />
          </div>
        </div>
      </div>
    </section>
  );
}
