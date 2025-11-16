import { SEO } from "@/components/SEO";
import { pageSEO } from "@/utils/seo-config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectBoardHero } from "@/components/ProjectBoardHero";
import { ProjectCard } from "@/components/ProjectCard";
import { allProjects } from "@/lib/projects-db";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const ProjectsBoard = () => {
  return (
    <>
      <SEO {...pageSEO.projectsBoard} />
      <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-grow pt-16 sm:pt-20" role="main">
        <div className="container mx-auto px-4 sm:px-6 pt-8">
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Projects Board" },
            ]}
          />
        </div>
        {/* Child 1: The Hero */}
        <ProjectBoardHero />

        {/* Child 2: The Projects Grid */}
        <section id="projects-grid" className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Active Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {allProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
            {allProjects.length === 0 && (
              <p className="text-center text-muted-foreground text-lg mt-12">
                There are no active projects at this time. Please check back soon!
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </>
  );
};

export default ProjectsBoard;
