
import { Assessment } from "@/components/Assessment";
import { Community } from "@/components/Community";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { TherapyPlan } from "@/components/TherapyPlan";
import { FadeIn } from "@/components/FadeIn";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-200 via-pink-100 to-white">
      <div className="absolute top-0 left-0 w-full h-full bg-pink-100/30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-200/40 via-transparent to-transparent pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-200/40 via-transparent to-transparent pointer-events-none -z-10"></div>
      
      <Navbar />
      <main>
        <Hero />
        <Assessment />
        <TherapyPlan />
        <Community />
        <FadeIn>
          <section id="cta" className="py-16 bg-pink-100">
            <div className="section-container text-center">
              <h2 className="mb-4 text-pink-900">Your Journey to Pelvic Health Starts Today</h2>
              <p className="subtitle mx-auto mb-8 text-pink-700">
                Let's take the first step together—personalized guidance is just a click away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#assessment" 
                  className="btn-primary bg-pink-500 hover:bg-pink-600 focus:ring-pink-500"
                >
                  Start My AI Pelvic Health Assessment →
                </a>
                <a 
                  href="#" 
                  className="btn-secondary border-pink-300 text-pink-700 hover:bg-pink-100 hover:border-pink-400"
                >
                  Learn More About Pelvic Health
                </a>
                <a 
                  href="#community" 
                  className="btn-secondary border-pink-300 text-pink-700 hover:bg-pink-100 hover:border-pink-400"
                >
                  Join the Community for Support
                </a>
              </div>
            </div>
          </section>
        </FadeIn>
      </main>
      <footer className="bg-pink-200 py-8">
        <div className="section-container">
          <div className="text-center text-pink-700 text-sm">
            <p>© 2025 ReStore. All rights reserved.</p>
            <p className="mt-2">AI-Powered Pelvic Health Therapy</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
