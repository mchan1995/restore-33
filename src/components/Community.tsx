
import { FadeIn, FadeInStagger } from "./FadeIn";
import { CtaButton } from "./CtaButton";
import { ChevronRight, Users, Calendar, MessagesSquare } from "lucide-react";

export function Community() {
  return (
    <section id="community" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-brand-50 rounded-full opacity-40 blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-brand-50 rounded-full opacity-40 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="mb-4">
              You're Not Alone – <span className="text-gradient">Join Women Like You</span>
            </h2>
          </FadeIn>
          <FadeIn delay="100ms">
            <p className="subtitle mx-auto">
              Connect with a supportive community of women on the same journey through live expert sessions and peer groups.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Expert Q&A */}
          <FadeIn delay="100ms">
            <div className="bg-white rounded-2xl shadow-soft border border-neutral-100 overflow-hidden h-full flex flex-col">
              <div className="p-6 border-b border-neutral-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900">
                    Live Expert Q&A Sessions
                  </h3>
                </div>
                <p className="text-neutral-600 text-sm">
                  Weekly sessions with certified pelvic health specialists
                </p>
              </div>
              
              <div className="p-6 flex-1">
                <div className="space-y-4">
                  {[
                    {
                      title: "Postpartum Recovery Essentials",
                      expert: "Dr. Sarah Johnson, PT, DPT",
                      date: "Tue, Oct 12 • 7:00 PM",
                      attendees: 42,
                    },
                    {
                      title: "Pelvic Pain: Causes & Solutions",
                      expert: "Dr. Michael Chen, MD",
                      date: "Thu, Oct 14 • 6:30 PM",
                      attendees: 37,
                      featured: true,
                    },
                    {
                      title: "Core Activation Techniques",
                      expert: "Jessica Miller, PT, OCS",
                      date: "Mon, Oct 18 • 5:00 PM",
                      attendees: 28,
                    },
                  ].map((session, index) => (
                    <div 
                      key={index} 
                      className={`p-4 rounded-xl border ${
                        session.featured 
                          ? "border-brand-200 bg-brand-50" 
                          : "border-neutral-200 hover:border-brand-200 hover:bg-neutral-50"
                      } transition-colors cursor-pointer`}
                    >
                      <div className="flex justify-between items-start gap-4 mb-3">
                        <h4 className="text-base font-medium text-neutral-900">
                          {session.title}
                        </h4>
                        {session.featured && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-brand-100 text-brand-800">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-neutral-700 mb-2">
                        <div>{session.expert}</div>
                        <div className="text-neutral-500">{session.date}</div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-neutral-500">
                        <Users className="h-3 w-3" />
                        <span>{session.attendees} attending</span>
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
                    View All Upcoming Sessions
                  </CtaButton>
                </div>
              </div>
            </div>
          </FadeIn>
          
          {/* Community Forums */}
          <FadeIn delay="200ms">
            <div className="bg-white rounded-2xl shadow-soft border border-neutral-100 overflow-hidden h-full flex flex-col">
              <div className="p-6 border-b border-neutral-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                    <MessagesSquare className="h-5 w-5 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900">
                    Community Forums & Peer Groups
                  </h3>
                </div>
                <p className="text-neutral-600 text-sm">
                  Connect with women on similar journeys for support and shared experiences
                </p>
              </div>
              
              <div className="p-6 flex-1">
                <FadeInStagger 
                  containerClassName="space-y-5"
                  childDelay={100}
                >
                  {[
                    {
                      name: "Postpartum Recovery",
                      description: "Support for new mothers navigating recovery after childbirth",
                      members: 1240,
                      posts: 86,
                      icon: "🤱",
                    },
                    {
                      name: "Pelvic Pain & Strength Training",
                      description: "Techniques and encouragement for building pelvic strength",
                      members: 968,
                      posts: 124,
                      icon: "💪",
                    },
                    {
                      name: "Confidence & Lifestyle Tips",
                      description: "Discussions on regaining confidence and improving quality of life",
                      members: 1485,
                      posts: 143,
                      icon: "💬",
                    },
                  ].map((group) => (
                    <div key={group.name} className="group rounded-xl border border-neutral-200 p-4 hover:border-brand-200 hover:shadow-soft transition-all cursor-pointer">
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-neutral-100 flex items-center justify-center text-xl">
                          {group.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base font-medium text-neutral-900 group-hover:text-brand-600 transition-colors">
                            {group.name}
                          </h4>
                          <p className="text-xs text-neutral-600 mt-1 mb-2">
                            {group.description}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-neutral-500">
                            <span>{group.members.toLocaleString()} members</span>
                            <span className="h-1 w-1 rounded-full bg-neutral-300"></span>
                            <span>{group.posts} posts this week</span>
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
                    icon={<ChevronRight className="h-5 w-5" />}
                  >
                    Join the Pelvic Health Community
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
