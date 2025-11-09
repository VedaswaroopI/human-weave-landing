import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ClipboardCheck, UsersRound, Workflow, BadgeCheck, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const journeySteps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Scoping & Requirements",
    description: "45-minute consultation call to understand:",
    details: [
      "Your data type (images, text, audio, video)",
      "Quality requirements (accuracy, compliance needs)",
      "Timeline and budget constraints",
      "Security/compliance requirements (HIPAA, SOC 2, etc.)"
    ],
    deliverable: "Detailed project scope & pricing within 24 hours",
    time: "Day 1",
    gradient: "from-secondary to-primary"
  },
  {
    number: "02",
    icon: UsersRound,
    title: "Expert Team Assembly",
    description: "We handpick specialists from our network of 300,000 or more:",
    details: [
      "Verify certifications (MDs, JDs, PhDs as needed)",
      "Test on sample batch to ensure quality",
      "Assign dedicated project manager",
      "Set up secure data pipeline (encrypted transfer, NDA)"
    ],
    deliverable: "Team assembled, sample batch completed for review",
    time: "Days 2-3",
    gradient: "from-primary to-accent"
  },
  {
    number: "03",
    icon: Workflow,
    title: "Production & Quality Control",
    description: "Parallel execution with multi-layer QA:",
    details: [
      "Production team completes initial labeling/testing",
      "QA team reviews 100% of output",
      "Your team reviews sample batches (10-20%)",
      "Real-time dashboard tracks progress"
    ],
    deliverable: "Daily progress reports, weekly milestone reviews",
    time: "Weeks 1-N",
    gradient: "from-accent to-secondary"
  },
  {
    number: "04",
    icon: BadgeCheck,
    title: "Final Validation & Delivery",
    description: "Before delivery, we guarantee quality:",
    details: [
      "Final accuracy check (99.5% minimum or higher)",
      "Format validation (JSON, CSV, XML as specified)",
      "Documentation package (methodology, edge cases)",
      "Post-delivery support window (30 days)"
    ],
    deliverable: "Complete dataset with quality report & documentation",
    time: "Final week",
    gradient: "from-secondary to-accent"
  },
  {
    number: "05",
    icon: Handshake,
    title: "Ongoing Partnership",
    description: "We don't disappear after delivery:",
    details: [
      "30-day support for questions/clarifications",
      "Discounted rates for additional batches",
      "Priority scheduling for repeat clients",
      "Quarterly check-ins for evolving needs"
    ],
    deliverable: "Long-term partnership, not transactional",
    time: "Ongoing",
    gradient: "from-primary to-secondary"
  }
];

export const JourneyScrollRevamped = () => {
  return (
    <section id="process" className="py-8 sm:py-12 md:py-16 bg-background">
      <ContainerScroll
        titleComponent={
          <div className="space-y-3 mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Your Journey with <span className="gradient-text animate-gradient">UsergyAI</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              From first call to final delivery: experience precision at every step
            </p>
          </div>
        }
      >
        {/* Journey Steps Content */}
        <div className="h-full w-full overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
          <div className="space-y-4 md:space-y-6 p-4 md:p-6">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glassmorphic bg-card/50 border border-border rounded-2xl p-4 md:p-6 hover:border-primary/30 transition-all duration-300 group relative"
                >
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={70}
                    inactiveZone={0.15}
                    borderWidth={2}
                    movementDuration={2.3}
                    className="z-10"
                  />
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                    {/* Number Badge */}
                    <div className="flex-shrink-0">
                      <div className="relative w-14 h-14 md:w-16 md:h-16">
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                        <div className="relative w-full h-full rounded-full border-2 border-border flex items-center justify-center">
                          <span className="text-xl md:text-2xl font-bold gradient-text">
                            {step.number}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-2 md:space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg md:text-xl font-bold text-foreground">
                          {step.title}
                        </h3>
                        <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                      </div>
                      
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      
                      <ul className="space-y-1.5 ml-4">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-accent mt-1.5">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="pt-2 space-y-2">
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                          <p className="text-xs md:text-sm text-foreground/80 font-medium">
                            <span className="text-primary">Deliverable:</span> {step.deliverable}
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                          <span className="text-xs md:text-sm text-accent font-medium">
                            {step.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};
