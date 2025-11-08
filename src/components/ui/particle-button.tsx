"use client";

import * as React from "react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "@/components/ui/button";

interface ParticleButtonProps extends ButtonProps {
  onSuccess?: () => void;
  successDuration?: number;
  particleCount?: number;
}

function SuccessParticles({
  buttonRef,
  particleCount = 8,
}: {
  buttonRef: React.RefObject<HTMLButtonElement>;
  particleCount?: number;
}) {
  const rect = buttonRef.current?.getBoundingClientRect();
  if (!rect) return null;

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  return (
    <AnimatePresence>
      {[...Array(particleCount)].map((_, i) => {
        const angle = (i / particleCount) * Math.PI * 2;
        const velocity = 60 + Math.random() * 40;
        
        return (
          <motion.div
            key={i}
            className="fixed w-1.5 h-1.5 rounded-full pointer-events-none z-50"
            style={{
              left: centerX,
              top: centerY,
              background: `linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--primary)), hsl(var(--accent)))`,
              boxShadow: `0 0 8px hsl(var(--secondary)), 0 0 12px hsl(var(--primary))`,
            }}
            initial={{
              scale: 0,
              x: 0,
              y: 0,
              opacity: 1,
            }}
            animate={{
              scale: [0, 1.2, 0],
              x: Math.cos(angle) * velocity,
              y: Math.sin(angle) * velocity - 20,
              opacity: [1, 0.8, 0],
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        );
      })}
    </AnimatePresence>
  );
}

function ParticleButton({
  children,
  onClick,
  onSuccess,
  successDuration = 800,
  particleCount = 8,
  className,
  ...props
}: ParticleButtonProps) {
  const [showParticles, setShowParticles] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowParticles(true);

    if (onClick) {
      onClick(e);
    }

    setTimeout(() => {
      setShowParticles(false);
      if (onSuccess) {
        onSuccess();
      }
    }, successDuration);
  };

  return (
    <>
      {showParticles && (
        <SuccessParticles buttonRef={buttonRef} particleCount={particleCount} />
      )}
      <Button
        ref={buttonRef}
        onClick={handleClick}
        className={cn(
          "relative overflow-hidden",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-secondary/20 before:via-primary/20 before:to-accent/20",
          "before:translate-x-[-100%] hover:before:translate-x-[100%]",
          "before:transition-transform before:duration-700 before:ease-out",
          showParticles && "scale-95",
          "transition-all duration-150",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </>
  );
}

export { ParticleButton };
