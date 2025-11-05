import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ChallengeSection } from "@/components/ChallengeSection";
import { ServicesSection } from "@/components/ServicesSection";
import { JourneySection } from "@/components/JourneySection";
import { TrustSection } from "@/components/TrustSection";
import { CaseStudiesRevised } from "@/components/CaseStudiesRevised";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ChallengeSection />
        <ServicesSection />
        <JourneySection />
        <TrustSection />
        <CaseStudiesRevised />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
