import { useEffect, useState, useRef } from "react";

interface FloatingElement {
  id: number;
  type: "dot" | "document" | "circle" | "chart" | "bracket" | "checkmark" | "node" | "line" | "plus" | "cross" | "triangle" | "brain" | "data" | "code" | "star";
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
  const svgRef = useRef<SVGSVGElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [elementOffsets, setElementOffsets] = useState<Map<number, { x: number; y: number }>>(new Map());

  const [elements] = useState<FloatingElement[]>(() => {
    const items: FloatingElement[] = [];
    const colors = ["hsl(4 100% 75%)", "hsl(237 51% 35%)", "hsl(162 100% 43%)"];
    const types: Array<"dot" | "document" | "circle" | "chart" | "bracket" | "checkmark" | "node" | "line" | "plus" | "cross" | "triangle" | "brain" | "data" | "code" | "star"> = 
      ["dot", "document", "circle", "chart", "bracket", "checkmark", "node", "line", "plus", "cross", "triangle", "brain", "data", "code", "star"];
    
    // Generate 50 floating elements with 3 speed layers
    for (let i = 0; i < 50; i++) {
      const layer = i % 3; // 0 = slow, 1 = medium, 2 = fast
      let duration: number;
      
      if (layer === 0) duration = Math.random() * 2 + 10; // 10-12s (slow)
      else if (layer === 1) duration = Math.random() * 3 + 7; // 7-10s (medium)
      else duration = Math.random() * 3 + 4; // 4-7s (fast)
      
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!svgRef.current) return;
      
      const rect = svgRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      setMousePos({ x: mouseX, y: mouseY });

      // Calculate repulsion offsets
      const newOffsets = new Map<number, { x: number; y: number }>();
      
      elements.forEach((element) => {
        const elementX = (element.x / 100) * rect.width;
        const elementY = (element.y / 100) * rect.height;
        
        const dx = elementX - mouseX;
        const dy = elementY - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150 && distance > 0) {
          // Apply repulsion force
          const force = (150 - distance) / 150; // Stronger when closer
          const angle = Math.atan2(dy, dx);
          const offsetX = Math.cos(angle) * force * 30; // Max 30px offset
          const offsetY = Math.sin(angle) * force * 30;
          
          newOffsets.set(element.id, { x: offsetX, y: offsetY });
        } else {
          newOffsets.set(element.id, { x: 0, y: 0 });
        }
      });
      
      setElementOffsets(newOffsets);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [elements]);

  const getElementTransform = (element: FloatingElement) => {
    const offset = elementOffsets.get(element.id) || { x: 0, y: 0 };
    return `translate(${offset.x}px, ${offset.y}px)`;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.18] dark:opacity-[0.30]">
      <svg ref={svgRef} className="w-full h-full">
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
          const transform = getElementTransform(element);
          
          if (element.type === "dot") {
            return (
              <circle
                key={element.id}
                cx={`${element.x}%`}
                cy={`${element.y}%`}
                r={element.size / 10}
                fill={element.color}
                filter="url(#glow)"
                className="animate-float transition-transform duration-300 ease-out"
                style={{
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`,
                  transform,
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
                className="animate-float transition-transform duration-300 ease-out"
                style={{
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`,
                  transform,
                }}
              />
            );
          }
          
          if (element.type === "circle") {
            return (
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={{
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`,
                  transform,
                }}
              >
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
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={{
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`,
                  transform,
                }}
              >
                <rect x={`${element.x}%`} y={`${element.y + 1}%`} width="3" height="10" fill={element.color} opacity="0.3" />
                <rect x={`${element.x + 0.5}%`} y={`${element.y + 0.5}%`} width="3" height="15" fill={element.color} opacity="0.3" />
                <rect x={`${element.x + 1}%`} y={`${element.y}%`} width="3" height="20" fill={element.color} opacity="0.3" />
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
                className="animate-float transition-transform duration-300 ease-out"
                style={{
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`,
                  transform,
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
                className="animate-float transition-transform duration-300 ease-out"
                style={{
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`,
                  transform,
                }}
              />
            );
          }

          if (element.type === "node") {
            return (
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={{
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`,
                  transform,
                }}
              >
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
                className="animate-float transition-transform duration-300 ease-out"
                style={{
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`,
                  transform,
                }}
              />
            );
          }

          if (element.type === "plus") {
            return (
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={{
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`,
                  transform,
                }}
              >
                <line x1={`${element.x}%`} y1={`${element.y - 0.5}%`} x2={`${element.x}%`} y2={`${element.y + 0.5}%`} stroke={element.color} strokeWidth="2" opacity="0.3" />
                <line x1={`${element.x - 0.5}%`} y1={`${element.y}%`} x2={`${element.x + 0.5}%`} y2={`${element.y}%`} stroke={element.color} strokeWidth="2" opacity="0.3" />
              </g>
            );
          }

          if (element.type === "cross") {
            return (
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={{
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`,
                  transform,
                }}
              >
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
                className="animate-float transition-transform duration-300 ease-out"
                style={{
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`,
                  transform,
                }}
              />
            );
          }

          if (element.type === "brain") {
            return (
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={{
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`,
                  transform,
                }}
              >
                <circle cx={`${element.x - 0.3}%`} cy={`${element.y}%`} r="5" fill="none" stroke={element.color} strokeWidth="1.5" opacity="0.3" />
                <circle cx={`${element.x + 0.3}%`} cy={`${element.y}%`} r="5" fill="none" stroke={element.color} strokeWidth="1.5" opacity="0.3" />
                <path d={`M ${element.x - 0.3}% ${element.y + 0.3}% Q ${element.x}% ${element.y + 0.5}% ${element.x + 0.3}% ${element.y + 0.3}%`} stroke={element.color} strokeWidth="1.5" fill="none" opacity="0.3" />
              </g>
            );
          }

          if (element.type === "data") {
            return (
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={{
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`,
                  transform,
                }}
              >
                <circle cx={`${element.x}%`} cy={`${element.y}%`} r="3" fill={element.color} opacity="0.5" />
                <circle cx={`${element.x - 0.5}%`} cy={`${element.y + 0.5}%`} r="2" fill={element.color} opacity="0.4" />
                <circle cx={`${element.x + 0.5}%`} cy={`${element.y + 0.5}%`} r="2" fill={element.color} opacity="0.4" />
                <line x1={`${element.x}%`} y1={`${element.y}%`} x2={`${element.x - 0.5}%`} y2={`${element.y + 0.5}%`} stroke={element.color} strokeWidth="1" opacity="0.3" />
                <line x1={`${element.x}%`} y1={`${element.y}%`} x2={`${element.x + 0.5}%`} y2={`${element.y + 0.5}%`} stroke={element.color} strokeWidth="1" opacity="0.3" />
              </g>
            );
          }

          if (element.type === "code") {
            return (
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={{
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`,
                  transform,
                }}
              >
                <path d={`M ${element.x - 0.5}% ${element.y}% L ${element.x - 0.8}% ${element.y + 0.3}% L ${element.x - 0.5}% ${element.y + 0.6}%`} stroke={element.color} strokeWidth="2" fill="none" opacity="0.3" />
                <path d={`M ${element.x + 0.5}% ${element.y}% L ${element.x + 0.8}% ${element.y + 0.3}% L ${element.x + 0.5}% ${element.y + 0.6}%`} stroke={element.color} strokeWidth="2" fill="none" opacity="0.3" />
              </g>
            );
          }

          if (element.type === "star") {
            return (
              <path
                key={element.id}
                d={`M ${element.x}% ${element.y - 0.4}% L ${element.x + 0.15}% ${element.y}% L ${element.x + 0.5}% ${element.y + 0.1}% L ${element.x + 0.2}% ${element.y + 0.35}% L ${element.x + 0.3}% ${element.y + 0.7}% L ${element.x}% ${element.y + 0.5}% L ${element.x - 0.3}% ${element.y + 0.7}% L ${element.x - 0.2}% ${element.y + 0.35}% L ${element.x - 0.5}% ${element.y + 0.1}% L ${element.x - 0.15}% ${element.y}% Z`}
                fill="none"
                stroke={element.color}
                strokeWidth="1.5"
                opacity="0.25"
                className="animate-float transition-transform duration-300 ease-out"
                style={{
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`,
                  transform,
                }}
              />
            );
          }
          
          return null;
        })}
        
        {/* Connecting lines between nearby elements */}
        {elements.filter((_, i) => i < 15).map((element, idx) => {
          const nearbyElements = elements.filter((other, otherIdx) => {
            if (otherIdx <= idx) return false;
            const dx = other.x - element.x;
            const dy = other.y - element.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            return distance < 30;
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
