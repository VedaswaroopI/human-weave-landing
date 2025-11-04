import { X, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const ProblemSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-center">
          {/* LEFT SIDE - Without Humans */}
          <div
            className={`space-y-6 p-6 sm:p-8 rounded-3xl bg-destructive/5 border border-destructive/20 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl">🤖</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-destructive">AI Without Humans</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-destructive flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base">Biased training data that fails in real-world scenarios</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-destructive flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base">Models that break when deployed to production</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-destructive flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base">Lost in translation with broken localization</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-destructive flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base">Bugs and errors that destroy user trust</span>
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE - With Human Expertise */}
          <div
            className={`space-y-6 p-6 sm:p-8 rounded-3xl bg-accent/5 border border-accent/20 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl">✨</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-accent">AI + Human Expertise</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base">99.5%+ accurate data from domain experts</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base">Real-world tested models that work at scale</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base">Authentic localization with cultural nuance</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base">Enterprise-grade quality you can trust</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bridge Text */}
        <div
          className={`text-center mt-12 sm:mt-16 transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-bold">
            <span className="gradient-text animate-gradient">UsergyAI bridges the gap.</span>
            <br />
            <span className="text-muted-foreground text-base sm:text-lg md:text-xl mt-2 inline-block">
              One partner. End-to-end excellence.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
