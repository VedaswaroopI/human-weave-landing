// src/pages/solutions/ResearchInsights.tsx

import { PageLayout } from "@/components/layouts/PageLayout";
import { SolutionHero } from "@/components/SolutionHero";
import { SEO } from "@/components/SEO";
import { pageSEO } from "@/utils/seo-config";
import { generateServiceSchema } from "@/hooks/useSEO";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { CharacterIllustration } from "@/components/CharacterIllustration";
import {
  CheckCircle,
  ClipboardCheck,
  Search,
  UsersRound,
  BadgeCheck,
  Beaker,
  BarChartHorizontal,
} from "lucide-react";

// --- Section 1: Hero ---
const HeroSection = () => (
  <SolutionHero
    badge="Research & Insights"
    title={
      <>
        Stop Guessing.
        <br />
        <span className="gradient-text animate-gradient">
          Build What Users Actually Want.
        </span>
      </>
    }
    subtitle="Validate your concept with real, niche users before you write a single line of code. We tap our global network for deep qualitative feedback, usability testing, and competitive insights."
  />
);

// --- Section 2: The Problem ("The Why") ---
const ProblemSection = () => (
  <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          The Multi-Million Dollar Gamble
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          Building features based on internal assumptions is the most common
          and costly mistake in tech.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glassmorphic bg-card/50 p-6 rounded-2xl border border-border">
          <h3 className="text-xl font-bold mb-3">
            The "Engineer's Bias" Trap
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Your team is brilliant, but they are not your average user. They
            build features for themselves, resulting in complex, confusing,
            or unneeded products.
          </p>
        </div>
        <div className="glassmorphic bg-card/50 p-6 rounded-2xl border border-border">
          <h3 className="text-xl font-bold mb-3">The "Loudest Voice" Roadmap</h3>
          <p className="text-muted-foreground leading-relaxed">
            Your product roadmap is driven by the opinion of the highest-paid
            person in the room or a single, angry enterprise client, not by
            what most of your users actually need.
          </p>
        </div>
        <div className="glassmorphic bg-card/50 p-6 rounded-2xl border border-border">
          <h3 className="text-xl font-bold mb-3">The "Build It & See" Fallacy</h3>
          <p className="text-muted-foreground leading-relaxed">
            "Let's just launch it and see what happens." This is not a
            strategy; it is an expensive gamble that burns engineering hours
            on features no one will ever use.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// --- Section 3: Our Services ("The What") ---
const ServicesTabs = () => (
  <section className="py-16 sm:py-20 md:py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          From Idea to Market-Fit, We De-Risk Your Roadmap
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          We provide a full suite of research services, managed by experts
          and powered by your exact target audience.
        </p>
      </div>

      <Tabs defaultValue="qualitative" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto sm:h-12">
          <TabsTrigger value="qualitative" className="py-2.5 sm:py-1.5">
            <Search className="mr-2 w-4 h-4" />
            Qualitative Insights
          </TabsTrigger>
          <TabsTrigger value="testing" className="py-2.5 sm:py-1.5">
            <Beaker className="mr-2 w-4 h-4" />
            Usability & Concept Testing
          </TabsTrigger>
          <TabsTrigger value="quantitative" className="py-2.5 sm:py-1.5">
            <BarChartHorizontal className="mr-2 w-4 h-4" />
            Quantitative Research
          </TabsTrigger>
        </TabsList>
        <div className="mt-8">
          <TabsContent value="qualitative">
            <div className="glassmorphic bg-card/50 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4">
                Understand the "Why" Behind the "What"
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Go deeper than analytics. Our managed researchers conduct
                one-on-one interviews and studies to uncover the core
                motivations, pains, and needs of your users.
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Moderated User Interviews
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Longitudinal Diary Studies
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Persona Development
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Customer Journey Mapping
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  First-Click Testing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Focus Group Moderation
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="testing">
            <div className="glassmorphic bg-card/50 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4">
                Validate Your Ideas Before You Build
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Why wait until launch to see if an idea works? We put your
                prototypes, mockups, and beta features in front of real users
                to get you fast, actionable feedback.
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Unmoderated Usability Testing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Figma & InVision Prototype Testing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Concept & Value Prop Validation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  A/B Test Analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Accessibility Audits (WCAG)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Heuristic Evaluations
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="quantitative">
            <div className="glassmorphic bg-card/50 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4">
                Understand Your Market at Scale
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Complement your qualitative insights with hard numbers. We
                design, deploy, and analyze global surveys to help you
                prioritize features, size markets, and track your brand.
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Global Surveys & Panels
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Competitive Benchmarking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Market Sizing & Analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Feature Prioritization (MaxDiff)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Price Sensitivity Testing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Brand Perception Studies
                </li>
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </section>
);

// --- Section 4: The "Who" Differentiator ---
const ExpertSection = () => (
  <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          We Find Your
          <span className="gradient-text animate-gradient">
            {" "}
            Exact User
          </span>
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          Stop testing with generic panels. We find, vet, and manage your
          perfect audience, no matter how niche.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center flex flex-col items-center">
          <CharacterIllustration
            type="researcher-rachel"
            className="w-48 h-48"
            animate={true}
          />
          <h3 className="text-xl font-bold mt-4">The Niche B2B Persona</h3>
          <p className="text-muted-foreground leading-relaxed mt-2 max-w-xs">
            Rachel sourced and interviewed 20 "Series A FinTech CFOs" for a
            new budgeting tool, uncovering insights that generic testers
            could never provide.
          </p>
        </div>
        <div className="text-center flex flex-col items-center">
          <CharacterIllustration
            type="doctor-dan"
            className="w-48 h-48"
            animate={true}
          />
          <h3 className="text-xl font-bold mt-4">The Certified Expert</h3>
          <p className="text-muted-foreground leading-relaxed mt-2 max-w-xs">
            Dr. Dan led a panel of 30 "board-certified radiologists" to
            test a new AI diagnostic tool, providing expert validation that
            was critical for the client's FDA submission.
          </p>
        </div>
        <div className="text-center flex flex-col items-center">
          <CharacterIllustration
            type="tester-tom"
            className="w-48 h-48"
            animate={true}
          />
          <h3 className="text-xl font-bold mt-4">The Real-World Consumer</h3>
          <p className="text-muted-foreground leading-relaxed mt-2 max-w-xs">
            Tom and 50 other parents ran a 2-week diary study for a new
            smart-home device, finding 3 critical usability flaws that only
            emerged in a chaotic family environment.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// --- Section 5: Our Differentiator ("The How") ---
const ProcessSection = () => (
  <section className="py-16 sm:py-20 md:py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Insights, Not Just Raw Data
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          We don't just give you hours of video. We give you answers.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-start gap-4">
          <UsersRound className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold mb-1">1. We Recruit & Manage</h3>
            <p className="text-muted-foreground leading-relaxed">
              You define the persona, we handle the rest. We find, vet,
              schedule, and pay all participants. You just show up for the
              interviews (if you want).
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <ClipboardCheck className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold mb-1">
              2. We Conduct the Research
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our expert researchers run the studies, moderate the sessions,
              and analyze the results. We know which questions to ask and how
              to dig for the why.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <BadgeCheck className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold mb-1">3. We Deliver Insights</h3>
            <p className="text-muted-foreground leading-relaxed">
              You receive a final, actionable report, not a data dump. We
              deliver key themes, video-clipped "a-ha" moments, and clear
              recommendations to fix your product.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Page Component ---
const ResearchInsights = () => {
  const serviceSchema = generateServiceSchema(
    "Market Research & User Insights Services",
    "Deep market research and user insights for AI products. User testing, surveys, focus groups, and behavioral analysis with your exact target audience.",
    "https://usergy.ai/solutions/research-insights",
    [
      "Qualitative User Research",
      "Quantitative Market Studies",
      "Usability Testing",
      "Focus Groups",
      "Concept Validation",
      "Competitive Analysis"
    ]
  );

  return (
    <>
      <SEO 
        {...pageSEO.researchInsights}
        structuredData={serviceSchema}
      />
      <PageLayout>
        <HeroSection />
        <ProblemSection />
        <ServicesTabs />
        <ExpertSection />
        <ProcessSection />
      </PageLayout>
    </>
  );
};

export default ResearchInsights;
