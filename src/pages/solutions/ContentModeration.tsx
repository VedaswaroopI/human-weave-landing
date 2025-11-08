import { PageLayout } from "@/components/layouts/PageLayout";
import { SolutionHero } from "@/components/SolutionHero";

const ContentModeration = () => {
  return (
    <PageLayout>
      <SolutionHero
        badge="Content Moderation"
        title={
          <>
            Protecting Your Platform.
            <br />
            <span className="gradient-text animate-gradient">Preserving Your Brand.</span>
          </>
        }
        subtitle="Human moderators who understand context, culture, and nuance—ensuring your platform stays safe, compliant, and trusted by your community."
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

export default ContentModeration;
