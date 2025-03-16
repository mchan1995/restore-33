
import { useState } from "react";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { CtaButton } from "./CtaButton";
import { ChevronRight, Play, BarChart3 } from "lucide-react";
import { TherapyProgressTracker } from "./TherapyProgressTracker";

export function TherapyPlan() {
  const [hoveredModule, setHoveredModule] = useState<number | null>(null);

  const therapyModules = [
    {
      id: 1,
      title: "Pelvic Floor Strengthening",
      description: "Rebuild your core strength with targeted exercises designed for adults aged 25-40.",
      duration: "15 min",
      level: "Beginner",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4" />
          <path d="M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
          <path d="M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
          <path d="M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Urination Control Training",
      description: "Specific exercises to help reduce urination time and improve bladder control.",
      duration: "12 min",
      level: "All Levels",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 3v4" />
          <path d="M19 3v4" />
          <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2" />
          <path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v13" />
          <path d="M12 16a4 4 0 0 0 4-4" />
          <path d="M9 16h6" />
          <path d="M12 12v4" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Core Rehabilitation",
      description: "Reconnect and strengthen your abdominal muscles safely with guided AI feedback.",
      duration: "10 min",
      level: "All Levels",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12.5c1.67-1.25 3.33-1.25 5 0s3.33 1.25 5 0 3.33-1.25 5 0 3.33 1.25 5 0" />
          <path d="M2 19.5c1.67-1.25 3.33-1.25 5 0s3.33 1.25 5 0 3.33-1.25 5 0 3.33 1.25 5 0" />
          <path d="M2 5.5c1.67-1.25 3.33-1.25 5 0s3.33 1.25 5 0 3.33-1.25 5 0 3.33 1.25 5 0" />
        </svg>
      ),
    },
  ];

  return (
    <section id="therapy" className="py-24 bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="mb-4">
              AI Coaching for <span className="text-gradient">Physical Recovery</span>
            </h2>
          </FadeIn>
          <FadeIn delay="100ms">
            <p className="subtitle mx-auto">
              Based on your assessment, we create a personalized healing plan for adults aged 25-40.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Therapy Modules */}
          <div className="lg:col-span-3">
            <FadeInStagger
              containerClassName="space-y-6"
              childDelay={100}
            >
              {therapyModules.map((module, index) => (
                <div
                  key={module.id}
                  className="relative bg-white rounded-2xl shadow-soft border border-neutral-100 overflow-hidden card-hover"
                  onMouseEnter={() => setHoveredModule(module.id)}
                  onMouseLeave={() => setHoveredModule(null)}
                >
                  <div className="flex flex-col md:flex-row gap-4 p-6">
                    <div className="h-14 w-14 rounded-xl bg-brand-100 flex-shrink-0 flex items-center justify-center">
                      <div className="text-brand-600">{module.icon}</div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <h3 className="text-xl font-medium text-neutral-900">{module.title}</h3>
                        <div className="flex items-center space-x-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700">
                            {module.duration}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-50 text-brand-700">
                            {module.level}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-neutral-600 text-sm mb-4">{module.description}</p>
                      
                      <div className="flex flex-wrap items-center gap-4">
                        <CtaButton
                          size="sm"
                          icon={<Play className="h-4 w-4" />}
                          iconPosition="left"
                        >
                          Start Exercise
                        </CtaButton>
                        
                        <div className="flex items-center space-x-1 text-sm text-neutral-500">
                          <BarChart3 className="h-4 w-4" />
                          <span>{index === 1 ? "53% Progress" : "83% Success Rate"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* AI Feedback Preview */}
                  <div 
                    className={`bg-neutral-50 border-t border-neutral-100 px-6 py-3 transition-all duration-300 ${
                      hoveredModule === module.id ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-brand-100 flex-shrink-0 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600">
                          <path d="M12 8V4H8" />
                          <rect width="16" height="12" x="4" y="8" rx="2" />
                          <path d="M2 14h2" />
                          <path d="M20 14h2" />
                          <path d="M15 13v2" />
                          <path d="M9 13v2" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-neutral-800 font-medium">AI Coach Feedback:</p>
                        <p className="text-xs text-neutral-600">
                          {index === 0 
                            ? "Start gently and listen to your body. Focus on form rather than intensity."
                            : index === 1
                            ? "Great progress on reducing urination time! Keep practicing relaxation techniques."
                            : "Focus on proper breathing while gently activating your deep core muscles."
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="text-center pt-4">
                <CtaButton
                  href="#"
                  size="md"
                  variant="outline"
                  icon={<ChevronRight className="h-5 w-5" />}
                >
                  View Full Recovery Plan
                </CtaButton>
              </div>
            </FadeInStagger>
          </div>
          
          {/* Recovery Progress Tracker Panel */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <TherapyProgressTracker />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
