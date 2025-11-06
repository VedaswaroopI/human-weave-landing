export function SplineLoader() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-muted/30 dark:bg-muted/10">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-t-primary rounded-full animate-spin"></div>
      </div>
      <p className="text-sm text-muted-foreground animate-pulse">
        Loading 3D Experience...
      </p>
    </div>
  );
}
