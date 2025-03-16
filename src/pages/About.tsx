
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { Navbar } from "@/components/Navbar";
import { Award, Building2, GraduationCap, Shield, Stethoscope } from "lucide-react";
import { CtaButton } from "@/components/CtaButton";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-200 via-pink-100 to-white">
      <div className="absolute top-0 left-0 w-full h-full bg-pink-100/30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-200/40 via-transparent to-transparent pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-200/40 via-transparent to-transparent pointer-events-none -z-10"></div>
      
      <Navbar />
      <main>
        <section className="py-24 relative">
          <div className="section-container">
            <FadeIn>
              <h1 className="text-balance text-center mb-8">
                About <span className="text-gradient">ReStore</span>
              </h1>
              <p className="subtitle mx-auto text-center mb-12">
                Learn more about our mission to revolutionize pelvic health therapy through AI-powered personalized care.
              </p>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
              <FadeIn delay="100ms">
                <div className="glass-card p-8 rounded-2xl">
                  <h2 className="text-xl font-medium mb-4 text-pink-900">Our Mission</h2>
                  <p className="text-neutral-700 mb-4">
                    At ReStore, we believe that pelvic health is essential, yet millions of women struggle in silence. Our mission is to make expert pelvic health therapy accessible to everyone, regardless of location or schedule constraints.
                  </p>
                  <p className="text-neutral-700">
                    Whether you're managing postpartum recovery, incontinence, or strengthening your core, our AI-powered therapy adapts to you—providing expert-backed guidance from the comfort of home.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay="200ms">
                <div className="glass-card p-8 rounded-2xl">
                  <h2 className="text-xl font-medium mb-4 text-pink-900">How It Works</h2>
                  <p className="text-neutral-700 mb-4">
                    ReStore combines the expertise of professional pelvic health therapists with the convenience and accessibility of AI technology. Your journey begins with a professional therapist who creates your custom therapy plan.
                  </p>
                  <p className="text-neutral-700">
                    After your initial assessment, you'll continue with AI-supported therapy sessions guided by your therapist's expertise, with regular check-ins to ensure you're making progress toward your goals.
                  </p>
                </div>
              </FadeIn>
            </div>
            
            {/* Trust indicators */}
            <FadeIn delay="300ms">
              <div className="mt-20 pt-10 border-t border-neutral-200">
                <p className="text-center text-neutral-500 text-sm mb-8">Trusted by healthcare professionals worldwide</p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                  <div className="text-neutral-700 flex flex-col items-center gap-2">
                    <div className="h-16 w-16 rounded-full bg-neutral-100 flex items-center justify-center shadow-soft">
                      <Award className="h-8 w-8 text-pink-500" />
                    </div>
                    <span className="text-sm font-medium">APTA</span>
                  </div>
                  
                  <div className="text-neutral-700 flex flex-col items-center gap-2">
                    <div className="h-16 w-16 rounded-full bg-neutral-100 flex items-center justify-center shadow-soft">
                      <GraduationCap className="h-8 w-8 text-pink-500" />
                    </div>
                    <span className="text-sm font-medium">Herman & Wallace</span>
                  </div>
                  
                  <div className="text-neutral-700 flex flex-col items-center gap-2">
                    <div className="h-16 w-16 rounded-full bg-neutral-100 flex items-center justify-center shadow-soft">
                      <Shield className="h-8 w-8 text-pink-500" />
                    </div>
                    <span className="text-sm font-medium">Harvard Medical</span>
                  </div>
                  
                  <div className="text-neutral-700 flex flex-col items-center gap-2">
                    <div className="h-16 w-16 rounded-full bg-neutral-100 flex items-center justify-center shadow-soft">
                      <Stethoscope className="h-8 w-8 text-pink-500" />
                    </div>
                    <span className="text-sm font-medium">Mayo Clinic</span>
                  </div>
                  
                  <div className="text-neutral-700 flex flex-col items-center gap-2">
                    <div className="h-16 w-16 rounded-full bg-neutral-100 flex items-center justify-center shadow-soft">
                      <Building2 className="h-8 w-8 text-pink-500" />
                    </div>
                    <span className="text-sm font-medium">Cleveland Clinic</span>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <div className="mt-16 text-center">
              <FadeIn delay="400ms">
                <CtaButton 
                  href="/"
                  size="lg"
                >
                  Back to Home
                </CtaButton>
              </FadeIn>
            </div>
          </div>
        </section>
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

export default About;
