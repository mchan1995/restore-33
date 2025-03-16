import { useEffect, useRef, useState } from "react";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { CtaButton } from "./CtaButton";
import { BookOpen, ChevronRight, Play, UserPlus } from "lucide-react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Simulate video loading with a placeholder
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 md:pt-32 overflow-hidden bg-gradient-to-b from-white to-neutral-50">
      {/* Background decorative elements */}
      <div className="absolute top-24 right-0 w-1/2 h-1/2 bg-brand-50 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-100 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <FadeIn delay="100ms">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2"></span>
                <span>AI-Powered Pelvic Health Therapy</span>
              </div>
            </FadeIn>
            
            <FadeIn delay="200ms">
              <h1 className="text-balance">
                Stronger Pelvic Health, <span className="text-gradient">On Your Terms</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay="300ms">
              <p className="subtitle mt-4 mb-8">
                Restore strength, confidence, and control with AI-guided pelvic therapy—anytime, anywhere.
              </p>
            </FadeIn>
            
            <FadeInStagger 
              containerClassName="flex flex-col sm:flex-row gap-4"
              childDelay={100}
              delay="400ms"
            >
              <CtaButton 
                href="#assessment"
                size="lg"
                icon={<ChevronRight className="h-5 w-5" />}
              >
                Start Your Free AI Assessment
              </CtaButton>
              
              <CtaButton 
                href="/about"
                variant="subtle"
                size="lg"
                icon={<BookOpen className="h-5 w-5" />}
              >
                Learn About Us
              </CtaButton>
              
              <CtaButton 
                href="#community"
                variant="outline"
                size="lg"
                icon={<UserPlus className="h-5 w-5" />}
              >
                Join the Community
              </CtaButton>
            </FadeInStagger>
          </div>
          
          {/* Video/Visual Element */}
          <FadeIn delay="600ms" className="relative rounded-2xl overflow-hidden shadow-medium border border-neutral-200">
            <div className="aspect-video relative bg-gradient-to-br from-brand-50 to-neutral-100 rounded-2xl overflow-hidden">
              {/* Video Placeholder/Mockup */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}>
                <div className="animate-pulse flex flex-col items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-brand-200 flex items-center justify-center">
                    <Play className="h-6 w-6 text-brand-600" />
                  </div>
                  <div className="mt-4 h-4 w-32 bg-neutral-200 rounded"></div>
                </div>
              </div>
              
              {/* Video Element */}
              <div className={`absolute inset-0 transition-opacity duration-700 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-50/80 to-neutral-100/80 backdrop-blur-sm">
                  <div className="p-6 max-w-md text-center">
                    <div className="mx-auto mb-6 h-20 w-20 rounded-full bg-white shadow-soft flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-brand-100 flex items-center justify-center animate-pulse-subtle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600">
                          <path d="M12 2c1.4 0 2.1.7 2.1.7.4.4.7.9.9 1.4.6 1.2 1 2.9 1 4.9 0 2-.4 3.7-1 4.9-.2.5-.5 1-.9 1.4 0 0-.7.7-2.1.7-1.4 0-2.1-.7-2.1-.7-.4-.4-.7-.9-.9-1.4-.6-1.2-1-2.9-1-4.9 0-2 .4-3.7 1-4.9.2-.5.5-1 .9-1.4 0 0 .7-.7 2.1-.7Z" />
                          <path d="M8 10.5v3" />
                          <path d="M16 10.5v3" />
                          <path d="M12 10v6" />
                          <path d="M12 22v-6" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-neutral-900 mb-2">AI Health Assistant</h3>
                    <p className="text-neutral-700 text-sm">
                      "Pelvic health is essential, yet millions of women struggle in silence. Whether you're managing postpartum recovery, incontinence, or strengthening your core, our AI-powered therapy adapts to you—providing expert-backed guidance from the comfort of home."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video controls */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 opacity-90">
              <div className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-white rounded-full"></div>
              </div>
              <div className="text-white text-xs font-medium flex-shrink-0">1:23 / 3:45</div>
            </div>
          </FadeIn>
        </div>
        
        {/* Trust indicators */}
        <FadeIn delay="700ms">
          <div className="mt-20 pt-10 border-t border-neutral-200">
            <p className="text-center text-neutral-500 text-sm mb-8">Trusted by healthcare professionals worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
              <div className="text-neutral-700 flex flex-col items-center gap-2">
                <div className="h-16 w-16 rounded-full bg-neutral-100 flex items-center justify-center shadow-soft">
                  <Award className="h-8 w-8 text-pink-500" />
                </div>
                <span className="text-sm font-medium">APTA</span>
              </div>
              
              <div className="text-neutral-700 flex flex-col items-center gap-2">
                <div className="h-16 w-16 rounded-full bg-neutral-100 flex items-center justify-center shadow-soft">
                  <GraduationCap className="h-8 w-8 text-pink-500" />
                </div>
                <span className="text-sm font-medium">Herman & Wallace</span>
              </div>
              
              <div className="text-neutral-700 flex flex-col items-center gap-2">
                <div className="h-16 w-16 rounded-full bg-neutral-100 flex items-center justify-center shadow-soft">
                  <Shield className="h-8 w-8 text-pink-500" />
                </div>
                <span className="text-sm font-medium">Harvard Medical</span>
              </div>
              
              <div className="text-neutral-700 flex flex-col items-center gap-2">
                <div className="h-16 w-16 rounded-full bg-neutral-100 flex items-center justify-center shadow-soft">
                  <Stethoscope className="h-8 w-8 text-pink-500" />
                </div>
                <span className="text-sm font-medium">Mayo Clinic</span>
              </div>
              
              <div className="text-neutral-700 flex flex-col items-center gap-2">
                <div className="h-16 w-16 rounded-full bg-neutral-100 flex items-center justify-center shadow-soft">
                  <Building2 className="h-8 w-8 text-pink-500" />
                </div>
                <span className="text-sm font-medium">Cleveland Clinic</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
