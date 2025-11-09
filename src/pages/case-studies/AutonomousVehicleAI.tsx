import * as React from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layouts/PageLayout";
import { allCaseStudies, CaseStudy } from "@/lib/case-studies-db";
import { Badge } from "@/components/ui/badge";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { AlertCircle, CheckCircle, Target, Award, ArrowRight } from "lucide-react";
import { ParticleButton } from "@/components/ui/particle-button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const ImagePlaceholder: React.FC<{ alt: string; className?: string; src?: string }> = ({ alt, className, src }) => {
  if (src) {
    return (
      <AspectRatio ratio={16 / 9} className={cn("rounded-2xl overflow-hidden border border-border", className)}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </AspectRatio>
    )
  }
  
  return (
    <div className={cn("w-full bg-muted/10 border-2 border-border/50 border-dashed rounded-2xl flex items-center justify-center aspect-video", className)}>
      <p className="text-muted-foreground text-sm font-medium">{alt}</p>
    </div>
  );
};

const StatCard: React.FC<{ stat: CaseStudy['results']['keyStats'][0] }> = ({ stat }) => (
  <div className="relative glassmorphic bg-card/50 p-6 rounded-2xl border border-border overflow-hidden">
    <GlowingEffect spread={40} glow={true} proximity={100} borderWidth={2.5} disabled={false} />
    <div className="relative z-10">
      <stat.icon className="w-8 h-8 text-accent mb-4" />
      <p className="text-4xl md:text-5xl font-bold gradient-text animate-gradient mb-2">{stat.value}</p>
      <p className="text-lg text-muted-foreground">{stat.label}</p>
    </div>
  </div>
);

const CaseStudyLinkCard: React.FC<{ study: CaseStudy }> = ({ study }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="group relative block h-full"
  >
    <Link to={`/case-studies/${study.slug}`} className="block h-full">
      <div className="relative glassmorphic bg-card/50 hover:bg-card/70 border border-border hover:border-secondary/50 rounded-3xl h-full flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02]">
        
        <AspectRatio ratio={16 / 10}>
          <img
            src={study.cardImage}
            alt={study.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </AspectRatio>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {study.tags.map(tag => (
              <Badge key={tag} variant="outline" className="bg-accent/10 text-accent border-accent/20 text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h3 className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors mb-3 flex-grow">
            {study.title}
          </h3>

          <div className="flex items-center gap-2 text-sm font-semibold text-secondary mt-auto pt-4 group-hover:gap-3 transition-all duration-300">
            Read Story <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const AutonomousVehicleAI = () => {
  const study = allCaseStudies.find(s => s.slug === "autonomous-vehicle-ai");

  if (!study) return <PageLayout><div>Case study not found.</div></PageLayout>;

  return (
    <PageLayout>
      <section className="relative pt-16 sm:pt-24 pb-12 sm:pb-16 md:pb-20 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {study.tags.map(tag => (
                <Badge key={tag} className="bg-secondary/10 text-secondary border-secondary/20 text-sm font-semibold">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8">
              {study.title}
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="glassmorphic bg-card/50 p-4 rounded-xl border border-border">
                <p className="text-3xl font-bold gradient-text animate-gradient">{study.metricValue}</p>
                <p className="text-sm text-muted-foreground">{study.metricLabel}</p>
              </div>
              <div className="glassmorphic bg-card/50 p-4 rounded-xl border border-border">
                <p className="text-3xl font-bold gradient-text animate-gradient">99.6%</p>
                <p className="text-sm text-muted-foreground">Accuracy</p>
              </div>
              <div className="glassmorphic bg-card/50 p-4 rounded-xl border border-border">
                <p className="text-3xl font-bold gradient-text animate-gradient">40%</p>
                <p className="text-sm text-muted-foreground">Model Gain</p>
              </div>
              <div className="glassmorphic bg-card/50 p-4 rounded-xl border border-border">
                <p className="text-3xl font-bold gradient-text animate-gradient">Top 5</p>
                <p className="text-sm text-muted-foreground">AV Leader</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 sm:px-6 -mt-10 md:-mt-16 relative z-20">
        <AspectRatio ratio={16 / 7}>
          <img
            src={study.heroImage}
            alt={study.title}
            className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-border/30"
          />
        </AspectRatio>
      </div>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto grid grid-cols-1 gap-16 md:gap-24">
            
            <article className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                </span>
                <h2 className="text-3xl font-bold">The Challenge</h2>
              </div>
              <h3 className="text-2xl font-semibold text-foreground/90">{study.challenge.headline}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {study.challenge.body}
              </p>
            </article>
            
            <article className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </span>
                <h2 className="text-3xl font-bold">The Solution</h2>
              </div>
              <h3 className="text-2xl font-semibold text-foreground/90">{study.solution.headline}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {study.solution.intro}
              </p>
              <ul className="space-y-4">
                {study.solution.steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-accent"/>
                    </span>
                    <div>
                      <h4 className="font-semibold text-foreground">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
            
            <article className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </span>
                <h2 className="text-3xl font-bold">The Results</h2>
              </div>
              <h3 className="text-2xl font-semibold text-foreground/90">{study.results.headline}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {study.results.body}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {study.results.keyStats.map(stat => (
                  <StatCard key={stat.label} stat={stat} />
                ))}
              </div>
            </article>
            
            <article className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-secondary" />
                </span>
                <h2 className="text-3xl font-bold">The Impact</h2>
              </div>
              <h3 className="text-2xl font-semibold text-foreground/90">{study.impact.headline}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {study.impact.body}
              </p>
            </article>
            
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">More Client Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allCaseStudies
              .filter(s => s.slug !== study.slug)
              .slice(0, 3)
              .map((s) => (
                <CaseStudyLinkCard key={s.slug} study={s} />
            ))}
          </div>
          <div className="text-center mt-12">
            <ParticleButton asChild size="lg" className="h-12 px-8">
              <Link to="/case-studies">
                See All Case Studies <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </ParticleButton>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AutonomousVehicleAI;
