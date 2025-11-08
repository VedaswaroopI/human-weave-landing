// src/pages/solutions/ContentModeration.tsx

import { PageLayout } from "@/components/layouts/PageLayout";
import { SolutionHero } from "@/components/SolutionHero";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { CharacterIllustration } from "@/components/CharacterIllustration";
import {
  CheckCircle,
  ShieldCheck,
  Bot,
  MessagesSquare,
  Eye,
  BrainCircuit,
  ClipboardCheck,
} from "lucide-react";

// --- Section 1: Hero ---
const HeroSection = () => (
  <SolutionHero
    badge="Content Moderation"
    title={
      <>
        Protect Your Community.
        <br />
        <span className="gradient-text animate-gradient">
          Preserve Your Brand.
        </span>
      </>
    }
    subtitle="AI can't understand cultural nuance or sarcasm. Our managed, 24/7 team of Trust & Safety experts protects your users from harmful content with the human judgment automation lacks."
  />
);

// --- Section 2: The Problem ("The Why") ---
const ProblemSection = () => (
  <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          The Automation Blindspot
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          Relying on AI alone doesn't just miss harmful content; it creates
          new problems.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glassmorphic bg-card/50 p-6 rounded-2xl border border-border">
          <h3 className="text-xl font-bold mb-3">AI Lacks Nuance</h3>
          <p className="text-muted-foreground leading-relaxed">
            AI can't tell the difference between sarcastic hate speech and a
            healthy debate. It misses coded language, cultural symbols, and
            emerging harmful trends.
          </p>
        </div>
        <div className="glassmorphic bg-card/50 p-6 rounded-2xl border border-border">
          <h3 className="text-xl font-bold mb-3">False Positives Erode Trust</h3>
          <p className="text-muted-foreground leading-relaxed">
            When your AI incorrectly flags a user's harmless post, you
            frustrate and alienate your best users. Over-moderation feels
            like censorship.
          </p>
        </div>
        <div className="glassmorphic bg-card/50 p-6 rounded-2xl border border-border">
          <h3 className="text-xl font-bold mb-3">The Mental Health Cost</h3>
          <p className="text-muted-foreground leading-relaxed">
            Traditional moderation farms have high turnover because the work
            is hard. High turnover means low-quality, inconsistent decisions
            that hurt your platform.
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
          A 360-Degree Trust & Safety Solution
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          We protect your users at every touchpoint, from sign-up to
          live-stream, all while making your own systems smarter.
        </p>
      </div>

      <Tabs defaultValue="proactive" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto sm:h-12">
          <TabsTrigger value="proactive" className="py-2.5 sm:py-1.5">
            <Eye className="mr-2 w-4 h-4" />
            Proactive Moderation
          </TabsTrigger>
          <TabsTrigger value="reactive" className="py-2.5 sm:py-1.5">
            <MessagesSquare className="mr-2 w-4 h-4" />
            Reactive & Live Moderation
          </TabsTrigger>
          <TabsTrigger value="ai-training" className="py-2.5 sm:py-1.5">
            <BrainCircuit className="mr-2 w-4 h-4" />
            AI Moderation Training
          </TabsTrigger>
        </TabsList>
        <div className="mt-8">
          <TabsContent value="proactive">
            <div className="glassmorphic bg-card/50 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4">
                Proactive Moderation
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Stop harmful content before it impacts your community. Our
                teams review user-generated content (UGC) as it's submitted,
                ensuring brand safety from the start.
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Image & Video Uploads
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  User Profiles & Avatars
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Marketplace & Product Listings
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Ad & Creative Review
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Forum & Group Posts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Spam & Scam Prevention
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="reactive">
            <div className="glassmorphic bg-card/50 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4">
                Reactive & Live Moderation
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Act instantly on user reports and live-streams. Our 24/7
                global teams provide immediate review of flagged content to
                handle escalations and protect users in real-time.
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  User-Reported Content Review
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Live-Stream Monitoring
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  In-Game Chat Moderation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  User Appeals & Escalations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Account & Ban Enforcement
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  24/7/365 Global Coverage
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="ai-training">
            <div className="glassmorphic bg-card/50 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4">
                AI Moderation Training (Human-in-the-Loop)
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Don't just moderate; improve. We use our expert decisions to
                create high-quality datasets to train, test, and fine-tune
                your own automated moderation models.
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Policy Creation & Consultation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Data Labeling for Violations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  AI Model Fairness & Bias Audits
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Classifier Accuracy Testing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Exception & Edge Case Datasets
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Feedback Loop Implementation
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
          Your Resilient,
          <span className="gradient-text animate-gradient">
            {" "}
            Well-Supported Workforce
          </span>
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          High-quality moderation comes from high-quality teams. We invest
          in our moderators' well-being to ensure consistent, accurate, and
          sustainable results for your platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center flex flex-col items-center">
          <CharacterIllustration
            type="linguist-leila"
            className="w-48 h-48"
            animate={true}
          />
          <h3 className="text-xl font-bold mt-4">Cultural Nuance Experts</h3>
          <p className="text-muted-foreground leading-relaxed mt-2 max-w-xs">
            Leila, a cultural expert, identified a new, trending emoji
            combination as a coded dog-whistle for hate speech, stopping a
            new harassment campaign before it spread.
          </p>
        </div>
        <div className="text-center flex flex-col items-center">
          <CharacterIllustration
            type="researcher-rachel"
            className="w-48 h-48"
            animate={true}
          />
          <h3 className="text-xl font-bold mt-4">Policy Specialists</h3>
          <p className="text-muted-foreground leading-relaxed mt-2 max-w-xs">
            Rachel, a policy analyst, reviewed 500 user appeals for a
            gaming client. She found 20% were false positives from an AI
            update, helping them fix the algorithm.
          </p>
        </div>
        <div className="text-center flex flex-col items-center">
          <CharacterIllustration
            type="tester-tom"
            className="w-48 h-48"
            animate={true}
          />
          <h3 className="text-xl font-bold mt-4">Resilience-Trained Pros</h3>
          <p className="text-muted-foreground leading-relaxed mt-2 max-w-xs">
            Tom is part of our team with full mental health support and
            managed shift rotations. This allows him to make clear,
            consistent, high-stakes decisions 8 hours a day.
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
          AI-First, Human-in-the-Loop
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          Our process combines the best of AI speed with the necessity of
          human judgment.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-start gap-4">
          <Bot className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold mb-1">1. AI Triage</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your content first passes through an AI filter. 90-95% of
              obvious spam, nudity, and clear violations are handled
              instantly, reducing cost and noise.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <ShieldCheck className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold mb-1">2. Human Review</h3>
            <p className="text-muted-foreground leading-relaxed">
              The remaining 5-10% (the complex, contextual, and sensitive
              cases) are escalated to our trained Trust & Safety experts for a
              final, nuanced decision.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <ClipboardCheck className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold mb-1">3. Feedback Loop</h3>
            <p className="text-muted-foreground leading-relaxed">
              We don't just send a report. We feed these high-quality human
              decisions back into a training dataset, constantly making your
              own AI models smarter and more accurate.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Page Component ---
const ContentModeration = () => {
  return (
    <PageLayout>
      <HeroSection />
      <ProblemSection />
      <ServicesTabs />
      <ExpertSection />
      <ProcessSection />
    </PageLayout>
  );
};

export default ContentModeration;
