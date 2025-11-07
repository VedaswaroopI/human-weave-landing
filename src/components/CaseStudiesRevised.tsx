import { ArrowRight, Heart, Car, Globe, DollarSign, ShoppingCart, Gamepad } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const allCases = [
  {
    industry: "HEALTHCARE",
    headline: "Training FDA-Approved AI Diagnostics",
    metric: "99.8%",
    metricLabel: "Annotation Accuracy",
    story: "A Fortune 500 healthcare company needed 2M medical images annotated by actual doctors. We delivered in 8 weeks with zero errors.",
    color: "from-secondary to-accent",
    icon: Heart,
  },
  {
    industry: "AUTONOMOUS VEHICLES",
    headline: "Powering Self-Driving Car AI",
    metric: "5M+",
    metricLabel: "Images Labeled",
    story: "Trained computer vision models with pixel-perfect annotation of roads, pedestrians, and obstacles across diverse conditions.",
    color: "from-primary to-secondary",
    icon: Car,
  },
  {
    industry: "GLOBAL SAAS",
    headline: "Launching in 20 Markets Simultaneously",
    metric: "150+",
    metricLabel: "Languages",
    story: "Native speakers localized product, marketing, and support content with cultural authenticity. Zero customer complaints about translation.",
    color: "from-accent to-primary",
    icon: Globe,
  },
  {
    industry: "FINTECH",
    headline: "Zero Errors in Financial Data Processing",
    metric: "100%",
    metricLabel: "Compliance Rate",
    story: "Processed 5M+ financial transactions with certified analysts ensuring regulatory compliance across 12 countries.",
    color: "from-primary to-accent",
    icon: DollarSign,
  },
  {
    industry: "E-COMMERCE",
    headline: "Product Testing Across 12 Countries",
    metric: "12K+",
    metricLabel: "Real Users",
    story: "Real shoppers tested checkout flows in their native languages across diverse payment systems. Increased conversion by 34%.",
    color: "from-secondary to-primary",
    icon: ShoppingCart,
  },
  {
    industry: "GAMING",
    headline: "Bug-Free Launch in 30 Languages",
    metric: "30",
    metricLabel: "Languages",
    story: "Native gamers tested gameplay, found 2,000+ bugs before launch. Zero critical issues post-release. 4.8★ global rating.",
    color: "from-accent to-secondary",
    icon: Gamepad,
  },
];

export const CaseStudiesRevised = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  // Update currentIndex based on scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const updateIndex = () => {
      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      const cards = container.querySelectorAll("[data-index]");
      
      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card) => {
        const index = parseInt(card.getAttribute("data-index") || "0");
        const cardElement = card as HTMLElement;
        const cardCenter = cardElement.offsetLeft + cardElement.offsetWidth / 2;
        const distance = Math.abs(cardCenter - containerCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCurrentIndex(closestIndex);
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateIndex();
          ticking = false;
        });
        ticking = true;
      }
    };

    container.addEventListener("scroll", handleScroll);
    updateIndex(); // Initial update

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Real Projects. <span className="gradient-text">Real Results.</span>
          </h2>
        </div>

        <div className="relative group py-4">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />

          <div ref={scrollContainerRef} className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide overflow-y-visible">
            {allCases.map((caseStudy, index) => {
              const Icon = caseStudy.icon;
              const isVisible = visibleCards.includes(index);

              return (
                <div
                  key={index}
                  data-index={index}
                  className={`flex-shrink-0 w-[85vw] sm:w-[400px] snap-center glassmorphic bg-card border border-border rounded-2xl p-6 hover-lift transition-all duration-700 relative ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                >
                  <GlowingEffect
                    spread={48}
                    glow={true}
                    disabled={false}
                    proximity={90}
                    inactiveZone={0.08}
                    borderWidth={2}
                    movementDuration={2.2}
                  />
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${caseStudy.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="inline-block px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase mb-3">
                    {caseStudy.industry}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-3 leading-tight">
                    {caseStudy.headline}
                  </h3>

                  <div className="mb-3">
                    <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${caseStudy.color} bg-clip-text text-transparent`}>
                      {caseStudy.metric}
                    </div>
                    <p className="text-xs text-muted-foreground">{caseStudy.metricLabel}</p>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {caseStudy.story}
                  </p>

                  <button className="text-sm font-semibold text-secondary flex items-center gap-2 hover:gap-3 transition-all">
                    Read Story <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {allCases.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const container = scrollContainerRef.current;
                  if (!container) return;
                  const cards = container.querySelectorAll("[data-index]");
                  const targetCard = cards[i] as HTMLElement;
                  if (targetCard) {
                    container.scrollTo({
                      left: targetCard.offsetLeft - 20,
                      behavior: "smooth"
                    });
                  }
                }}
                aria-label={`Go to case study ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-300 cursor-pointer hover:scale-110 ${
                  i === currentIndex ? "bg-secondary w-10" : "bg-border w-8"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
