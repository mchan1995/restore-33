
import { FadeIn } from "@/components/FadeIn";
import { Navbar } from "@/components/Navbar";
import { TherapyPlan } from "@/components/TherapyPlan";

export default function Therapy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FadeIn>
                <h1 className="text-4xl font-bold mb-4">
                  <span className="text-gradient">Therapy Plans</span>
                </h1>
              </FadeIn>
              <FadeIn delay="100ms">
                <p className="max-w-3xl mx-auto text-lg text-neutral-600">
                  Personalized therapy plans designed for your unique postpartum recovery journey
                </p>
              </FadeIn>
            </div>
            
            <TherapyPlan />
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
