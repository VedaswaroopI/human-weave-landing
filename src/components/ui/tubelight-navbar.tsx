"use client"

import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function TubelightNavbar({ items, className }: NavBarProps) {
  const location = useLocation()
  
  // Determine initial active tab based on current route
  const getInitialActiveTab = () => {
    const currentItem = items.find(item => {
      if (item.url.startsWith('/')) {
        return location.pathname === item.url || location.pathname.startsWith(item.url + '/')
      }
      return false
    })
    return currentItem?.name || ''
  }
  
  const [activeTab, setActiveTab] = useState(getInitialActiveTab())
  const [isMobile, setIsMobile] = useState(false)
  
  // Update active tab when route changes
  useEffect(() => {
    const currentItem = items.find(item => {
      if (item.url.startsWith('/')) {
        return location.pathname === item.url || location.pathname.startsWith(item.url + '/')
      }
      return false
    })
    if (currentItem) {
      setActiveTab(currentItem.name)
    } else {
      setActiveTab('')
    }
  }, [location.pathname, items])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => {
        const element = document.querySelector(item.url)
        if (element) {
          const rect = element.getBoundingClientRect()
          return {
            name: item.name,
            top: rect.top,
            bottom: rect.bottom
          }
        }
        return null
      }).filter(Boolean)

      const current = sections.find(section => 
        section && section.top <= 100 && section.bottom > 100
      )

      if (current) {
        setActiveTab(current.name)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [items])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    // Check if it's a hash link (starts with #)
    if (item.url.startsWith('#')) {
      e.preventDefault()
      setActiveTab(item.name)
      const element = document.querySelector(item.url)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // For non-hash links (like /solutions), let Link component handle it
      setActiveTab(item.name)
    }
  }

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {items.map((item) => {
        const Icon = item.icon
        const isActive = activeTab === item.name
        const isHashLink = item.url.startsWith('#')

        const linkContent = (
          <>
            <span className="relative z-10">{item.name}</span>
            {isActive && (
              <motion.div
                layoutId="tubelight"
                className="absolute inset-0 w-full bg-muted rounded-full -z-0"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
              />
            )}
          </>
        )

        if (isHashLink) {
          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => handleClick(e, item)}
              className={cn(
                "relative cursor-pointer text-sm font-medium px-5 py-2 rounded-full transition-colors",
                "hover:text-secondary",
                isActive ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {linkContent}
            </a>
          )
        } else {
          return (
            <Link
              key={item.name}
              to={item.url}
              onClick={(e) => handleClick(e as any, item)}
              className={cn(
                "relative cursor-pointer text-sm font-medium px-5 py-2 rounded-full transition-colors",
                "hover:text-secondary",
                isActive ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {linkContent}
            </Link>
          )
        }
      })}
    </div>
  )
}
