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
  FileCheck,
  Award,
} from "lucide-react";

const HeroSection = () => (
  <SolutionHero
    badge="WHY USERGYAI"
    title={
      <>
        Not Just Humans.
        <br />
        <span className="gradient-text animate-gradient">Genuine Experts.</span>
      </>
    }
    subtitle="Crowdsourcing platforms give you anonymous clicks. We give you a managed network of 300,000+ verified professionals (doctors, linguists, engineers, and researchers) who understand the context automation will never see."
  />
);

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
            <li className="flex items-start gap-3">
              <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">No Real Context</p>
                <p className="text-sm text-muted-foreground">
                  Workers follow scripts without understanding your domain
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* The UsergyAI Way - Superior Design with Meteors */}
        <div className="relative glassmorphic bg-gradient-to-br from-secondary/10 via-primary/10 to-accent/10 border-secondary/40 p-8 rounded-2xl border-2 hover:border-secondary/60 transition-all duration-300 shadow-lg hover:shadow-secondary/20 hover:shadow-2xl overflow-hidden">
          {/* Meteors Effect */}
          <Meteors number={15} />
          
          {/* Gradient Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 rounded-2xl pointer-events-none" />
          
          {/* Content */}
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
                  <p className="font-semibold text-foreground">SOC 2 & HIPAA Secure</p>
                  <p className="text-sm text-muted-foreground">
                    Enterprise-grade security with full audit trails
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-background/40 p-3 rounded-lg backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Deep Domain Context</p>
                  <p className="text-sm text-muted-foreground">
                    Experts who understand the "why" behind your requirements
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

const NetworkSection = () => (
  <section className="py-16 sm:py-20 md:py-24">
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
              Your medical AI isn't just "labeled." It's reviewed by a board-certified radiologist who understands the difference between a tumor and a shadow. Dr. Dan has read 10,000+ chest X-rays in his career. He brings that expertise to every annotation.
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
              Your app isn't just "tested." It's used by a real person in Mumbai on a 3G network with a 3-year-old Android phone, finding bugs emulators miss. Tom represents your actual users, not your engineering team's ideal environment.
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
              Your product isn't just "translated." It's localized by a native speaker in Tokyo who knows your "clever" marketing slogan is actually a cultural misstep. Leila saves you from the embarrassment machine translation creates.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SecuritySection = () => (
  <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          The Security That Earns Trust
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          We don't just promise security. We prove it with certifications and compliance that meet the highest enterprise standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
      </div>
    </div>
  </section>
);

const WhyUs = () => {
  return (
    <PageLayout>
      <HeroSection />
      <DifferentiatorSection />
      <NetworkSection />
      <SecuritySection />
      <TrustSection />
    </PageLayout>
  );
};

export default WhyUs;
