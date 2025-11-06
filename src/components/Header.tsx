import { Moon, Sun, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Set dark mode as default on initial load
    document.documentElement.classList.add("dark");
    setIsDark(true);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium hover:text-secondary transition-colors">
              Services
            </a>
            <a href="#process" className="text-sm font-medium hover:text-secondary transition-colors">
              How It Works
            </a>
            <a href="#why-us" className="text-sm font-medium hover:text-secondary transition-colors">
              Why Us
            </a>
            <a href="#case-studies" className="text-sm font-medium hover:text-secondary transition-colors">
              Case Studies
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Projects Board Link */}
            <a
              href="#"
              className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-secondary transition-colors"
            >
              Projects Board
              <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                Join 300K+
              </span>
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-muted transition-all duration-300 transform hover:rotate-180"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

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
              className="block py-2 text-sm font-medium hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#process"
              className="block py-2 text-sm font-medium hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#why-us"
              className="block py-2 text-sm font-medium hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Us
            </a>
            <a
              href="#case-studies"
              className="block py-2 text-sm font-medium hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
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
