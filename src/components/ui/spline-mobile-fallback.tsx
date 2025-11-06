'use client'

import { motion } from 'framer-motion';

export function SplineMobileFallback() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 rounded-2xl overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Character silhouette - animated */}
      <motion.div 
        className="relative z-10 w-48 h-64"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Head */}
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary/40 to-primary/20 rounded-full"
          animate={{ 
            y: [0, -5, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Body */}
        <motion.div 
          className="absolute top-16 left-1/2 -translate-x-1/2 w-20 h-32 bg-gradient-to-br from-primary/30 to-primary/10 rounded-3xl"
          animate={{ 
            scaleY: [1, 1.03, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Arms - waving motion */}
        <motion.div 
          className="absolute top-20 left-8 w-6 h-24 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-full origin-top"
          animate={{ 
            rotate: [12, 20, 12]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-20 right-8 w-6 h-24 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-full origin-top"
          animate={{ 
            rotate: [-12, -20, -12]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        {/* Legs */}
        <motion.div 
          className="absolute bottom-0 left-12 w-6 h-28 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full"
          animate={{ 
            scaleY: [1, 1.02, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-12 w-6 h-28 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full"
          animate={{ 
            scaleY: [1, 1.02, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        />
      </motion.div>
      
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Bottom text */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center px-4">
        <p className="text-xs text-muted-foreground/60">
          Full 3D experience available on desktop
        </p>
      </div>
    </div>
  );
}
