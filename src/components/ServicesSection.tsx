import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const services = [
  {
    badge: "DATA SERVICES",
    title: "Building AI That Thinks Like Humans",
    description: "From medical imaging annotation by actual doctors to LLM fine-tuning by linguists, we match your project with genuine experts, not crowd workers.",
    color: "from-secondary to-secondary/70",
    visualType: "flow",
    url: "/solutions/data-services",
  },
  {
    badge: "QUALITY ASSURANCE",
    title: "Testing That Catches What Others Miss",
    description: "Real humans on real devices in real-world conditions. From bug hunting to AI model validation, we ensure your product works flawlessly everywhere.",
    color: "from-primary to-primary/70",
    visualType: "grid",
    url: "/solutions/quality-assurance",
  },
  {
    badge: "MULTILINGUAL",
    title: "Speak Every Language, Respect Every Culture",
    description: "Native speakers who understand context, not just words. Translation and localization in 150+ languages with zero cultural mishaps.",
    color: "from-accent to-accent/70",
    visualType: "speech",
    url: "/solutions/multilingual",
  },
  {
    badge: "ENTERPRISE & BPO",
    title: "Scale Without the Growing Pains",
    description: "From customer support to data management, we give you expert human capacity on demand with no hiring headaches, no overhead.",
    color: "from-secondary via-primary to-accent",
    visualType: "network",
    url: "/solutions/enterprise-bpo",
  },
  {
    badge: "CONTENT MODERATION",
    title: "Keeping Your Platform Safe",
    description: "Human moderators trained in cultural nuance review content 24/7, ensuring your community stays healthy without over-moderation.",
    color: "from-secondary to-accent",
    visualType: "shield",
    url: "/solutions/content-moderation",
  },
  {
    badge: "RESEARCH & INSIGHTS",
    title: "Understanding What Users Really Want",
    description: "Real users provide feedback, test concepts, and validate ideas before you invest in development. Make data-driven decisions with confidence.",
    color: "from-primary to-secondary",
    visualType: "insights",
    url: "/solutions/research-insights",
  },
];

export const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -420, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 420, behavior: "smooth" });
    }
  };

  return (
    <section id="services" ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            How We <span className="gradient-text animate-gradient">Power Your AI</span>
          </h2>
        </div>

        {/* Horizontal Scrolling Cards with Navigation */}
        <div className="relative group">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent pointer-events-none z-10" />

          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            aria-label="Scroll to previous service"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur border border-border hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300 z-20"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            onClick={scrollRight}
            aria-label="Scroll to next service"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur border border-border hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300 z-20"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Scroll Container */}
          <div ref={scrollContainerRef} className="flex overflow-x-auto gap-6 py-8 snap-x snap-mandatory md:snap-none scrollbar-hide">
          {services.map((service, index) => {
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={index}
                data-index={index}
                className={`flex-shrink-0 w-[85vw] sm:w-[400px] snap-center transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full glassmorphic bg-card border border-border rounded-3xl overflow-hidden group hover-lift isolate">
                  <GlowingEffect
                    spread={45}
                    glow={true}
                    disabled={false}
                    proximity={100}
                    inactiveZone={0.1}
                    borderWidth={2.5}
                    movementDuration={2}
                    className="z-10"
                  />
                  {/* Top Visual Section - 40% */}
                  <div className={`h-48 bg-gradient-to-br ${service.color} relative overflow-hidden`}>
                  {service.visualType === "flow" && (
                    <svg className="absolute inset-0 w-full h-full opacity-55" viewBox="0 0 400 200">
                      <path
                        d="M 0,100 Q 100,50 200,100 T 400,100"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                        className="animate-pulse"
                      />
                      <path
                        d="M 0,120 Q 100,70 200,120 T 400,120"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                        className="animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      />
                      <path
                        d="M 0,140 Q 100,90 200,140 T 400,140"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                        className="animate-pulse"
                        style={{ animationDelay: "1s" }}
                      />
                    </svg>
                  )}

                  {service.visualType === "grid" && (
                    <svg className="absolute inset-0 w-full h-full opacity-55" viewBox="0 0 400 200">
                      {[...Array(5)].map((_, row) =>
                        [...Array(8)].map((_, col) => (
                          <circle
                            key={`${row}-${col}`}
                            cx={50 + col * 50}
                            cy={40 + row * 40}
                            r="4"
                            fill="white"
                            className="animate-pulse"
                            style={{ animationDelay: `${(row + col) * 0.1}s` }}
                          />
                        ))
                      )}
                    </svg>
                  )}

                  {service.visualType === "speech" && (
                    <div className="absolute inset-0 flex items-center justify-center gap-4 text-white/65 text-2xl font-bold">
                      <div className="animate-pulse">你好</div>
                      <div className="animate-pulse" style={{ animationDelay: "0.3s" }}>مرحبا</div>
                      <div className="animate-pulse" style={{ animationDelay: "0.6s" }}>Hello</div>
                    </div>
                  )}

                  {service.visualType === "network" && (
                    <svg className="absolute inset-0 w-full h-full opacity-55" viewBox="0 0 400 200">
                      <circle cx="200" cy="100" r="8" fill="white" className="animate-pulse" />
                      <circle cx="100" cy="60" r="6" fill="white" className="animate-pulse" style={{ animationDelay: "0.2s" }} />
                      <circle cx="300" cy="60" r="6" fill="white" className="animate-pulse" style={{ animationDelay: "0.4s" }} />
                      <circle cx="100" cy="140" r="6" fill="white" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
                      <circle cx="300" cy="140" r="6" fill="white" className="animate-pulse" style={{ animationDelay: "0.8s" }} />
                      <line x1="200" y1="100" x2="100" y2="60" stroke="white" strokeWidth="1" className="animate-pulse" style={{ animationDelay: "0.1s" }} />
                      <line x1="200" y1="100" x2="300" y2="60" stroke="white" strokeWidth="1" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
                      <line x1="200" y1="100" x2="100" y2="140" stroke="white" strokeWidth="1" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
                      <line x1="200" y1="100" x2="300" y2="140" stroke="white" strokeWidth="1" className="animate-pulse" style={{ animationDelay: "0.7s" }} />
                    </svg>
                  )}

                  {service.visualType === "shield" && (
                    <svg className="absolute inset-0 w-full h-full opacity-55" viewBox="0 0 400 200">
                      <path d="M200 60 L230 80 L230 130 Q230 150 200 160 Q170 150 170 130 L170 80 Z" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.25" className="animate-pulse" />
                      <path d="M185 110 L195 120 L215 95" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
                    </svg>
                  )}

                  {service.visualType === "insights" && (
                    <svg className="absolute inset-0 w-full h-full opacity-55" viewBox="0 0 400 200">
                      <circle cx="200" cy="100" r="40" stroke="white" strokeWidth="2" fill="none" className="animate-pulse" />
                      <circle cx="200" cy="100" r="8" fill="white" className="animate-pulse" style={{ animationDelay: "0.2s" }} />
                      <path d="M200 100 L240 70" stroke="white" strokeWidth="2" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
                      <circle cx="240" cy="70" r="4" fill="white" className="animate-pulse" style={{ animationDelay: "0.4s" }} />
                      <path d="M200 100 L160 70" stroke="white" strokeWidth="2" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
                      <circle cx="160" cy="70" r="4" fill="white" className="animate-pulse" style={{ animationDelay: "0.7s" }} />
                    </svg>
                  )}
                </div>

                {/* Bottom Content Section - 60% */}
                <div className="p-6 sm:p-8 space-y-4">
                  {/* Badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-bold tracking-wider uppercase">
                    {service.badge}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight">{service.title}</h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Link */}
                  <Link 
                    to={service.url}
                    aria-label={`Explore ${service.badge} services`} 
                    className="flex items-center gap-2 text-base font-semibold text-secondary group-hover:gap-3 transition-all duration-300 pt-2"
                  >
                    Explore Services <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, i) => (
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
                aria-label={`Go to service ${i + 1}`}
                className={`h-2.5 w-2.5 md:h-1 md:w-8 rounded-full transition-all duration-300 cursor-pointer hover:scale-110 touch-manipulation ${
                  i === currentIndex ? "bg-secondary md:w-10" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scroll hint - Mobile only */}
        <div className="md:hidden flex items-center justify-center gap-2 mt-4 text-base text-secondary font-medium animate-pulse">
          <ChevronRight className="w-5 h-5" />
          <span>Swipe to explore</span>
          <ChevronRight className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};
