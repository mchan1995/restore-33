
import { useRef } from "react";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { CtaButton } from "./CtaButton";
import { ChevronRight, Calendar, Users, MessageCircle } from "lucide-react";
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
              <span className="text-gradient">Connect With Others</span>
            </h2>
          </FadeIn>
          <FadeIn delay="100ms">
            <p className="subtitle mx-auto">
              Share experiences with others on the same recovery journey.
            </p>
          </FadeIn>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* Expert Sessions with Video */}
          <FadeIn delay="100ms">
            <div className="bg-white rounded-2xl shadow-soft border border-neutral-100 overflow-hidden h-full flex flex-col">
              <div className="p-6 border-b border-neutral-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900">
                    Recovery Sessions
                  </h3>
                </div>
              </div>
              
              <div className="aspect-video w-full overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls
                  poster="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
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
                        title: "Core Recovery",
                        expert: "Dr. Sarah Johnson",
                        date: "Tue, Oct 12",
                        image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      },
                      {
                        title: "Healing After Surgery",
                        expert: "Dr. Lisa Wong",
                        date: "Thu, Oct 14",
                        featured: true,
                        image: "https://images.unsplash.com/photo-1544717305-996b815c338c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
                              <div className="flex items-center gap-1 mb-1">
                                <User className="h-3 w-3 text-neutral-500" /> {session.expert}
                              </div>
                              <div className="text-neutral-500 flex items-center gap-1">
                                <Calendar className="h-3 w-3" /> {session.date}
                              </div>
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
                    className="w-full justify-center group"
                  >
                    View All Sessions
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
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
