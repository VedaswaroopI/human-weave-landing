import React from "react";
import { PageLayout } from "@/components/layouts/PageLayout";
import { SolutionHero } from "@/components/SolutionHero";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CharacterIllustration } from "@/components/CharacterIllustration";
import { CheckCircle, LucideIcon } from "lucide-react";
import { Breadcrumbs, BreadcrumbItem } from "@/components/Breadcrumbs";

// Type definitions
interface ProblemCard {
  title: string;
  description: string;
}

interface ServiceTab {
  value: string;
  label: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

interface Character {
  type: "doctor-dan" | "linguist-leila" | "data-anna" | "tester-tom" | "researcher-rachel" | "engineer-erik";
  title: string;
  description: string;
}

interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface SecurityFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface SolutionPageLayoutProps {
  // Breadcrumbs
  breadcrumbs?: BreadcrumbItem[];
  
  // Hero Section
  badge: string;
  title: React.ReactNode;
  subtitle: string;

  // Problem Section
  problemTitle: string;
  problemSubtitle: string;
  problems: ProblemCard[];

  // Services Section
  servicesTitle: string;
  servicesSubtitle: string;
  services: ServiceTab[];
  defaultServiceTab?: string;

  // Expert Section
  expertTitle: React.ReactNode;
  expertSubtitle: string;
  characters: Character[];

  // Additional Section (Process or Security)
  additionalSectionTitle?: React.ReactNode;
  additionalSectionSubtitle?: string;
  processSteps?: ProcessStep[];
  securityFeatures?: SecurityFeature[];
}

export const SolutionPageLayout: React.FC<SolutionPageLayoutProps> = ({
  breadcrumbs,
  badge,
  title,
  subtitle,
  problemTitle,
  problemSubtitle,
  problems,
  servicesTitle,
  servicesSubtitle,
  services,
  defaultServiceTab,
  expertTitle,
  expertSubtitle,
  characters,
  additionalSectionTitle,
  additionalSectionSubtitle,
  processSteps,
  securityFeatures,
}) => {
  return (
    <PageLayout>
      {breadcrumbs && <div className="container mx-auto px-4 sm:px-6 pt-24"><Breadcrumbs items={breadcrumbs} /></div>}
      {/* Hero Section */}
      <SolutionHero badge={badge} title={title} subtitle={subtitle} />

      {/* Problem Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {problemTitle}
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              {problemSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="relative glassmorphic bg-card/50 p-6 rounded-2xl border border-border overflow-hidden"
              >
                <GlowingEffect spread={40} glow={true} proximity={100} borderWidth={2.5} disabled={false} />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {servicesTitle}
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              {servicesSubtitle}
            </p>
          </div>

          <Tabs defaultValue={defaultServiceTab || services[0]?.value} className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto sm:h-12">
              {services.map((service) => (
                <TabsTrigger key={service.value} value={service.value} className="py-2.5 sm:py-1.5">
                  <service.icon className="mr-2 w-4 h-4" />
                  {service.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="mt-8">
              {services.map((service) => (
                <TabsContent key={service.value} value={service.value}>
                  <div className="relative glassmorphic bg-card/50 p-8 rounded-2xl border border-border overflow-hidden">
                    <GlowingEffect spread={40} glow={true} proximity={100} borderWidth={2.5} disabled={false} />
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </section>

      {/* Expert Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {expertTitle}
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              {expertSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {characters.map((character, index) => (
              <div key={index} className="text-center flex flex-col items-center">
                <CharacterIllustration
                  type={character.type}
                  className="w-48 h-48"
                  animate={true}
                />
                <h3 className="text-xl font-bold mt-4">{character.title}</h3>
                <p className="text-muted-foreground leading-relaxed mt-2 max-w-xs">
                  {character.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Section (Process Steps or Security Features) */}
      {(processSteps || securityFeatures) && (
        <section className="py-16 sm:py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                {additionalSectionTitle}
              </h2>
              {additionalSectionSubtitle && (
                <p className="text-lg text-muted-foreground mt-4">
                  {additionalSectionSubtitle}
                </p>
              )}
            </div>

            {processSteps && (
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <step.icon className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {securityFeatures && (
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {securityFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="relative glassmorphic bg-card/50 p-6 rounded-2xl border border-border overflow-hidden"
                  >
                    <GlowingEffect spread={40} glow={true} proximity={100} borderWidth={2.5} disabled={false} />
                    <div className="relative z-10 flex items-start gap-4">
                      <feature.icon className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-1">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </PageLayout>
  );
};
