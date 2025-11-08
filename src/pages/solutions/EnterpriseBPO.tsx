import { PageLayout } from "@/components/layouts/PageLayout";
import { SolutionHero } from "@/components/SolutionHero";

const EnterpriseBPO = () => {
  return (
    <PageLayout>
      <SolutionHero
        badge="Enterprise & BPO Services"
        title={
          <>
            Outsourcing That Feels Like
            <br />
            <span className="gradient-text animate-gradient">Your Own Team.</span>
          </>
        }
        subtitle="From customer support to back-office operations, we deliver enterprise-grade BPO services with the precision, scalability, and security your business demands."
      />
      
      {/* Placeholder for future content */}
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <h2 className="text-3xl font-bold text-muted-foreground">
          More Content Coming Soon...
        </h2>
      </div>
    </PageLayout>
  );
};

export default EnterpriseBPO;
