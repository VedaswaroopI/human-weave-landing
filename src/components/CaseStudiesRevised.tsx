import { ArrowRight, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { allCaseStudies } from "@/lib/case-studies-db";
import { Link } from "react-router-dom";

const displayedCases = allCaseStudies.slice(0, 6).map((study) => ({
  slug: study.slug,
  industry: study.industry.toUpperCase(),
  headline: study.title,
  metric: study.metricValue,
  metricLabel: study.metricLabel,
  story: study.challenge.body.slice(0, 150) + "...",
  color: study.tags.includes("Healthcare") ? "from-secondary to-accent" :
         study.tags.includes("Autonomous Vehicles") ? "from-primary to-secondary" :
         study.tags.includes("Global SaaS") ? "from-accent to-primary" :
         study.tags.includes("Voice AI") ? "from-primary to-accent" :
         study.tags.includes("E-commerce") ? "from-secondary to-primary" :
         "from-accent to-secondary",
  icon: study.results.keyStats[0].icon,
}));

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

        <div className="relative group">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />

          <div ref={scrollContainerRef} className="flex overflow-x-auto overflow-y-hidden gap-6 py-8 snap-x snap-mandatory scrollbar-hide">
            {displayedCases.map((caseStudy, index) => {
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

                  <div className="inline-block px-2 py-1 rounded-full bg-accent/10 text-accent text-sm font-bold uppercase mb-3">
                    {caseStudy.industry}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-3 leading-tight">
                    {caseStudy.headline}
                  </h3>

                  <div className="mb-3">
                    <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${caseStudy.color} bg-clip-text text-transparent`}>
                      {caseStudy.metric}
                    </div>
                    <p className="text-sm text-muted-foreground">{caseStudy.metricLabel}</p>
                  </div>

                  <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                    {caseStudy.story}
                  </p>

                  <Link to={`/case-studies/${caseStudy.slug}`} className="text-base font-semibold text-secondary flex items-center gap-2 hover:gap-3 transition-all">
                    Read Story <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {displayedCases.map((_, i) => (
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

          {/* Scroll hint - Mobile only */}
          <div className="md:hidden flex items-center justify-center gap-2 mt-4 text-base text-secondary font-medium animate-pulse">
            <ChevronRight className="w-5 h-5" />
            <span>Swipe for more stories</span>
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};
