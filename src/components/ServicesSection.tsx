import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    badge: "DATA SERVICES",
    title: "Building AI That Thinks Like Humans",
    description: "From medical imaging annotation by actual doctors to LLM fine-tuning by linguists, we match your project with genuine experts—not crowd workers.",
    color: "from-secondary to-secondary/70",
    visualType: "flow",
  },
  {
    badge: "QUALITY ASSURANCE",
    title: "Testing That Catches What Others Miss",
    description: "Real humans on real devices in real-world conditions. From bug hunting to AI model validation, we ensure your product works flawlessly everywhere.",
    color: "from-primary to-primary/70",
    visualType: "grid",
  },
  {
    badge: "MULTILINGUAL",
    title: "Speak Every Language, Respect Every Culture",
    description: "Native speakers who understand context, not just words. Translation and localization in 150+ languages with zero cultural mishaps.",
    color: "from-accent to-accent/70",
    visualType: "speech",
  },
  {
    badge: "ENTERPRISE & BPO",
    title: "Scale Without the Growing Pains",
    description: "From customer support to data management, we give you expert human capacity on demand—no hiring headaches, no overhead.",
    color: "from-secondary via-primary to-accent",
    visualType: "network",
  },
];

export const ServicesSection = () => {
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
    <section id="services" ref={sectionRef} className="py-16 sm:py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            How We <span className="gradient-text animate-gradient">Power Your AI</span>
          </h2>
        </div>

        {/* Horizontal Scrolling Cards */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory md:snap-none scrollbar-hide">
          {services.map((service, index) => {
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={index}
                data-index={index}
                className={`flex-shrink-0 w-[85vw] sm:w-[400px] snap-center glassmorphic bg-card border border-border rounded-3xl overflow-hidden group hover-lift transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Top Visual Section - 40% */}
                <div className={`h-48 bg-gradient-to-br ${service.color} relative overflow-hidden`}>
                  {service.visualType === "flow" && (
                    <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 200">
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
                    <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 200">
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
                    <div className="absolute inset-0 flex items-center justify-center gap-4 text-white/40 text-2xl font-bold">
                      <div className="animate-pulse">你好</div>
                      <div className="animate-pulse" style={{ animationDelay: "0.3s" }}>مرحبا</div>
                      <div className="animate-pulse" style={{ animationDelay: "0.6s" }}>Hello</div>
                    </div>
                  )}

                  {service.visualType === "network" && (
                    <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 200">
                      <circle cx="200" cy="100" r="8" fill="white" />
                      <circle cx="100" cy="60" r="6" fill="white" className="animate-pulse" />
                      <circle cx="300" cy="60" r="6" fill="white" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
                      <circle cx="100" cy="140" r="6" fill="white" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
                      <circle cx="300" cy="140" r="6" fill="white" className="animate-pulse" style={{ animationDelay: "0.9s" }} />
                      <line x1="200" y1="100" x2="100" y2="60" stroke="white" strokeWidth="1" />
                      <line x1="200" y1="100" x2="300" y2="60" stroke="white" strokeWidth="1" />
                      <line x1="200" y1="100" x2="100" y2="140" stroke="white" strokeWidth="1" />
                      <line x1="200" y1="100" x2="300" y2="140" stroke="white" strokeWidth="1" />
                    </svg>
                  )}
                </div>

                {/* Bottom Content Section - 60% */}
                <div className="p-6 sm:p-8 space-y-4">
                  {/* Badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase">
                    {service.badge}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight">{service.title}</h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Link */}
                  <button className="flex items-center gap-2 text-sm font-semibold text-secondary group-hover:gap-3 transition-all duration-300 pt-2">
                    Explore Services <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll hint */}
        <div className="md:hidden text-center mt-4 text-sm text-muted-foreground">
          ← Swipe to explore all services →
        </div>
      </div>
    </section>
  );
};
