import { Heart, Car, Globe, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const caseStudies = [
  {
    icon: Heart,
    industry: "Healthcare",
    headline: "99.8% Accuracy on 2M Medical Images",
    metric: "99.8%",
    result: "Annotated 2M medical images with perfect precision for FDA-compliant AI diagnostics",
    color: "from-secondary to-accent",
  },
  {
    icon: Car,
    industry: "Autonomous Vehicles",
    headline: "Trained the AI Behind Self-Driving Cars",
    metric: "50M+",
    result: "50M+ road scenarios annotated by automotive experts across 15 countries",
    color: "from-primary to-secondary",
  },
  {
    icon: Globe,
    industry: "Global SaaS",
    headline: "Launched in 20 Markets Simultaneously",
    metric: "20",
    result: "Perfect localization in 20 languages with 0 cultural mishaps—in just 3 weeks",
    color: "from-accent to-primary",
  },
];

export const CaseStudies = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [counters, setCounters] = useState<{ [key: number]: number }>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleCards((prev) => [...new Set([...prev, index])]);
            
            // Animate counter
            const targetMetric = caseStudies[index].metric;
            const numericValue = parseFloat(targetMetric);
            
            if (!isNaN(numericValue)) {
              let current = 0;
              const increment = numericValue / 50;
              const timer = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                  setCounters((prev) => ({ ...prev, [index]: numericValue }));
                  clearInterval(timer);
                } else {
                  setCounters((prev) => ({ ...prev, [index]: current }));
                }
              }, 20);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="case-studies" ref={sectionRef} className="py-16 sm:py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            See <span className="gradient-text animate-gradient">UsergyAI</span> in Action
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">Real Projects. Real Results.</p>
        </div>

        {/* Cards - Horizontal Scroll on Mobile */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-4 md:pb-0 snap-x snap-mandatory md:snap-none max-w-6xl mx-auto">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            const isVisible = visibleCards.includes(index);
            const counter = counters[index] || 0;

            return (
              <div
                key={index}
                data-index={index}
                className={`flex-shrink-0 w-[85vw] md:w-auto snap-center glassmorphic bg-card border border-border rounded-3xl p-6 sm:p-8 hover-lift group transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${study.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Industry Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4 uppercase tracking-wide">
                  {study.industry}
                </div>

                {/* Headline */}
                <h3 className="text-xl sm:text-2xl font-bold mb-6 leading-tight">{study.headline}</h3>

                {/* Animated Metric */}
                <div className="mb-6">
                  <div className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>
                    {study.metric.includes("%") ? `${counter.toFixed(1)}%` : 
                     study.metric.includes("M") ? `${counter.toFixed(0)}M+` : 
                     counter.toFixed(0)}
                  </div>
                </div>

                {/* Result */}
                <p className="text-sm sm:text-base text-muted-foreground mb-6">{study.result}</p>

                {/* CTA */}
                <button className="text-sm font-semibold text-secondary flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Scroll Hint for Mobile */}
        <div className="md:hidden text-center mt-4 text-sm text-muted-foreground">
          ← Swipe to see more →
        </div>
      </div>
    </section>
  );
};
