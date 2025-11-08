"use client";
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { SparklesCore } from "./sparkles";

interface CompareProps {
  firstImage?: string;
  secondImage?: string;
  className?: string;
  firstImageClassName?: string;
  secondImageClassname?: string;
  initialSliderPercentage?: number;
  slideMode?: "hover" | "drag";
  showHandlebar?: boolean;
  autoplay?: boolean;
  autoplayDuration?: number;
}

export const Compare = ({
  firstImage = "",
  secondImage = "",
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 50,
  slideMode = "hover",
  showHandlebar = true,
  autoplay = false,
  autoplayDuration = 5000,
}: CompareProps) => {
  const [sliderXPercent, setSliderXPercent] = useState(
    initialSliderPercentage
  );
  const [isDragging, setIsDragging] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);

  const [isAutoPlaying, setIsAutoPlaying] = useState(autoplay);

  useEffect(() => {
    if (autoplay) {
      setIsAutoPlaying(true);
    }
  }, [autoplay]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      if (!isMouseOver && !isDragging) {
        setSliderXPercent((prev) => {
          const next = prev + 10;
          return next > 100 ? 0 : next;
        });
      }
    }, autoplayDuration / 10);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isMouseOver, isDragging, autoplayDuration]);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!sliderRef.current) return;
      if (slideMode === "hover" || isDragging) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const percent = (x / rect.width) * 100;
        requestAnimationFrame(() => {
          setSliderXPercent(Math.max(0, Math.min(100, percent)));
        });
      }
    },
    [slideMode, isDragging]
  );

  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (slideMode === "drag") {
        setIsDragging(true);
        handleMouseMove(event);
      }
    },
    [slideMode, handleMouseMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsMouseOver(true);
    setIsAutoPlaying(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsMouseOver(false);
    setIsDragging(false);
    if (autoplay) {
      setIsAutoPlaying(true);
    }
  }, [autoplay]);

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mouseup", handleGlobalMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      className={cn("relative w-full overflow-hidden", className)}
      style={{
        cursor: slideMode === "drag" ? "ew-resize" : "col-resize",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <AnimatePresence initial={false}>
        <motion.div
          className="relative h-full w-full"
          style={{
            clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
          }}
        >
          <img
            alt="first image"
            src={firstImage}
            className={cn(
              "pointer-events-none absolute inset-0 h-full w-full select-none",
              firstImageClassName
            )}
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>
      <motion.div
        className="relative h-full w-full"
        style={{
          clipPath: `inset(0 0 0 ${sliderXPercent}%)`,
        }}
      >
        <img
          alt="second image"
          src={secondImage}
          className={cn(
            "pointer-events-none absolute inset-0 h-full w-full select-none",
            secondImageClassname
          )}
          draggable={false}
        />
      </motion.div>
      {showHandlebar && (
        <motion.div
          className="absolute top-0 bottom-0 w-1 z-30"
          style={{
            left: `${sliderXPercent}%`,
            top: "0",
            height: "100%",
          }}
        >
          <div className="relative h-full w-full">
            {/* Vertical line with gradient */}
            <motion.div
              className="h-full w-px absolute top-0 m-auto z-30 bg-gradient-to-b from-transparent from-[5%] to-[95%] via-secondary to-transparent"
              style={{
                boxShadow: "0 0 10px 2px hsl(var(--secondary))",
              }}
            />
            
            {/* Handle circle */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 z-30 rounded-full bg-secondary border-2 border-background shadow-lg flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-4 h-4 rounded-full bg-background/50 backdrop-blur-sm" />
              {/* Sparkles effect on the handle */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={400}
                  className="w-full h-full"
                  particleColor="hsl(var(--secondary))"
                />
              </div>
            </motion.div>

            {/* Left glow */}
            <div className="w-10 h-1/2 [mask-image:radial-gradient(50px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-secondary via-transparent to-transparent z-10 opacity-100" />
            
            {/* Right glow */}
            <div className="w-10 h-1/2 [mask-image:radial-gradient(50px_at_right,white,transparent)] absolute top-1/2 -translate-y-1/2 right-0 bg-gradient-to-l from-secondary via-transparent to-transparent z-10 opacity-100" />
          </div>
        </motion.div>
      )}
    </div>
  );
};
