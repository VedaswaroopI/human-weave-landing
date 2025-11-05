import { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  type: "dot" | "document" | "circle" | "chart" | "bracket" | "checkmark" | "node" | "line" | "plus" | "cross" | "triangle";
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  rotation: number;
  layer: number;
}

export const FloatingElements = () => {
  const [elements] = useState<FloatingElement[]>(() => {
    const items: FloatingElement[] = [];
    const colors = ["hsl(4 100% 75%)", "hsl(237 51% 35%)", "hsl(162 100% 43%)"];
    const types: Array<"dot" | "document" | "circle" | "chart" | "bracket" | "checkmark" | "node" | "line" | "plus" | "cross" | "triangle"> = 
      ["dot", "document", "circle", "chart", "bracket", "checkmark", "node", "line", "plus", "cross", "triangle"];
    
    // Generate 50 floating elements with 3 speed layers
    for (let i = 0; i < 50; i++) {
      const layer = i % 3; // 0 = slow, 1 = medium, 2 = fast
      let duration: number;
      
      if (layer === 0) duration = Math.random() * 2 + 5; // 5-7s (slow)
      else if (layer === 1) duration = Math.random() * 3 + 7; // 7-10s (medium)
      else duration = Math.random() * 5 + 10; // 10-15s (fast)
      
      items.push({
        id: i,
        type: types[i % types.length],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 25 + 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 5,
        duration,
        rotation: Math.random() * 360,
        layer,
      });
    }
    return items;
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.15] dark:opacity-[0.30]">
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
                opacity="0.25"
                className="animate-float"
                style={{
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`,
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
                  opacity="0.3"
                />
              </g>
            );
          }

          if (element.type === "chart") {
            return (
              <g key={element.id} className="animate-float" style={{
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`,
              }}>
                <rect x={`${element.x}%`} y={`${element.y + 10}%`} width="3" height="10" fill={element.color} opacity="0.3" />
                <rect x={`${element.x + 1}%`} y={`${element.y + 5}%`} width="3" height="15" fill={element.color} opacity="0.3" />
                <rect x={`${element.x + 2}%`} y={`${element.y}%`} width="3" height="20" fill={element.color} opacity="0.3" />
              </g>
            );
          }

          if (element.type === "bracket") {
            return (
              <path
                key={element.id}
                d={`M ${element.x}% ${element.y}% Q ${element.x + 1}% ${element.y + 1}% ${element.x}% ${element.y + 2}%`}
                stroke={element.color}
                strokeWidth="1.5"
                fill="none"
                opacity="0.25"
                className="animate-float"
                style={{
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`,
                }}
              />
            );
          }

          if (element.type === "checkmark") {
            return (
              <path
                key={element.id}
                d={`M ${element.x}% ${element.y + 1}% L ${element.x + 0.5}% ${element.y + 1.5}% L ${element.x + 1.5}% ${element.y}%`}
                stroke={element.color}
                strokeWidth="2"
                fill="none"
                opacity="0.3"
                className="animate-float"
                style={{
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`,
                }}
              />
            );
          }

          if (element.type === "node") {
            return (
              <g key={element.id} className="animate-float" style={{
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`,
              }}>
                <circle cx={`${element.x}%`} cy={`${element.y}%`} r="4" fill={element.color} opacity="0.4" />
                <circle cx={`${element.x}%`} cy={`${element.y}%`} r="8" fill="none" stroke={element.color} strokeWidth="1" opacity="0.2" />
              </g>
            );
          }

          if (element.type === "line") {
            return (
              <line
                key={element.id}
                x1={`${element.x}%`}
                y1={`${element.y}%`}
                x2={`${element.x + 2}%`}
                y2={`${element.y}%`}
                stroke={element.color}
                strokeWidth="2"
                opacity="0.25"
                className="animate-float"
                style={{
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`,
                }}
              />
            );
          }

          if (element.type === "plus") {
            return (
              <g key={element.id} className="animate-float" style={{
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`,
              }}>
                <line x1={`${element.x}%`} y1={`${element.y - 0.5}%`} x2={`${element.x}%`} y2={`${element.y + 0.5}%`} stroke={element.color} strokeWidth="2" opacity="0.3" />
                <line x1={`${element.x - 0.5}%`} y1={`${element.y}%`} x2={`${element.x + 0.5}%`} y2={`${element.y}%`} stroke={element.color} strokeWidth="2" opacity="0.3" />
              </g>
            );
          }

          if (element.type === "cross") {
            return (
              <g key={element.id} className="animate-float" style={{
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`,
              }}>
                <line x1={`${element.x - 0.5}%`} y1={`${element.y - 0.5}%`} x2={`${element.x + 0.5}%`} y2={`${element.y + 0.5}%`} stroke={element.color} strokeWidth="2" opacity="0.3" />
                <line x1={`${element.x + 0.5}%`} y1={`${element.y - 0.5}%`} x2={`${element.x - 0.5}%`} y2={`${element.y + 0.5}%`} stroke={element.color} strokeWidth="2" opacity="0.3" />
              </g>
            );
          }

          if (element.type === "triangle") {
            return (
              <path
                key={element.id}
                d={`M ${element.x}% ${element.y - 0.5}% L ${element.x + 0.5}% ${element.y + 0.5}% L ${element.x - 0.5}% ${element.y + 0.5}% Z`}
                fill="none"
                stroke={element.color}
                strokeWidth="1.5"
                opacity="0.25"
                className="animate-float"
                style={{
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`,
                }}
              />
            );
          }
          
          return null;
        })}
        
        {/* More connecting lines between nearby elements */}
        {elements.filter((_, i) => i < 15).map((element, idx) => {
          const nearbyElements = elements.filter((other, otherIdx) => {
            if (otherIdx <= idx) return false;
            const dx = other.x - element.x;
            const dy = other.y - element.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            return distance < 30; // Connect if within 30% distance
          });

          return nearbyElements.slice(0, 2).map((nearby, i) => (
            <line
              key={`connection-${element.id}-${i}`}
              x1={`${element.x}%`}
              y1={`${element.y}%`}
              x2={`${nearby.x}%`}
              y2={`${nearby.y}%`}
              stroke={element.color}
              strokeWidth="0.5"
              opacity="0.1"
              className="animate-pulse"
              style={{
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration * 2}s`,
              }}
            />
          ));
        })}
      </svg>
    </div>
  );
};
