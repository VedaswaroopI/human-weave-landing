import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const statCards = [
  {
    number: "99%",
    versus: "vs 100%",
    headline: "The Accuracy Gap That Matters",
    description: "In healthcare AI and autonomous vehicles, that 1% is the difference between life and death.",
  },
  {
    number: "Global",
    versus: "≠ Universal",
    headline: "What Works in SF Fails in Singapore",
    description: "Cultural context isn't optional. One size never fits all when humans are involved.",
  },
  {
    number: "1 Error",
    versus: "= Trust Lost",
    headline: "Years of Work Destroyed in Seconds",
    description: "A single bias, mistranslation, or bug can tank your product's reputation overnight.",
  },
];

export const RealitySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Eyebrow + Question */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4">
            THE REALITY
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Every AI breakthrough starts with a human decision
          </h2>
        </div>

        {/* Stat Cards - Horizontal Scroll on Mobile */}
        <div className="relative">
          {/* Gradient overlays for scroll hint */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none z-10 md:hidden" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none z-10 md:hidden" />

          <div
            className={`flex overflow-x-auto md:justify-center gap-6 pb-4 snap-x snap-mandatory scrollbar-hide transition-opacity duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {statCards.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-[300px] snap-center glassmorphic bg-card/50 border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-300 relative"
              >
                <GlowingEffect
                  spread={50}
                  glow={true}
                  disabled={false}
                  proximity={80}
                  inactiveZone={0.05}
                  borderWidth={2}
                  movementDuration={2.5}
                />
                {/* Number Display */}
                <div className="mb-4">
                  <div className="text-5xl sm:text-6xl font-bold gradient-text">
                    {card.number}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-muted-foreground mt-1">
                    {card.versus}
                  </div>
                </div>

                {/* Headline */}
                <h3 className="text-lg sm:text-xl font-bold mb-3 leading-tight">
                  {card.headline}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bridge Statement with Link */}
        <div
          className={`text-center max-w-3xl mx-auto mt-12 sm:mt-16 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text animate-gradient mb-6">
            That's where 300,000 expert humans come in.
          </p>
          <Link 
            to="/why-us" 
            className="inline-block text-base sm:text-lg text-secondary hover:text-secondary/80 underline transition-colors"
          >
            Discover why our network stands apart →
          </Link>
        </div>
      </div>
    </section>
  );
};
