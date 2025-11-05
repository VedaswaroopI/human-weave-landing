import { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  type: "dot" | "line" | "document" | "circle";
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  rotation: number;
}

export const FloatingElements = () => {
  const [elements] = useState<FloatingElement[]>(() => {
    const items: FloatingElement[] = [];
    const colors = ["hsl(4 100% 75%)", "hsl(237 51% 35%)", "hsl(162 100% 43%)"];
    
    // Generate random floating elements
    for (let i = 0; i < 25; i++) {
      items.push({
        id: i,
        type: i % 4 === 0 ? "document" : i % 4 === 1 ? "circle" : i % 4 === 2 ? "dot" : "line",
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 30 + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 5,
        duration: Math.random() * 5 + 5,
        rotation: Math.random() * 360,
      });
    }
    return items;
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
      <svg className="w-full h-full">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {elements.map((element) => {
          if (element.type === "dot") {
            return (
              <circle
                key={element.id}
                cx={`${element.x}%`}
                cy={`${element.y}%`}
                r={element.size / 10}
                fill={element.color}
                filter="url(#glow)"
                className="animate-float"
                style={{
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`,
                }}
              />
            );
          }
          
          if (element.type === "document") {
            return (
              <rect
                key={element.id}
                x={`${element.x}%`}
                y={`${element.y}%`}
                width={element.size}
                height={element.size * 1.4}
                rx="4"
                fill={element.color}
                opacity="0.3"
                className="animate-float"
                style={{
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`,
                  transformOrigin: "center",
                }}
              />
            );
          }
          
          if (element.type === "circle") {
            return (
              <g key={element.id} className="animate-float" style={{
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`,
              }}>
                <circle
                  cx={`${element.x}%`}
                  cy={`${element.y}%`}
                  r={element.size / 6}
                  fill="none"
                  stroke={element.color}
                  strokeWidth="1"
                  opacity="0.4"
                />
                <circle
                  cx={`${element.x}%`}
                  cy={`${element.y}%`}
                  r={element.size / 12}
                  fill={element.color}
                  opacity="0.3"
                />
              </g>
            );
          }
          
          return null;
        })}
        
        {/* Network connecting lines */}
        {elements.slice(0, 8).map((element, idx) => {
          if (idx < elements.length - 1) {
            const next = elements[idx + 1];
            return (
              <line
                key={`line-${element.id}`}
                x1={`${element.x}%`}
                y1={`${element.y}%`}
                x2={`${next.x}%`}
                y2={`${next.y}%`}
                stroke={element.color}
                strokeWidth="0.5"
                opacity="0.15"
                className="animate-pulse"
                style={{
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration * 2}s`,
                }}
              />
            );
          }
          return null;
        })}
      </svg>
    </div>
  );
};
