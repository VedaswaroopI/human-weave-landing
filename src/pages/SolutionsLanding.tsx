import { PageLayout } from "@/components/layouts/PageLayout";
import SolutionsGrid from "@/components/ui/services";

const services = [
  {
    badge: "DATA SERVICES",
    title: "Building AI That Thinks Like Humans",
    description: "From medical imaging annotation by actual doctors to LLM fine-tuning by linguists, we match your project with genuine experts.",
    url: "/solutions/data-services",
    image: "https://framerusercontent.com/images/PGqhbyNizzg0WF0Ff8Ct1xJCz4.png?scale-down-to=512",
    overlayImage: "https://framerusercontent.com/images/R8KAWJ8XJ7xyTu7ucAu7MwYY.png?scale-down-to=512"
  },
  {
    badge: "QUALITY ASSURANCE",
    title: "Testing That Catches What Others Miss",
    description: "Real humans on real devices in real-world conditions. From bug hunting to AI model validation, we ensure your product works flawlessly everywhere.",
    url: "/solutions/quality-assurance",
    image: "https://framerusercontent.com/images/icQGsV71x2rSlISc1VdMnw1qP0.png?scale-down-to=512",
    overlayImage: "https://framerusercontent.com/images/lXJpgpSzhcdgjAHyzQ8gL6xZio.png?scale-down-to=512"
  },
  {
    badge: "MULTILINGUAL",
    title: "Speak Every Language, Respect Every Culture",
    description: "Native speakers who understand context, not just words. Translation and localization in 150+ languages with zero cultural mishaps.",
    url: "/solutions/multilingual",
    image: "https://framerusercontent.com/images/fDuEIn62K1IFn5Ej7fSyTMA71og.png?scale-down-to=512",
    overlayImage: "https://framerusercontent.com/images/swGfymsPbpYnmJh0xWYUDsjYEVw.png?scale-down-to=512"
  },
  {
    badge: "ENTERPRISE & BPO",
    title: "Scale Without the Growing Pains",
    description: "From customer support to data management, we give you expert human capacity on demand with no hiring headaches, no overhead.",
    url: "/solutions/enterprise-bpo",
    image: "https://framerusercontent.com/images/fTivRAMCNvUFDAp9M0oddRMjk.png?scale-down-to=512",
    overlayImage: "https://framerusercontent.com/images/ykQMkxdWQtCI1O7dEHnQs9vQmME.png?scale-down-to=512"
  },
  {
    badge: "CONTENT MODERATION",
    title: "Keeping Your Platform Safe",
    description: "Human moderators trained in cultural nuance review content 24/7, ensuring your community stays healthy without over-moderation.",
    url: "/solutions/content-moderation",
    image: "https://framerusercontent.com/images/PGqhbyNizzg0WF0Ff8Ct1xJCz4.png?scale-down-to=512",
    overlayImage: "https://framerusercontent.com/images/R8KAWJ8XJ7xyTu7ucAu7MwYY.png?scale-down-to=512"
  },
  {
    badge: "RESEARCH & INSIGHTS",
    title: "Understanding What Users Really Want",
    description: "Real users provide feedback, test concepts, and validate ideas before you invest in development. Make data-driven decisions.",
    url: "/solutions/research-insights",
    image: "https://framerusercontent.com/images/icQGsV71x2rSlISc1VdMnw1qP0.png?scale-down-to=512",
    overlayImage: "https://framerusercontent.com/images/lXJpgpSzhcdgjAHyzQ8gL6xZio.png?scale-down-to=512"
  },
];

const SolutionsLanding = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold tracking-wider uppercase mb-4">
            Our Solutions
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Expert Human Solutions for Every{" "}
            <span className="gradient-text animate-gradient">AI Challenge</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From high-stakes data annotation to global quality assurance, our 300,000+ experts are the human force behind your technology.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-20 md:pb-24">
        <SolutionsGrid services={services} />
      </section>
    </PageLayout>
  );
};

export default SolutionsLanding;
