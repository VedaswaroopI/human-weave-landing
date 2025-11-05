import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const FinalCTA = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-secondary/5 via-primary/5 to-accent/5 relative overflow-hidden">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Ready to build something
            <br />
            <span className="gradient-text animate-gradient">extraordinary?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Join 300+ companies who trust UsergyAI to power their AI breakthroughs.
          </p>

          {/* Single CTA */}
          <div className="pt-4">
            <Button
              size="lg"
              className="h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg bg-gradient-to-r from-secondary via-primary to-accent hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Schedule a Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
