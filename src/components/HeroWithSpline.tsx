'use client';

import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Spotlight } from "./ui/spotlight";
import { SplineErrorBoundary } from "./error-boundary-spline";
import { OptimizedSplineScene } from "./OptimizedSplineScene";
import { useSplinePreload } from "@/hooks/use-spline-preload";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as any
    }
  }
};

const scrollToNextSection = () => {
  const nextSection = document.querySelector('main > section:nth-child(2)');
  if (nextSection) {
    nextSection.scrollIntoView({
      behavior: 'smooth'
    });
  }
};

export const HeroWithSpline = () => {
  // Preload Spline scene on component mount
  useSplinePreload('https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20" role="banner" aria-label="Hero section">
      {/* Background gradient that adapts to theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" aria-hidden="true" />
      
      {/* Main Hero Card */}
      <Card className="relative w-full min-h-[calc(70vh-64px)] md:min-h-[calc(85vh-80px)] bg-background/80 dark:bg-background/95 backdrop-blur-xl border-border/40 shadow-2xl mx-4 sm:mx-6">
        {!prefersReducedMotion && <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" size={300} />}
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 h-full items-center p-6 md:p-12 lg:p-16">
          {/* Left Content Section */}
          <motion.div className="relative z-10 flex flex-col justify-center space-y-6 lg:space-y-8 order-2 lg:order-1" variants={prefersReducedMotion ? {} : container} initial="hidden" animate="show">
            {/* Small Text */}
            <motion.div variants={prefersReducedMotion ? {} : item}>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <p className="text-xs sm:text-sm font-semibold tracking-wider text-green-500 uppercase">
                  300,000+ Humans Powering AI
                </p>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div className="space-y-3 sm:space-y-4" variants={prefersReducedMotion ? {} : item}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                The Humans Behind<br />
                <span className="gradient-text animate-gradient">Your AI Breakthrough</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed" variants={prefersReducedMotion ? {} : item}>
              Expert-led data annotation, multilingual QA, localization, and global testing delivered with 99.5%+ accuracy and enterprise-grade security. SOC 2, HIPAA, and ISO 27001 compliant.
            </motion.p>

            {/* CTAs */}
            <motion.div className="flex flex-col sm:flex-row gap-4 items-start pt-4" variants={prefersReducedMotion ? {} : item}>
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 group" aria-label="Start your AI project">
                Start Your Project 
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 hover:bg-secondary/10 hover:border-secondary transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6" aria-label="Learn about our network">
                Meet Our Network
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Spline 3D Scene (Desktop Only, Hidden on Mobile) */}
          <motion.div className="relative w-full h-full order-1 lg:order-2 hidden lg:block" initial={prefersReducedMotion ? {} : {
          opacity: 0,
          scale: 0.98
        }} animate={prefersReducedMotion ? {} : {
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
            {/* Decorative gradient background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl blur-3xl" aria-hidden="true" />
            
            {/* Spline Scene Container */}
            <div className="relative h-full rounded-2xl overflow-hidden border border-border/50 bg-muted/30 dark:bg-muted/10 backdrop-blur-sm shadow-inner" role="img" aria-label="Interactive 3D visualization">
              <SplineErrorBoundary>
                <OptimizedSplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
              </SplineErrorBoundary>
            </div>

            {/* Floating UI Elements */}
            {!prefersReducedMotion && <>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 dark:bg-primary/30 rounded-full blur-3xl animate-pulse" aria-hidden="true" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 dark:bg-secondary/30 rounded-full blur-2xl animate-pulse" style={{
              animationDelay: "700ms"
            }} aria-hidden="true" />
              </>}
          </motion.div>
        </div>
      </Card>

      {/* Scroll indicator */}
      <button onClick={scrollToNextSection} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full p-2 hover:bg-muted/50 transition-colors" aria-label="Scroll to next section">
        <ChevronDown className="w-6 h-6 text-foreground/50" aria-hidden="true" />
      </button>
    </section>;
};