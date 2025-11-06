"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollDirection } from "@/hooks/use-scroll-direction"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function TubelightNavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)
  const scrollDirection = useScrollDirection()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => {
        const element = document.querySelector(item.url);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            name: item.name,
            top: rect.top,
            bottom: rect.bottom
          };
        }
        return null;
      }).filter(Boolean);

      const currentSection = sections.find(section => 
        section && section.top <= 150 && section.bottom >= 150
      );

      if (currentSection) {
        setActiveTab(currentSection.name);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  return (
    <AnimatePresence>
      <motion.div
        className={cn(
          "fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-6 transition-all duration-300",
          className,
        )}
        initial={{ y: 0 }}
        animate={{ y: scrollDirection === 'down' ? -100 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="flex items-center gap-3 bg-background/80 dark:bg-background/60 border border-border/50 dark:border-border/30 backdrop-blur-xl py-1 px-1 rounded-full shadow-xl">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            const handleNavClick = (e: React.MouseEvent) => {
              e.preventDefault();
              setActiveTab(item.name);
              
              const element = document.querySelector(item.url);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
              
              // Haptic feedback for mobile
              if ('vibrate' in navigator && window.innerWidth < 768) {
                navigator.vibrate(10);
              }
            };

            return (
              <a
                key={item.name}
                href={item.url}
                onClick={handleNavClick}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-all duration-200",
                  "text-foreground/80 hover:text-primary hover:scale-105",
                  isActive && "bg-muted text-primary scale-105",
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 dark:bg-primary/10 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    {/* Tubelight glow effect */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary dark:bg-primary/80 rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 dark:bg-primary/30 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 dark:bg-primary/30 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 dark:bg-primary/30 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </a>
            )
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
