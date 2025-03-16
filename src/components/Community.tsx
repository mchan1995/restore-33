
import { useRef } from "react";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { CtaButton } from "./CtaButton";
import { ChevronRight, Users, Calendar } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export function Community() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <section id="community" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-brand-50 rounded-full opacity-40 blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-brand-50 rounded-full opacity-40 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="mb-4">
              <span className="text-gradient">Connect With New Moms</span>
            </h2>
          </FadeIn>
          <FadeIn delay="100ms">
            <p className="subtitle mx-auto">
              Share experiences with other mothers on the same postpartum journey.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Expert Sessions with Video */}
          <FadeIn delay="100ms">
            <div className="bg-white rounded-2xl shadow-soft border border-neutral-100 overflow-hidden h-full flex flex-col">
              <div className="p-6 border-b border-neutral-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900">
                    Postpartum Recovery Sessions
                  </h3>
                </div>
              </div>
              
              <div className="aspect-video w-full overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls
                  poster="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
                >
                  <source src="https://cdn.pixabay.com/vimeo/695428034/mother-and-baby-136261.mp4?width=640&hash=aacf7e9387a28c86f7fdf9b4ec9f772f1ef14ebd" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="p-6 flex-1">
                <Carousel className="w-full">
                  <CarouselContent>
                    {[
                      {
                        title: "Postpartum Core Recovery",
                        expert: "Dr. Sarah Johnson",
                        date: "Tue, Oct 12",
                        image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      },
                      {
                        title: "Healing After C-Section",
                        expert: "Dr. Lisa Wong",
                        date: "Thu, Oct 14",
                        featured: true,
                        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      },
                      {
                        title: "Pelvic Floor Restoration",
                        expert: "Jessica Miller, PT",
                        date: "Mon, Oct 18",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      },
                    ].map((session, index) => (
                      <CarouselItem key={index}>
                        <div className={`relative rounded-xl overflow-hidden cursor-pointer`}>
                          <img 
                            src={session.image} 
                            alt={session.title} 
                            className="w-full h-48 object-cover rounded-t-xl"
                          />
                          <div className="p-4 bg-white">
                            <div className="flex justify-between items-start gap-4 mb-2">
                              <h4 className="text-base font-medium text-neutral-900">
                                {session.title}
                              </h4>
                              {session.featured && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-brand-100 text-brand-800">
                                  Featured
                                </span>
                              )}
                            </div>
                            <div className="text-sm text-neutral-700">
                              <div>{session.expert}</div>
                              <div className="text-neutral-500">{session.date}</div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                
                <div className="mt-6">
                  <CtaButton
                    href="#"
                    variant="outline"
                    size="md"
                    className="w-full justify-center"
                  >
                    View All Sessions
                  </CtaButton>
                </div>
              </div>
            </div>
          </FadeIn>
          
          {/* Community Groups with People */}
          <FadeIn delay="200ms">
            <div className="bg-white rounded-2xl shadow-soft border border-neutral-100 overflow-hidden h-full flex flex-col">
              <div className="p-6 border-b border-neutral-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900">
                    New Mom Support Groups
                  </h3>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                {[
                  {
                    name: "C-Section Recovery",
                    members: 1240,
                    image: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  },
                  {
                    name: "Postpartum Fitness",
                    members: 968,
                    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  },
                  {
                    name: "Breastfeeding Support",
                    members: 1485,
                    image: "https://images.unsplash.com/photo-1590612281741-bc932d9afee9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  },
                  {
                    name: "Mom Mental Health",
                    members: 823,
                    image: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  }
                ].map((group, index) => (
                  <div key={index} className="group rounded-xl overflow-hidden border border-neutral-200 hover:border-brand-200 hover:shadow-soft transition-all cursor-pointer">
                    <img 
                      src={group.image} 
                      alt={group.name} 
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-3">
                      <h4 className="text-base font-medium text-neutral-900 group-hover:text-brand-600 transition-colors">
                        {group.name}
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-neutral-500 mt-1">
                        <Users className="h-3 w-3" />
                        <span>{group.members.toLocaleString()} members</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-6 mt-auto">
                <CtaButton
                  href="#"
                  size="md"
                  className="w-full justify-center"
                  icon={<ChevronRight className="h-5 w-5" />}
                >
                  Join Mom Community
                </CtaButton>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
