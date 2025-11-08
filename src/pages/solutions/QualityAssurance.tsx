// src/pages/solutions/QualityAssurance.tsx

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
  ClipboardCheck,
  Workflow,
  BadgeCheck,
  Globe,
  Bot,
  Smartphone,
} from "lucide-react";

// --- Section 1: Hero ---
const HeroSection = () => (
  <SolutionHero
    badge="Quality Assurance"
    title={
      <>
        Find the Bugs
        <br />
        <span className="gradient-text animate-gradient">
          Automation Can't See.
        </span>
      </>
    }
    subtitle="Your product works in the lab. But what about in Mumbai on a 3G network? Our global team of 300,000+ real-world testers ensures your software, hardware, and AI models are flawless everywhere."
  />
);

// --- Section 2: The Problem ("The Why") ---
const ProblemSection = () => (
  <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Why Automated Tests Aren't Enough
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          Automated scripts are fast, but they have no patience, no cultural
          context, and can't tell you how a feature feels.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glassmorphic bg-card/50 p-6 rounded-2xl border border-border">
          <h3 className="text-xl font-bold mb-3">
            The "It Works on My Machine" Trap
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Automated tests run in a clean, perfect environment. They miss the
            critical bugs caused by real-world network lag, older hardware, or
            unexpected user behavior.
          </p>
        </div>
        <div className="glassmorphic bg-card/50 p-6 rounded-2xl border border-border">
          <h3 className="text-xl font-bold mb-3">The Context Blindspot</h3>
          <p className="text-muted-foreground leading-relaxed">
            An automated script can't tell you if a joke is offensive in
            Brazil, if a payment flow is confusing, or if your new AI's tone
            feels "arrogant." Only a human can.
          </p>
        </div>
        <div className="glassmorphic bg-card/50 p-6 rounded-2xl border border-border">
          <h3 className="text-xl font-bold mb-3">The "Edge Case" Epidemic</h3>
          <p className="text-muted-foreground leading-relaxed">
            Real users tap, swipe, and break things in ways you'd never expect.
            These unpredictable edge cases are what automation misses and what
            lead to 1-star reviews.
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
          A Full-Spectrum QA Partnership
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          From functional testing to complex AI validation, we provide the
          human insight you need to launch with 100% confidence.
        </p>
      </div>

      <Tabs defaultValue="functional" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto sm:h-12">
          <TabsTrigger value="functional" className="py-2.5 sm:py-1.5">
            <Smartphone className="mr-2 w-4 h-4" />
            Functional & Usability
          </TabsTrigger>
          <TabsTrigger value="localization" className="py-2.5 sm:py-1.5">
            <Globe className="mr-2 w-4 h-4" />
            Localization QA
          </TabsTrigger>
          <TabsTrigger value="ai-model" className="py-2.5 sm:py-1.5">
            <Bot className="mr-2 w-4 h-4" />
            AI & Model Validation
          </TabsTrigger>
        </TabsList>
        <div className="mt-8">
          <TabsContent value="functional">
            <div className="glassmorphic bg-card/50 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4">
                Flawless Functionality, Seamless Experience
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We go beyond test scripts. Our global teams perform exploratory
                testing, regression analysis, and genuine usability testing to
                find bugs and friction points that frustrate real users.
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Real-World Bug Hunts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Cross-Device & Browser Testing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Usability & UX Feedback
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Accessibility (WCAG) Audits
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Regression Testing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Performance & Load Testing
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="localization">
            <div className="glassmorphic bg-card/50 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4">
                Speak Like a Local, Not a Robot
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A direct translation is not enough. Our in-country native
                speakers check your product for linguistic accuracy, cultural
                appropriateness, and visual layout issues (like text expansion).
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Linguistic Accuracy
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Cultural Nuance Review
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  UI/UX & Layout Verification
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Local Payment & Date Formats
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  In-Country Compliance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Image & Content Appropriateness
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="ai-model">
            <div className="glassmorphic bg-card/50 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4">
                Is Your AI Behaving as Designed?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                This is the most critical step. We provide adversarial testing
                and real-world validation to ensure your AI models are fair,
                accurate, safe, and helpful.
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  LLM Response Evaluation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Bias & Fairness Testing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Adversarial Prompting
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Model Accuracy Validation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  AI Safety & Moderation Testing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Real-World Data Drift Analysis
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
          Your Testers are Your
          <span className="gradient-text animate-gradient">
            {" "}
            Real End-Users
          </span>
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          Our network is not just "testers." They are gamers, parents,
          bankers, and students from 150+ countries. We match your product
          with its exact target audience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center flex flex-col items-center">
          <CharacterIllustration
            type="tester-tom"
            className="w-48 h-48"
            animate={true}
          />
          <h3 className="text-xl font-bold mt-4">The Device Specialist</h3>
          <p className="text-muted-foreground leading-relaxed mt-2 max-w-xs">
            Tester Tom tested a new mobile game on a 3-year-old Android
            phone in rural India, finding a critical bug that emulators
            missed, saving the launch.
          </p>
        </div>
        <div className="text-center flex flex-col items-center">
          <CharacterIllustration
            type="researcher-rachel"
            className="w-48 h-48"
            animate={true}
          />
          <h3 className="text-xl font-bold mt-4">The Usability Expert</h3>
          <p className="text-muted-foreground leading-relaxed mt-2 max-w-xs">
            Researcher Rachel led a "first impressions" test for a new
            e-commerce app, providing a 20-page report on user friction that
            led to a 34% increase in conversion.
          </p>
        </div>
        <div className="text-center flex flex-col items-center">
          <CharacterIllustration
            type="engineer-erik"
            className="w-48 h-48"
            animate={true}
          />
          <h3 className="text-xl font-bold mt-4">The AI Ethicist</h3>
          <p className="text-muted-foreground leading-relaxed mt-2 max-w-xs">
            Engineer Erik led an adversarial attack team that
            stress-tested a new FinTech AI, identifying 3 critical security
            and bias vulnerabilities before they became headlines.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// --- Section 5: Our Process ---
const ProcessSection = () => (
  <section className="py-16 sm:py-20 md:py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          The UsergyAI QA Process
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          Rigorous, managed, and transparent from day one.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-start gap-4">
          <ClipboardCheck className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold mb-1">1. Test Plan & Team Setup</h3>
            <p className="text-muted-foreground leading-relaxed">
              We work with you to define test cases, success criteria, and
              device requirements. We then assemble and train a dedicated,
              managed team from our network.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Workflow className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold mb-1">2. Managed Test Cycles</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our Project Managers run the test cycles. You get real-time bug
              reports, complete with videos, logs, and replication steps,
              in your Jira or dashboard.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <BadgeCheck className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold mb-1">
              3. Final Report & Validation
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We deliver a comprehensive final report detailing all bugs found,
              their severity, and a final "go/no-go" recommendation based
              on our findings.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Page Component ---
const QualityAssurance = () => {
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

export default QualityAssurance;
