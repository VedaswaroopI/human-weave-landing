import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { FloatingElements } from "./FloatingElements";

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Floating Background Elements */}
      <FloatingElements />

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
        </div>
      </div>
    </section>
  );
};
