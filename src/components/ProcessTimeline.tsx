import { Handshake, Users, Zap, Shield, Package } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: 1,
    icon: Handshake,
    title: "Discovery",
    description: "We understand your goals, timeline, and quality requirements",
    time: "1-2 days",
  },
  {
    number: 2,
    icon: Users,
    title: "Expert Matching",
    description: "From our 300K+ vetted experts, we match the perfect specialists",
    time: "1-3 days",
  },
  {
    number: 3,
    icon: Zap,
    title: "Execution",
    description: "Expert humans + smart technology = flawless execution",
    time: "Your timeline",
  },
  {
    number: 4,
    icon: Shield,
    title: "Quality Assurance",
    description: "Multi-layer QA ensures 99.5%+ accuracy",
    time: "Built-in",
  },
  {
    number: 5,
    icon: Package,
    title: "Delivery",
    description: "Seamless delivery, ongoing support, transparent communication",
    time: "On time, every time",
  },
];

export const ProcessTimeline = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleSteps((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const stepElements = sectionRef.current?.querySelectorAll("[data-index]");
    stepElements?.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-16 sm:py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Your Project, <span className="gradient-text animate-gradient">Perfected</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl">Step by Step</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop: Horizontal */}
          <div className="hidden md:flex items-start justify-between gap-4 relative">
            {/* Connecting Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-accent opacity-20"></div>

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isVisible = visibleSteps.includes(index);

              return (
                <div
                  key={index}
                  data-index={index}
                  className={`flex-1 text-center transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Number Badge */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary to-accent animate-pulse"></div>
                    <div className="relative z-10 w-14 h-14 rounded-full bg-card flex items-center justify-center">
                      <span className="text-2xl font-bold gradient-text">{step.number}</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    ⏱️ {step.time}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Mobile: Vertical */}
          <div className="md:hidden space-y-8 relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary via-primary to-accent opacity-20"></div>

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isVisible = visibleSteps.includes(index);

              return (
                <div
                  key={index}
                  data-index={index}
                  className={`flex gap-4 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Number Badge */}
                  <div className="relative flex-shrink-0">
                    <div className="relative inline-flex items-center justify-center w-16 h-16">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary to-accent animate-pulse"></div>
                      <div className="relative z-10 w-14 h-14 rounded-full bg-card flex items-center justify-center">
                        <span className="text-xl font-bold gradient-text">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 glassmorphic bg-card border border-border rounded-2xl p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{step.title}</h3>
                        <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                          ⏱️ {step.time}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
