import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Handshake, Users, Zap, Shield, Package } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { JourneySection } from "@/components/JourneySection";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const journeySteps = [
  {
    number: "01",
    icon: Handshake,
    title: "Discovery Call",
    description: "We dive deep into your vision, challenges, and goals. No sales pitch—just understanding your data needs.",
    time: "24-48 hours",
    gradient: "from-secondary to-primary"
  },
  {
    number: "02",
    icon: Users,
    title: "Expert Matching",
    description: "Handpicked specialists from our 300K+ network. Medical annotators, linguists, or testers—perfectly matched.",
    time: "1-3 days",
    gradient: "from-primary to-accent"
  },
  {
    number: "03",
    icon: Zap,
    title: "Flawless Execution",
    description: "Your dedicated PM orchestrates every detail. Daily updates, transparent communication, real-time adjustments.",
    time: "Your timeline",
    gradient: "from-accent to-secondary"
  },
  {
    number: "04",
    icon: Shield,
    title: "Multi-Layer QA",
    description: "99.5%+ accuracy guaranteed. Every annotation, translation, and test result verified before delivery.",
    time: "Continuous",
    gradient: "from-secondary to-accent"
  },
  {
    number: "05",
    icon: Package,
    title: "Seamless Delivery",
    description: "Your preferred format, complete documentation, ongoing support. We're not done until you're thrilled.",
    time: "On schedule",
    gradient: "from-primary to-secondary"
  }
];

export const JourneyScrollRevamped = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  // If reduced motion is preferred, render simpler version
  if (prefersReducedMotion) {
    return <JourneySection />;
  }

  return (
    <section id="process" className="py-12 sm:py-16 md:py-20 bg-background">
      <ContainerScroll
        titleComponent={
          <div className="space-y-4 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Your Journey with <span className="gradient-text animate-gradient">UsergyAI</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              From first call to final delivery—experience precision at every step
            </p>
          </div>
        }
      >
        {/* Journey Steps Content */}
        <div className="h-full w-full overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
          <div className="space-y-4 md:space-y-6 p-4 md:p-6">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glassmorphic bg-card/50 border border-border rounded-2xl p-4 md:p-6 hover:border-primary/30 transition-all duration-300 group relative"
                >
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={70}
                    inactiveZone={0.15}
                    borderWidth={2}
                    movementDuration={2.3}
                    className="z-10"
                  />
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                    {/* Number Badge */}
                    <div className="flex-shrink-0">
                      <div className="relative w-14 h-14 md:w-16 md:h-16">
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                        <div className="relative w-full h-full rounded-full border-2 border-border flex items-center justify-center">
                          <span className="text-xl md:text-2xl font-bold gradient-text">
                            {step.number}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-2 md:space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg md:text-xl font-bold text-foreground">
                          {step.title}
                        </h3>
                        <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                      </div>
                      
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="flex items-center gap-2 pt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="text-xs md:text-sm text-accent font-medium">
                          {step.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};
