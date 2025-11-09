// src/pages/solutions/EnterpriseBPO.tsx

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
  Bot,
  Headset,
  Database,
} from "lucide-react";

// --- Section 1: Hero ---
const HeroSection = () => (
  <SolutionHero
    badge="Enterprise & BPO"
    title={
      <>
        Scale Your Operations.
        <br />
        <span className="gradient-text animate-gradient">
          Not Your Overhead.
        </span>
      </>
    }
    subtitle="Stop letting operational bottlenecks slow your growth. Our 300,000 or more managed experts act as an extension of your team, handling complex processes so your core engineers can focus on building."
  />
);

// --- Section 2: The Problem ("The Why") ---
const ProblemSection = () => (
  <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          The Scaling Trap: When Growth Slows You Down
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          Your company is succeeding, but your best people are now drowning
          in work they were not hired to do.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glassmorphic bg-card/50 p-6 rounded-2xl border border-border">
          <h3 className="text-xl font-bold mb-3">Core Team Burnout</h3>
          <p className="text-muted-foreground leading-relaxed">
            Your best engineers and product managers are spending 30% of their
            time on manual data cleaning, exception handling, or customer
            tickets instead of building your next feature.
          </p>
        </div>
        <div className="glassmorphic bg-card/50 p-6 rounded-2xl border border-border">
          <h3 className="text-xl font-bold mb-3">The Compliance Risk</h3>
          <p className="text-muted-foreground leading-relaxed">
            You cannot send sensitive work like financial data or KYC
            verification to an anonymous, unvetted crowd. The risk of a data
            breach or compliance failure is too high.
          </p>
        </div>
        <div className="glassmorphic bg-card/50 p-6 rounded-2xl border border-border">
          <h3 className="text-xl font-bold mb-3">The Hiring Headache</h3>
          <p className="text-muted-foreground leading-relaxed">
            You do not have the time or resources to hire, train, and manage a
            new 50-person team for a project-based need. You need to scale
            your workforce instantly, not in 6 months.
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
          A Managed Workforce for Every Process
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          We combine AI automation with expert-led teams to run your most
          critical operations securely and efficiently.
        </p>
      </div>

      <Tabs defaultValue="ai-ops" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto sm:h-12">
          <TabsTrigger value="ai-ops" className="py-2.5 sm:py-1.5">
            <Bot className="mr-2 w-4 h-4" />
            AI & Data Operations
          </TabsTrigger>
          <TabsTrigger value="customer-support" className="py-2.5 sm:py-1.5">
            <Headset className="mr-2 w-4 h-4" />
            Intelligent Support
          </TabsTrigger>
          <TabsTrigger value="data-processing" className="py-2.5 sm:py-1.5">
            <Database className="mr-2 w-4 h-4" />
            Complex Data Processing
          </TabsTrigger>
        </TabsList>
        <div className="mt-8">
          <TabsContent value="ai-ops">
            <div className="glassmorphic bg-card/50 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4">
                Keep Your AI Running Flawlessly, 24/7
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your AI model is not a 'set it and forget it' product. We
                provide the human-in-the-loop workforce to monitor, manage, and
                continuously improve your AI in production.
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Real-Time Model Monitoring
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Human-in-the-Loop (HITL)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Exception Handling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Adversarial Testing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Data Pipeline Management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  A/B Test Result Analysis
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="customer-support">
            <div className="glassmorphic bg-card/50 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4">
                Support That Understands Your Product
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We provide AI-augmented, multilingual support teams that act as
                an extension of your company. We resolve complex technical
                tickets, not just read scripts.
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Tier 1-3 Technical Support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  24/7 Multilingual Coverage
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  SaaS & Product Onboarding
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Customer Feedback Analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Help Desk & Doc Management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Community Management
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="data-processing">
            <div className="glassmorphic bg-card/50 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4">
                High-Trust, High-Volume Data Handling
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We handle your most sensitive, high-volume processes with 100%
                accuracy and compliance. Our managed teams are trained in your
                specific SOPs and security protocols.
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  KYC & Identity Verification
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Financial Data Reconciliation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  E-commerce Catalog Management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Document Digitization (OCR)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Data Cleansing & Validation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  HR & Legal Document Review
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
          Your Remote Team,
          <span className="gradient-text animate-gradient">
            {" "}
            Managed for You.
          </span>
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          This is not outsourcing. This is an extension of your team, built
          with verified experts and managed by us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center flex flex-col items-center">
          <CharacterIllustration
            type="researcher-rachel"
            className="w-48 h-48"
            animate={true}
          />
          <h3 className="text-xl font-bold mt-4">The Compliance Analyst</h3>
          <p className="text-muted-foreground leading-relaxed mt-2 max-w-xs">
            Rachel leads a KYC team that verifies 5,000+ user identities
            daily for a neobank, ensuring 100% AML compliance and handling
            all edge cases manually.
          </p>
        </div>
        <div className="text-center flex flex-col items-center">
          <CharacterIllustration
            type="engineer-erik"
            className="w-48 h-48"
            animate={true}
          />
          <h3 className="text-xl font-bold mt-4">The AI Ops Specialist</h3>
          <p className="text-muted-foreground leading-relaxed mt-2 max-w-xs">
            Erik's team monitors a self-driving AI's production data,
            flagging and re-labeling 1,000+ incorrect "pedestrian" tags per
            week, preventing model drift.
          </p>
        </div>
        <div className="text-center flex flex-col items-center">
          <CharacterIllustration
            type="tester-tom"
            className="w-48 h-48"
            animate={true}
          />
          <h3 className="text-xl font-bold mt-4">The Support Engineer</h3>
          <p className="text-muted-foreground leading-relaxed mt-2 max-w-xs">
            Tom, a former developer, provides Tier 2 support for a complex
            SaaS API, resolving technical tickets 40% faster than the previous
            BPO vendor.
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
          This Isn't Outsourcing. It's 'Ops-as-a-Service'.
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          We build a "Digital Assembly Line" for your exact process, powered
          by AI and run by experts.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-start gap-4">
          <ClipboardCheck className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold mb-1">1. We Blueprint</h3>
            <p className="text-muted-foreground leading-relaxed">
              We start by mapping your exact workflow, SOPs, quality
              thresholds, and security needs. We become an expert in your
              business process.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Workflow className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold mb-1">2. We Build & Automate</h3>
            <p className="text-muted-foreground leading-relaxed">
              We assemble a dedicated, managed team of our experts.
              Simultaneously, we build AI tools to automate the repetitive
              parts, leaving only high-judgment tasks for humans.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <BadgeCheck className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold mb-1">3. We Run & Optimize</h3>
            <p className="text-muted-foreground leading-relaxed">
              We run the entire process for you. You get real-time dashboards
              and a dedicated project manager. We handle all hiring, QA, and
              security. You just get the result.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Page Component ---
const EnterpriseBPO = () => {
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

export default EnterpriseBPO;
