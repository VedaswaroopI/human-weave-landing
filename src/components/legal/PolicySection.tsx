import React from "react";

interface PolicySectionProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

/**
 * Shared component for legal document sections
 * Used in Privacy Policy, Terms of Service, and Cookie Policy
 */
export const PolicySection: React.FC<PolicySectionProps> = ({ 
  title, 
  icon: Icon, 
  children 
}) => (
  <div className="pt-8">
    <div className="flex items-center gap-3 mb-4">
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-accent" />
      </span>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
    <div className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground">
      {children}
    </div>
  </div>
);
