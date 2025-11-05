import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const FinalCTA = () => {
  return (
    <section className="py-24 sm:py-32 md:py-40 bg-gradient-to-br from-secondary/5 via-primary/5 to-accent/5 relative overflow-hidden">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Ready to build something
            <br />
            <span className="gradient-text animate-gradient">extraordinary?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join 300+ companies who trust UsergyAI to power their AI breakthroughs.
          </p>

          {/* Primary CTA */}
          <div className="pt-4">
            <Button
              size="lg"
              className="h-16 sm:h-20 px-8 sm:px-12 text-lg sm:text-xl bg-gradient-to-r from-secondary via-primary to-accent hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Schedule a Free Consultation <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </div>

          {/* Secondary Text */}
          <p className="text-sm sm:text-base text-muted-foreground">
            Or browse <a href="#" className="text-accent font-semibold hover:underline">available projects</a> if you're looking to join our expert network.
          </p>
        </div>
      </div>
    </section>
  );
};
