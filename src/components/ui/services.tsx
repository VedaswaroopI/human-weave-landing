import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Service {
  title: string;
  badge: string;
  description: string;
  url: string;
  icon: React.ElementType;
}

const SolutionsGrid = ({ services }: { services: Service[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {services.map((service, index) => (
        <Link
          key={index}
          to={service.url}
          className="group block h-full"
        >
          <div className="bg-card/50 hover:bg-card/70 border border-border hover:border-secondary/50 rounded-3xl p-6 flex flex-col h-[320px] transition-all duration-300 relative overflow-hidden">
            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              {/* Icon */}
              <div className="relative flex-grow flex items-center justify-center mb-4">
                {React.createElement(service.icon, {
                  className:
                    "w-16 h-16 text-secondary/70 group-hover:text-secondary transition-colors duration-300",
                  "aria-hidden": "true",
                })}
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase w-fit">
                {service.badge}
              </div>

              <h3 className="text-left text-xl font-bold text-foreground group-hover:text-secondary mt-4 transition-colors">
                {service.title}
              </h3>

              <p className="text-left text-sm text-muted-foreground leading-relaxed mt-2 line-clamp-3">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-semibold text-secondary mt-auto pt-4 group-hover:gap-3 transition-all duration-300">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SolutionsGrid;
