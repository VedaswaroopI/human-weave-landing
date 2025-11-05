import { Heart, Car, Globe, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const featuredCase = {
  icon: Heart,
  industry: "HEALTHCARE",
  headline: "How We Helped Train FDA-Approved AI Diagnostics",
  metric: "99.8%",
  metricLabel: "Annotation Accuracy",
  story: "A Fortune 500 healthcare company needed 2M medical images annotated by actual doctors. We delivered in 8 weeks with zero errors.",
  color: "from-secondary to-accent",
};

const otherCases = [
  {
    icon: Car,
    industry: "AUTONOMOUS VEHICLES",
    headline: "Training the AI Behind Self-Driving Cars",
    metric: "50M+",
    metricLabel: "Road Scenarios",
    story: "Annotated 50M+ driving scenarios with automotive experts across 15 countries.",
    color: "from-primary to-secondary",
  },
  {
    icon: Globe,
    industry: "GLOBAL SAAS",
    headline: "Launched in 20 Markets Simultaneously",
    metric: "20",
    metricLabel: "Languages",
    story: "Perfect localization in 20 languages with 0 cultural mishaps—in just 3 weeks.",
    color: "from-accent to-primary",
  },
];

export const CaseStudiesRevised = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counter, setCounter] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate counter for featured case
          const target = parseFloat(featuredCase.metric);
          let current = 0;
          const increment = target / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCounter(target);
              clearInterval(timer);
            } else {
              setCounter(current);
            }
          }, 20);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const FeaturedIcon = featuredCase.icon;

  return (
    <section id="case-studies" ref={sectionRef} className="py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Real Projects. <span className="gradient-text animate-gradient">Real Results.</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {/* Featured Card - Full Width */}
          <div
            className={`glassmorphic bg-gradient-to-br from-secondary/5 to-accent/5 border-2 border-accent/20 rounded-3xl p-8 sm:p-12 grid md:grid-cols-2 gap-8 items-center hover-lift transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Left: Large Metric */}
            <div className="text-center md:text-left space-y-4">
              <div className={`text-7xl sm:text-8xl md:text-9xl font-bold bg-gradient-to-r ${featuredCase.color} bg-clip-text text-transparent leading-none`}>
                {counter.toFixed(1)}%
              </div>
              <p className="text-lg sm:text-xl font-semibold text-muted-foreground">
                {featuredCase.metricLabel}
              </p>
            </div>

            {/* Right: Story */}
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase">
                {featuredCase.industry}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                {featuredCase.headline}
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {featuredCase.story}
              </p>
              <button className="flex items-center gap-2 text-sm font-semibold text-secondary hover:gap-3 transition-all duration-300 group">
                Read Full Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Two Smaller Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {otherCases.map((caseStudy, index) => {
              const Icon = caseStudy.icon;

              return (
                <div
                  key={index}
                  className={`glassmorphic bg-card border border-border rounded-3xl p-6 sm:p-8 hover-lift transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${caseStudy.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-4">
                    {caseStudy.industry}
                  </div>

                  {/* Headline */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 leading-tight">
                    {caseStudy.headline}
                  </h3>

                  {/* Metric */}
                  <div className="mb-4">
                    <div className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${caseStudy.color} bg-clip-text text-transparent`}>
                      {caseStudy.metric}
                    </div>
                    <p className="text-sm text-muted-foreground">{caseStudy.metricLabel}</p>
                  </div>

                  {/* Story */}
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                    {caseStudy.story}
                  </p>

                  {/* CTA */}
                  <button className="text-sm font-semibold text-secondary flex items-center gap-2 hover:gap-3 transition-all duration-300 group">
                    Read Full Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
