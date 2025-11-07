import { Brain, TestTube, Languages, Building2, ArrowRight } from "lucide-react";
import { CharacterIllustration } from "./CharacterIllustration";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    character: "data-anna" as const,
    icon: Brain,
    title: "AI & Data Solutions",
    description: "Perfect data from PhDs, MDs, and domain experts",
    features: [
      "LLM Fine-Tuning & Evaluation",
      "Expert Data Annotation (HIPAA-compliant)",
      "Custom Data Collection in 150+ Languages",
    ],
  },
  {
    character: "tester-tom" as const,
    icon: TestTube,
    title: "Quality Assurance & Testing",
    description: "Real humans, real devices, real-world conditions",
    features: [
      "Global Crowd Testing (80+ countries)",
      "AI Model Validation",
      "Automated & Manual Testing",
    ],
  },
  {
    character: "linguist-leila" as const,
    icon: Languages,
    title: "Multilingual Excellence",
    description: "Native speakers, cultural authenticity, zero misunderstandings",
    features: [
      "Translation & Localization (150+ languages)",
      "Multimedia Adaptation",
      "Cultural Nuance Preservation",
    ],
  },
  {
    character: "engineer-erik" as const,
    icon: Building2,
    title: "Enterprise & BPO",
    description: "Scale your operations without the overhead",
    features: [
      "Multilingual Customer Support",
      "Data & Document Management",
      "Market Research & Analysis",
    ],
  },
];

export const NetworkSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="services" ref={sectionRef} className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background world map illustration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 600">
          <circle cx="200" cy="150" r="3" fill="hsl(162 100% 43%)" className="animate-pulse" />
          <circle cx="450" cy="200" r="3" fill="hsl(4 100% 75%)" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
          <circle cx="700" cy="180" r="3" fill="hsl(237 75% 70%)" className="animate-pulse" style={{ animationDelay: "1s" }} />
          <circle cx="350" cy="350" r="3" fill="hsl(162 100% 43%)" className="animate-pulse" style={{ animationDelay: "1.5s" }} />
          <circle cx="800" cy="400" r="3" fill="hsl(4 100% 75%)" className="animate-pulse" style={{ animationDelay: "2s" }} />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Meet the <span className="gradient-text animate-gradient">300,000+ Experts</span>
            <br />Behind Your Success
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={index}
                data-index={index}
                className={`group relative glassmorphic bg-card border border-border rounded-3xl p-6 sm:p-8 hover-lift hover:shadow-xl transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-secondary via-primary to-accent p-[2px] -z-10">
                  <div className="w-full h-full rounded-3xl bg-card"></div>
                </div>

                {/* Character Illustration */}
                <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <CharacterIllustration type={service.character} className="w-32 h-32 sm:w-40 sm:h-40" animate={false} />
                </div>

                {/* Icon Badge */}
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold gradient-text">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 pt-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                        <span className="text-accent mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button - appears on hover */}
                  <div className="pt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">
                      Explore Services <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
