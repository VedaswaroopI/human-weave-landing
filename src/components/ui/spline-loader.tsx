export function SplineLoader() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 rounded-2xl overflow-hidden">
      {/* Animated character silhouette placeholder */}
      <div className="relative w-48 h-64 md:w-64 md:h-80 animate-pulse">
        {/* Head */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-sm" />
        
        {/* Body */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-20 h-32 md:w-24 md:h-40 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-sm" />
        
        {/* Arms */}
        <div className="absolute top-20 left-8 w-6 h-24 md:w-8 md:h-32 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-full blur-sm rotate-12" />
        <div className="absolute top-20 right-8 w-6 h-24 md:w-8 md:h-32 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-full blur-sm -rotate-12" />
        
        {/* Legs */}
        <div className="absolute bottom-0 left-12 w-6 h-28 md:w-8 md:h-36 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full blur-sm" />
        <div className="absolute bottom-0 right-12 w-6 h-28 md:w-8 md:h-36 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full blur-sm" />
      </div>
      
      {/* Ambient glow effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Loading indicator - subtle, bottom corner */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 text-xs text-muted-foreground">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span className="opacity-60">Loading 3D</span>
      </div>
    </div>
  );
}
