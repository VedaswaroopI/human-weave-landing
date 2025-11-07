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
                    <svg className="absolute inset-0 w-full h-full opacity-50 group-hover:opacity-65 transition-opacity duration-500" viewBox="0 0 400 200">
                      {/* Raw unstructured data (left) transforming into structured AI-ready data (right) */}
                      
                      {/* Left: Chaotic scattered data points */}
                      <g opacity="0.6">
                        <circle cx="45" cy="55" r="4" fill="white" className="animate-pulse" />
                        <circle cx="70" cy="80" r="3" fill="white" className="animate-pulse" style={{ animationDelay: "0.2s" }} />
                        <circle cx="55" cy="110" r="5" fill="white" className="animate-pulse" style={{ animationDelay: "0.4s" }} />
                        <circle cx="85" cy="65" r="3.5" fill="white" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
                        <circle cx="60" cy="140" r="4" fill="white" className="animate-pulse" style={{ animationDelay: "0.8s" }} />
                        <circle cx="90" cy="125" r="3" fill="white" className="animate-pulse" style={{ animationDelay: "1s" }} />
                        <circle cx="40" cy="95" r="4.5" fill="white" className="animate-pulse" style={{ animationDelay: "1.2s" }} />
                        
                        {/* Random connecting lines - messy */}
                        <line x1="45" y1="55" x2="70" y2="80" stroke="white" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
                        <line x1="55" y1="110" x2="60" y2="140" stroke="white" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
                      </g>
                      
                      {/* Center: Transformation zone with flowing particles */}
                      <g opacity="0.7" className="animate-pulse" style={{ animationDelay: "0.5s", animationDuration: "2s" }}>
                        {/* Funnel/transformation representation */}
                        <path d="M 130,60 L 170,80 L 170,120 L 130,140" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
                        <path d="M 190,80 L 230,60 L 230,140 L 190,120" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
                        
                        {/* Particles flowing through */}
                        <circle cx="150" cy="75" r="2.5" fill="white" opacity="0.6" className="animate-pulse" />
                        <circle cx="165" cy="100" r="2.5" fill="white" opacity="0.6" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
                        <circle cx="155" cy="125" r="2.5" fill="white" opacity="0.6" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
                        <circle cx="210" cy="85" r="2.5" fill="white" opacity="0.6" className="animate-pulse" style={{ animationDelay: "0.9s" }} />
                        <circle cx="205" cy="115" r="2.5" fill="white" opacity="0.6" className="animate-pulse" style={{ animationDelay: "1.2s" }} />
                      </g>
                      
                      {/* Right: Organized, structured data grid */}
                      <g opacity="0.7">
                        {/* Organized grid pattern */}
                        <circle cx="280" cy="70" r="5" fill="white" opacity="0.8" />
                        <circle cx="320" cy="70" r="5" fill="white" opacity="0.8" />
                        <circle cx="360" cy="70" r="5" fill="white" opacity="0.8" />
                        <circle cx="280" cy="100" r="5" fill="white" opacity="0.8" />
                        <circle cx="320" cy="100" r="5" fill="white" opacity="0.8" />
                        <circle cx="360" cy="100" r="5" fill="white" opacity="0.8" />
                        <circle cx="280" cy="130" r="5" fill="white" opacity="0.8" />
                        <circle cx="320" cy="130" r="5" fill="white" opacity="0.8" />
                        <circle cx="360" cy="130" r="5" fill="white" opacity="0.8" />
                        
                        {/* Clean horizontal connections */}
                        <line x1="285" y1="70" x2="355" y2="70" stroke="white" strokeWidth="1.5" opacity="0.5" />
                        <line x1="285" y1="100" x2="355" y2="100" stroke="white" strokeWidth="1.5" opacity="0.5" />
                        <line x1="285" y1="130" x2="355" y2="130" stroke="white" strokeWidth="1.5" opacity="0.5" />
                        
                        {/* Vertical connections */}
                        <line x1="280" y1="75" x2="280" y2="125" stroke="white" strokeWidth="1.5" opacity="0.4" />
                        <line x1="320" y1="75" x2="320" y2="125" stroke="white" strokeWidth="1.5" opacity="0.4" />
                        <line x1="360" y1="75" x2="360" y2="125" stroke="white" strokeWidth="1.5" opacity="0.4" />
                      </g>
                    </svg>
                  )}

                  {service.visualType === "grid" && (
                    <svg className="absolute inset-0 w-full h-full opacity-50 group-hover:opacity-65 transition-opacity duration-500" viewBox="0 0 400 200">
                      {/* Testing grid with scanning beam and detection points */}
                      
                      {/* Testing grid - representing multiple test points */}
                      <g opacity="0.5">
                        {[...Array(6)].map((_, row) =>
                          [...Array(8)].map((_, col) => (
                            <circle
                              key={`${row}-${col}`}
                              cx={60 + col * 42}
                              cy={45 + row * 25}
                              r="3.5"
                              fill="white"
                              opacity="0.4"
                              className="animate-pulse"
                              style={{ animationDelay: `${(row + col) * 0.08}s` }}
                            />
                          ))
                        )}
                      </g>
                      
                      {/* Scanning beam moving across */}
                      <g className="animate-pulse" style={{ animationDuration: "3s" }}>
                        <line x1="200" y1="30" x2="200" y2="170" stroke="white" strokeWidth="3" opacity="0.6" filter="blur(2px)" />
                        <line x1="200" y1="30" x2="200" y2="170" stroke="white" strokeWidth="1.5" opacity="0.8" />
                      </g>
                      
                      {/* Detection highlights - points that caught issues */}
                      <g>
                        <circle cx="144" cy="70" r="8" stroke="white" strokeWidth="2" fill="none" opacity="0.7" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
                        <circle cx="144" cy="70" r="12" stroke="white" strokeWidth="1" fill="none" opacity="0.4" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
                        
                        <circle cx="228" cy="120" r="8" stroke="white" strokeWidth="2" fill="none" opacity="0.7" className="animate-pulse" style={{ animationDelay: "1s" }} />
                        <circle cx="228" cy="120" r="12" stroke="white" strokeWidth="1" fill="none" opacity="0.4" className="animate-pulse" style={{ animationDelay: "1s" }} />
                        
                        <circle cx="312" cy="95" r="8" stroke="white" strokeWidth="2" fill="none" opacity="0.7" className="animate-pulse" style={{ animationDelay: "1.5s" }} />
                        <circle cx="312" cy="95" r="12" stroke="white" strokeWidth="1" fill="none" opacity="0.4" className="animate-pulse" style={{ animationDelay: "1.5s" }} />
                      </g>
                      
                      {/* Horizontal scan lines */}
                      <line x1="0" y1="70" x2="400" y2="70" stroke="white" strokeWidth="0.5" opacity="0.25" strokeDasharray="8,4" />
                      <line x1="0" y1="100" x2="400" y2="100" stroke="white" strokeWidth="0.5" opacity="0.25" strokeDasharray="8,4" />
                      <line x1="0" y1="130" x2="400" y2="130" stroke="white" strokeWidth="0.5" opacity="0.25" strokeDasharray="8,4" />
                    </svg>
                  )}

                  {service.visualType === "speech" && (
                    <svg className="absolute inset-0 w-full h-full opacity-55 group-hover:opacity-70 transition-opacity duration-500" viewBox="0 0 400 200">
                      {/* Language transformation flow */}
                      
                      {/* Source text/language representation (left) */}
                      <g opacity="0.6" className="animate-pulse">
                        <rect x="50" y="70" width="80" height="50" rx="8" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.15" />
                        {/* Abstract text lines representing source language */}
                        <line x1="65" y1="85" x2="115" y2="85" stroke="white" strokeWidth="2" opacity="0.7" strokeLinecap="round" />
                        <line x1="65" y1="95" x2="105" y2="95" stroke="white" strokeWidth="2" opacity="0.7" strokeLinecap="round" />
                        <line x1="65" y1="105" x2="120" y2="105" stroke="white" strokeWidth="2" opacity="0.7" strokeLinecap="round" />
                      </g>
                      
                      {/* Translation processing center */}
                      <g opacity="0.65" className="animate-pulse" style={{ animationDelay: "0.5s", animationDuration: "2s" }}>
                        {/* Central processing circle */}
                        <circle cx="200" cy="95" r="28" stroke="white" strokeWidth="2.5" fill="none" opacity="0.6" />
                        <circle cx="200" cy="95" r="20" stroke="white" strokeWidth="1.5" fill="none" opacity="0.5" />
                        
                        {/* Rotating segments showing processing */}
                        <path d="M 200,67 A 28,28 0 0,1 228,95" stroke="white" strokeWidth="3" fill="none" opacity="0.7" strokeLinecap="round" />
                        <path d="M 200,123 A 28,28 0 0,1 172,95" stroke="white" strokeWidth="3" fill="none" opacity="0.7" strokeLinecap="round" />
                        
                        {/* Center dot */}
                        <circle cx="200" cy="95" r="5" fill="white" opacity="0.8" />
                      </g>
                      
                      {/* Target text/language representation (right) */}
                      <g opacity="0.65" className="animate-pulse" style={{ animationDelay: "1s" }}>
                        <rect x="270" y="70" width="80" height="50" rx="8" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.18" />
                        {/* Abstract text lines representing target language (different pattern) */}
                        <line x1="285" y1="85" x2="335" y2="85" stroke="white" strokeWidth="2" opacity="0.75" strokeLinecap="round" />
                        <line x1="285" y1="95" x2="325" y2="95" stroke="white" strokeWidth="2" opacity="0.75" strokeLinecap="round" />
                        <line x1="285" y1="105" x2="340" y2="105" stroke="white" strokeWidth="2" opacity="0.75" strokeLinecap="round" />
                      </g>
                      
                      {/* Flow arrows showing transformation */}
                      <g opacity="0.6">
                        <path d="M 135,95 L 165,95" stroke="white" strokeWidth="2.5" opacity="0.6" fill="none" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
                        <path d="M 165,95 L 160,90 M 165,95 L 160,100" stroke="white" strokeWidth="2.5" opacity="0.6" fill="none" />
                        
                        <path d="M 235,95 L 265,95" stroke="white" strokeWidth="2.5" opacity="0.6" fill="none" className="animate-pulse" style={{ animationDelay: "0.8s" }} />
                        <path d="M 265,95 L 260,90 M 265,95 L 260,100" stroke="white" strokeWidth="2.5" opacity="0.6" fill="none" />
                      </g>
                      
                      {/* Multiple language paths (subtle background) */}
                      <g opacity="0.25">
                        <path d="M 90,50 Q 200,40 310,50" stroke="white" strokeWidth="1" fill="none" strokeDasharray="4,4" />
                        <path d="M 90,140 Q 200,150 310,140" stroke="white" strokeWidth="1" fill="none" strokeDasharray="4,4" />
                      </g>
                    </svg>
                  )}

                  {service.visualType === "network" && (
                    <svg className="absolute inset-0 w-full h-full opacity-50 group-hover:opacity-65 transition-opacity duration-500" viewBox="0 0 400 200">
                      {/* Scaling progression: Small → Medium → Large network */}
                      
                      {/* Stage 1: Small operation (2-3 nodes) */}
                      <g opacity="0.5">
                        <circle cx="70" cy="100" r="7" fill="white" opacity="0.6" />
                        <circle cx="50" cy="80" r="4.5" fill="white" opacity="0.5" className="animate-pulse" />
                        <circle cx="90" cy="80" r="4.5" fill="white" opacity="0.5" className="animate-pulse" style={{ animationDelay: "0.2s" }} />
                        <line x1="70" y1="100" x2="50" y2="80" stroke="white" strokeWidth="1.5" opacity="0.5" />
                        <line x1="70" y1="100" x2="90" y2="80" stroke="white" strokeWidth="1.5" opacity="0.5" />
                      </g>
                      
                      {/* Growth indicator */}
                      <g opacity="0.55" className="animate-pulse" style={{ animationDelay: "0.4s" }}>
                        <path d="M 110,100 L 145,100" stroke="white" strokeWidth="2.5" fill="none" />
                        <path d="M 145,100 L 140,95 M 145,100 L 140,105" stroke="white" strokeWidth="2.5" fill="none" />
                      </g>
                      
                      {/* Stage 2: Medium operation (6-8 nodes) */}
                      <g opacity="0.6" className="animate-pulse" style={{ animationDelay: "0.6s" }}>
                        <circle cx="200" cy="100" r="9" fill="white" opacity="0.7" />
                        <circle cx="175" cy="75" r="5.5" fill="white" opacity="0.65" />
                        <circle cx="225" cy="75" r="5.5" fill="white" opacity="0.65" />
                        <circle cx="175" cy="125" r="5.5" fill="white" opacity="0.65" />
                        <circle cx="225" cy="125" r="5.5" fill="white" opacity="0.65" />
                        <circle cx="200" cy="60" r="4.5" fill="white" opacity="0.6" />
                        <circle cx="200" cy="140" r="4.5" fill="white" opacity="0.6" />
                        
                        <line x1="200" y1="100" x2="175" y2="75" stroke="white" strokeWidth="2" opacity="0.6" />
                        <line x1="200" y1="100" x2="225" y2="75" stroke="white" strokeWidth="2" opacity="0.6" />
                        <line x1="200" y1="100" x2="175" y2="125" stroke="white" strokeWidth="2" opacity="0.6" />
                        <line x1="200" y1="100" x2="225" y2="125" stroke="white" strokeWidth="2" opacity="0.6" />
                        <line x1="200" y1="100" x2="200" y2="60" stroke="white" strokeWidth="2" opacity="0.6" />
                        <line x1="200" y1="100" x2="200" y2="140" stroke="white" strokeWidth="2" opacity="0.6" />
                      </g>
                      
                      {/* Growth indicator */}
                      <g opacity="0.6" className="animate-pulse" style={{ animationDelay: "0.9s" }}>
                        <path d="M 250,100 L 285,100" stroke="white" strokeWidth="2.5" fill="none" />
                        <path d="M 285,100 L 280,95 M 285,100 L 280,105" stroke="white" strokeWidth="2.5" fill="none" />
                      </g>
                      
                      {/* Stage 3: Enterprise scale (12+ nodes) */}
                      <g opacity="0.7" className="animate-pulse" style={{ animationDelay: "1.2s" }}>
                        <circle cx="340" cy="100" r="11" fill="white" opacity="0.8" />
                        
                        {/* Outer ring */}
                        <circle cx="310" cy="70" r="6" fill="white" opacity="0.75" />
                        <circle cx="370" cy="70" r="6" fill="white" opacity="0.75" />
                        <circle cx="310" cy="130" r="6" fill="white" opacity="0.75" />
                        <circle cx="370" cy="130" r="6" fill="white" opacity="0.75" />
                        <circle cx="340" cy="50" r="5" fill="white" opacity="0.7" />
                        <circle cx="340" cy="150" r="5" fill="white" opacity="0.7" />
                        <circle cx="290" cy="100" r="5" fill="white" opacity="0.7" />
                        <circle cx="390" cy="100" r="5" fill="white" opacity="0.7" />
                        
                        {/* Additional nodes for density */}
                        <circle cx="320" cy="85" r="4" fill="white" opacity="0.65" />
                        <circle cx="360" cy="85" r="4" fill="white" opacity="0.65" />
                        <circle cx="320" cy="115" r="4" fill="white" opacity="0.65" />
                        <circle cx="360" cy="115" r="4" fill="white" opacity="0.65" />
                        
                        {/* Connections - fuller network */}
                        <line x1="340" y1="100" x2="310" y2="70" stroke="white" strokeWidth="2.5" opacity="0.65" />
                        <line x1="340" y1="100" x2="370" y2="70" stroke="white" strokeWidth="2.5" opacity="0.65" />
                        <line x1="340" y1="100" x2="310" y2="130" stroke="white" strokeWidth="2.5" opacity="0.65" />
                        <line x1="340" y1="100" x2="370" y2="130" stroke="white" strokeWidth="2.5" opacity="0.65" />
                        <line x1="340" y1="100" x2="340" y2="50" stroke="white" strokeWidth="2.5" opacity="0.65" />
                        <line x1="340" y1="100" x2="340" y2="150" stroke="white" strokeWidth="2.5" opacity="0.65" />
                        <line x1="340" y1="100" x2="290" y2="100" stroke="white" strokeWidth="2.5" opacity="0.65" />
                        <line x1="340" y1="100" x2="390" y2="100" stroke="white" strokeWidth="2.5" opacity="0.65" />
                        
                        {/* Expansion rings */}
                        <circle cx="340" cy="100" r="50" stroke="white" strokeWidth="1" fill="none" opacity="0.25" />
                        <circle cx="340" cy="100" r="65" stroke="white" strokeWidth="0.5" fill="none" opacity="0.15" />
                      </g>
                    </svg>
                  )}

                  {service.visualType === "shield" && (
                    <svg className="absolute inset-0 w-full h-full opacity-50 group-hover:opacity-65 transition-opacity duration-500" viewBox="0 0 400 200">
                      {/* Protection barrier deflecting unwanted content */}
                      
                      {/* Central shield barrier */}
                      <g className="animate-pulse" style={{ animationDuration: "2.5s" }}>
                        <path 
                          d="M200 35 L250 65 L250 140 Q250 172 200 190 Q150 172 150 140 L150 65 Z" 
                          stroke="white" 
                          strokeWidth="4" 
                          fill="white" 
                          fillOpacity="0.2" 
                          filter="drop-shadow(0 0 12px rgba(255,255,255,0.5))"
                        />
                        
                        {/* Inner shield layer */}
                        <path 
                          d="M200 55 L235 78 L235 135 Q235 160 200 175 Q165 160 165 135 L165 78 Z" 
                          stroke="white" 
                          strokeWidth="2" 
                          fill="none" 
                          opacity="0.6"
                        />
                        
                        {/* Central line showing active protection */}
                        <line x1="200" y1="55" x2="200" y2="175" stroke="white" strokeWidth="2.5" opacity="0.7" />
                      </g>
                      
                      {/* Unwanted content approaching from left (abstract particles) */}
                      <g opacity="0.6">
                        <circle cx="50" cy="80" r="6" fill="white" opacity="0.5" className="animate-pulse" />
                        <circle cx="70" cy="110" r="5" fill="white" opacity="0.45" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
                        <circle cx="60" cy="140" r="6" fill="white" opacity="0.5" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
                        <circle cx="85" cy="95" r="5" fill="white" opacity="0.45" className="animate-pulse" style={{ animationDelay: "0.9s" }} />
                        
                        {/* Particle trails */}
                        <line x1="30" y1="80" x2="50" y2="80" stroke="white" strokeWidth="1.5" opacity="0.4" strokeDasharray="3,3" />
                        <line x1="45" y1="110" x2="70" y2="110" stroke="white" strokeWidth="1.5" opacity="0.4" strokeDasharray="3,3" />
                        <line x1="35" y1="140" x2="60" y2="140" stroke="white" strokeWidth="1.5" opacity="0.4" strokeDasharray="3,3" />
                      </g>
                      
                      {/* Deflection paths - particles bouncing off shield */}
                      <g opacity="0.5" className="animate-pulse" style={{ animationDelay: "0.5s" }}>
                        <path d="M 110,85 Q 130,70 140,45" stroke="white" strokeWidth="2" opacity="0.5" fill="none" strokeDasharray="5,5" />
                        <path d="M 115,115 Q 130,125 140,150" stroke="white" strokeWidth="2" opacity="0.5" fill="none" strokeDasharray="5,5" />
                        <path d="M 120,140 Q 135,155 145,175" stroke="white" strokeWidth="2" opacity="0.5" fill="none" strokeDasharray="5,5" />
                      </g>
                      
                      {/* Protected zone on the right (clean space) */}
                      <g opacity="0.6">
                        <rect x="280" y="70" width="90" height="70" rx="8" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.12" className="animate-pulse" style={{ animationDelay: "1.2s", animationDuration: "3s" }} />
                        
                        {/* Clean content representation */}
                        <line x1="295" y1="90" x2="355" y2="90" stroke="white" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
                        <line x1="295" y1="105" x2="345" y2="105" stroke="white" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
                        <line x1="295" y1="120" x2="350" y2="120" stroke="white" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
                      </g>
                      
                      {/* Active monitoring pulses from shield */}
                      <g className="animate-pulse" style={{ animationDelay: "1s", animationDuration: "2s" }}>
                        <circle cx="200" cy="112" r="45" stroke="white" strokeWidth="1.5" fill="none" opacity="0.25" />
                        <circle cx="200" cy="112" r="60" stroke="white" strokeWidth="1" fill="none" opacity="0.15" />
                      </g>
                    </svg>
                  )}

                  {service.visualType === "insights" && (
                    <svg className="absolute inset-0 w-full h-full opacity-50 group-hover:opacity-65 transition-opacity duration-500" viewBox="0 0 400 200">
                      {/* Multiple users providing feedback that converges into insights */}
                      
                      {/* User personas (abstract human shapes) */}
                      <g opacity="0.6" className="animate-pulse">
                        {/* User 1 - Left */}
                        <circle cx="70" cy="70" r="16" fill="white" opacity="0.45" />
                        <path d="M 50,95 Q 70,85 90,95 L 90,120 L 50,120 Z" fill="white" opacity="0.45" />
                      </g>
                      
                      <g opacity="0.65" className="animate-pulse" style={{ animationDelay: "0.3s" }}>
                        {/* User 2 - Center top */}
                        <circle cx="200" cy="60" r="16" fill="white" opacity="0.5" />
                        <path d="M 180,85 Q 200,75 220,85 L 220,110 L 180,110 Z" fill="white" opacity="0.5" />
                      </g>
                      
                      <g opacity="0.6" className="animate-pulse" style={{ animationDelay: "0.6s" }}>
                        {/* User 3 - Right */}
                        <circle cx="330" cy="70" r="16" fill="white" opacity="0.45" />
                        <path d="M 310,95 Q 330,85 350,95 L 350,120 L 310,120 Z" fill="white" opacity="0.45" />
                      </g>
                      
                      {/* Feedback/data points flowing from users */}
                      <g opacity="0.55">
                        {/* From user 1 */}
                        <circle cx="85" cy="125" r="3" fill="white" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
                        <circle cx="100" cy="135" r="2.5" fill="white" className="animate-pulse" style={{ animationDelay: "0.7s" }} />
                        <circle cx="115" cy="145" r="3" fill="white" className="animate-pulse" style={{ animationDelay: "0.9s" }} />
                        
                        {/* From user 2 */}
                        <circle cx="190" cy="115" r="3" fill="white" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
                        <circle cx="200" cy="130" r="2.5" fill="white" className="animate-pulse" style={{ animationDelay: "0.8s" }} />
                        <circle cx="210" cy="115" r="3" fill="white" className="animate-pulse" style={{ animationDelay: "1s" }} />
                        
                        {/* From user 3 */}
                        <circle cx="315" cy="125" r="3" fill="white" className="animate-pulse" style={{ animationDelay: "0.7s" }} />
                        <circle cx="300" cy="135" r="2.5" fill="white" className="animate-pulse" style={{ animationDelay: "0.9s" }} />
                        <circle cx="285" cy="145" r="3" fill="white" className="animate-pulse" style={{ animationDelay: "1.1s" }} />
                      </g>
                      
                      {/* Convergence lines showing data flowing to center */}
                      <g opacity="0.45">
                        <path d="M 100,140 Q 150,155 200,160" stroke="white" strokeWidth="1.5" fill="none" strokeDasharray="4,4" />
                        <path d="M 200,130 L 200,160" stroke="white" strokeWidth="1.5" fill="none" strokeDasharray="4,4" />
                        <path d="M 300,140 Q 250,155 200,160" stroke="white" strokeWidth="1.5" fill="none" strokeDasharray="4,4" />
                      </g>
                      
                      {/* Central insight formation */}
                      <g className="animate-pulse" style={{ animationDelay: "1.3s", animationDuration: "2s" }}>
                        <circle cx="200" cy="165" r="18" fill="white" opacity="0.25" />
                        <circle cx="200" cy="165" r="12" fill="white" opacity="0.35" />
                        <circle cx="200" cy="165" r="6" fill="white" opacity="0.5" />
                        
                        {/* Radiating insight */}
                        <circle cx="200" cy="165" r="24" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3" />
                        <circle cx="200" cy="165" r="32" stroke="white" strokeWidth="1" fill="none" opacity="0.2" />
                      </g>
                      
                      {/* Data validation representation (graph-like structure at bottom) */}
                      <g opacity="0.45" className="animate-pulse" style={{ animationDelay: "1.8s" }}>
                        {/* Simple trend line */}
                        <path d="M 30,190 L 80,185 L 130,180 L 180,175 L 230,172 L 280,170 L 330,168 L 370,166" 
                          stroke="white" strokeWidth="2.5" fill="none" opacity="0.6" strokeLinecap="round" />
                        
                        {/* Data points on trend */}
                        <circle cx="80" cy="185" r="3" fill="white" opacity="0.7" />
                        <circle cx="180" cy="175" r="3" fill="white" opacity="0.7" />
                        <circle cx="280" cy="170" r="3" fill="white" opacity="0.7" />
                        <circle cx="370" cy="166" r="3" fill="white" opacity="0.7" />
                      </g>
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
