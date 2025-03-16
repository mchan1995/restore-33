
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useHasScrolled } from "@/lib/animations";
import { CtaButton } from "./CtaButton";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hasScrolled = useHasScrolled(20);

  // Close the menu when pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Assessments", href: "#assessment" },
    { name: "Therapy Plans", href: "#therapy" },
    { name: "Community", href: "#community" },
    { name: "Resources", href: "#resources" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out",
        hasScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </div>
              <span className="text-neutral-900 font-display text-xl font-semibold">
                WomenHealth360
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-neutral-700 hover:text-brand-600 text-sm font-medium transition-colors link-underline py-1"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <CtaButton href="#assessment" size="md">
              Start Free Assessment
            </CtaButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] bg-white z-40 md:hidden transition-all duration-300 ease-in-out transform",
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <nav className="h-full p-4 pt-8 flex flex-col">
          <div className="space-y-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-neutral-900 text-xl font-medium hover:text-brand-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="mt-auto pt-8">
            <CtaButton
              href="#assessment"
              size="lg"
              className="w-full justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Free Assessment
            </CtaButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
