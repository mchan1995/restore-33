
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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-full md:w-7/12 h-full bg-pink-50 clip-path-hero -z-10"></div>
      
      <div className="section-container py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content - takes 6 columns on large screens */}
          <div className="lg:col-span-6 lg:pr-8">
            <FadeIn delay="100ms">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-pink-500 mr-2"></span>
                <span>AI-Powered Pelvic Health Therapy</span>
              </div>
            </FadeIn>
            
            <FadeIn delay="200ms">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                Stronger Pelvic Health, <span className="text-pink-600">On Your Terms</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay="300ms">
              <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-xl">
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
                className="bg-pink-500 hover:bg-pink-600 text-white"
                icon={<ChevronRight className="h-5 w-5" />}
              >
                Start Your Free AI Assessment
              </CtaButton>
              
              <CtaButton 
                href="/about"
                variant="outline"
                size="lg"
                className="border-pink-300 text-pink-700 hover:bg-pink-100 hover:border-pink-400"
                icon={<BookOpen className="h-5 w-5" />}
              >
                Learn About Us
              </CtaButton>
            </FadeInStagger>
            
            {/* Stats highlights - new section */}
            <FadeIn delay="500ms">
              <div className="mt-12 grid grid-cols-3 gap-4">
                <div className="text-center border-r border-neutral-200 last:border-r-0">
                  <p className="text-pink-600 text-2xl md:text-3xl font-bold">94%</p>
                  <p className="text-neutral-600 text-sm mt-1">Pain Relief</p>
                </div>
                <div className="text-center border-r border-neutral-200 last:border-r-0">
                  <p className="text-pink-600 text-2xl md:text-3xl font-bold">87%</p>
                  <p className="text-neutral-600 text-sm mt-1">Symptom Reduction</p>
                </div>
                <div className="text-center border-r border-neutral-200 last:border-r-0">
                  <p className="text-pink-600 text-2xl md:text-3xl font-bold">3x</p>
                  <p className="text-neutral-600 text-sm mt-1">Faster Recovery</p>
                </div>
              </div>
            </FadeIn>
          </div>
          
          {/* Video/Visual Element - takes 6 columns on large screens */}
          <div className="lg:col-span-6">
            <FadeIn delay="600ms" className="relative rounded-xl overflow-hidden">
              <div className="aspect-[4/3] relative bg-gradient-to-br from-pink-50 to-neutral-100 rounded-xl overflow-hidden shadow-medium">
                {/* Video Placeholder/Mockup */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="animate-pulse flex flex-col items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-pink-200 flex items-center justify-center">
                      <Play className="h-8 w-8 text-pink-600" />
                    </div>
                    <div className="mt-4 h-4 w-32 bg-neutral-200 rounded"></div>
                  </div>
                </div>
                
                {/* Video Element */}
                <div className={`absolute inset-0 transition-opacity duration-700 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-50/80 to-neutral-100/80 backdrop-blur-sm">
                    <div className="p-6 max-w-md text-center">
                      <div className="mx-auto mb-8 h-24 w-24 rounded-full bg-white shadow-soft flex items-center justify-center">
                        <div className="h-20 w-20 rounded-full bg-pink-100 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                            <path d="M12 2c1.4 0 2.1.7 2.1.7.4.4.7.9.9 1.4.6 1.2 1 2.9 1 4.9 0 2-.4 3.7-1 4.9-.2.5-.5 1-.9 1.4 0 0-.7.7-2.1.7-1.4 0-2.1-.7-2.1-.7-.4-.4-.7-.9-.9-1.4-.6-1.2-1-2.9-1-4.9 0-2 .4-3.7 1-4.9.2-.5.5-1 .9-1.4 0 0 .7-.7 2.1-.7Z" />
                            <path d="M8 10.5v3" />
                            <path d="M16 10.5v3" />
                            <path d="M12 10v6" />
                            <path d="M12 22v-6" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-4">AI Health Assistant</h3>
                      <p className="text-neutral-700">
                        "Pelvic health is essential, yet millions of women struggle in silence. Whether you're managing postpartum recovery, incontinence, or strengthening your core, our AI-powered therapy adapts to you—providing expert-backed guidance from the comfort of home."
                      </p>
                      
                      <div className="mt-8 inline-flex items-center justify-center">
                        <CtaButton 
                          href="#community"
                          variant="primary"
                          size="md"
                          className="bg-pink-500 hover:bg-pink-600 text-white"
                          icon={<UserPlus className="h-5 w-5" />}
                        >
                          Join the Community
                        </CtaButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
