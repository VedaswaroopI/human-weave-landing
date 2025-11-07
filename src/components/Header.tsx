import { Menu, Home, Wrench, Route, Award } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { TubelightNavbar } from "./ui/tubelight-navbar";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Services", url: "#services", icon: Wrench },
    { name: "How It Works", url: "#process", icon: Route },
    { name: "Why Us", url: "#why-us", icon: Award },
    { name: "Case Studies", url: "#case-studies", icon: Home },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphic bg-card/80 border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl sm:text-2xl font-bold">
              <span className="gradient-text animate-gradient">UsergyAI</span>
            </div>
          </div>

          {/* Desktop Navigation with Tubelight Effect */}
          <nav className="hidden md:flex items-center">
            <TubelightNavbar items={navItems} />
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Projects Board Link */}
            <a
              href="#"
              className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-secondary transition-colors"
            >
              Projects Board
              <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-base font-semibold">
                Join 300K+
              </span>
            </a>


            {/* CTA Button */}
            <Button
              className="hidden sm:inline-flex bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Talk to Us
            </Button>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50 space-y-3">
            <a
              href="#services"
              className="block py-2 text-base font-medium hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#process"
              className="block py-2 text-base font-medium hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#why-us"
              className="block py-2 text-base font-medium hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Us
            </a>
            <a
              href="#case-studies"
              className="block py-2 text-base font-medium hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </a>
            <a
              href="#"
              className="flex items-center gap-2 py-2 text-base font-medium hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects Board
              <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-sm font-semibold">
                Join 300K+
              </span>
            </a>
            <Button className="w-full mt-2 bg-gradient-to-r from-secondary to-secondary/90">
              Talk to Us
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
