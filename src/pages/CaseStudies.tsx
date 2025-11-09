import * as React from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layouts/PageLayout";
import { SolutionHero } from "@/components/SolutionHero";
import { allCaseStudies, getIndustries, CaseStudy } from "@/lib/case-studies-db";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const CaseStudyLinkCard: React.FC<{ study: CaseStudy }> = ({ study }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="group relative block h-full"
  >
    <Link to={`/case-studies/${study.slug}`} className="block h-full">
      <div className="relative glassmorphic bg-card/50 hover:bg-card/70 border border-border hover:border-secondary/50 rounded-3xl h-full flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02]">
        
        <AspectRatio ratio={16 / 10}>
          <img
            src={study.cardImage}
            alt={study.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </AspectRatio>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {study.tags.map(tag => (
              <Badge key={tag} variant="outline" className="bg-accent/10 text-accent border-accent/20 text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h3 className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors mb-3 flex-grow">
            {study.title}
          </h3>

          <div className="flex items-center gap-2 text-sm font-semibold text-secondary mt-auto pt-4 group-hover:gap-3 transition-all duration-300">
            Read Story <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const CaseStudies = () => {
  const industries = getIndustries();
  const [filteredStudies, setFilteredStudies] = React.useState(allCaseStudies);
  const [activeTab, setActiveTab] = React.useState("All");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value === "All") {
      setFilteredStudies(allCaseStudies);
    } else {
      setFilteredStudies(allCaseStudies.filter(study => study.industry === value));
    }
  };

  return (
    <PageLayout>
      <SolutionHero
        badge="CASE STUDIES"
        title={
          <>
            Real-World Problems.
            <br />
            <span className="gradient-text animate-gradient">Proven Solutions.</span>
          </>
        }
        subtitle="Explore how our 300,000+ experts help the world's leading AI, SaaS, and enterprise companies build, test, and scale with confidence."
      />
      
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Tabs defaultValue="All" onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-3xl mx-auto h-auto">
            {industries.map(industry => (
              <TabsTrigger key={industry} value={industry} className="py-2.5 sm:py-3">
                {industry}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredStudies.map((study) => (
                <CaseStudyLinkCard key={study.slug} study={study} />
              ))}
            </div>
            {filteredStudies.length === 0 && (
              <p className="text-center text-muted-foreground mt-12">No case studies found for this category.</p>
            )}
          </TabsContent>
        </Tabs>
      </section>
    </PageLayout>
  );
};

export default CaseStudies;
