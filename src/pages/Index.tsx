
import { Assessment } from "@/components/Assessment";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { FadeIn } from "@/components/FadeIn";
import { CtaButton } from "@/components/CtaButton";
import { ArrowRight, Check } from "lucide-react";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-pink-50 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-pink-100 rounded-full opacity-20 blur-3xl -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100 rounded-full opacity-20 blur-3xl -z-10 transform translate-x-1/2 translate-y-1/2"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FadeIn>
                <h2 className="text-3xl font-bold mb-4">
                  Why <span className="text-gradient">ReStore</span> Works
                </h2>
              </FadeIn>
              <FadeIn delay="100ms">
                <p className="max-w-3xl mx-auto text-lg text-neutral-600">
                  Our unique approach combines expert therapists with AI-guided care for your postpartum recovery journey
                </p>
              </FadeIn>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              {[
                {
                  title: "Personalized Care",
                  description: "Recovery plans tailored to your specific postpartum needs",
                  icon: (
                    <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                  ),
                },
                {
                  title: "Expert-Led & AI-Guided",
                  description: "Real therapists design your plan, AI keeps you on track daily",
                  icon: (
                    <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                    </div>
                  ),
                },
                {
                  title: "Progress Tracking",
                  description: "See your improvements with detailed metrics and milestone tracking",
                  icon: (
                    <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                        <path d="M3 3v18h18"></path>
                        <path d="m19 9-5 5-4-4-3 3"></path>
                      </svg>
                    </div>
                  ),
                },
              ].map((benefit, index) => (
                <FadeIn key={index} delay={`${(index + 1) * 100}ms`}>
                  <div className="bg-white p-6 rounded-xl shadow-soft border border-neutral-100 hover:shadow-medium transition-shadow h-full">
                    {benefit.icon}
                    <h3 className="text-xl font-medium text-neutral-900 mb-2">{benefit.title}</h3>
                    <p className="text-neutral-600">{benefit.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <FadeIn delay="400ms">
                <CtaButton 
                  href="#assessment" 
                  size="lg"
                  icon={<ArrowRight className="h-5 w-5" />}
                >
                  Start Your Recovery Journey
                </CtaButton>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FadeIn>
                <h2 className="text-3xl font-bold mb-4">
                  What <span className="text-gradient">Moms Say</span>
                </h2>
              </FadeIn>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  quote: "I felt stronger after just two weeks. The daily check-ins kept me accountable.",
                  name: "Jennifer M.",
                  title: "Mom of two",
                  image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80"
                },
                {
                  quote: "The pelvic floor exercises made a significant difference that my doctor noticed.",
                  name: "Sarah K.",
                  title: "First-time mom",
                  image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80"
                },
                {
                  quote: "Having an expert design my plan but AI guide me daily was the perfect combination.",
                  name: "Michelle L.",
                  title: "Mom of three",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80"
                }
              ].map((testimonial, index) => (
                <FadeIn key={index} delay={`${(index + 1) * 100}ms`}>
                  <div className="bg-white p-6 rounded-xl shadow-soft border border-neutral-100 h-full">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFC107" className="mr-1">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <p className="italic text-neutral-700 mb-4">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                      />
                      <div>
                        <p className="font-medium text-neutral-900">{testimonial.name}</p>
                        <p className="text-sm text-neutral-500">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
        
        <Assessment />
      </main>
      <footer className="bg-neutral-900 py-12 text-neutral-400 text-sm text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2025 ReStore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
