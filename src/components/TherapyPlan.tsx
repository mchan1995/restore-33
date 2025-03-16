
import { useState } from "react";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { CtaButton } from "./CtaButton";
import { ChevronRight, Play, BarChart3 } from "lucide-react";

export function TherapyPlan() {
  const [hoveredModule, setHoveredModule] = useState<number | null>(null);

  const therapyModules = [
    {
      id: 1,
      title: "Pelvic Floor Strengthening",
      description: "Build core strength with targeted exercises and AI feedback on engagement & posture.",
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
      title: "Postural Correction & Core Stability",
      description: "Prevent pain & improve function with exercises that align your posture and strengthen your core.",
      duration: "12 min",
      level: "All Levels",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 14.5A3.5 3.5 0 0 0 7.5 18a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 7.5 11h-.005L4 14.5Z" />
          <path d="M4 9.5 7.5 6a3.5 3.5 0 0 1 5.977 2.5A3.5 3.5 0 0 1 9.5 12h-2l-3.5-2.5Z" />
          <path d="M13 22a8 8 0 0 0 0-16" />
          <path d="M13 14h7" />
          <path d="M13 18h7" />
          <path d="M13 6h5a4 4 0 0 1 4 4" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Breathwork & Relaxation Techniques",
      description: "Reduce pelvic tension & improve endurance with guided breathing exercises.",
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
              Real-Time AI Coaching for <span className="text-gradient">Lasting Results</span>
            </h2>
          </FadeIn>
          <FadeIn delay="100ms">
            <p className="subtitle mx-auto">
              Based on your assessment, we create a structured, AI-guided therapy plan with real-time feedback and tracking.
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
                          <span>83% Success Rate</span>
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
                            ? "Remember to engage deeper here for better results. Try exhaling as you contract."
                            : index === 1
                            ? "Keep your shoulders relaxed and spine neutral throughout the movement."
                            : "Focus on slow, deep breaths. Four counts in, six counts out for optimal relaxation."
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
                  View All Therapy Exercises
                </CtaButton>
              </div>
            </FadeInStagger>
          </div>
          
          {/* AI Biofeedback Panel */}
          <div className="lg:col-span-2">
            <FadeIn direction="right" delay="200ms">
              <div className="sticky top-24 bg-white rounded-2xl shadow-medium border border-neutral-200 overflow-hidden">
                <div className="p-6 border-b border-neutral-100">
                  <h3 className="text-xl font-medium text-neutral-900 mb-1">
                    Real-Time Biofeedback
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Track your progress with AI-generated metrics
                  </p>
                </div>
                
                <div className="p-6 space-y-6">
                  {/* Pelvic Strength Score */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-sm font-medium text-neutral-900">Pelvic Strength Score</div>
                      <div className="text-2xl font-bold text-brand-600">72<span className="text-sm text-neutral-500">/100</span></div>
                    </div>
                    <div className="h-2 w-full bg-neutral-200 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-500 rounded-full" style={{ width: "72%" }}></div>
                    </div>
                    <div className="mt-1 flex justify-between text-xs text-neutral-500">
                      <span>Baseline: 48</span>
                      <span>+24 points improvement</span>
                    </div>
                  </div>
                  
                  {/* Engagement Metrics */}
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-neutral-900 mb-2">Key Metrics</div>
                    
                    {[
                      { label: "Muscle Activation", value: 68, improvement: "+12%" },
                      { label: "Core Stability", value: 75, improvement: "+18%" },
                      { label: "Movement Quality", value: 82, improvement: "+22%" },
                    ].map((metric) => (
                      <div key={metric.label} className="flex items-center gap-4">
                        <div className="w-32 text-sm text-neutral-700">{metric.label}</div>
                        <div className="flex-1">
                          <div className="h-2 w-full bg-neutral-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-brand-400 rounded-full" 
                              style={{ width: `${metric.value}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="w-16 text-right">
                          <span className="text-xs font-medium text-emerald-600">{metric.improvement}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Weekly Progress */}
                  <div>
                    <div className="text-sm font-medium text-neutral-900 mb-3">Weekly Progress</div>
                    <div className="h-32 flex items-end space-x-1">
                      {[35, 42, 50, 58, 65, 68, 72].map((height, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                          <div 
                            className={`w-full bg-brand-${index === 6 ? '500' : '400'} rounded-t-sm transition-all duration-300 hover:opacity-90`}
                            style={{ height: `${height}%` }}
                          ></div>
                          <div className="text-xs text-neutral-500 mt-1">
                            {['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <CtaButton
                      href="#"
                      size="md"
                      className="w-full justify-center"
                      icon={<ChevronRight className="h-5 w-5" />}
                    >
                      Start My First Therapy Session
                    </CtaButton>
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
