import { PageLayout } from "@/components/layouts/PageLayout";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { 
  Brain, 
  Shield, 
  Globe, 
  Building2, 
  ShieldCheck, 
  Lightbulb,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    badge: "DATA SERVICES",
    title: "Building AI That Thinks Like Humans",
    description: "From medical imaging annotation by actual doctors to LLM fine-tuning by linguists, we match your project with genuine experts, not crowd workers.",
    color: "from-secondary to-secondary/70",
    icon: Brain,
    url: "/solutions/data-services",
  },
  {
    badge: "QUALITY ASSURANCE",
    title: "Testing That Catches What Others Miss",
    description: "Real humans on real devices in real-world conditions. From bug hunting to AI model validation, we ensure your product works flawlessly everywhere.",
    color: "from-primary to-primary/70",
    icon: Shield,
    url: "/solutions/quality-assurance",
  },
  {
    badge: "MULTILINGUAL",
    title: "Speak Every Language, Respect Every Culture",
    description: "Native speakers who understand context, not just words. Translation and localization in 150+ languages with zero cultural mishaps.",
    color: "from-accent to-accent/70",
    icon: Globe,
    url: "/solutions/multilingual",
  },
  {
    badge: "ENTERPRISE & BPO",
    title: "Scale Without the Growing Pains",
    description: "From customer support to data management, we give you expert human capacity on demand with no hiring headaches, no overhead.",
    color: "from-secondary via-primary to-accent",
    icon: Building2,
    url: "/solutions/enterprise-bpo",
  },
  {
    badge: "CONTENT MODERATION",
    title: "Keeping Your Platform Safe",
    description: "Human moderators trained in cultural nuance review content 24/7, ensuring your community stays healthy without over-moderation.",
    color: "from-secondary to-accent",
    icon: ShieldCheck,
    url: "/solutions/content-moderation",
  },
  {
    badge: "RESEARCH & INSIGHTS",
    title: "Understanding What Users Really Want",
    description: "Real users provide feedback, test concepts, and validate ideas before you invest in development. Make data-driven decisions with confidence.",
    color: "from-primary to-secondary",
    icon: Lightbulb,
    url: "/solutions/research-insights",
  },
];

const SolutionsLanding = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold tracking-wider uppercase mb-4">
            Our Solutions
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Expert Human Solutions for Every{" "}
            <span className="gradient-text animate-gradient">AI Challenge</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From high-stakes data annotation to global quality assurance, our 300,000+ experts are the human force behind your technology.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-20 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link 
                key={index} 
                to={service.url}
                className="group block h-full"
              >
                <Card className="relative h-full overflow-hidden border-border hover:border-secondary/50 transition-all duration-300 hover-lift">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={100}
                    inactiveZone={0.1}
                    borderWidth={1}
                    movementDuration={2}
                  />
                  
                  {/* Gradient Top Section */}
                  <div className={`h-32 bg-gradient-to-br ${service.color} relative overflow-hidden flex items-center justify-center`}>
                    <Icon className="w-16 h-16 text-white/80" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <CardContent className="p-6 space-y-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase">
                      {service.badge}
                    </div>
                    
                    <h3 className="text-xl font-bold leading-tight group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-semibold text-secondary group-hover:gap-3 transition-all duration-300 pt-2">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
};

export default SolutionsLanding;
