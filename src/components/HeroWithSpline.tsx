'use client'

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Spotlight } from "./ui/spotlight";
import { SplineErrorBoundary } from "./error-boundary-spline";
import { OptimizedSplineScene } from "./OptimizedSplineScene";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const HeroWithSpline = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient that adapts to theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      
      {/* Main Hero Card */}
      <Card className="relative w-full min-h-[calc(85vh-80px)] bg-background/80 dark:bg-background/95 backdrop-blur-xl border-border/40 shadow-2xl mx-4 sm:mx-6">
        {mounted && (
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            size={300}
          />
        )}
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 h-full items-center p-6 md:p-12 lg:p-16">
          {/* Left Content Section */}
          <div className="relative z-10 flex flex-col justify-center space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Small Text */}
            <div className="animate-fadeInUp opacity-0" style={{ animationDelay: "0.2s" }}>
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                300,000+ Humans Powering AI
              </p>
            </div>

            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fadeInUp opacity-0" style={{ animationDelay: "0.4s" }}>
                The Humans Behind<br />
                <span className="gradient-text animate-gradient">Your AI Breakthrough</span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed animate-fadeInUp opacity-0" style={{ animationDelay: "0.6s" }}>
              From data annotation to global testing to 150+ languages, we're the expert human network that transforms your AI vision into reality—with 99.5%+ accuracy and enterprise security.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-start pt-4 animate-fadeInUp opacity-0" style={{ animationDelay: "0.8s" }}>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              >
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 hover:bg-secondary/10 hover:border-secondary transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              >
                Meet Our Network
              </Button>
            </div>
          </div>

          {/* Right Content - Spline 3D Scene */}
          <div className="relative lg:h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] order-1 lg:order-2">
            {/* Decorative gradient background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl blur-3xl" />
            
            {/* Spline Scene Container */}
            <div className="relative h-full rounded-2xl overflow-hidden border border-border/50 bg-muted/30 dark:bg-muted/10 backdrop-blur-sm shadow-inner">
              <SplineErrorBoundary>
                <OptimizedSplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </SplineErrorBoundary>
            </div>

            {/* Floating UI Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 dark:bg-primary/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 dark:bg-secondary/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "700ms" }} />
          </div>
        </div>
      </Card>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
