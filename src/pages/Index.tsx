import { SEO } from "@/components/SEO";
import { pageSEO } from "@/utils/seo-config";
import { Header } from "@/components/Header";
import { HeroWithSpline } from "@/components/HeroWithSpline";
import { RealitySection } from "@/components/RealitySection";
import { ServicesSection } from "@/components/ServicesSection";
import { JourneyScrollRevamped } from "@/components/JourneyScrollRevamped";
import { TrustSection } from "@/components/TrustSection";
import { CaseStudiesRevised } from "@/components/CaseStudiesRevised";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <SEO {...pageSEO.home} />
      <div className="min-h-screen">
      <Header />
      <main>
        <HeroWithSpline />
        <RealitySection />
        <ServicesSection />
        <JourneyScrollRevamped />
        <TrustSection />
        <CaseStudiesRevised />
        <FinalCTA />
      </main>
      <Footer />
    </div>
    </>
  );
};

export default Index;
