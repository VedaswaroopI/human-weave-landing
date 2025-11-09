'use client';

import { OptimizedSplineScene } from "@/components/OptimizedSplineScene";
import { SplineErrorBoundary } from "@/components/error-boundary-spline";
import { motion } from "framer-motion";
import { ParticleButton } from "./ui/particle-button";
import { ArrowDown } from "lucide-react";

const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

export const ProjectBoardHero = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] md:h-screen md:min-h-[700px] w-full overflow-hidden flex items-center justify-center">
      {/* 1. Spline 3D Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-muted/50 to-background">
        <SplineErrorBoundary>
          <OptimizedSplineScene
            scene={ROBOT_SCENE_URL}
            className="w-full h-full"
          />
        </SplineErrorBoundary>
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      </div>

      {/* 2. Content Overlay */}
      <div className="relative z-10 flex flex-col items-center text-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold tracking-wider uppercase">
            CONTRIBUTOR NETWORK
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Join the{" "}
            <span className="gradient-text animate-gradient">Human Weave</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-3xl">
            Your expertise is our greatest asset. Browse active projects,
            find your fit, and apply to be part of the 300,000+ expert
            network powering the future of AI.
          </p>

          <ParticleButton
            size="lg"
            className="h-12 px-8 text-base bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary"
            onClick={() => {
              document.getElementById("projects-grid")?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See Open Projects <ArrowDown className="ml-2 w-4 h-4" />
          </ParticleButton>
        </motion.div>
      </div>
    </section>
  );
};
