export function SplineLoader() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-muted/30 via-background to-muted/30 dark:from-muted/10 dark:via-background dark:to-muted/10 rounded-2xl backdrop-blur-sm">
      {/* Animated gradient orbs */}
      <div className="relative w-24 h-24">
        <div 
          className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary via-primary to-accent opacity-20 animate-spin" 
          style={{ animationDuration: '3s' }}
        />
        <div 
          className="absolute inset-2 rounded-full bg-gradient-to-r from-secondary via-primary to-accent opacity-40 animate-spin" 
          style={{ animationDuration: '2s', animationDirection: 'reverse' }}
        />
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-secondary via-primary to-accent animate-pulse" />
      </div>
      
      {/* Loading text with bouncing dots */}
      <div className="text-center space-y-2">
        <p className="text-sm font-medium text-foreground animate-pulse">
          Loading 3D Experience
        </p>
        <div className="flex gap-1 justify-center">
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  );
}
