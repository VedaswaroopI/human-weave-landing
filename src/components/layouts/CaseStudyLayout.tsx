import React from "react";
import { PageLayout } from "@/components/layouts/PageLayout";
import { SolutionHero } from "@/components/SolutionHero";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ImageIcon } from "lucide-react";

interface Metric {
  value: string;
  label: string;
}

interface CaseStudyLayoutProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  heroMetrics?: Metric[];
  challengeContent: React.ReactNode;
  solutionContent: React.ReactNode;
  resultsContent: React.ReactNode;
  impactContent: React.ReactNode;
  showHeroImagePlaceholder?: boolean;
  showChallengeImagePlaceholder?: boolean;
  showResultsImagePlaceholder?: boolean;
}

export const CaseStudyLayout = ({
  badge,
  title,
  subtitle,
  heroMetrics,
  challengeContent,
  solutionContent,
  resultsContent,
  impactContent,
  showHeroImagePlaceholder = false,
  showChallengeImagePlaceholder = false,
  showResultsImagePlaceholder = false,
}: CaseStudyLayoutProps) => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <SolutionHero badge={badge} title={title} subtitle={subtitle} />

      {/* Hero Metrics */}
      {heroMetrics && heroMetrics.length > 0 && (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {heroMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text animate-gradient mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Hero Image Placeholder */}
      {showHeroImagePlaceholder && (
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="aspect-[21/9] rounded-2xl border-2 border-dashed border-border/50 bg-muted/10 flex items-center justify-center">
              <div className="text-center space-y-3">
                <ImageIcon className="w-16 h-16 mx-auto text-muted-foreground/30" />
                <p className="text-sm text-muted-foreground/50 font-medium">
                  Hero Image Placeholder
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Challenge & Solution Split */}
      <section className="py-16 sm:py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Challenge Column */}
            <div className="relative glassmorphic bg-destructive/5 border-destructive/20 p-8 md:p-10 rounded-2xl overflow-hidden">
              <GlowingEffect
                spread={30}
                glow={true}
                proximity={80}
                borderWidth={2}
                disabled={false}
                className="[--glow-color:hsl(var(--destructive))]"
              />
              <div className="relative z-10">{challengeContent}</div>
            </div>

            {/* Solution Column */}
            <div className="relative glassmorphic bg-accent/5 border-accent/20 p-8 md:p-10 rounded-2xl overflow-hidden">
              <GlowingEffect
                spread={30}
                glow={true}
                proximity={80}
                borderWidth={2}
                disabled={false}
                className="[--glow-color:hsl(var(--accent))]"
              />
              <div className="relative z-10">{solutionContent}</div>
            </div>
          </div>

          {/* Challenge Image Placeholder */}
          {showChallengeImagePlaceholder && (
            <div className="mt-12 aspect-video rounded-2xl border-2 border-dashed border-border/50 bg-muted/10 flex items-center justify-center">
              <div className="text-center space-y-3">
                <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground/30" />
                <p className="text-sm text-muted-foreground/50 font-medium">
                  Challenge Image Placeholder
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 sm:py-24 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <GlowingEffect
            spread={60}
            glow={true}
            proximity={120}
            borderWidth={3}
            disabled={false}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>{resultsContent}</div>
              {showResultsImagePlaceholder && (
                <div className="aspect-video rounded-2xl border-2 border-dashed border-border/50 bg-muted/10 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground/30" />
                    <p className="text-sm text-muted-foreground/50 font-medium">
                      Results Visualization Placeholder
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">{impactContent}</div>
        </div>
      </section>
    </PageLayout>
  );
};
