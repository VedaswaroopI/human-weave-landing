import { Handshake, Users, Zap, Shield, Package } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    icon: Handshake,
    title: "We Listen First",
    description: "Tell us your vision, your challenges, your timeline. We don't start with templates—we start with understanding.",
    time: "Usually takes: 1-2 days",
    side: "left",
  },
  {
    number: "02",
    icon: Users,
    title: "We Match, You Meet",
    description: "From our 300,000+ vetted professionals, we handpick specialists. Need doctors? Linguists? Testers? You'll know who's working on your project.",
    time: "Usually takes: 1-3 days",
    side: "right",
  },
  {
    number: "03",
    icon: Zap,
    title: "We Execute Together",
    description: "Your dedicated project manager coordinates everything. You get regular updates, transparent communication, and the ability to course-correct anytime.",
    time: "Your timeline, our commitment",
    side: "left",
  },
  {
    number: "04",
    icon: Shield,
    title: "We Validate Everything",
    description: "Multi-layer QA ensures 99.5%+ accuracy. Every annotation, every translation, every test result gets verified before it reaches you.",
    time: "Built into every step",
    side: "right",
  },
  {
    number: "05",
    icon: Package,
    title: "We Deliver Excellence",
    description: "Seamless delivery in your preferred format, with documentation and ongoing support. We're not done until you're thrilled.",
    time: "On time, every time",
    side: "left",
  },
];

export const JourneySection = () => {
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
      { threshold: 0.2 }
    );

    const stepElements = sectionRef.current?.querySelectorAll("[data-index]");
    stepElements?.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Your Journey with <span className="gradient-text animate-gradient">UsergyAI</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto space-y-16 sm:space-y-24 relative">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-20 top-0 bottom-0 w-px bg-gradient-to-b from-secondary via-primary to-accent opacity-20"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isVisible = visibleSteps.includes(index);
            const isLeft = step.side === "left";

            return (
              <div
                key={index}
                data-index={index}
                className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-700 ${
                  isVisible ? "opacity-100" : "opacity-0"
                } ${isLeft ? "" : "md:grid-flow-dense"}`}
              >
                {/* Illustration Side */}
                <div className={`transition-all duration-700 ${
                  isVisible 
                    ? "translate-x-0" 
                    : isLeft ? "-translate-x-12" : "translate-x-12"
                } ${isLeft ? "md:order-1" : "md:order-2"}`}>
                  <div className="flex justify-center">
                    <div className="w-48 h-48 sm:w-64 sm:h-64 relative">
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-secondary/20 via-primary/20 to-accent/20 flex items-center justify-center">
                        <Icon className="w-24 h-24 sm:w-32 sm:h-32 text-muted-foreground" strokeWidth={1} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`space-y-4 transition-all duration-700 ${
                  isVisible 
                    ? "translate-x-0" 
                    : isLeft ? "translate-x-12" : "-translate-x-12"
                } ${isLeft ? "md:order-2" : "md:order-1"}`}>
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-primary/30">
                    <span className="text-2xl sm:text-3xl font-bold gradient-text">{step.number}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">{step.title}</h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Time */}
                  <p className="text-sm text-accent font-medium">{step.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
