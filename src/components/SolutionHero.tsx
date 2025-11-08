// src/components/SolutionHero.tsx
"use client";

import { useEffect, useRef } from "react";
import { ParticleButton } from "@/components/ui/particle-button";
import { ArrowRight } from "lucide-react";

// --- Beam logic from the original component ---
interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
  layer: number;
}

function createBeam(width: number, height: number, layer: number): Beam {
  const angle = -35 + Math.random() * 10;
  const baseSpeed = 0.2 + layer * 0.2;
  // Use our theme's primary color: hsl(237, 75%, 70%)
  const baseOpacity = 0.08 + layer * 0.05;
  const baseWidth = 10 + layer * 5;
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    width: baseWidth,
    length: height * 2.5,
    angle,
    speed: baseSpeed + Math.random() * 0.2,
    opacity: baseOpacity + Math.random() * 0.1,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.01 + Math.random() * 0.015,
    layer,
  };
}
// --- End of Beam logic ---

// --- Reusable, themed component ---
interface SolutionHeroProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
}

export const SolutionHero = ({
  badge,
  title,
  subtitle,
}: SolutionHeroProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const noiseRef = useRef<HTMLCanvasElement>(null);
  const beamsRef = useRef<Beam[]>([]);
  const animationFrameRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const LAYERS = 3;
  const BEAMS_PER_LAYER = 8;

  // Use a ResizeObserver to fit the canvas to the section
  useEffect(() => {
    const canvas = canvasRef.current;
    const noiseCanvas = noiseRef.current;
    const container = containerRef.current;
    if (!canvas || !noiseCanvas || !container) return;

    const ctx = canvas.getContext("2d");
    const nCtx = noiseCanvas.getContext("2d");
    if (!ctx || !nCtx) return;

    const dpr = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      const { clientWidth: width, clientHeight: height } = container;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      noiseCanvas.width = width * dpr;
      noiseCanvas.height = height * dpr;
      noiseCanvas.style.width = `${width}px`;
      noiseCanvas.style.height = `${height}px`;
      nCtx.setTransform(1, 0, 0, 1, 0, 0);
      nCtx.scale(dpr, dpr);

      beamsRef.current = [];
      for (let layer = 1; layer <= LAYERS; layer++) {
        for (let i = 0; i < BEAMS_PER_LAYER; i++) {
          beamsRef.current.push(createBeam(width, height, layer));
        }
      }
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(container);
    resizeCanvas();

    const generateNoise = () => {
      const imgData = nCtx.createImageData(noiseCanvas.width, noiseCanvas.height);
      for (let i = 0; i < imgData.data.length; i += 4) {
        const v = Math.random() * 255;
        imgData.data[i] = v;
        imgData.data[i + 1] = v;
        imgData.data[i + 2] = v;
        imgData.data[i + 3] = 8;
      }
      nCtx.putImageData(imgData, 0, 0);
    };

    const drawBeam = (beam: Beam) => {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity = Math.min(
        1,
        beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.4),
      );
      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);

      // THEME CUSTOMIZATION: Use our primary color
      // HSL(237, 75%, 70%) -> RGBA(179, 198, 249, ...)
      const color = "179, 198, 249"; 

      gradient.addColorStop(0, `rgba(${color}, 0)`);
      gradient.addColorStop(0.2, `rgba(${color}, ${pulsingOpacity * 0.5})`);
      gradient.addColorStop(0.5, `rgba(${color}, ${pulsingOpacity})`);
      gradient.addColorStop(0.8, `rgba(${color}, ${pulsingOpacity * 0.5})`);
      gradient.addColorStop(1, `rgba(${color}, 0)`);

      ctx.fillStyle = gradient;
      ctx.filter = `blur(${2 + beam.layer * 2}px)`;
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
    };

    const animate = () => {
      if (!canvas || !ctx) return;

      // THEME CUSTOMIZATION: Use CSS variables for background
      const computedStyle = getComputedStyle(container);
      const bgColor = computedStyle.getPropertyValue('--background').trim();
      
      ctx.fillStyle = `hsl(${bgColor || '205 25% 8%'})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      beamsRef.current.forEach((beam) => {
        beam.y -= beam.speed * (beam.layer / LAYERS + 0.5);
        beam.pulse += beam.pulseSpeed;
        if (beam.y + beam.length < -50) {
          beam.y = container.clientHeight + 50;
          beam.x = Math.random() * container.clientWidth;
        }
        drawBeam(beam);
      });

      generateNoise();
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24"
    >
      <canvas ref={noiseRef} className="absolute inset-0 z-0 pointer-events-none" />
      <canvas ref={canvasRef} className="absolute inset-0 z-10" />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center gap-6 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold tracking-wider uppercase">
            {badge}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-3xl">
            {subtitle}
          </p>

          <div className="pt-4">
            <ParticleButton
              asChild
              size="lg"
              className="h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary hover:shadow-lg hover:-translate-y-0.5"
            >
              <a
                href="https://calendly.com/swaroop-usergy/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </ParticleButton>
          </div>
        </div>
      </div>
    </section>
  );
};
