import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { CharacterIllustration } from "./CharacterIllustration";

export const FinalCTA = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10 relative overflow-hidden">
      {/* Background Characters */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 animate-float">
          <CharacterIllustration type="data-anna" className="w-32 h-32 md:w-40 md:h-40" />
        </div>
        <div className="absolute top-10 right-10 animate-float" style={{ animationDelay: "0.5s" }}>
          <CharacterIllustration type="tester-tom" className="w-32 h-32 md:w-40 md:h-40" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: "1s" }}>
          <CharacterIllustration type="linguist-leila" className="w-32 h-32 md:w-40 md:h-40" />
        </div>
        <div className="absolute bottom-10 right-1/4 animate-float" style={{ animationDelay: "1.5s" }}>
          <CharacterIllustration type="doctor-dan" className="w-32 h-32 md:w-40 md:h-40" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: "2s" }}>
          <CharacterIllustration type="researcher-rachel" className="w-32 h-32 md:w-40 md:h-40" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Ready to Build Something
            <br />
            <span className="gradient-text animate-gradient">Extraordinary?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how 300,000+ expert humans can power your next AI breakthrough.
          </p>

          {/* Primary CTA */}
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-secondary via-primary to-accent hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-8 py-6 sm:px-12 sm:py-8 animate-pulse"
              style={{ animationDuration: "3s" }}
            >
              Schedule a Free Consultation <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>

          {/* Secondary Text */}
          <p className="text-sm sm:text-base text-muted-foreground pt-4">
            Or explore our <span className="text-accent font-semibold cursor-pointer hover:underline">Projects Board</span> to see available opportunities
          </p>

          {/* Decorative Elements */}
          <div className="flex justify-center gap-8 pt-8 opacity-50">
            <div className="text-4xl animate-wave" style={{ animationDelay: "0s" }}>👋</div>
            <div className="text-4xl animate-wave" style={{ animationDelay: "0.2s" }}>🚀</div>
            <div className="text-4xl animate-wave" style={{ animationDelay: "0.4s" }}>✨</div>
            <div className="text-4xl animate-wave" style={{ animationDelay: "0.6s" }}>💡</div>
            <div className="text-4xl animate-wave" style={{ animationDelay: "0.8s" }}>🎯</div>
          </div>
        </div>
      </div>
    </section>
  );
};
