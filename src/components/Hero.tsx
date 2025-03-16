
import { useEffect, useRef, useState } from "react";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { CtaButton } from "./CtaButton";
import { ChevronRight, BookOpen } from "lucide-react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-full md:w-7/12 h-full bg-purple-50 clip-path-hero -z-10"></div>
      
      {/* Full-width background video with overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-5">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10"></div>
        <video 
          className="object-cover w-full h-full"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="https://cdn.pixabay.com/vimeo/744792431/mother-and-baby-144835.mp4?width=1280&hash=da6be9bde2fa1a29d7853cd9f9afac4d5f72c3ca" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="section-container py-8 md:py-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content - takes 6 columns on large screens */}
          <div className="lg:col-span-5 lg:pr-8">
            <FadeIn delay="100ms">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
                <span>Recovery & Wellness Support</span>
              </div>
            </FadeIn>
            
            <FadeIn delay="200ms">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                Rebuild Your Core Strength
              </h1>
            </FadeIn>
            
            <FadeIn delay="300ms">
              <p className="text-lg md:text-xl text-neutral-600 mb-10">
                Regain physical confidence with AI-guided therapy designed for your body's unique needs.
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
                className="bg-purple-600 hover:bg-purple-700 text-white"
                icon={<ChevronRight className="h-5 w-5" />}
              >
                Start Your Assessment
              </CtaButton>
              
              <CtaButton 
                href="/about"
                variant="outline"
                size="lg"
                className="border-purple-300 text-purple-700 hover:bg-purple-100 hover:border-purple-400"
                icon={<BookOpen className="h-5 w-5" />}
              >
                About Us
              </CtaButton>
            </FadeInStagger>
            
            {/* Stats highlights */}
            <FadeIn delay="500ms">
              <div className="mt-12 grid grid-cols-3 gap-4">
                <div className="text-center border-r border-neutral-200 last:border-r-0">
                  <p className="text-purple-600 text-2xl md:text-3xl font-bold">94%</p>
                  <p className="text-neutral-600 text-sm mt-1">Pain Relief</p>
                </div>
                <div className="text-center border-r border-neutral-200 last:border-r-0">
                  <p className="text-purple-600 text-2xl md:text-3xl font-bold">87%</p>
                  <p className="text-neutral-600 text-sm mt-1">Recovery Rate</p>
                </div>
                <div className="text-center border-r border-neutral-200 last:border-r-0">
                  <p className="text-purple-600 text-2xl md:text-3xl font-bold">3x</p>
                  <p className="text-neutral-600 text-sm mt-1">Faster Healing</p>
                </div>
              </div>
            </FadeIn>
          </div>
          
          {/* Video Testimonial Element - takes 7 columns on large screens */}
          <div className="lg:col-span-7">
            <FadeIn delay="600ms" className="relative rounded-xl overflow-hidden">
              <div className="aspect-video relative bg-gradient-to-br from-purple-50 to-neutral-100 rounded-xl overflow-hidden shadow-medium">
                {/* Video Placeholder */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="animate-pulse flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-purple-200 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Video Element */}
                <div className={`absolute inset-0 transition-opacity duration-700 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}>
                  <video 
                    className="w-full h-full object-cover rounded-xl"
                    controls
                    poster="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
                  >
                    <source src="https://cdn.pixabay.com/vimeo/720107275/mother-and-baby-140258.mp4?width=1280&hash=d71e47f1ba9add0b23e09d5c7f5fa07e27fa4b7e" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                    <p className="font-medium">"ReStore helped me rebuild my core strength and feel confident again"</p>
                    <p className="text-sm opacity-90">Emily, 32 - Active professional</p>
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
