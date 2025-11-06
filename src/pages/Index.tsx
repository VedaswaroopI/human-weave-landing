import { Header } from "@/components/Header";
import { HeroWithSpline } from "@/components/HeroWithSpline";
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
        <HeroWithSpline />
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
