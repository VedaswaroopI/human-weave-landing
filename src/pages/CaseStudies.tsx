import { PageLayout } from "@/components/layouts/PageLayout";
import { SolutionHero } from "@/components/SolutionHero";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const allCases = [
  {
    industry: "HEALTHCARE",
    headline: "Training FDA-Approved AI Diagnostics",
    metric: "99.8%",
    metricLabel: "Annotation Accuracy",
    story: "A Fortune 500 healthcare company needed 2M medical images annotated by actual doctors. We delivered in 8 weeks with zero errors.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173ada999af?w=800",
    url: "/case-studies/healthcare-diagnostics"
  },
  {
    industry: "AUTONOMOUS VEHICLES",
    headline: "Powering Self-Driving Car AI",
    metric: "5M+",
    metricLabel: "Images Labeled",
    story: "Trained computer vision models with pixel-perfect annotation of roads, pedestrians, and obstacles across diverse conditions.",
    imageUrl: "https://images.unsplash.com/photo-1503700022718-d7801a6d3605?w=800",
    url: "/case-studies/autonomous-vehicles"
  },
  {
    industry: "GLOBAL SAAS",
    headline: "Launching in 20 Markets Simultaneously",
    metric: "150+",
    metricLabel: "Languages",
    story: "Native speakers localized product, marketing, and support content with cultural authenticity. Zero customer complaints about translation.",
    imageUrl: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800",
    url: "/case-studies/global-saas"
  },
  {
    industry: "FINTECH",
    headline: "Zero Errors in Financial Data Processing",
    metric: "100%",
    metricLabel: "Compliance Rate",
    story: "Processed 5M+ financial transactions with certified analysts ensuring regulatory compliance across 12 countries.",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
    url: "/case-studies/fintech"
  },
  {
    industry: "E-COMMERCE",
    headline: "Product Testing Across 12 Countries",
    metric: "12K+",
    metricLabel: "Real Users",
    story: "Real shoppers tested checkout flows in their native languages across diverse payment systems. Increased conversion by 34%.",
    imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800",
    url: "/case-studies/ecommerce"
  },
  {
    industry: "GAMING",
    headline: "Bug-Free Launch in 30 Languages",
    metric: "30",
    metricLabel: "Languages",
    story: "Native gamers tested gameplay, found 2,000+ bugs before launch. Zero critical issues post-release. 4.8★ global rating.",
    imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800",
    url: "/case-studies/gaming"
  },
];

const CaseStudies = () => {
  return (
    <PageLayout>
      <SolutionHero
        badge="CASE STUDIES"
        title={
          <>
            Real Projects. <br />
            <span className="gradient-text animate-gradient">Real Results.</span>
          </>
        }
        subtitle="See how the world's leading AI, SaaS, and enterprise companies partner with our 300,000+ experts to build world-class products."
      />

      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 max-w-4xl mx-auto mb-12">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="HEALTHCARE">Healthcare</TabsTrigger>
            <TabsTrigger value="AUTONOMOUS VEHICLES">Autonomous</TabsTrigger>
            <TabsTrigger value="GLOBAL SAAS">SaaS</TabsTrigger>
            <TabsTrigger value="FINTECH">Fintech</TabsTrigger>
            <TabsTrigger value="E-COMMERCE">E-Commerce</TabsTrigger>
            <TabsTrigger value="GAMING">Gaming</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCases.map((study) => (
                <CaseStudyCard key={study.headline} {...study} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="HEALTHCARE" className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCases
                .filter((study) => study.industry === "HEALTHCARE")
                .map((study) => (
                  <CaseStudyCard key={study.headline} {...study} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="AUTONOMOUS VEHICLES" className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCases
                .filter((study) => study.industry === "AUTONOMOUS VEHICLES")
                .map((study) => (
                  <CaseStudyCard key={study.headline} {...study} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="GLOBAL SAAS" className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCases
                .filter((study) => study.industry === "GLOBAL SAAS")
                .map((study) => (
                  <CaseStudyCard key={study.headline} {...study} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="FINTECH" className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCases
                .filter((study) => study.industry === "FINTECH")
                .map((study) => (
                  <CaseStudyCard key={study.headline} {...study} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="E-COMMERCE" className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCases
                .filter((study) => study.industry === "E-COMMERCE")
                .map((study) => (
                  <CaseStudyCard key={study.headline} {...study} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="GAMING" className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCases
                .filter((study) => study.industry === "GAMING")
                .map((study) => (
                  <CaseStudyCard key={study.headline} {...study} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </PageLayout>
  );
};

export default CaseStudies;
