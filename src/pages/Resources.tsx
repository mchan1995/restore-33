
import { FadeIn } from "@/components/FadeIn";
import { Navbar } from "@/components/Navbar";
import { 
  FileText, 
  BookOpen, 
  Video, 
  Download, 
  ExternalLink 
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Resources() {
  const articles = [
    {
      title: "Understanding Postpartum Depression",
      category: "Mental Health",
      excerpt: "Learn about the signs, symptoms, and treatments for postpartum depression.",
      readTime: "8 min read",
      date: "May 15, 2023"
    },
    {
      title: "Nutrition for Recovery After Childbirth",
      category: "Nutrition",
      excerpt: "Essential nutrients and meal ideas to support your body's healing process.",
      readTime: "12 min read",
      date: "April 28, 2023"
    },
    {
      title: "Physical Therapy Exercises for Postpartum Recovery",
      category: "Physical Health",
      excerpt: "Safe and effective exercises to rebuild strength and address common postpartum physical challenges.",
      readTime: "10 min read",
      date: "June 02, 2023"
    },
    {
      title: "Sleep Strategies for New Mothers",
      category: "Wellbeing",
      excerpt: "Practical tips for improving sleep quality despite the challenges of caring for a newborn.",
      readTime: "7 min read",
      date: "May 22, 2023"
    }
  ];

  const videos = [
    {
      title: "Guided Meditation for Postpartum Anxiety",
      duration: "15 min",
      instructor: "Dr. Lisa Thompson",
      thumbnail: "/placeholder.svg"
    },
    {
      title: "Gentle Yoga for Postpartum Recovery",
      duration: "25 min",
      instructor: "Sarah Wilson, PT",
      thumbnail: "/placeholder.svg"
    },
    {
      title: "Understanding Baby's Sleep Cycles",
      duration: "20 min",
      instructor: "Dr. James Martin",
      thumbnail: "/placeholder.svg"
    }
  ];

  const downloads = [
    {
      title: "Postpartum Recovery Checklist",
      fileType: "PDF",
      fileSize: "1.2 MB",
      description: "A comprehensive checklist to track your recovery progress."
    },
    {
      title: "Meal Planning Templates",
      fileType: "PDF",
      fileSize: "850 KB",
      description: "Weekly meal planning templates with nutritious recipe ideas."
    },
    {
      title: "Daily Self-Care Tracker",
      fileType: "PDF",
      fileSize: "720 KB",
      description: "Track your self-care activities and mood patterns."
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
                  <span className="text-gradient">Resources</span>
                </h1>
              </FadeIn>
              <FadeIn delay="100ms">
                <p className="max-w-3xl mx-auto text-lg text-neutral-600">
                  Educational materials and resources to support your recovery
                </p>
              </FadeIn>
            </div>
            
            <Tabs defaultValue="articles" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
                <TabsTrigger value="articles">Articles</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="downloads">Downloads</TabsTrigger>
              </TabsList>

              <TabsContent value="articles" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {articles.map((article, index) => (
                    <FadeIn key={index} delay={`${index * 100}ms`}>
                      <Card className="h-full hover:shadow-md transition-shadow">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <Badge variant="outline" className="bg-brand-50 text-brand-700 hover:bg-brand-50">
                              {article.category}
                            </Badge>
                            <div className="text-sm text-neutral-500">{article.date}</div>
                          </div>
                          <CardTitle className="mt-2">{article.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-neutral-600">{article.excerpt}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <div className="text-sm text-neutral-500 flex items-center">
                            <FileText className="mr-1 h-4 w-4" />
                            {article.readTime}
                          </div>
                          <button className="text-brand-600 hover:text-brand-700 font-medium text-sm flex items-center">
                            Read Article
                            <ExternalLink className="ml-1 h-4 w-4" />
                          </button>
                        </CardFooter>
                      </Card>
                    </FadeIn>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="videos" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {videos.map((video, index) => (
                    <FadeIn key={index} delay={`${index * 100}ms`}>
                      <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
                        <div className="aspect-video bg-neutral-100 relative">
                          <img 
                            src={video.thumbnail} 
                            alt={video.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/80 backdrop-blur-sm rounded-full p-3">
                              <Video className="h-6 w-6 text-brand-600" />
                            </div>
                          </div>
                        </div>
                        <CardContent className="pt-4">
                          <h3 className="font-semibold text-lg">{video.title}</h3>
                          <div className="flex items-center mt-2 text-sm text-neutral-600">
                            <span>{video.instructor}</span>
                            <span className="mx-2">•</span>
                            <span>{video.duration}</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <button className="text-brand-600 hover:text-brand-700 font-medium text-sm">
                            Watch Video
                          </button>
                        </CardFooter>
                      </Card>
                    </FadeIn>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="downloads" className="space-y-6">
                {downloads.map((download, index) => (
                  <FadeIn key={index} delay={`${index * 100}ms`}>
                    <Card className="hover:shadow-sm transition-shadow">
                      <div className="p-5 flex items-center gap-4">
                        <div className="shrink-0 bg-brand-50 text-brand-600 rounded-lg p-3">
                          <Download className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{download.title}</h3>
                          <p className="text-sm text-neutral-600 mt-1">{download.description}</p>
                          <div className="text-sm text-neutral-500 mt-2 flex items-center">
                            <BookOpen className="h-4 w-4 mr-1" /> 
                            {download.fileType} • {download.fileSize}
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-brand-500 text-white rounded-md hover:bg-brand-600 transition-colors">
                          Download
                        </button>
                      </div>
                    </Card>
                  </FadeIn>
                ))}
              </TabsContent>
            </Tabs>
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
