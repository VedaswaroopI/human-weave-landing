import { PageLayout } from "@/components/layouts/PageLayout";
import { SolutionHero } from "@/components/SolutionHero";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const ResearchInsights = () => {
  return (
    <PageLayout>
      <SolutionHero
        badge="Research & Insights"
        title={
          <>
            Data-Driven Decisions.
            <br />
            <span className="gradient-text animate-gradient">Human-Powered Insights.</span>
          </>
        }
        subtitle="From market research to user studies, we collect, analyze, and deliver the actionable insights that fuel your strategic decisions."
      />
      
      {/* Placeholder for future content */}
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <div className="relative glassmorphic bg-card/50 p-12 rounded-2xl border border-border max-w-2xl mx-auto">
          <GlowingEffect spread={40} glow={true} proximity={100} />
          <h2 className="text-3xl font-bold text-muted-foreground">
            More Content Coming Soon...
          </h2>
        </div>
      </div>
    </PageLayout>
  );
};

export default ResearchInsights;
