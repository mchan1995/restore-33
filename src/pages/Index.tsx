
import { Assessment } from "@/components/Assessment";
import { Community } from "@/components/Community";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { TherapyPlan } from "@/components/TherapyPlan";
import { FadeIn } from "@/components/FadeIn";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Assessment />
        <TherapyPlan />
        <Community />
        <FadeIn>
          <section id="cta" className="py-16 bg-brand-50">
            <div className="section-container text-center">
              <h2 className="mb-4">Your Journey to Pelvic Health Starts Today</h2>
              <p className="subtitle mx-auto mb-8">
                Let's take the first step together—personalized guidance is just a click away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#assessment" 
                  className="btn-primary"
                >
                  Start My AI Pelvic Health Assessment →
                </a>
                <a 
                  href="#" 
                  className="btn-secondary"
                >
                  Learn More About Pelvic Health
                </a>
                <a 
                  href="#community" 
                  className="btn-secondary"
                >
                  Join the Community for Support
                </a>
              </div>
            </div>
          </section>
        </FadeIn>
      </main>
      <footer className="bg-neutral-100 py-8">
        <div className="section-container">
          <div className="text-center text-neutral-500 text-sm">
            <p>© 2024 WomenHealth360. All rights reserved.</p>
            <p className="mt-2">AI-Powered Pelvic Health Therapy</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
