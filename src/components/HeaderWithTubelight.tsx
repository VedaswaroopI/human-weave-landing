'use client'

import { Moon, Sun, Briefcase, Home, Users, FileText, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { TubelightNavBar } from "./ui/tubelight-navbar";
import { motion, AnimatePresence } from "framer-motion";

export const HeaderWithTubelight = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'Services', url: '#services', icon: Briefcase },
    { name: 'Process', url: '#process', icon: Users },
    { name: 'Case Studies', url: '#case-studies', icon: FileText }
  ];

  return (
    <>
      {/* Desktop Tubelight Navigation */}
      <div className="hidden md:block">
        <motion.div
          initial={prefersReducedMotion ? {} : { y: -100, opacity: 0 }}
          animate={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <TubelightNavBar items={navItems} />
        </motion.div>
      </div>

      {/* Mobile: Compact Header */}
      <motion.div 
        className="md:hidden fixed top-0 left-0 right-0 z-50 px-4 py-4"
        initial={prefersReducedMotion ? {} : { y: -50, opacity: 0 }}
        animate={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between bg-background/80 dark:bg-background/60 backdrop-blur-xl border border-border/50 rounded-full px-4 py-2 shadow-lg">
          {/* Logo */}
          <div className="text-lg font-bold gradient-text">Human Weave</div>
          
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
            
            {/* Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 px-4">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.url}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-4 text-2xl font-bold hover:text-primary transition-colors"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon className="w-6 h-6" />
                    {item.name}
                  </motion.a>
                );
              })}
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Button className="bg-gradient-to-r from-secondary to-secondary/90">
                  Talk to Us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Actions Bar */}
      <motion.div 
        className="hidden md:flex fixed top-6 right-6 z-50 items-center gap-3"
        initial={prefersReducedMotion ? {} : { x: 100, opacity: 0 }}
        animate={prefersReducedMotion ? {} : { x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <a
          href="#"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/5 dark:bg-background/10 border border-border backdrop-blur-lg text-sm font-medium hover:text-secondary transition-colors shadow-sm"
        >
          Projects Board
          <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-semibold">
            Join 300K+
          </span>
        </a>

        {mounted && (
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full bg-background/5 dark:bg-background/10 border border-border backdrop-blur-lg hover:bg-muted transition-all duration-300 transform hover:rotate-180 shadow-sm"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        )}

        <Button
          className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
        >
          Talk to Us
        </Button>
      </motion.div>
    </>
  );
};
