import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

export interface CaseStudyCardProps {
  industry: string;
  headline: string;
  metric: string;
  metricLabel: string;
  story: string;
  url: string;
  imageUrl: string;
  className?: string;
}

export const CaseStudyCard = ({
  industry,
  headline,
  metric,
  metricLabel,
  story,
  url,
  imageUrl,
  className,
}: CaseStudyCardProps) => {
  return (
    <Link
      to={url}
      className={cn(
        "block glassmorphic bg-card border border-border rounded-2xl overflow-hidden hover-lift transition-all duration-300 relative group",
        className
      )}
    >
      <GlowingEffect
        spread={48}
        glow={true}
        disabled={false}
        proximity={90}
        inactiveZone={0.08}
        borderWidth={2}
        movementDuration={2.2}
      />
      
      {/* Image Section */}
      <AspectRatio ratio={16 / 9}>
        <img
          src={imageUrl}
          alt={headline}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </AspectRatio>

      {/* Content Section */}
      <div className="p-6">
        <div className="inline-block px-2 py-1 rounded-full bg-accent/10 text-accent text-sm font-bold uppercase mb-3">
          {industry}
        </div>

        <h3 className="text-lg sm:text-xl font-bold mb-3 leading-tight">
          {headline}
        </h3>

        <div className="mb-3">
          <div className="text-3xl sm:text-4xl font-bold gradient-text animate-gradient">
            {metric}
          </div>
          <p className="text-sm text-muted-foreground">{metricLabel}</p>
        </div>

        <p className="text-base text-muted-foreground mb-4 leading-relaxed">
          {story}
        </p>

        <div className="text-base font-semibold text-secondary flex items-center gap-2 group-hover:gap-3 transition-all">
          Read Story <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};
