
import { FadeIn, FadeInStagger } from "./FadeIn";
import { CtaButton } from "./CtaButton";
import { ChevronRight, MessageSquare, BookOpen, FileText } from "lucide-react";

export function Resources() {
  return (
    <section id="resources" className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-brand-50 rounded-full opacity-40 blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-brand-50 rounded-full opacity-40 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="mb-4">
              <span className="text-gradient">Helpful Resources</span> for Your Journey
            </h2>
          </FadeIn>
          <FadeIn delay="100ms">
            <p className="subtitle mx-auto">
              Get 24/7 AI guidance, educational content, and personalized resources to support your pelvic health journey.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* AI Chat Support */}
          <FadeIn delay="100ms">
            <div className="bg-white rounded-2xl shadow-soft border border-neutral-100 overflow-hidden h-full flex flex-col">
              <div className="p-6 border-b border-neutral-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900">
                    AI Support Chat
                  </h3>
                </div>
                <p className="text-neutral-600 text-sm">
                  Not sure if you're doing an exercise right? Ask our AI coach anytime!
                </p>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                {/* Chat Messages */}
                <div className="space-y-4 mb-6 flex-1">
                  <div className="flex justify-end">
                    <div className="bg-neutral-100 rounded-l-lg rounded-tr-lg py-2 px-3 max-w-xs">
                      <p className="text-sm text-neutral-800">
                        I'm not sure if I'm doing the pelvic floor exercise correctly. How can I tell?
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex gap-2 max-w-xs">
                      <div className="h-8 w-8 rounded-full bg-brand-100 flex-shrink-0 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600">
                          <path d="M12 2c1.4 0 2.1.7 2.1.7.4.4.7.9.9 1.4.6 1.2 1 2.9 1 4.9 0 2-.4 3.7-1 4.9-.2.5-.5 1-.9 1.4 0 0-.7.7-2.1.7-1.4 0-2.1-.7-2.1-.7-.4-.4-.7-.9-.9-1.4-.6-1.2-1-2.9-1-4.9 0-2 .4-3.7 1-4.9.2-.5.5-1 .9-1.4 0 0 .7-.7 2.1-.7Z" />
                          <path d="M8 10.5v3" />
                          <path d="M16 10.5v3" />
                          <path d="M12 10v6" />
                          <path d="M12 22v-6" />
                        </svg>
                      </div>
                      <div className="bg-brand-50 rounded-r-lg rounded-tl-lg py-2 px-3">
                        <p className="text-sm text-neutral-800">
                          Great question! When doing a pelvic floor contraction, you should feel a gentle lifting sensation, like you're stopping the flow of urine. Try this: sit comfortably, relax your abdomen, and slowly tighten and lift. You shouldn't feel tension in your buttocks or inner thighs.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-neutral-100 rounded-l-lg rounded-tr-lg py-2 px-3 max-w-xs">
                      <p className="text-sm text-neutral-800">
                        That helps! How often should I do these exercises?
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Input Area */}
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Type your question here..."
                    className="flex-1 px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400"
                  />
                  <button className="px-3 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
          
          {/* Educational Materials */}
          <FadeIn delay="200ms">
            <div className="bg-white rounded-2xl shadow-soft border border-neutral-100 overflow-hidden h-full flex flex-col">
              <div className="p-6 border-b border-neutral-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900">
                    Educational Materials
                  </h3>
                </div>
                <p className="text-neutral-600 text-sm">
                  Learn about pelvic health through research-backed articles and guides
                </p>
              </div>
              
              <div className="p-6 flex-1">
                <div className="space-y-4">
                  {[
                    {
                      title: "Understanding Pelvic Floor Anatomy",
                      category: "Basics",
                      readTime: "5 min read",
                      featured: true,
                    },
                    {
                      title: "Postpartum Recovery Timeline",
                      category: "Pregnancy",
                      readTime: "8 min read",
                    },
                    {
                      title: "Exercises for Daily Pelvic Strength",
                      category: "Exercise",
                      readTime: "7 min read",
                    },
                    {
                      title: "Managing Pelvic Pain: Causes & Solutions",
                      category: "Pain Management",
                      readTime: "10 min read",
                    },
                  ].map((article, index) => (
                    <div 
                      key={index} 
                      className={`p-4 rounded-xl border ${
                        article.featured 
                          ? "border-brand-200 bg-brand-50" 
                          : "border-neutral-200 hover:border-brand-200 hover:bg-neutral-50"
                      } transition-colors cursor-pointer`}
                    >
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h4 className="text-base font-medium text-neutral-900">
                          {article.title}
                        </h4>
                        {article.featured && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-brand-100 text-brand-800">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-neutral-500">
                        <span className="bg-neutral-100 px-2 py-0.5 rounded-full">{article.category}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <CtaButton
                    href="#"
                    variant="outline"
                    size="md"
                    className="w-full justify-center"
                  >
                    Browse All Resources
                  </CtaButton>
                </div>
              </div>
            </div>
          </FadeIn>
          
          {/* Downloadable Resources */}
          <FadeIn delay="300ms">
            <div className="bg-white rounded-2xl shadow-soft border border-neutral-100 overflow-hidden h-full flex flex-col">
              <div className="p-6 border-b border-neutral-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900">
                    Downloadable Resources
                  </h3>
                </div>
                <p className="text-neutral-600 text-sm">
                  Access printable worksheets, trackers, and exercise guides
                </p>
              </div>
              
              <div className="p-6 flex-1">
                <FadeInStagger 
                  containerClassName="space-y-5"
                  childDelay={100}
                >
                  {[
                    {
                      name: "Daily Exercise Tracker",
                      description: "Track your pelvic floor exercise routine with this printable sheet",
                      fileType: "PDF",
                      icon: "📝",
                    },
                    {
                      name: "Illustrated Exercise Guide",
                      description: "Visual guide to proper pelvic floor exercise techniques",
                      fileType: "PDF",
                      icon: "🏋️‍♀️",
                    },
                    {
                      name: "Progress Journal Template",
                      description: "Document your recovery journey with structured prompts",
                      fileType: "PDF",
                      icon: "📊",
                    },
                    {
                      name: "Symptom Tracker",
                      description: "Monitor your symptoms over time to identify patterns",
                      fileType: "PDF",
                      icon: "📈",
                    },
                  ].map((resource) => (
                    <div key={resource.name} className="group rounded-xl border border-neutral-200 p-4 hover:border-brand-200 hover:shadow-soft transition-all cursor-pointer">
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-neutral-100 flex items-center justify-center text-xl">
                          {resource.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base font-medium text-neutral-900 group-hover:text-brand-600 transition-colors">
                            {resource.name}
                          </h4>
                          <p className="text-xs text-neutral-600 mt-1 mb-2">
                            {resource.description}
                          </p>
                          <div className="flex items-center text-xs text-brand-600 font-medium">
                            <span>Download {resource.fileType}</span>
                            <ChevronRight className="h-3 w-3 ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </FadeInStagger>
                
                <div className="mt-6">
                  <CtaButton
                    href="#"
                    size="md"
                    className="w-full justify-center"
                  >
                    View Resource Library
                  </CtaButton>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
