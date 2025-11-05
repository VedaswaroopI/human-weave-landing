import { Search, Globe, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const challenges = [
  {
    icon: Search,
    question: "Will your data be precise enough?",
    description: "99% accuracy isn't 100%. In healthcare, autonomous vehicles, and finance, that 1% matters.",
  },
  {
    icon: Globe,
    question: "Will your product work everywhere?",
    description: "What works in English might fail in Japanese. What's clear in California might confuse in Cairo.",
  },
  {
    icon: Shield,
    question: "Will your users trust it?",
    description: "One bug, one mistranslation, one bias can destroy years of work in seconds.",
  },
];

export const ChallengeSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Eyebrow */}
        <div className="text-center mb-6">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            The Reality
          </p>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Every AI breakthrough starts with a human decision:
          </h2>
        </div>

        {/* Three Column Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={index}
                data-index={index}
                className={`text-center space-y-4 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20">
                    <Icon className="w-full h-full text-muted-foreground" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Question */}
                <h3 className="text-xl sm:text-2xl font-bold px-4">{challenge.question}</h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-2">
                  {challenge.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Transition Text */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text animate-gradient">
            That's where 300,000 expert humans come in.
          </p>
        </div>
      </div>
    </section>
  );
};
