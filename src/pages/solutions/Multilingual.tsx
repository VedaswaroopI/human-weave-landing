import { PageLayout } from "@/components/layouts/PageLayout";
import { SolutionHero } from "@/components/SolutionHero";

const Multilingual = () => {
  return (
    <PageLayout>
      <SolutionHero
        badge="Multilingual Services"
        title={
          <>
            Fluent in 100+ Languages.
            <br />
            <span className="gradient-text animate-gradient">Native in Every One.</span>
          </>
        }
        subtitle="From localization to cultural adaptation, our global network of native speakers ensures your message resonates authentically across languages and cultures."
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

export default Multilingual;
