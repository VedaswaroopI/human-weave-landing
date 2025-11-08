import { ArrowRight } from "lucide-react";
import { ParticleButton } from "./ui/particle-button";

export const FinalCTA = () => {
  return (
    <section className="py-10 sm:py-12 md:py-14 bg-gradient-to-br from-secondary/5 via-primary/5 to-accent/5 relative overflow-hidden">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-5">
          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Ready to build something{" "}
            <span className="gradient-text animate-gradient">extraordinary?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Join 300+ companies who trust UsergyAI to power their AI breakthroughs.
          </p>

          {/* Single CTA */}
          <div className="pt-2">
            <ParticleButton
              size="lg"
              className="h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base bg-gradient-to-r from-secondary via-primary to-accent hover:shadow-xl hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://calendly.com/swaroop-usergy/30min', '_blank')}
            >
              Schedule a Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </ParticleButton>
          </div>
        </div>
      </div>
    </section>
  );
};
