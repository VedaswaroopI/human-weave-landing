import { SEO } from "@/components/SEO";
import { pageSEO } from "@/utils/seo-config";
import { generateBreadcrumbSchema } from "@/hooks/useSEO";
import { PageLayout } from "@/components/layouts/PageLayout";
import { SolutionHero } from "@/components/SolutionHero";
import { CharacterIllustration } from "@/components/CharacterIllustration";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { TrustSection } from "@/components/TrustSection";
import { Meteors } from "@/components/ui/meteors";
import {
  ShieldCheck,
  X,
  CheckCircle,
  Lock,
  Award,
  Target,
  Eye,
  BrainCircuit,
  Scale,
  Handshake,
  Heart,
  Globe,
} from "lucide-react";

// --- Section 1: Hero ---
const HeroSection = () => (
  <SolutionHero
    badge="ABOUT US"
    title="We Are The Human Behind The AI"
    subtitle="Our mission is to bridge the gap between human expertise and artificial intelligence, providing the 99.5% or higher accuracy and deep context that machines can't, all while ensuring enterprise-grade security."
  />
);

// --- Section 2: Mission & Vision ---
const MissionVisionSection = () => (
  <section className="py-16 sm:py-20 md:py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Our Mission */}
        <div className="relative glassmorphic bg-card/50 p-8 rounded-2xl border border-border overflow-hidden">
          <GlowingEffect spread={40} glow={true} proximity={100} borderWidth={2.5} disabled={false} />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </span>
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To empower AI innovation with a scalable, on-demand workforce of
              verified experts, ensuring every dataset is accurate, secure, and
              context-aware.
            </p>
          </div>
        </div>

        {/* Our Vision */}
        <div className="relative glassmorphic bg-card/50 p-8 rounded-2xl border border-border overflow-hidden">
          <GlowingEffect spread={40} glow={true} proximity={100} borderWidth={2.5} disabled={false} />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-accent" />
              </span>
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To be the world's most trusted partner for human-in-the-loop
              services, building a future where technology and human expertise
              collaborate seamlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);


// --- Section 3: The "Why Us" Differentiator ---
// This is the core "Us vs. Them" comparison, which is essential.
const DifferentiatorSection = () => (
  <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          The UsergyAI Difference
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          Why settle for crowdsourced guesswork when you can work with a managed expert network?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* The Old Way - Crowd Platforms */}
        <div className="glassmorphic bg-muted/30 border-destructive/30 p-8 rounded-2xl border hover:border-destructive/40 transition-all duration-300 opacity-80 hover:opacity-90">
          <h3 className="text-2xl font-bold mb-6 text-destructive/90">
            Crowd Platforms
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">Anonymous Workers</p>
                <p className="text-sm text-muted-foreground">
                  You have no idea who's labeling your critical AI data
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">Inconsistent Quality</p>
                <p className="text-sm text-muted-foreground">
                  Different workers, different standards, different mistakes
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">High Error Rates</p>
                <p className="text-sm text-muted-foreground">
                  Cheap labor means expensive rework and model retraining
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">Security Risks</p>
                <p className="text-sm text-muted-foreground">
                  Your sensitive data passes through unvetted hands
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* The UsergyAI Way - Superior Design with Meteors */}
        <div className="relative glassmorphic bg-gradient-to-br from-secondary/10 via-primary/10 to-accent/10 border-secondary/40 p-8 rounded-2xl border-2 hover:border-secondary/60 transition-all duration-300 shadow-lg hover:shadow-secondary/20 hover:shadow-2xl overflow-hidden">
          <Meteors number={15} />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                UsergyAI Network
              </h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3 bg-background/40 p-3 rounded-lg backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Verified Experts (MDs, PhDs)</p>
                  <p className="text-sm text-muted-foreground">
                    Board-certified professionals with domain credentials
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-background/40 p-3 rounded-lg backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Managed, Multi-Layer QA</p>
                  <p className="text-sm text-muted-foreground">
                    Every project overseen by dedicated quality managers
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-background/40 p-3 rounded-lg backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">99.5% or Higher Guaranteed Accuracy</p>
                  <p className="text-sm text-muted-foreground">
                    SLA-backed quality metrics with financial guarantees
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-background/40 p-3 rounded-lg backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">SOC 2 & HIPAA Ready</p>
                  <p className="text-sm text-muted-foreground">
                    Enterprise-grade security with full audit trails
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Section 4: Core Values ---
const ValueCard: React.FC<{
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}> = ({ icon: Icon, title, children }) => (
  <div className="glassmorphic bg-card/50 p-6 rounded-2xl border border-border text-center">
    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
      <Icon className="w-6 h-6 text-accent" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{children}</p>
  </div>
);

const ValuesSection = () => (
  <section className="py-16 sm:py-20 md:py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Our Core Values
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          These principles guide every decision we make and every project we
          deliver.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <ValueCard icon={BrainCircuit} title="Expertise First">
          We are not a crowd. We are a managed network of professionals. We
          believe domain expertise is the most critical factor in high-quality AI
          data.
        </ValueCard>
        <ValueCard icon={ShieldCheck} title="Uncompromising Security">
          Your data is your most valuable asset. We protect it with
          enterprise-grade, auditable security aligned with SOC 2, HIPAA, and ISO 27001 standards at every
          step.
        </ValueCard>
        <ValueCard icon={Heart} title="Accuracy & Integrity">
          We stand by our 99.5% or higher accuracy guarantee. We believe in honest
          work, transparent communication, and delivering results you can
          trust.
        </ValueCard>
        <ValueCard icon={Scale} title="Scale Without Sacrifice">
          Our model is built to provide 10 or 10,000 experts without
          compromising on quality, security, or the expert-led approach.
        </ValueCard>
        <ValueCard icon={Handshake} title="Collaborative Partnership">
          We act as an extension of your team. We adapt to your tools,
          workflows, and goals, becoming a true partner in your success.
        </ValueCard>
        <ValueCard icon={Globe} title="Global & Local">
          We provide a global workforce that understands local context. Our
          linguists and testers are in-country, ensuring cultural and
          regional nuance.
        </ValueCard>
      </div>
    </div>
  </section>
);


// --- Section 5: Meet the Experts ---
const NetworkSection = () => (
  <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Meet the Minds Who Train Your Models
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          These aren't faceless workers. They're the professionals who bring expertise, context, and quality to every data point.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="relative glassmorphic bg-card/50 p-8 rounded-2xl border border-border h-full flex flex-col items-center text-center overflow-hidden">
          <GlowingEffect spread={40} glow={true} proximity={100} borderWidth={2.5} disabled={false} />
          <div className="relative z-10 flex flex-col items-center">
            <CharacterIllustration
              type="doctor-dan"
              className="w-48 h-48 mb-6"
              animate={true}
            />
            <h3 className="text-xl font-bold mb-3">Medical Precision</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your medical AI isn't just "labeled." It's reviewed by a board-certified radiologist who understands the difference between a tumor and a shadow. Dr. Dan brings that expertise to every annotation.
            </p>
          </div>
        </div>

        <div className="relative glassmorphic bg-card/50 p-8 rounded-2xl border border-border h-full flex flex-col items-center text-center overflow-hidden">
          <GlowingEffect spread={40} glow={true} proximity={100} borderWidth={2.5} disabled={false} />
          <div className="relative z-10 flex flex-col items-center">
            <CharacterIllustration
              type="tester-tom"
              className="w-48 h-48 mb-6"
              animate={true}
            />
            <h3 className="text-xl font-bold mb-3">Real-World Testing</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your app isn't just "tested." It's used by a real person in Mumbai on a 3G network with a 3-year-old Android phone, finding bugs emulators miss. Tom represents your actual users.
            </p>
          </div>
        </div>

        <div className="relative glassmorphic bg-card/50 p-8 rounded-2xl border border-border h-full flex flex-col items-center text-center overflow-hidden">
          <GlowingEffect spread={40} glow={true} proximity={100} borderWidth={2.5} disabled={false} />
          <div className="relative z-10 flex flex-col items-center">
            <CharacterIllustration
              type="linguist-leila"
              className="w-48 h-48 mb-6"
              animate={true}
            />
            <h3 className="text-xl font-bold mb-3">Cultural Expertise</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your product isn't just "translated." It's localized by a native speaker in Tokyo who knows your marketing slogan is a cultural misstep. Leila saves you from the embarrassment.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Section 6: Security ---
const SecuritySection = () => (
  <section className="py-16 sm:py-20 md:py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          The Security That Earns Trust
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          We don't just promise security. We prove it with certifications and compliance that meet the highest enterprise standards.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="glassmorphic bg-card/50 p-8 rounded-2xl border border-border text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
            <ShieldCheck className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-xl font-bold mb-3">SOC 2 Type II</h3>
          <p className="text-muted-foreground leading-relaxed">
            Independently audited security controls protecting your data at every stage of the workflow.
          </p>
        </div>

        <div className="glassmorphic bg-card/50 p-8 rounded-2xl border border-border text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
            <Lock className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-xl font-bold mb-3">HIPAA & GDPR</h3>
          <p className="text-muted-foreground leading-relaxed">
            Full compliance for handling sensitive health data and personal information across global markets.
          </p>
        </div>

        <div className="glassmorphic bg-card/50 p-8 rounded-2xl border border-border text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
            <Award className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-xl font-bold mb-3">ISO 27001</h3>
          <p className="text-muted-foreground leading-relaxed">
            International standard for information security management, ensuring systematic data protection.
          </p>
        </div>

        <div className="glassmorphic bg-gradient-to-br from-secondary/10 to-primary/10 p-8 rounded-2xl border-2 border-secondary/30 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
            <Award className="w-8 h-8 text-secondary" />
          </div>
          <h3 className="text-xl font-bold mb-3">Government Recognized</h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Officially recognized by the Department for Promotion of Industry and Internal Trade (DPIIT), Govt. of India.
          </p>
          <span className="inline-block text-xs font-semibold bg-secondary/20 text-secondary px-3 py-1 rounded-full">
            Cert No: DIPP231691
          </span>
        </div>
      </div>
    </div>
  </section>
);


// --- Main Page Component ---
const WhyUs = () => {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "https://usergy.ai" },
    { name: "Why Us", url: "https://usergy.ai/why-us" },
  ]);

  return (
    <>
      <SEO {...pageSEO.whyUs} structuredData={breadcrumbs} />
      <PageLayout>
      <HeroSection />
      <MissionVisionSection />
      <DifferentiatorSection />
      <ValuesSection />
      <NetworkSection />
      <SecuritySection />
      <TrustSection />
    </PageLayout>
    </>
  );
};

export default WhyUs;
