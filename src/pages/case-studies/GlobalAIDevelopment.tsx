import React from "react";
import { CaseStudyLayout } from "@/components/layouts/CaseStudyLayout";
import { CheckCircle } from "lucide-react";

const GlobalAIDevelopment = () => {
  const heroMetrics = [
    { value: "5,000", label: "Hours Transcribed" },
    { value: "99%", label: "Accuracy Rate" },
    { value: "3", label: "Complex Languages" },
    { value: "12", label: "Week Delivery" },
  ];

  const challengeContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">The Stakes Were High</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        A leading tech company needed 5,000 hours of high-quality transcription across
        Japanese, Chinese, and Korean. Inaccurate data would compromise their entire AI
        training process, and delays would push back their critical market launch. They
        needed exceptional quality at scale, fast.
      </p>
    </div>
  );

  const solutionContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">The UsergyAI Approach</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        We didn't just use crowd workers. We deployed a specialized team of native
        speakers—fluent in regional dialects, tonal variations, and honorifics.
      </p>
      <div className="space-y-4 pt-4">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-foreground mb-1">Expert Assembly</h3>
            <p className="text-muted-foreground">
              Vetted linguists specialized in target dialects.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-foreground mb-1">Rigorous Training</h3>
            <p className="text-muted-foreground">
              Language-specific guidelines for handling noise, overlaps, and particles.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-foreground mb-1">Parallel Execution</h3>
            <p className="text-muted-foreground">
              Simultaneous production and QA to meet aggressive 100+ hour/week targets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const resultsContent = (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-foreground">Delivered On Promise</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
          <div className="text-4xl font-bold text-primary mb-2">100%</div>
          <div className="text-sm text-muted-foreground">Guideline Compliance</div>
        </div>
        <div className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
          <div className="text-4xl font-bold text-secondary mb-2">100+</div>
          <div className="text-sm text-muted-foreground">Hours Delivered Weekly</div>
        </div>
        <div className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
          <div className="text-4xl font-bold text-accent mb-2">99%</div>
          <div className="text-sm text-muted-foreground">Validated Accuracy</div>
        </div>
        <div className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
          <div className="text-4xl font-bold gradient-text animate-gradient mb-2">0</div>
          <div className="text-sm text-muted-foreground">Delivery Delays</div>
        </div>
      </div>
    </div>
  );

  const impactContent = (
    <div className="space-y-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">Business Impact</h2>
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
        The client remained on track for their competitive product launch. Early model
        training showed superior performance metrics due to the high-quality data
        foundation, leading to immediate discussions for expansion into new markets.
      </p>
    </div>
  );

  return (
    <CaseStudyLayout
      badge="Voice AI • Multilingual"
      title={
        <>
          Accelerating Global AI Development Through{" "}
          <span className="gradient-text animate-gradient">
            Precision Multilingual Transcription
          </span>
        </>
      }
      subtitle="How UsergyAI delivered 5,000 hours of expert-validated Japanese, Chinese, and Korean audio data with zero delays for a leading tech giant."
      heroMetrics={heroMetrics}
      challengeContent={challengeContent}
      solutionContent={solutionContent}
      resultsContent={resultsContent}
      impactContent={impactContent}
      showHeroImagePlaceholder={true}
      showChallengeImagePlaceholder={false}
      showResultsImagePlaceholder={true}
    />
  );
};

export default GlobalAIDevelopment;
