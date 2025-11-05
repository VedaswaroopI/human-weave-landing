import { useEffect, useState, useRef } from "react";

interface FloatingElement {
  id: number;
  type: "document" | "speechBubble" | "codeSnippet" | "globe" | "mobileDevice" | "checkmark" | "userAvatar" | "chartBar" | "translation" | "annotation" | "testDevice" | "dataPoint";
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
  const [scrollY, setScrollY] = useState(0);

  const [elements] = useState<FloatingElement[]>(() => {
    const items: FloatingElement[] = [];
    const colors = ["hsl(4 100% 75%)", "hsl(237 51% 35%)", "hsl(162 100% 43%)"];
    const types: Array<"document" | "speechBubble" | "codeSnippet" | "globe" | "mobileDevice" | "checkmark" | "userAvatar" | "chartBar" | "translation" | "annotation" | "testDevice" | "dataPoint"> = 
      ["document", "speechBubble", "codeSnippet", "globe", "mobileDevice", "checkmark", "userAvatar", "chartBar", "translation", "annotation", "testDevice", "dataPoint"];
    
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
        size: Math.random() * 20 + 12,
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
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

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
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [elements]);

  const getElementTransform = (element: FloatingElement) => {
    const offset = elementOffsets.get(element.id) || { x: 0, y: 0 };
    // Add parallax scroll effect based on layer
    const parallaxY = scrollY * (element.layer === 0 ? 0.1 : element.layer === 1 ? 0.2 : 0.3);
    return `translate(${offset.x}px, ${offset.y - parallaxY}px)`;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.22] dark:opacity-[0.30]">
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
          const baseStyle = {
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
            transform,
          };
          
          // Document icon
          if (element.type === "document") {
            return (
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={baseStyle}
              >
                <rect
                  x={`${element.x}%`}
                  y={`${element.y}%`}
                  width={element.size}
                  height={element.size * 1.3}
                  rx="3"
                  fill={element.color}
                  opacity="0.3"
                />
                <line x1={`${element.x + 0.2}%`} y1={`${element.y + 0.3}%`} x2={`${element.x + 0.8}%`} y2={`${element.y + 0.3}%`} stroke="white" strokeWidth="1.5" opacity="0.6" />
                <line x1={`${element.x + 0.2}%`} y1={`${element.y + 0.5}%`} x2={`${element.x + 0.8}%`} y2={`${element.y + 0.5}%`} stroke="white" strokeWidth="1.5" opacity="0.6" />
                <line x1={`${element.x + 0.2}%`} y1={`${element.y + 0.7}%`} x2={`${element.x + 0.6}%`} y2={`${element.y + 0.7}%`} stroke="white" strokeWidth="1.5" opacity="0.6" />
              </g>
            );
          }
          
          // Speech bubble
          if (element.type === "speechBubble") {
            return (
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={baseStyle}
              >
                <rect
                  x={`${element.x}%`}
                  y={`${element.y}%`}
                  width={element.size * 1.2}
                  height={element.size * 0.8}
                  rx="6"
                  fill={element.color}
                  opacity="0.3"
                />
                <path
                  d={`M ${element.x + 0.3}% ${element.y + 0.8}% L ${element.x + 0.2}% ${element.y + 1}% L ${element.x + 0.4}% ${element.y + 0.8}% Z`}
                  fill={element.color}
                  opacity="0.3"
                />
                <circle cx={`${element.x + 0.25}%`} cy={`${element.y + 0.35}%`} r="1.5" fill="white" opacity="0.5" />
                <circle cx={`${element.x + 0.5}%`} cy={`${element.y + 0.35}%`} r="1.5" fill="white" opacity="0.5" />
                <circle cx={`${element.x + 0.75}%`} cy={`${element.y + 0.35}%`} r="1.5" fill="white" opacity="0.5" />
              </g>
            );
          }
          
          // Code snippet
          if (element.type === "codeSnippet") {
            return (
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={baseStyle}
              >
                <rect
                  x={`${element.x}%`}
                  y={`${element.y}%`}
                  width={element.size * 1.4}
                  height={element.size}
                  rx="4"
                  fill={element.color}
                  opacity="0.25"
                />
                <path d={`M ${element.x + 0.2}% ${element.y + 0.3}% L ${element.x + 0.1}% ${element.y + 0.5}% L ${element.x + 0.2}% ${element.y + 0.7}%`} stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
                <path d={`M ${element.x + 0.7}% ${element.y + 0.3}% L ${element.x + 0.8}% ${element.y + 0.5}% L ${element.x + 0.7}% ${element.y + 0.7}%`} stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
                <line x1={`${element.x + 0.4}%`} y1={`${element.y + 0.25}%`} x2={`${element.x + 0.5}%`} y2={`${element.y + 0.75}%`} stroke="white" strokeWidth="1.5" opacity="0.6" />
              </g>
            );
          }
          
          // Globe/translation icon
          if (element.type === "globe") {
            return (
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={baseStyle}
              >
                <circle
                  cx={`${element.x}%`}
                  cy={`${element.y}%`}
                  r={element.size / 2}
                  fill="none"
                  stroke={element.color}
                  strokeWidth="2"
                  opacity="0.35"
                />
                <ellipse cx={`${element.x}%`} cy={`${element.y}%`} rx={element.size / 4} ry={element.size / 2} fill="none" stroke={element.color} strokeWidth="1.5" opacity="0.35" />
                <line x1={`${element.x - 0.4}%`} y1={`${element.y}%`} x2={`${element.x + 0.4}%`} y2={`${element.y}%`} stroke={element.color} strokeWidth="1.5" opacity="0.35" />
                <line x1={`${element.x}%`} y1={`${element.y - 0.4}%`} x2={`${element.x}%`} y2={`${element.y + 0.4}%`} stroke={element.color} strokeWidth="1.5" opacity="0.35" />
              </g>
            );
          }
          
          // Mobile device
          if (element.type === "mobileDevice") {
            return (
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={baseStyle}
              >
                <rect
                  x={`${element.x}%`}
                  y={`${element.y}%`}
                  width={element.size * 0.6}
                  height={element.size}
                  rx="3"
                  fill={element.color}
                  opacity="0.3"
                />
                <rect x={`${element.x + 0.05}%`} y={`${element.y + 0.1}%`} width={element.size * 0.5} height={element.size * 0.6} rx="1" fill="white" opacity="0.4" />
                <circle cx={`${element.x + 0.3}%`} cy={`${element.y + 0.85}%`} r="2" fill="white" opacity="0.4" />
              </g>
            );
          }
          
          // Checkmark
          if (element.type === "checkmark") {
            return (
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={baseStyle}
              >
                <circle cx={`${element.x}%`} cy={`${element.y}%`} r={element.size / 2} fill={element.color} opacity="0.25" />
                <path
                  d={`M ${element.x - 0.2}% ${element.y}% L ${element.x - 0.05}% ${element.y + 0.2}% L ${element.x + 0.25}% ${element.y - 0.2}%`}
                  stroke="white"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.7"
                />
              </g>
            );
          }
          
          // User avatar
          if (element.type === "userAvatar") {
            return (
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={baseStyle}
              >
                <circle cx={`${element.x}%`} cy={`${element.y}%`} r={element.size / 2} fill={element.color} opacity="0.3" />
                <circle cx={`${element.x}%`} cy={`${element.y - 0.1}%`} r={element.size / 6} fill="white" opacity="0.6" />
                <path d={`M ${element.x - 0.25}% ${element.y + 0.3}% Q ${element.x}% ${element.y + 0.15}% ${element.x + 0.25}% ${element.y + 0.3}%`} fill="white" opacity="0.6" />
              </g>
            );
          }
          
          // Chart bar
          if (element.type === "chartBar") {
            return (
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={baseStyle}
              >
                <rect x={`${element.x}%`} y={`${element.y + 0.5}%`} width="4" height="12" rx="2" fill={element.color} opacity="0.3" />
                <rect x={`${element.x + 0.25}%`} y={`${element.y + 0.3}%`} width="4" height="17" rx="2" fill={element.color} opacity="0.35" />
                <rect x={`${element.x + 0.5}%`} y={`${element.y + 0.15}%`} width="4" height="22" rx="2" fill={element.color} opacity="0.4" />
              </g>
            );
          }
          
          // Translation icon (A→语)
          if (element.type === "translation") {
            return (
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={baseStyle}
              >
                <rect x={`${element.x}%`} y={`${element.y}%`} width={element.size * 1.2} height={element.size * 0.8} rx="4" fill={element.color} opacity="0.25" />
                <text x={`${element.x + 0.15}%`} y={`${element.y + 0.5}%`} fontSize="10" fill="white" opacity="0.7" fontWeight="bold">A</text>
                <path d={`M ${element.x + 0.5}% ${element.y + 0.3}% L ${element.x + 0.7}% ${element.y + 0.4}%`} stroke="white" strokeWidth="1.5" opacity="0.5" />
                <text x={`${element.x + 0.75}%`} y={`${element.y + 0.5}%`} fontSize="9" fill="white" opacity="0.7" fontWeight="bold">語</text>
              </g>
            );
          }
          
          // Annotation tool
          if (element.type === "annotation") {
            return (
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={baseStyle}
              >
                <rect x={`${element.x}%`} y={`${element.y}%`} width={element.size} height={element.size * 0.7} rx="2" fill="none" stroke={element.color} strokeWidth="2" strokeDasharray="3,2" opacity="0.35" />
                <circle cx={`${element.x + 0.8}%`} cy={`${element.y - 0.1}%`} r="3" fill={element.color} opacity="0.4" />
                <path d={`M ${element.x + 0.8}% ${element.y - 0.1}% L ${element.x + 0.9}% ${element.y - 0.3}%`} stroke={element.color} strokeWidth="1.5" opacity="0.4" />
              </g>
            );
          }
          
          // Test device
          if (element.type === "testDevice") {
            return (
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={baseStyle}
              >
                <rect x={`${element.x}%`} y={`${element.y}%`} width={element.size * 1.2} height={element.size * 0.8} rx="3" fill={element.color} opacity="0.3" />
                <circle cx={`${element.x + 0.15}%`} cy={`${element.y + 0.15}%`} r="1.5" fill="white" opacity="0.5" />
                <rect x={`${element.x + 0.05}%`} y={`${element.y + 0.3}%`} width={element.size} height={element.size * 0.4} rx="1" fill="white" opacity="0.3" />
                <line x1={`${element.x + 0.85}%`} y1={`${element.y + 0.15}%`} x2={`${element.x + 1}%`} y2={`${element.y + 0.15}%`} stroke="white" strokeWidth="2" opacity="0.5" />
              </g>
            );
          }
          
          // Data point/node
          if (element.type === "dataPoint") {
            return (
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={baseStyle}
              >
                <circle cx={`${element.x}%`} cy={`${element.y}%`} r="4" fill={element.color} opacity="0.4" />
                <circle cx={`${element.x}%`} cy={`${element.y}%`} r="7" fill="none" stroke={element.color} strokeWidth="1.5" opacity="0.25" />
                <circle cx={`${element.x}%`} cy={`${element.y}%`} r="10" fill="none" stroke={element.color} strokeWidth="1" opacity="0.15" />
              </g>
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
