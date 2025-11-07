import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
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
  {
    badge: "CONTENT MODERATION",
    title: "Keeping Your Platform Safe",
    description: "Human moderators trained in cultural nuance review content 24/7, ensuring your community stays healthy without over-moderation.",
    color: "from-secondary to-accent",
    visualType: "shield",
  },
  {
    badge: "RESEARCH & INSIGHTS",
    title: "Understanding What Users Really Want",
    description: "Real users provide feedback, test concepts, and validate ideas before you invest in development. Make data-driven decisions with confidence.",
    color: "from-primary to-secondary",
    visualType: "insights",
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
            className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur border border-border hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300 z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur border border-border hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300 z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scroll Container */}
          <div ref={scrollContainerRef} className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory md:snap-none scrollbar-hide">
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
                    <svg className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-40 transition-opacity duration-300" viewBox="0 0 400 200">
                      {/* Chaotic waves on left transitioning to organized on right */}
                      <path
                        d="M 0,65 Q 70,40 130,70 T 250,75 T 400,80"
                        stroke="white"
                        strokeWidth="2.5"
                        fill="none"
                        opacity="0.35"
                        className="animate-pulse"
                      />
                      <path
                        d="M 0,90 Q 80,70 150,95 T 280,98 T 400,100"
                        stroke="white"
                        strokeWidth="2.5"
                        fill="none"
                        opacity="0.3"
                        className="animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      />
                      <path
                        d="M 0,115 Q 90,100 160,118 T 300,120 T 400,120"
                        stroke="white"
                        strokeWidth="2.5"
                        fill="none"
                        opacity="0.25"
                        className="animate-pulse"
                        style={{ animationDelay: "0.8s" }}
                      />
                      <path
                        d="M 0,135 Q 75,122 140,138 T 290,140 T 400,140"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.2"
                        className="animate-pulse"
                        style={{ animationDelay: "1.2s" }}
                      />
                      {/* Transformation dots along the path */}
                      <circle cx="80" cy="52" r="3" fill="white" opacity="0.4" className="animate-pulse" />
                      <circle cx="160" cy="78" r="3" fill="white" opacity="0.45" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
                      <circle cx="240" cy="75" r="3" fill="white" opacity="0.4" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
                      <circle cx="320" cy="82" r="3" fill="white" opacity="0.5" className="animate-pulse" style={{ animationDelay: "0.9s" }} />
                      <circle cx="150" cy="100" r="2.5" fill="white" opacity="0.35" className="animate-pulse" style={{ animationDelay: "1.1s" }} />
                      <circle cx="280" cy="120" r="3" fill="white" opacity="0.4" className="animate-pulse" style={{ animationDelay: "1.4s" }} />
                    </svg>
                  )}

                  {service.visualType === "grid" && (
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                      {/* 8x8 grid with highlighted scanning pattern */}
                      {[...Array(8)].map((_, row) =>
                        [...Array(8)].map((_, col) => {
                          const isHighlighted = 
                            (row === 2 && col === 3) ||
                            (row === 3 && col === 5) ||
                            (row === 4 && col === 2) ||
                            (row === 5 && col === 6) ||
                            (row === 6 && col === 4);
                          
                          return (
                            <circle
                              key={`${row}-${col}`}
                              cx={50 + col * 45}
                              cy={30 + row * 23}
                              r="4"
                              fill={isHighlighted ? "#60a5fa" : "white"}
                              opacity={isHighlighted ? 0.6 : 0.2}
                              filter={isHighlighted ? "drop-shadow(0 0 4px rgba(96, 165, 250, 0.6))" : "none"}
                              className="animate-pulse"
                              style={{ animationDelay: `${(row + col) * 0.1}s` }}
                            />
                          );
                        })
                      )}
                      {/* Connecting lines between highlighted dots */}
                      <line x1="185" y1="76" x2="275" y2="99" stroke="#60a5fa" strokeWidth="1.5" opacity="0.4" />
                      <line x1="140" y1="122" x2="185" y2="76" stroke="#60a5fa" strokeWidth="1.5" opacity="0.4" />
                      <line x1="275" y1="99" x2="320" y2="145" stroke="#60a5fa" strokeWidth="1.5" opacity="0.4" />
                      <line x1="320" y1="145" x2="230" y2="168" stroke="#60a5fa" strokeWidth="1.5" opacity="0.4" />
                    </svg>
                  )}

                  {service.visualType === "speech" && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white">
                      {/* Main trio - larger and more visible */}
                      <div className="flex items-center justify-center gap-4 text-2xl font-bold">
                        <div className="animate-pulse" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)', opacity: 0.55 }}>
                          你好
                        </div>
                        <div className="animate-pulse" style={{ animationDelay: "0.3s", textShadow: '0 2px 8px rgba(0,0,0,0.4)', opacity: 0.55 }}>
                          مرحبا
                        </div>
                        <div className="animate-pulse" style={{ animationDelay: "0.6s", textShadow: '0 2px 8px rgba(0,0,0,0.4)', opacity: 0.55 }}>
                          Hello
                        </div>
                      </div>
                      
                      {/* Secondary greetings - smaller, artistic positioning */}
                      <div className="flex items-center gap-4 text-lg font-semibold">
                        <div style={{ opacity: 0.45, textShadow: '0 2px 6px rgba(0,0,0,0.3)' }}>
                          Bonjour
                        </div>
                        <span style={{ opacity: 0.35 }}>→</span>
                        <div style={{ opacity: 0.5, textShadow: '0 2px 6px rgba(0,0,0,0.3)' }}>
                          こんにちは
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-base font-medium">
                        <div style={{ opacity: 0.45, textShadow: '0 2px 6px rgba(0,0,0,0.3)' }}>
                          Hola
                        </div>
                        <span style={{ opacity: 0.35 }}>⇄</span>
                        <div style={{ opacity: 0.45, textShadow: '0 2px 6px rgba(0,0,0,0.3)' }}>
                          नमस्ते
                        </div>
                      </div>
                    </div>
                  )}

                  {service.visualType === "network" && (
                    <svg className="absolute inset-0 w-full h-full opacity-35 group-hover:opacity-45 transition-opacity duration-300" viewBox="0 0 400 200">
                      {/* Background waves for flow */}
                      <path d="M 0,80 Q 100,70 200,80 T 400,80" stroke="white" strokeWidth="1.5" fill="none" opacity="0.2" />
                      <path d="M 0,120 Q 100,110 200,120 T 400,120" stroke="white" strokeWidth="1.5" fill="none" opacity="0.15" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
                      
                      {/* Center node with pulse rings */}
                      <circle cx="200" cy="100" r="10" fill="white" opacity="0.8" />
                      <circle cx="200" cy="100" r="18" stroke="white" strokeWidth="1.5" fill="none" opacity="0.25" className="animate-pulse" />
                      <circle cx="200" cy="100" r="26" stroke="white" strokeWidth="1" fill="none" opacity="0.15" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
                      
                      {/* Outer nodes - larger and more visible */}
                      <circle cx="100" cy="60" r="7" fill="white" opacity="0.75" className="animate-pulse" />
                      <circle cx="300" cy="60" r="7" fill="white" opacity="0.75" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
                      <circle cx="100" cy="140" r="7" fill="white" opacity="0.75" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
                      <circle cx="300" cy="140" r="7" fill="white" opacity="0.75" className="animate-pulse" style={{ animationDelay: "0.9s" }} />
                      
                      {/* Connecting lines - thicker */}
                      <line x1="200" y1="100" x2="100" y2="60" stroke="white" strokeWidth="1.5" opacity="0.4" />
                      <line x1="200" y1="100" x2="300" y2="60" stroke="white" strokeWidth="1.5" opacity="0.4" />
                      <line x1="200" y1="100" x2="100" y2="140" stroke="white" strokeWidth="1.5" opacity="0.4" />
                      <line x1="200" y1="100" x2="300" y2="140" stroke="white" strokeWidth="1.5" opacity="0.4" />
                    </svg>
                  )}

                  {service.visualType === "shield" && (
                    <svg className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-40 transition-opacity duration-300" viewBox="0 0 400 200">
                      {/* Main shield - larger and more visible */}
                      <path 
                        d="M200 50 L238 74 L238 132 Q238 158 200 172 Q162 158 162 132 L162 74 Z" 
                        stroke="white" 
                        strokeWidth="3" 
                        fill="white" 
                        fillOpacity="0.15" 
                        filter="drop-shadow(0 0 8px rgba(255,255,255,0.3))"
                        className="animate-pulse" 
                      />
                      
                      {/* Checkmark - bolder */}
                      <path 
                        d="M180 112 L196 128 L220 98" 
                        stroke="white" 
                        strokeWidth="4" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        opacity="0.9"
                      />
                      
                      {/* Floating particles around shield */}
                      <circle cx="155" cy="85" r="3" fill="white" opacity="0.35" className="animate-pulse" />
                      <circle cx="245" cy="90" r="2.5" fill="white" opacity="0.25" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
                      <circle cx="165" cy="145" r="3.5" fill="white" opacity="0.4" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
                      <circle cx="235" cy="150" r="2" fill="white" opacity="0.2" className="animate-pulse" style={{ animationDelay: "0.9s" }} />
                      <circle cx="148" cy="115" r="2.5" fill="white" opacity="0.3" className="animate-pulse" style={{ animationDelay: "1.2s" }} />
                      <circle cx="252" cy="120" r="3" fill="white" opacity="0.35" className="animate-pulse" style={{ animationDelay: "1.5s" }} />
                      <circle cx="170" cy="70" r="2" fill="white" opacity="0.25" className="animate-pulse" style={{ animationDelay: "1.8s" }} />
                      <circle cx="230" cy="65" r="2.5" fill="white" opacity="0.3" className="animate-pulse" style={{ animationDelay: "2.1s" }} />
                      <circle cx="160" cy="160" r="2.5" fill="white" opacity="0.28" className="animate-pulse" style={{ animationDelay: "2.4s" }} />
                      <circle cx="240" cy="165" r="3" fill="white" opacity="0.32" className="animate-pulse" style={{ animationDelay: "2.7s" }} />
                    </svg>
                  )}

                  {service.visualType === "insights" && (
                    <svg className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-40 transition-opacity duration-300" viewBox="0 0 400 200">
                      {/* Outer compass ring */}
                      <circle cx="200" cy="100" r="50" stroke="white" strokeWidth="2" fill="none" opacity="0.3" className="animate-pulse" />
                      
                      {/* Center focal point */}
                      <circle cx="200" cy="100" r="9" fill="white" opacity="0.8" />
                      
                      {/* 8 radiating lines (compass points) with nodes */}
                      <path d="M200 100 L200 50" stroke="white" strokeWidth="2" opacity="0.4" className="animate-pulse" style={{ animationDelay: "0s" }} />
                      <circle cx="200" cy="50" r="5" fill="white" opacity="0.5" />
                      
                      <path d="M200 100 L237 63" stroke="white" strokeWidth="2" opacity="0.4" className="animate-pulse" style={{ animationDelay: "0.2s" }} />
                      <circle cx="237" cy="63" r="5" fill="white" opacity="0.5" />
                      
                      <path d="M200 100 L250 100" stroke="white" strokeWidth="2" opacity="0.4" className="animate-pulse" style={{ animationDelay: "0.4s" }} />
                      <circle cx="250" cy="100" r="5" fill="white" opacity="0.5" />
                      
                      <path d="M200 100 L237 137" stroke="white" strokeWidth="2" opacity="0.4" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
                      <circle cx="237" cy="137" r="5" fill="white" opacity="0.5" />
                      
                      <path d="M200 100 L200 150" stroke="white" strokeWidth="2" opacity="0.4" className="animate-pulse" style={{ animationDelay: "0.8s" }} />
                      <circle cx="200" cy="150" r="5" fill="white" opacity="0.5" />
                      
                      <path d="M200 100 L163 137" stroke="white" strokeWidth="2" opacity="0.4" className="animate-pulse" style={{ animationDelay: "1s" }} />
                      <circle cx="163" cy="137" r="5" fill="white" opacity="0.5" />
                      
                      <path d="M200 100 L150 100" stroke="white" strokeWidth="2" opacity="0.4" className="animate-pulse" style={{ animationDelay: "1.2s" }} />
                      <circle cx="150" cy="100" r="5" fill="white" opacity="0.5" />
                      
                      <path d="M200 100 L163 63" stroke="white" strokeWidth="2" opacity="0.4" className="animate-pulse" style={{ animationDelay: "1.4s" }} />
                      <circle cx="163" cy="63" r="5" fill="white" opacity="0.5" />
                      
                      {/* Human profile silhouettes in lower area */}
                      <path d="M95 165 Q90 160 90 155 L90 150 Q90 145 95 140 L100 140 Q105 145 105 150 L105 160 Q103 163 100 165 Z" 
                        fill="white" opacity="0.22" />
                      <path d="M295 170 Q290 165 290 160 L290 155 Q290 150 295 145 L300 145 Q305 150 305 155 L305 165 Q303 168 300 170 Z" 
                        fill="white" opacity="0.25" />
                      <path d="M190 175 Q185 170 185 165 L185 160 Q185 155 190 150 L195 150 Q200 155 200 160 L200 170 Q198 173 195 175 Z" 
                        fill="white" opacity="0.2" />
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

        {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, i) => (
              <div
                key={i}
                className={`h-1 w-8 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-secondary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="md:hidden text-center mt-4 text-sm text-muted-foreground">
          ← Swipe to explore all services →
        </div>
      </div>
    </section>
  );
};
