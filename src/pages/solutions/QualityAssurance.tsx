import { PageLayout } from "@/components/layouts/PageLayout";
import { SolutionHero } from "@/components/SolutionHero";

const QualityAssurance = () => {
  return (
    <PageLayout>
      <SolutionHero
        badge="Quality Assurance"
        title={
          <>
            Testing That Catches
            <br />
            <span className="gradient-text animate-gradient">What Others Miss.</span>
          </>
        }
        subtitle="Real humans on real devices in real-world conditions. From bug hunting to AI model validation, we ensure your product works flawlessly everywhere."
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

export default QualityAssurance;
