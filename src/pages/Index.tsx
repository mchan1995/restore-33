
import { Assessment } from "@/components/Assessment";
import { Community } from "@/components/Community";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Resources } from "@/components/Resources";
import { TherapyPlan } from "@/components/TherapyPlan";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Assessment />
        <TherapyPlan />
        <Community />
        <Resources />
      </main>
      <footer className="bg-neutral-900 py-12 text-neutral-400 text-sm text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2025 ReStore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
