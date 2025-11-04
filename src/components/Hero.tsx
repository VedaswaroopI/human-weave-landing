import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { CharacterIllustration } from "./CharacterIllustration";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 animate-float">
          <CharacterIllustration type="data-anna" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
          <CharacterIllustration type="tester-tom" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "2s" }}>
          <CharacterIllustration type="linguist-leila" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: "1.5s" }}>
          <CharacterIllustration type="doctor-dan" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40" />
        </div>

        {/* Floating Icons */}
        <svg className="absolute top-60 left-1/4 w-12 h-12 animate-float" style={{ animationDelay: "0.5s" }} viewBox="0 0 50 50">
          <rect x="5" y="5" width="40" height="30" rx="3" fill="hsl(162 100% 43%)" opacity="0.6" />
          <line x1="10" y1="12" x2="40" y2="12" stroke="white" strokeWidth="2" />
          <line x1="10" y1="18" x2="35" y2="18" stroke="white" strokeWidth="2" />
          <line x1="10" y1="24" x2="30" y2="24" stroke="white" strokeWidth="2" />
        </svg>

        <svg className="absolute top-32 right-1/4 w-12 h-12 animate-float" style={{ animationDelay: "1.2s" }} viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="15" fill="hsl(4 100% 75%)" opacity="0.6" />
          <path d="M 25 15 L 28 22 L 35 22 L 29 27 L 32 34 L 25 29 L 18 34 L 21 27 L 15 22 L 22 22 Z" fill="white" />
        </svg>

        <svg className="absolute bottom-60 right-1/3 w-12 h-12 animate-float" style={{ animationDelay: "2.5s" }} viewBox="0 0 50 50">
          <rect x="10" y="10" width="30" height="30" rx="5" fill="hsl(237 51% 35%)" opacity="0.6" />
          <text x="25" y="32" fontSize="20" fill="white" textAnchor="middle" fontWeight="bold">AI</text>
        </svg>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {/* Small Text */}
          <div className="animate-fadeInUp opacity-0" style={{ animationDelay: "0.2s" }}>
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-muted-foreground uppercase">
              300,000+ Humans Powering AI
            </p>
          </div>

          {/* Main Headline */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fadeInUp opacity-0" style={{ animationDelay: "0.4s" }}>
              The Humans Behind<br />
              <span className="gradient-text animate-gradient">Your AI Breakthrough</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fadeInUp opacity-0" style={{ animationDelay: "0.6s" }}>
            From data annotation to global testing to 150+ languages, we're the expert human network that transforms your AI vision into reality—with 99.5%+ accuracy and enterprise security.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fadeInUp opacity-0" style={{ animationDelay: "0.8s" }}>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
            >
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 hover:bg-secondary/10 hover:border-secondary transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
            >
              Meet Our Network
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 sm:pt-16 animate-fadeInUp opacity-0" style={{ animationDelay: "1s" }}>
            <div className="inline-flex flex-col items-center gap-2 text-muted-foreground">
              <span className="text-xs sm:text-sm">Scroll to meet the humans</span>
              <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
