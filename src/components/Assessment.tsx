
import { useState } from "react";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { CtaButton } from "./CtaButton";
import { Check, ChevronRight } from "lucide-react";

export function Assessment() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [focus, setFocus] = useState("pelvic");
  const [history, setHistory] = useState("");
  const [style, setStyle] = useState("structured");

  const [activeField, setActiveField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would submit the form data to an API
    console.log({ name, age, focus, history, style });
  };

  return (
    <section id="assessment" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-50 rounded-full opacity-40 blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-50 rounded-full opacity-40 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="mb-4">
              Personalized Therapy, <span className="text-gradient">Designed for You</span>
            </h2>
          </FadeIn>
          <FadeIn delay="100ms">
            <p className="subtitle mx-auto">
              Your journey begins with a professional therapist who creates your custom therapy plan. After your initial assessment, you'll continue with AI-supported therapy sessions guided by your therapist's expertise.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Assessment Form */}
          <FadeIn className="w-full">
            <div className="glass-card rounded-2xl p-8">
              <form onSubmit={handleSubmit}>
                <h3 className="text-xl font-medium mb-6">Your Initial Assessment</h3>
                
                <div className="space-y-6">
                  {/* Name & Age */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setActiveField("name")}
                        onBlur={() => setActiveField(null)}
                        className={`w-full px-4 py-2.5 rounded-lg border ${
                          activeField === "name" 
                            ? "border-pink-400 ring-1 ring-pink-400" 
                            : "border-neutral-300"
                        } focus:outline-none transition-all duration-200`}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="age" className="block text-sm font-medium text-neutral-700 mb-1">
                        Age
                      </label>
                      <input
                        type="number"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        onFocus={() => setActiveField("age")}
                        onBlur={() => setActiveField(null)}
                        className={`w-full px-4 py-2.5 rounded-lg border ${
                          activeField === "age" 
                            ? "border-pink-400 ring-1 ring-pink-400" 
                            : "border-neutral-300"
                        } focus:outline-none transition-all duration-200`}
                        placeholder="Your age"
                      />
                    </div>
                  </div>
                  
                  {/* Primary Focus */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-3">
                      Primary Focus
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[
                        { id: "pelvic", label: "Pelvic Health", available: true },
                        { id: "menopause", label: "Menopause Support", available: false },
                        { id: "mobility", label: "Mobility & Bone Health", available: false },
                      ].map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => option.available && setFocus(option.id)}
                          className={`group relative border rounded-lg p-4 text-left transition-all ${
                            focus === option.id && option.available
                              ? "border-pink-400 bg-pink-50"
                              : option.available
                              ? "border-neutral-300 hover:border-pink-300 hover:bg-neutral-50"
                              : "border-neutral-200 bg-neutral-50 cursor-not-allowed"
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <span className={`text-sm font-medium ${
                              focus === option.id && option.available
                                ? "text-pink-700"
                                : option.available
                                ? "text-neutral-700"
                                : "text-neutral-400"
                            }`}>
                              {option.label}
                            </span>
                            {focus === option.id && option.available && (
                              <span className="h-5 w-5 bg-pink-500 rounded-full flex items-center justify-center">
                                <Check className="h-3 w-3 text-white" />
                              </span>
                            )}
                          </div>
                          {!option.available && (
                            <span className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 bg-neutral-200 text-neutral-700 text-xs font-medium py-0.5 px-2 rounded-full">
                              Coming Soon
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Medical History */}
                  <div>
                    <label htmlFor="history" className="block text-sm font-medium text-neutral-700 mb-1">
                      Past Medical History <span className="text-neutral-500 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="history"
                      rows={3}
                      value={history}
                      onChange={(e) => setHistory(e.target.value)}
                      onFocus={() => setActiveField("history")}
                      onBlur={() => setActiveField(null)}
                      className={`w-full px-4 py-2.5 rounded-lg border ${
                        activeField === "history" 
                          ? "border-pink-400 ring-1 ring-pink-400" 
                          : "border-neutral-300"
                      } focus:outline-none transition-all duration-200`}
                      placeholder="Any relevant medical conditions or previous treatments"
                    />
                  </div>
                  
                  {/* Therapy Style */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-3">
                      Therapy Style Preference
                    </label>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { id: "structured", label: "Structured Plan", description: "Daily exercises with clear milestones" },
                        { id: "interactive", label: "Interactive Coaching", description: "Real-time feedback and adjustments" },
                        { id: "community", label: "Community-Driven", description: "Group support and shared progress" },
                      ].map((option) => (
                        <div 
                          key={option.id}
                          className={`flex items-center space-x-3 border rounded-lg p-3 cursor-pointer transition-all ${
                            style === option.id
                              ? "border-pink-400 bg-pink-50"
                              : "border-neutral-300 hover:border-pink-300 hover:bg-neutral-50"
                          }`}
                          onClick={() => setStyle(option.id)}
                        >
                          <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${
                            style === option.id
                              ? "bg-pink-500 border-pink-500"
                              : "border-neutral-400"
                          }`}>
                            {style === option.id && <div className="h-2 w-2 rounded-full bg-white" />}
                          </div>
                          <div>
                            <div className={`text-sm font-medium ${
                              style === option.id ? "text-pink-700" : "text-neutral-700"
                            }`}>
                              {option.label}
                            </div>
                            <div className="text-xs text-neutral-500">{option.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <CtaButton
                      type="submit"
                      size="lg"
                      className="w-full justify-center"
                      icon={<ChevronRight className="h-5 w-5" />}
                    >
                      Book Your First Therapist Session
                    </CtaButton>
                  </div>
                </div>
              </form>
            </div>
          </FadeIn>
          
          {/* Assessment Benefits */}
          <div>
            <FadeInStagger
              direction="right"
              containerClassName="space-y-6"
              childDelay={100}
            >
              {[
                {
                  title: "Initial Visit with a Therapist",
                  description: "Start your journey with a professional therapist who will assess your needs and create a personalized therapy plan.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                },
                {
                  title: "Personalized Exercise Plan",
                  description: "Custom therapy program based on your specific needs, goals, and fitness level created by your therapist.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                      <path d="M16.5 9.4 7.55 4.24" />
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.29 7 12 12 20.71 7" />
                      <line x1="12" x2="12" y1="22" y2="12" />
                    </svg>
                  ),
                },
                {
                  title: "Follow-up with Therapist + AI",
                  description: "After your initial session, continue with AI-guided therapy reinforced by periodic check-ins with your therapist.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
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
                  title: "Progress Tracking",
                  description: "Monitor your improvements with detailed metrics and celebrate your achievements with both AI and your therapist.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                  ),
                },
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-pink-50 transition-colors">
                  <div className="h-12 w-12 rounded-full bg-pink-100 flex-shrink-0 flex items-center justify-center">
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
