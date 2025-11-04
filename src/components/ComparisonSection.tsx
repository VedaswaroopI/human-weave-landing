import { Users, Building, Sparkles, X, Check } from "lucide-react";

export const ComparisonSection = () => {
  return (
    <section id="why-us" className="py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Why 300+ Companies Choose{" "}
            <span className="gradient-text animate-gradient">UsergyAI</span>
          </h2>
          <p className="text-lg text-muted-foreground">(And Never Look Back)</p>
        </div>

        {/* Comparison Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Column 1: Crowd Platforms */}
          <div className="glassmorphic bg-card border border-destructive/30 rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-bold">Crowd Platforms</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span>Unvetted workers</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span>Inconsistent quality</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span>No accountability</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span>Generic solutions</span>
              </li>
            </ul>
          </div>

          {/* Column 2: In-House Teams */}
          <div className="glassmorphic bg-card border border-border rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <Building className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold">In-House Teams</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span>Expensive to scale</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span>Limited expertise</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span>Slow to recruit</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span>High overhead</span>
              </li>
            </ul>
          </div>

          {/* Column 3: UsergyAI */}
          <div className="sm:col-span-2 lg:col-span-1 glassmorphic bg-gradient-to-br from-accent/5 to-secondary/5 border-2 border-accent rounded-3xl p-6 sm:p-8 relative overflow-hidden group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold gradient-text">UsergyAI ✨</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Rigorously vetted experts</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-medium">99.5%+ guaranteed accuracy</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Scales instantly</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Managed end-to-end</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Enterprise security</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-medium">One partner, one invoice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
