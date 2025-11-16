import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layouts/PageLayout";
import SolutionsGrid from "@/components/ui/services";
import { SolutionHero } from "@/components/SolutionHero";
import { SEO } from "@/components/SEO";
import { pageSEO } from "@/utils/seo-config";
import {
  Brain,
  ShieldCheck,
  Globe,
  Briefcase,
  Eye,
  BarChart,
} from "lucide-react";

const services = [
  {
    badge: "DATA SERVICES",
    title: "Building AI That Thinks Like Humans",
    description:
      "From medical imaging annotation by actual doctors to LLM fine-tuning by linguists, we match your project with genuine experts.",
    icon: Brain,
    url: "/solutions/data-services",
  },
  {
    badge: "QUALITY ASSURANCE",
    title: "Testing That Catches What Others Miss",
    description:
      "Real humans on real devices in real-world conditions. From bug hunting to AI model validation, we ensure your product works flawlessly everywhere.",
    icon: ShieldCheck,
    url: "/solutions/quality-assurance",
  },
  {
    badge: "MULTILINGUAL",
    title: "Speak Every Language, Respect Every Culture",
    description:
      "Native speakers who understand context, not just words. Translation and localization in 150+ languages with zero cultural mishaps.",
    icon: Globe,
    url: "/solutions/multilingual",
  },
  {
    badge: "ENTERPRISE & BPO",
    title: "Scale Without the Growing Pains",
    description:
      "From customer support to data management, we give you expert human capacity on demand with no hiring headaches, no overhead.",
    icon: Briefcase,
    url: "/solutions/enterprise-bpo",
  },
  {
    badge: "CONTENT MODERATION",
    title: "Keeping Your Platform Safe",
    description:
      "Human moderators trained in cultural nuance review content 24/7, ensuring your community stays healthy without over-moderation.",
    icon: Eye,
    url: "/solutions/content-moderation",
  },
  {
    badge: "RESEARCH & INSIGHTS",
    title: "Understanding What Users Really Want",
    description:
      "Real users provide feedback, test concepts, and validate ideas before you invest in development. Make data-driven decisions.",
    icon: BarChart,
    url: "/solutions/research-insights",
  },
];

const SolutionsLanding = () => {
  return (
    <>
      <SEO {...pageSEO.solutionsLanding} />
      <PageLayout>
      {/* Hero Section */}
      <SolutionHero
        badge="Our Solutions"
        title={
          <>
            Expert Human Solutions
            <br />
            <span className="gradient-text animate-gradient">
              for Every AI Challenge
            </span>
          </>
        }
        subtitle="From high-stakes data annotation to global quality assurance, our 300,000+ experts are the human force behind your technology."
      />

      {/* Services Grid */}
      <section className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-20 md:pb-24 pt-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-lg text-muted-foreground">
            Each solution is powered by our vetted network of experts. <Link to="/case-studies" className="text-secondary hover:text-secondary/80 underline">See how we've helped companies like yours</Link> or <Link to="/contact" className="text-secondary hover:text-secondary/80 underline">discuss your specific needs</Link>.
          </p>
        </div>
        <SolutionsGrid services={services} />
      </section>
    </PageLayout>
    </>
  );
};

export default SolutionsLanding;
