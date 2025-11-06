'use client'

const POSTER_URL = '/images/hero-spline-poster.webp';

export function SplineMobileFallback() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 rounded-2xl overflow-hidden">
      {/* Poster image */}
      <img 
        src={POSTER_URL}
        alt="3D Character Preview"
        className="w-full h-full object-cover opacity-90"
        loading="eager"
      />
      
      {/* Overlay with glass effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      
      {/* Caption */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center px-6">
        <div className="bg-background/60 backdrop-blur-md border border-border/50 rounded-lg px-4 py-2">
          <p className="text-xs text-muted-foreground">
            Full 3D experience available on desktop
          </p>
        </div>
      </div>
    </div>
  );
}

