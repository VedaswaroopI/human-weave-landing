import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { NetworkSection } from "@/components/NetworkSection";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { TrustSection } from "@/components/TrustSection";
import { CaseStudies } from "@/components/CaseStudies";
import { ComparisonSection } from "@/components/ComparisonSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <NetworkSection />
        <ProcessTimeline />
        <TrustSection />
        <CaseStudies />
        <ComparisonSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
