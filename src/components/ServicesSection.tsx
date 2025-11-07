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
                    <svg className="absolute inset-0 w-full h-full opacity-35 group-hover:opacity-50 transition-opacity duration-500" viewBox="0 0 400 200">
                      {/* Neural network / Brain-like connections forming */}
                      {/* Left side: scattered, unconnected neurons */}
                      <circle cx="40" cy="60" r="5" fill="white" opacity="0.3" className="animate-pulse" />
                      <circle cx="60" cy="100" r="4" fill="white" opacity="0.25" className="animate-pulse" style={{ animationDelay: "0.2s" }} />
                      <circle cx="50" cy="140" r="5" fill="white" opacity="0.3" className="animate-pulse" style={{ animationDelay: "0.4s" }} />
                      <circle cx="90" cy="80" r="4" fill="white" opacity="0.25" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
                      
                      {/* Center: connections forming (synapses) */}
                      <g className="animate-pulse" style={{ animationDelay: "0.5s" }}>
                        <circle cx="160" cy="70" r="6" fill="white" opacity="0.5" />
                        <circle cx="180" cy="100" r="6" fill="white" opacity="0.5" />
                        <circle cx="170" cy="130" r="6" fill="white" opacity="0.5" />
                        <line x1="160" y1="70" x2="180" y2="100" stroke="white" strokeWidth="2" opacity="0.4" strokeDasharray="3,3" className="animate-pulse" />
                        <line x1="180" y1="100" x2="170" y2="130" stroke="white" strokeWidth="2" opacity="0.4" strokeDasharray="3,3" className="animate-pulse" />
                      </g>
                      
                      {/* Right side: organized, connected network (AI thinking) */}
                      <g opacity="0.6">
                        <circle cx="280" cy="60" r="7" fill="white" opacity="0.7" />
                        <circle cx="320" cy="80" r="7" fill="white" opacity="0.7" />
                        <circle cx="300" cy="110" r="7" fill="white" opacity="0.7" />
                        <circle cx="340" cy="130" r="7" fill="white" opacity="0.7" />
                        <circle cx="360" cy="100" r="6" fill="white" opacity="0.6" />
                        
                        {/* Strong connections */}
                        <line x1="280" y1="60" x2="320" y2="80" stroke="white" strokeWidth="2.5" opacity="0.5" />
                        <line x1="320" y1="80" x2="300" y2="110" stroke="white" strokeWidth="2.5" opacity="0.5" />
                        <line x1="300" y1="110" x2="340" y2="130" stroke="white" strokeWidth="2.5" opacity="0.5" />
                        <line x1="320" y1="80" x2="360" y2="100" stroke="white" strokeWidth="2" opacity="0.45" />
                        <line x1="280" y1="60" x2="300" y2="110" stroke="white" strokeWidth="2" opacity="0.4" />
                        
                        {/* Pulse effect showing "thinking" */}
                        <circle cx="300" cy="110" r="15" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3" className="animate-pulse" />
                      </g>
                      
                      {/* Arrow showing transformation */}
                      <path d="M 120,100 L 140,100 L 135,95 M 140,100 L 135,105" stroke="white" strokeWidth="2" opacity="0.4" fill="none" className="animate-pulse" style={{ animationDelay: "1s" }} />
                      <path d="M 220,100 L 240,100 L 235,95 M 240,100 L 235,105" stroke="white" strokeWidth="2" opacity="0.5" fill="none" className="animate-pulse" style={{ animationDelay: "1.2s" }} />
                    </svg>
                  )}

                  {service.visualType === "grid" && (
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                      {/* Magnifying glass scanning for bugs */}
                      <g className="animate-pulse" style={{ animationDuration: "3s" }}>
                        {/* Magnifying glass */}
                        <circle cx="200" cy="90" r="35" stroke="white" strokeWidth="3" fill="none" opacity="0.5" />
                        <line x1="225" y1="115" x2="250" y2="140" stroke="white" strokeWidth="4" opacity="0.5" strokeLinecap="round" />
                        
                        {/* Crosshair in center */}
                        <line x1="185" y1="90" x2="215" y2="90" stroke="white" strokeWidth="1.5" opacity="0.4" />
                        <line x1="200" y1="75" x2="200" y2="105" stroke="white" strokeWidth="1.5" opacity="0.4" />
                      </g>
                      
                      {/* Code/UI elements being inspected */}
                      <g opacity="0.35">
                        {/* UI elements (rectangles representing interface) */}
                        <rect x="60" y="60" width="40" height="25" stroke="white" strokeWidth="1.5" fill="none" rx="3" />
                        <rect x="60" y="95" width="40" height="25" stroke="white" strokeWidth="1.5" fill="none" rx="3" />
                        <rect x="60" y="130" width="40" height="25" stroke="white" strokeWidth="1.5" fill="none" rx="3" />
                        
                        <rect x="300" y="60" width="40" height="25" stroke="white" strokeWidth="1.5" fill="none" rx="3" />
                        <rect x="300" y="95" width="40" height="25" stroke="white" strokeWidth="1.5" fill="none" rx="3" />
                        <rect x="300" y="130" width="40" height="25" stroke="white" strokeWidth="1.5" fill="none" rx="3" />
                      </g>
                      
                      {/* Bugs detected (X marks) */}
                      <g className="animate-pulse" style={{ animationDelay: "0.5s" }}>
                        <line x1="73" y1="68" x2="87" y2="77" stroke="#ef4444" strokeWidth="2.5" opacity="0.7" strokeLinecap="round" />
                        <line x1="87" y1="68" x2="73" y2="77" stroke="#ef4444" strokeWidth="2.5" opacity="0.7" strokeLinecap="round" />
                      </g>
                      
                      <g className="animate-pulse" style={{ animationDelay: "1s" }}>
                        <line x1="313" y1="103" x2="327" y2="112" stroke="#ef4444" strokeWidth="2.5" opacity="0.7" strokeLinecap="round" />
                        <line x1="327" y1="103" x2="313" y2="112" stroke="#ef4444" strokeWidth="2.5" opacity="0.7" strokeLinecap="round" />
                      </g>
                      
                      {/* Checkmarks (bugs fixed) */}
                      <g className="animate-pulse" style={{ animationDelay: "1.5s" }}>
                        <path d="M 65,145 L 72,152 L 95,135" stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
                      </g>
                      
                      <g className="animate-pulse" style={{ animationDelay: "2s" }}>
                        <path d="M 305,68 L 312,75 L 335,58" stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
                      </g>
                      
                      {/* Scanning lines */}
                      <line x1="0" y1="50" x2="400" y2="50" stroke="white" strokeWidth="1" opacity="0.15" strokeDasharray="5,5" className="animate-pulse" />
                      <line x1="0" y1="100" x2="400" y2="100" stroke="white" strokeWidth="1" opacity="0.2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
                      <line x1="0" y1="150" x2="400" y2="150" stroke="white" strokeWidth="1" opacity="0.15" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
                    </svg>
                  )}

                  {service.visualType === "speech" && (
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                      {/* Speech bubbles transforming between languages */}
                      
                      {/* Left speech bubble - Source language */}
                      <g className="animate-pulse" opacity="0.5">
                        <path d="M 60,80 Q 60,60 80,60 L 140,60 Q 160,60 160,80 L 160,100 Q 160,120 140,120 L 90,120 L 75,135 L 80,120 L 80,120 Q 60,120 60,100 Z" 
                          fill="white" fillOpacity="0.2" stroke="white" strokeWidth="2" />
                        <text x="110" y="95" fill="white" fontSize="20" fontWeight="bold" textAnchor="middle" opacity="0.7">Hello</text>
                      </g>
                      
                      {/* Center: Translation symbol with rotating effect */}
                      <g className="animate-pulse" style={{ animationDelay: "0.5s", animationDuration: "2s" }}>
                        <circle cx="200" cy="100" r="25" stroke="white" strokeWidth="2.5" fill="none" opacity="0.4" />
                        <circle cx="200" cy="100" r="18" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3" />
                        
                        {/* Globe/translation icon */}
                        <ellipse cx="200" cy="100" rx="18" ry="10" stroke="white" strokeWidth="1.5" fill="none" opacity="0.5" />
                        <line x1="182" y1="100" x2="218" y2="100" stroke="white" strokeWidth="1.5" opacity="0.5" />
                        <path d="M 200,82 Q 190,100 200,118" stroke="white" strokeWidth="1.5" fill="none" opacity="0.5" />
                        <path d="M 200,82 Q 210,100 200,118" stroke="white" strokeWidth="1.5" fill="none" opacity="0.5" />
                      </g>
                      
                      {/* Right speech bubble - Target language */}
                      <g className="animate-pulse" style={{ animationDelay: "1s" }} opacity="0.55">
                        <path d="M 240,80 Q 240,60 260,60 L 320,60 Q 340,60 340,80 L 340,100 Q 340,120 320,120 L 310,120 L 325,135 L 320,120 L 260,120 Q 240,120 240,100 Z" 
                          fill="white" fillOpacity="0.25" stroke="white" strokeWidth="2" />
                        <text x="290" y="95" fill="white" fontSize="20" fontWeight="bold" textAnchor="middle" opacity="0.8">你好</text>
                      </g>
                      
                      {/* Additional language examples floating around */}
                      <text x="100" y="40" fill="white" fontSize="14" opacity="0.4" className="animate-pulse" style={{ animationDelay: "0.3s" }}>Bonjour</text>
                      <text x="280" y="40" fill="white" fontSize="14" opacity="0.4" className="animate-pulse" style={{ animationDelay: "0.7s" }}>こんにちは</text>
                      <text x="80" y="170" fill="white" fontSize="14" opacity="0.4" className="animate-pulse" style={{ animationDelay: "1.1s" }}>Hola</text>
                      <text x="290" y="170" fill="white" fontSize="14" opacity="0.4" className="animate-pulse" style={{ animationDelay: "1.5s" }}>مرحبا</text>
                      <text x="200" y="35" fill="white" fontSize="12" opacity="0.35" className="animate-pulse" style={{ animationDelay: "0.9s" }}>नमस्ते</text>
                      <text x="200" y="180" fill="white" fontSize="12" opacity="0.35" className="animate-pulse" style={{ animationDelay: "1.3s" }}>Ciao</text>
                      
                      {/* Connection arrows showing translation flow */}
                      <path d="M 165,90 L 175,90" stroke="white" strokeWidth="2" opacity="0.4" fill="none" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
                      <path d="M 175,90 L 170,87 M 175,90 L 170,93" stroke="white" strokeWidth="2" opacity="0.4" fill="none" />
                      
                      <path d="M 225,90 L 235,90" stroke="white" strokeWidth="2" opacity="0.4" fill="none" className="animate-pulse" style={{ animationDelay: "1.1s" }} />
                      <path d="M 235,90 L 230,87 M 235,90 L 230,93" stroke="white" strokeWidth="2" opacity="0.4" fill="none" />
                    </svg>
                  )}

                  {service.visualType === "network" && (
                    <svg className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-55 transition-opacity duration-500" viewBox="0 0 400 200">
                      {/* Growing network showing scalability */}
                      
                      {/* Small starting point (startup/small team) */}
                      <g opacity="0.4">
                        <circle cx="80" cy="100" r="8" fill="white" opacity="0.6" />
                        <circle cx="60" cy="85" r="5" fill="white" opacity="0.5" className="animate-pulse" />
                        <circle cx="100" cy="85" r="5" fill="white" opacity="0.5" className="animate-pulse" style={{ animationDelay: "0.2s" }} />
                        <line x1="80" y1="100" x2="60" y2="85" stroke="white" strokeWidth="1" opacity="0.4" />
                        <line x1="80" y1="100" x2="100" y2="85" stroke="white" strokeWidth="1" opacity="0.4" />
                      </g>
                      
                      {/* Growth arrow */}
                      <path d="M 130,100 L 160,100 L 155,95 M 160,100 L 155,105" stroke="white" strokeWidth="2.5" opacity="0.5" fill="none" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
                      
                      {/* Medium network (scaling up) */}
                      <g opacity="0.5" className="animate-pulse" style={{ animationDelay: "0.7s" }}>
                        <circle cx="200" cy="100" r="10" fill="white" opacity="0.7" />
                        <circle cx="175" cy="75" r="6" fill="white" opacity="0.6" />
                        <circle cx="225" cy="75" r="6" fill="white" opacity="0.6" />
                        <circle cx="175" cy="125" r="6" fill="white" opacity="0.6" />
                        <circle cx="225" cy="125" r="6" fill="white" opacity="0.6" />
                        <circle cx="200" cy="65" r="5" fill="white" opacity="0.5" />
                        <circle cx="200" cy="135" r="5" fill="white" opacity="0.5" />
                        
                        <line x1="200" y1="100" x2="175" y2="75" stroke="white" strokeWidth="1.5" opacity="0.5" />
                        <line x1="200" y1="100" x2="225" y2="75" stroke="white" strokeWidth="1.5" opacity="0.5" />
                        <line x1="200" y1="100" x2="175" y2="125" stroke="white" strokeWidth="1.5" opacity="0.5" />
                        <line x1="200" y1="100" x2="225" y2="125" stroke="white" strokeWidth="1.5" opacity="0.5" />
                        <line x1="200" y1="100" x2="200" y2="65" stroke="white" strokeWidth="1.5" opacity="0.5" />
                        <line x1="200" y1="100" x2="200" y2="135" stroke="white" strokeWidth="1.5" opacity="0.5" />
                      </g>
                      
                      {/* Growth arrow */}
                      <path d="M 250,100 L 280,100 L 275,95 M 280,100 L 275,105" stroke="white" strokeWidth="2.5" opacity="0.6" fill="none" className="animate-pulse" style={{ animationDelay: "1s" }} />
                      
                      {/* Large enterprise network (fully scaled) */}
                      <g opacity="0.6" className="animate-pulse" style={{ animationDelay: "1.2s" }}>
                        <circle cx="330" cy="100" r="12" fill="white" opacity="0.8" />
                        
                        {/* Outer ring of nodes */}
                        <circle cx="305" cy="70" r="6" fill="white" opacity="0.7" />
                        <circle cx="355" cy="70" r="6" fill="white" opacity="0.7" />
                        <circle cx="305" cy="130" r="6" fill="white" opacity="0.7" />
                        <circle cx="355" cy="130" r="6" fill="white" opacity="0.7" />
                        <circle cx="330" cy="55" r="5" fill="white" opacity="0.65" />
                        <circle cx="330" cy="145" r="5" fill="white" opacity="0.65" />
                        <circle cx="295" cy="100" r="5" fill="white" opacity="0.65" />
                        <circle cx="365" cy="100" r="5" fill="white" opacity="0.65" />
                        
                        {/* Connections */}
                        <line x1="330" y1="100" x2="305" y2="70" stroke="white" strokeWidth="2" opacity="0.6" />
                        <line x1="330" y1="100" x2="355" y2="70" stroke="white" strokeWidth="2" opacity="0.6" />
                        <line x1="330" y1="100" x2="305" y2="130" stroke="white" strokeWidth="2" opacity="0.6" />
                        <line x1="330" y1="100" x2="355" y2="130" stroke="white" strokeWidth="2" opacity="0.6" />
                        <line x1="330" y1="100" x2="330" y2="55" stroke="white" strokeWidth="2" opacity="0.6" />
                        <line x1="330" y1="100" x2="330" y2="145" stroke="white" strokeWidth="2" opacity="0.6" />
                        <line x1="330" y1="100" x2="295" y2="100" stroke="white" strokeWidth="2" opacity="0.6" />
                        <line x1="330" y1="100" x2="365" y2="100" stroke="white" strokeWidth="2" opacity="0.6" />
                        
                        {/* Pulse rings showing active scaling */}
                        <circle cx="330" cy="100" r="22" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3" className="animate-pulse" />
                        <circle cx="330" cy="100" r="32" stroke="white" strokeWidth="1" fill="none" opacity="0.2" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
                      </g>
                    </svg>
                  )}

                  {service.visualType === "shield" && (
                    <svg className="absolute inset-0 w-full h-full opacity-35 group-hover:opacity-50 transition-opacity duration-500" viewBox="0 0 400 200">
                      {/* Shield deflecting threats */}
                      
                      {/* Main shield - larger and centered */}
                      <g className="animate-pulse" style={{ animationDuration: "2s" }}>
                        <path 
                          d="M200 40 L245 68 L245 135 Q245 165 200 182 Q155 165 155 135 L155 68 Z" 
                          stroke="white" 
                          strokeWidth="3.5" 
                          fill="white" 
                          fillOpacity="0.18" 
                          filter="drop-shadow(0 0 10px rgba(255,255,255,0.4))"
                        />
                        
                        {/* Shield emblem - checkmark */}
                        <path 
                          d="M175 110 L193 128 L225 90" 
                          stroke="white" 
                          strokeWidth="5" 
                          fill="none" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          opacity="0.9"
                        />
                      </g>
                      
                      {/* Threats coming from left (represented as dangerous symbols) */}
                      <g className="animate-pulse" opacity="0.5" style={{ animationDelay: "0.3s" }}>
                        {/* Spam/malicious content */}
                        <path d="M 40,80 L 50,90 M 50,80 L 40,90" stroke="#ef4444" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
                        <circle cx="45" cy="85" r="12" stroke="#ef4444" strokeWidth="2" fill="none" opacity="0.5" />
                      </g>
                      
                      <g className="animate-pulse" opacity="0.5" style={{ animationDelay: "0.6s" }}>
                        <path d="M 70,130 L 80,140 M 80,130 L 70,140" stroke="#ef4444" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
                        <circle cx="75" cy="135" r="12" stroke="#ef4444" strokeWidth="2" fill="none" opacity="0.5" />
                      </g>
                      
                      <g className="animate-pulse" opacity="0.5" style={{ animationDelay: "0.9s" }}>
                        <path d="M 50,50 L 60,60 M 60,50 L 50,60" stroke="#ef4444" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
                        <circle cx="55" cy="55" r="12" stroke="#ef4444" strokeWidth="2" fill="none" opacity="0.5" />
                      </g>
                      
                      {/* Deflection arrows showing threats being blocked */}
                      <path d="M 90,85 Q 120,75 130,50" stroke="white" strokeWidth="2" opacity="0.4" fill="none" strokeDasharray="4,4" className="animate-pulse" style={{ animationDelay: "0.4s" }} />
                      <path d="M 105,135 Q 125,140 135,160" stroke="white" strokeWidth="2" opacity="0.4" fill="none" strokeDasharray="4,4" className="animate-pulse" style={{ animationDelay: "0.7s" }} />
                      
                      {/* Safe zone indicator on the right */}
                      <g opacity="0.45" className="animate-pulse" style={{ animationDelay: "1.2s" }}>
                        <text x="300" y="90" fill="white" fontSize="16" fontWeight="bold" opacity="0.7">SAFE</text>
                        <rect x="280" y="70" width="80" height="35" stroke="white" strokeWidth="2" fill="none" rx="5" opacity="0.5" />
                        <circle cx="340" cy="60" r="3" fill="#10b981" opacity="0.8" />
                        <circle cx="350" cy="60" r="3" fill="#10b981" opacity="0.8" />
                        <circle cx="360" cy="60" r="3" fill="#10b981" opacity="0.8" />
                      </g>
                      
                      {/* 24/7 monitoring indicator */}
                      <g opacity="0.4" className="animate-pulse" style={{ animationDelay: "1.5s" }}>
                        <circle cx="330" cy="140" r="15" stroke="white" strokeWidth="2" fill="none" />
                        <circle cx="330" cy="140" r="3" fill="white" />
                        <line x1="330" y1="140" x2="330" y2="130" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <line x1="330" y1="140" x2="338" y2="140" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </g>
                    </svg>
                  )}

                  {service.visualType === "insights" && (
                    <svg className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-55 transition-opacity duration-500" viewBox="0 0 400 200">
                      {/* User personas providing insights */}
                      
                      {/* Three user personas (human silhouettes) */}
                      <g opacity="0.45" className="animate-pulse">
                        {/* User 1 */}
                        <circle cx="80" cy="80" r="18" fill="white" opacity="0.3" />
                        <path d="M 60,110 Q 80,95 100,110 L 100,130 L 60,130 Z" fill="white" opacity="0.3" />
                        {/* Thought bubble */}
                        <circle cx="95" cy="60" r="8" fill="white" opacity="0.25" />
                        <circle cx="105" cy="52" r="5" fill="white" opacity="0.2" />
                        <text x="95" y="64" fill="white" fontSize="10" textAnchor="middle" opacity="0.5">💡</text>
                      </g>
                      
                      <g opacity="0.5" className="animate-pulse" style={{ animationDelay: "0.4s" }}>
                        {/* User 2 */}
                        <circle cx="200" cy="75" r="18" fill="white" opacity="0.35" />
                        <path d="M 180,105 Q 200,90 220,105 L 220,125 L 180,125 Z" fill="white" opacity="0.35" />
                        {/* Thought bubble */}
                        <circle cx="215" cy="55" r="8" fill="white" opacity="0.3" />
                        <circle cx="225" cy="47" r="5" fill="white" opacity="0.25" />
                        <text x="215" y="59" fill="white" fontSize="10" textAnchor="middle" opacity="0.6">💡</text>
                      </g>
                      
                      <g opacity="0.45" className="animate-pulse" style={{ animationDelay: "0.8s" }}>
                        {/* User 3 */}
                        <circle cx="320" cy="80" r="18" fill="white" opacity="0.3" />
                        <path d="M 300,110 Q 320,95 340,110 L 340,130 L 300,130 Z" fill="white" opacity="0.3" />
                        {/* Thought bubble */}
                        <circle cx="305" cy="60" r="8" fill="white" opacity="0.25" />
                        <circle cx="295" cy="52" r="5" fill="white" opacity="0.2" />
                        <text x="305" y="64" fill="white" fontSize="10" textAnchor="middle" opacity="0.5">💡</text>
                      </g>
                      
                      {/* Data points/insights flowing to center */}
                      <g opacity="0.4">
                        <circle cx="80" cy="140" r="3" fill="white" className="animate-pulse" />
                        <circle cx="120" cy="150" r="3" fill="white" className="animate-pulse" style={{ animationDelay: "0.2s" }} />
                        <circle cx="160" cy="155" r="3" fill="white" className="animate-pulse" style={{ animationDelay: "0.4s" }} />
                        <circle cx="200" cy="150" r="3" fill="white" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
                        <circle cx="240" cy="155" r="3" fill="white" className="animate-pulse" style={{ animationDelay: "0.8s" }} />
                        <circle cx="280" cy="150" r="3" fill="white" className="animate-pulse" style={{ animationDelay: "1s" }} />
                        <circle cx="320" cy="140" r="3" fill="white" className="animate-pulse" style={{ animationDelay: "1.2s" }} />
                        
                        {/* Lines connecting insights */}
                        <path d="M 80,140 Q 140,165 200,165" stroke="white" strokeWidth="1.5" opacity="0.3" fill="none" strokeDasharray="3,3" />
                        <path d="M 200,165 Q 260,165 320,140" stroke="white" strokeWidth="1.5" opacity="0.3" fill="none" strokeDasharray="3,3" />
                      </g>
                      
                      {/* Central insight/lightbulb moment */}
                      <g className="animate-pulse" style={{ animationDelay: "1.5s", animationDuration: "2s" }}>
                        <circle cx="200" cy="165" r="15" fill="white" opacity="0.15" />
                        <circle cx="200" cy="165" r="10" fill="white" opacity="0.25" />
                        
                        {/* Star/sparkle showing insight */}
                        <path d="M 200,155 L 202,162 L 209,162 L 204,167 L 206,174 L 200,170 L 194,174 L 196,167 L 191,162 L 198,162 Z" 
                          fill="white" opacity="0.6" />
                      </g>
                      
                      {/* Graph/chart showing validated insights */}
                      <g opacity="0.35" className="animate-pulse" style={{ animationDelay: "2s" }}>
                        <line x1="30" y1="190" x2="370" y2="190" stroke="white" strokeWidth="1.5" />
                        <line x1="30" y1="150" x2="30" y2="190" stroke="white" strokeWidth="1.5" />
                        
                        {/* Bar chart */}
                        <rect x="60" y="175" width="25" height="15" fill="white" opacity="0.4" />
                        <rect x="140" y="165" width="25" height="25" fill="white" opacity="0.5" />
                        <rect x="220" y="170" width="25" height="20" fill="white" opacity="0.45" />
                        <rect x="300" y="160" width="25" height="30" fill="white" opacity="0.55" />
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
