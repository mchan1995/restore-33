
import { FadeIn } from "@/components/FadeIn";
import { Navbar } from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Calendar, MessageCircle, MapPin } from "lucide-react";

export default function Community() {
  const discussionGroups = [
    {
      title: "Postpartum Depression Support",
      members: 243,
      description: "A safe space to share experiences and coping strategies for postpartum depression.",
      image: "/placeholder.svg",
      icon: MessageCircle
    },
    {
      title: "Sleep Training Tips",
      members: 187,
      description: "Exchange advice and support for establishing healthy sleep routines for your baby and yourself.",
      image: "/placeholder.svg",
      icon: Users
    },
    {
      title: "Returning to Work",
      members: 156,
      description: "Navigate the challenges of balancing work and motherhood with support from others on the same journey.",
      image: "/placeholder.svg",
      icon: Users
    },
    {
      title: "Single Moms Circle",
      members: 124,
      description: "Connect with other single mothers for emotional support and practical advice.",
      image: "/placeholder.svg",
      icon: Users
    }
  ];

  const upcomingEvents = [
    {
      title: "Virtual Coffee Chat",
      date: "June 15, 2023",
      time: "10:00 AM EST",
      description: "Informal gathering to connect with other moms in a relaxed setting."
    },
    {
      title: "Expert Q&A: Postpartum Nutrition",
      date: "June 20, 2023",
      time: "7:00 PM EST",
      description: "Join nutritionist Dr. Sarah Williams to discuss optimal nutrition for recovery."
    },
    {
      title: "New Mom Meetup",
      date: "June 25, 2023",
      time: "3:00 PM EST",
      description: "Welcome session for moms who recently joined our community."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FadeIn>
                <h1 className="text-4xl font-bold mb-4">
                  <span className="text-gradient">Community</span>
                </h1>
              </FadeIn>
              <FadeIn delay="100ms">
                <p className="max-w-3xl mx-auto text-lg text-neutral-600">
                  Connect with other moms on similar recovery journeys
                </p>
              </FadeIn>
            </div>
            
            <Tabs defaultValue="groups" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="groups" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Discussion Groups
                </TabsTrigger>
                <TabsTrigger value="events" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Upcoming Events
                </TabsTrigger>
              </TabsList>

              <TabsContent value="groups" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {discussionGroups.map((group, index) => (
                    <FadeIn key={index} delay={`${index * 100}ms`}>
                      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                        <div className="aspect-video bg-neutral-100 relative">
                          <img 
                            src={group.image} 
                            alt={group.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-5">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="bg-brand-50 p-2 rounded-full">
                              <group.icon className="h-5 w-5 text-brand-600" />
                            </div>
                            <h3 className="font-semibold text-lg">{group.title}</h3>
                          </div>
                          <p className="text-sm text-neutral-600 mb-4">{group.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-neutral-500 flex items-center gap-1">
                              <Users className="h-3 w-3" /> {group.members} members
                            </span>
                            <button className="text-sm font-medium text-brand-600 hover:text-brand-700">
                              Join Group
                            </button>
                          </div>
                        </div>
                      </Card>
                    </FadeIn>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="events" className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <FadeIn key={index} delay={`${index * 100}ms`}>
                    <Card className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="p-5 flex flex-col md:flex-row md:items-center gap-4">
                        <div className="shrink-0 flex flex-col items-center justify-center bg-brand-50 text-brand-600 rounded-lg p-3 w-20 h-20">
                          <Calendar className="h-5 w-5 mb-1" />
                          <span className="font-semibold">{event.date.split(',')[0]}</span>
                          <span className="text-sm">{event.time.split(' ')[0]}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{event.title}</h3>
                          <p className="text-sm text-neutral-600 mt-1">{event.description}</p>
                          <div className="text-sm text-neutral-500 mt-2 flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> {event.date} at {event.time}
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-brand-500 text-white rounded-md hover:bg-brand-600 transition-colors mt-4 md:mt-0 self-start">
                          Register
                        </button>
                      </div>
                    </Card>
                  </FadeIn>
                ))}
              </TabsContent>
            </Tabs>

            <div className="mt-16 bg-neutral-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <FadeIn>
                  <h2 className="text-2xl font-semibold">Community Leaders</h2>
                </FadeIn>
                <FadeIn delay="100ms">
                  <p className="text-neutral-600 mt-2">Meet our experienced mentors and group facilitators</p>
                </FadeIn>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FadeIn key={index} delay={`${index * 100}ms`}>
                    <div className="flex flex-col items-center">
                      <Avatar className="w-20 h-20 border-2 border-brand-200">
                        <AvatarImage src={`/placeholder.svg`} />
                        <AvatarFallback>
                          {['JD', 'SB', 'ML', 'AW', 'KP'][index]}
                        </AvatarFallback>
                      </Avatar>
                      <h4 className="font-medium mt-3">
                        {['Jennifer Davis', 'Sarah Brown', 'Michelle Lee', 'Amy Wilson', 'Kate Parker'][index]}
                      </h4>
                      <p className="text-sm text-neutral-500 mt-1">
                        {['Group Lead', 'Therapist', 'Mentor', 'Counselor', 'Peer Support'][index]}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-neutral-900 py-12 text-neutral-400 text-sm text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2025 ReStore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
