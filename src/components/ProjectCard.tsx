import * as React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ParticleButton } from "@/components/ui/particle-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Project } from "@/lib/projects-db";
import { ArrowRight, Calendar, MapPin, CheckSquare } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="h-full"
    >
      <Card className="relative glassmorphic bg-card/50 border border-border h-full flex flex-col hover-lift overflow-hidden">
        <GlowingEffect
          spread={40}
          glow={true}
          proximity={100}
          borderWidth={2}
          className="z-10"
        />
        <div className="relative z-20 flex flex-col h-full">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-3">
              <project.icon className="w-6 h-6 text-accent" />
              {project.title}
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground pt-2">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-secondary" />
                <strong>Start:</strong> {project.startDate}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary" />
                <strong>Location:</strong> {project.location}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-primary" />
                Requirements
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.requirements.map((req) => (
                  <Badge key={req} variant="outline" className="bg-accent/10 text-accent border-accent/20">
                    {req}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <ParticleButton
              asChild
              className="w-full bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary"
            >
              <a href={project.applyUrl} target="_blank" rel="noopener noreferrer">
                Apply Now <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </ParticleButton>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
};
