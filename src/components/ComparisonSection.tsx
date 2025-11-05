import { Check } from "lucide-react";

export const ComparisonSection = () => {
  const benefits = [
    {
      title: "Expert Humans, Not Crowd Workers",
      desc: "PhDs annotate medical data. Native speakers translate. Real testers use real devices.",
    },
    {
      title: "99.5%+ Guaranteed Accuracy",
      desc: "Dedicated project managers and multi-layer QA ensure perfection on every project.",
    },
    {
      title: "Enterprise-Grade Security",
      desc: "SOC 2, ISO 27001, HIPAA, GDPR compliant. Your data is fortress-level secure.",
    },
    {
      title: "Scales Instantly",
      desc: "From 5 experts to 5,000. From pilot to production. We grow with you.",
    },
    {
      title: "One Partner, One Invoice",
      desc: "Data → QA → Localization → Support. Stop juggling multiple vendors.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Why Teams Choose <span className="gradient-text">UsergyAI</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glassmorphic bg-gradient-to-br from-accent/5 to-secondary/5 border-2 border-accent/30 rounded-3xl p-8 sm:p-10">
            <div className="space-y-6">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Check className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground text-center italic">
                Unlike crowd platforms with inconsistent quality or in-house teams with limited bandwidth, 
                UsergyAI gives you expert humans managed like software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
