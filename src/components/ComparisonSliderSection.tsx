import { motion } from "framer-motion";
import { Compare } from "@/components/ui/compare";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Users, Zap } from "lucide-react";
import competitorQuality from "/comparisons/competitor-quality.png";
import usergyaiQuality from "/comparisons/usergyai-quality.png";
import competitorTeam from "/comparisons/competitor-team.png";
import usergyaiTeam from "/comparisons/usergyai-team.png";
import competitorSecurity from "/comparisons/competitor-security.png";
import usergyaiSecurity from "/comparisons/usergyai-security.png";

export const ComparisonSliderSection = () => {
  const comparisons = [
    {
      title: "Data Quality",
      description: "Expert-driven accuracy vs inconsistent crowd work",
      competitorMetric: "85-92% Accuracy",
      usergyaiMetric: "99.5%+ Accuracy",
      firstImage: competitorQuality,
      secondImage: usergyaiQuality,
    },
    {
      title: "Team Quality",
      description: "Verified specialists vs anonymous workers",
      competitorMetric: "Unknown Expertise",
      usergyaiMetric: "PhD, MD, JD Verified",
      firstImage: competitorTeam,
      secondImage: usergyaiTeam,
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade protection vs basic security",
      competitorMetric: "Basic Security",
      usergyaiMetric: "SOC 2, HIPAA, ISO 27001",
      firstImage: competitorSecurity,
      secondImage: usergyaiSecurity,
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "99.5%+ Accuracy SLA",
      description: "Money-back guarantee on quality",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2, HIPAA, ISO 27001 certified",
    },
    {
      icon: Users,
      title: "Expert Specialists",
      description: "PhDs, MDs, JDs - not crowd workers",
    },
    {
      icon: Zap,
      title: "Dedicated PM",
      description: "White-glove service, not self-service",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="comparison" className="py-16 sm:py-20 md:py-24 bg-muted/20 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-wider text-accent font-semibold mb-4"
          >
            The UsergyAI Difference
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            Not All AI Data Services Are Created Equal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            See the difference expert-driven quality makes
          </motion.p>
        </div>

        {/* Comparison Sliders */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 sm:mb-16"
        >
          {comparisons.map((comparison, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glassmorphic border border-border rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-accent/5 to-secondary/5"
            >
              <div className="mb-4">
                <Compare
                  firstImage={comparison.firstImage}
                  secondImage={comparison.secondImage}
                  firstImageClassName="object-cover"
                  secondImageClassname="object-cover"
                  className="h-[250px] md:h-[300px] lg:h-[350px] w-full rounded-2xl shadow-2xl"
                  slideMode="hover"
                  showHandlebar={true}
                  autoplay={true}
                  autoplayDuration={4000}
                />
              </div>
              
              <div className="mt-6 space-y-3">
                <h3 className="text-xl font-bold text-center">{comparison.title}</h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {comparison.description}
                </p>
                <div className="flex justify-between items-center text-xs font-medium pt-2 gap-2">
                  <span className="text-red-500 flex-1 text-left">
                    ❌ {comparison.competitorMetric}
                  </span>
                  <span className="text-green-500 flex-1 text-right">
                    ✓ {comparison.usergyaiMetric}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-8 md:hidden"
        >
          💡 Hover or drag to compare
        </motion.p>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading AI teams who trust UsergyAI for mission-critical data operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Get Free Sample Dataset
              <Zap className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
