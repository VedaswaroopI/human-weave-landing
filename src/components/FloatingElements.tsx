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
    const colors = ["hsl(var(--secondary))", "hsl(var(--primary))", "hsl(var(--accent))"];
    const types: Array<"document" | "speechBubble" | "codeSnippet" | "translation" | "testDevice"> = 
      ["document", "speechBubble", "codeSnippet", "translation", "testDevice"];
    
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
    <div className="absolute inset-0 overflow-hidden pointer-events-none floating-illustrations opacity-[0.25] dark:opacity-[0.32]">
      <svg ref={svgRef} className="w-full h-full">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="docGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        
        {elements.map((element) => {
          const transform = getElementTransform(element);
          const baseStyle = {
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
            transform,
            color: 'hsl(var(--primary-foreground))',
          };
          
          // Document icon - clean, professional document with folded corner
          if (element.type === "document") {
            return (
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={baseStyle}
              >
                <path
                  d={`M ${element.x}% ${element.y}% 
                      h ${element.size * 0.8} 
                      v ${element.size * 1.2} 
                      h -${element.size * 0.8} 
                      z 
                      M ${element.x + 0.6}% ${element.y}% 
                      l ${element.size * 0.2} ${element.size * 0.2} 
                      h -${element.size * 0.2} 
                      z`}
                  fill={element.color}
                  stroke="white"
                  strokeWidth="1"
                  opacity="0.6"
                />
                <line x1={`${element.x + 0.15}%`} y1={`${element.y + 0.3}%`} x2={`${element.x + 0.65}%`} y2={`${element.y + 0.3}%`} stroke="white" strokeWidth="1" opacity="0.5" />
                <line x1={`${element.x + 0.15}%`} y1={`${element.y + 0.5}%`} x2={`${element.x + 0.65}%`} y2={`${element.y + 0.5}%`} stroke="white" strokeWidth="1" opacity="0.5" />
                <line x1={`${element.x + 0.15}%`} y1={`${element.y + 0.7}%`} x2={`${element.x + 0.5}%`} y2={`${element.y + 0.7}%`} stroke="white" strokeWidth="1" opacity="0.5" />
              </g>
            );
          }
          
          // Speech bubble - modern, rounded design
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
                  width={element.size * 1.3}
                  height={element.size * 0.9}
                  rx="8"
                  fill={element.color}
                  stroke="white"
                  strokeWidth="1"
                  opacity="0.6"
                />
                <path
                  d={`M ${element.x + 0.25}% ${element.y + 0.9}% 
                      L ${element.x + 0.15}% ${element.y + 1.15}% 
                      L ${element.x + 0.4}% ${element.y + 0.9}% Z`}
                  fill={element.color}
                  opacity="0.6"
                />
                <circle cx={`${element.x + 0.25}%`} cy={`${element.y + 0.4}%`} r="2" fill="white" opacity="0.7" />
                <circle cx={`${element.x + 0.5}%`} cy={`${element.y + 0.4}%`} r="2" fill="white" opacity="0.7" />
                <circle cx={`${element.x + 0.75}%`} cy={`${element.y + 0.4}%`} r="2" fill="white" opacity="0.7" />
              </g>
            );
          }
          
          // Code snippet - clean brackets and slash design
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
                  width={element.size * 1.5}
                  height={element.size * 1.1}
                  rx="6"
                  fill={element.color}
                  stroke="white"
                  strokeWidth="1"
                  opacity="0.5"
                />
                <path 
                  d={`M ${element.x + 0.25}% ${element.y + 0.25}% 
                      L ${element.x + 0.15}% ${element.y + 0.5}% 
                      L ${element.x + 0.25}% ${element.y + 0.75}%`} 
                  stroke="white" 
                  strokeWidth="2.5" 
                  fill="none" 
                  strokeLinecap="round"
                  opacity="0.8" 
                />
                <path 
                  d={`M ${element.x + 0.75}% ${element.y + 0.25}% 
                      L ${element.x + 0.85}% ${element.y + 0.5}% 
                      L ${element.x + 0.75}% ${element.y + 0.75}%`} 
                  stroke="white" 
                  strokeWidth="2.5" 
                  fill="none" 
                  strokeLinecap="round"
                  opacity="0.8" 
                />
                <line 
                  x1={`${element.x + 0.55}%`} 
                  y1={`${element.y + 0.2}%`} 
                  x2={`${element.x + 0.45}%`} 
                  y2={`${element.y + 0.8}%`} 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  opacity="0.8" 
                />
              </g>
            );
          }
          
          // Globe/translation icon - detailed world design
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
                  strokeWidth="2.5"
                  opacity="0.7"
                />
                <ellipse 
                  cx={`${element.x}%`} 
                  cy={`${element.y}%`} 
                  rx={element.size / 4} 
                  ry={element.size / 2} 
                  fill="none" 
                  stroke={element.color} 
                  strokeWidth="2" 
                  opacity="0.6" 
                />
                <ellipse 
                  cx={`${element.x}%`} 
                  cy={`${element.y}%`} 
                  rx={element.size / 2} 
                  ry={element.size / 4} 
                  fill="none" 
                  stroke={element.color} 
                  strokeWidth="2" 
                  opacity="0.6" 
                />
                <line 
                  x1={`${element.x}%`} 
                  y1={`${element.y - element.size / 2}%`} 
                  x2={`${element.x}%`} 
                  y2={`${element.y + element.size / 2}%`} 
                  stroke={element.color} 
                  strokeWidth="2" 
                  opacity="0.6" 
                />
              </g>
            );
          }
          
          // Mobile device - sleek smartphone design
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
                  width={element.size * 0.65}
                  height={element.size * 1.2}
                  rx="4"
                  fill={element.color}
                  stroke="white"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <rect 
                  x={`${element.x + 0.05}%`} 
                  y={`${element.y + 0.12}%`} 
                  width={element.size * 0.55} 
                  height={element.size * 0.8} 
                  rx="2" 
                  fill="white" 
                  opacity="0.5" 
                />
                <line 
                  x1={`${element.x + 0.25}%`} 
                  y1={`${element.y + 0.05}%`} 
                  x2={`${element.x + 0.4}%`} 
                  y2={`${element.y + 0.05}%`} 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  opacity="0.4" 
                />
                <circle 
                  cx={`${element.x + 0.325}%`} 
                  cy={`${element.y + 1.05}%`} 
                  r="2.5" 
                  fill="white" 
                  opacity="0.5" 
                />
              </g>
            );
          }
          
          // Checkmark - bold, clear quality badge
          if (element.type === "checkmark") {
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
                  fill={element.color} 
                  stroke="white"
                  strokeWidth="1.5"
                  opacity="0.6" 
                />
                <path
                  d={`M ${element.x - 0.25}% ${element.y}% 
                      L ${element.x - 0.05}% ${element.y + 0.25}% 
                      L ${element.x + 0.3}% ${element.y - 0.25}%`}
                  stroke="white"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.9"
                />
              </g>
            );
          }
          
          // User avatar - professional profile icon
          if (element.type === "userAvatar") {
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
                  fill={element.color} 
                  stroke="white"
                  strokeWidth="1.5"
                  opacity="0.6" 
                />
                <circle 
                  cx={`${element.x}%`} 
                  cy={`${element.y - 0.1}%`} 
                  r={element.size / 5} 
                  fill="white" 
                  opacity="0.8" 
                />
                <path 
                  d={`M ${element.x - 0.3}% ${element.y + 0.35}% 
                      Q ${element.x}% ${element.y + 0.15}% 
                      ${element.x + 0.3}% ${element.y + 0.35}%`} 
                  fill="white" 
                  opacity="0.8" 
                />
              </g>
            );
          }
          
          // Chart bar - analytics visualization
          if (element.type === "chartBar") {
            return (
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={baseStyle}
              >
                <rect 
                  x={`${element.x - 0.1}%`} 
                  y={`${element.y + 0.55}%`} 
                  width="5" 
                  height="13" 
                  rx="2.5" 
                  fill={element.color} 
                  opacity="0.5" 
                />
                <rect 
                  x={`${element.x + 0.25}%`} 
                  y={`${element.y + 0.35}%`} 
                  width="5" 
                  height="18" 
                  rx="2.5" 
                  fill={element.color} 
                  opacity="0.65" 
                />
                <rect 
                  x={`${element.x + 0.6}%`} 
                  y={`${element.y + 0.15}%`} 
                  width="5" 
                  height="24" 
                  rx="2.5" 
                  fill={element.color} 
                  opacity="0.8" 
                />
              </g>
            );
          }
          
          // Translation icon - elegant language conversion
          if (element.type === "translation") {
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
                  height={element.size * 0.9} 
                  rx="6" 
                  fill={element.color} 
                  stroke="white"
                  strokeWidth="1"
                  opacity="0.6" 
                />
                <text 
                  x={`${element.x + 0.2}%`} 
                  y={`${element.y + 0.55}%`} 
                  fontSize="12" 
                  fill="white" 
                  opacity="0.9" 
                  fontWeight="700"
                  fontFamily="Arial, sans-serif"
                >
                  A
                </text>
                <path 
                  d={`M ${element.x + 0.55}% ${element.y + 0.3}% 
                      L ${element.x + 0.75}% ${element.y + 0.45}% 
                      L ${element.x + 0.55}% ${element.y + 0.6}%`} 
                  stroke="white" 
                  strokeWidth="2" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.7" 
                />
                <text 
                  x={`${element.x + 0.9}%`} 
                  y={`${element.y + 0.55}%`} 
                  fontSize="11" 
                  fill="white" 
                  opacity="0.9" 
                  fontWeight="700"
                  fontFamily="Arial, sans-serif"
                >
                  語
                </text>
              </g>
            );
          }
          
          // Annotation tool - comment/feedback marker
          if (element.type === "annotation") {
            return (
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={baseStyle}
              >
                <rect 
                  x={`${element.x}%`} 
                  y={`${element.y}%`} 
                  width={element.size * 1.1} 
                  height={element.size * 0.8} 
                  rx="3" 
                  fill="none" 
                  stroke={element.color} 
                  strokeWidth="2" 
                  strokeDasharray="4,3" 
                  opacity="0.6" 
                />
                <circle 
                  cx={`${element.x + 0.9}%`} 
                  cy={`${element.y - 0.15}%`} 
                  r="4" 
                  fill={element.color} 
                  stroke="white"
                  strokeWidth="1.5"
                  opacity="0.7" 
                />
                <line 
                  x1={`${element.x + 0.9}%`} 
                  y1={`${element.y - 0.15}%`} 
                  x2={`${element.x + 1.05}%`} 
                  y2={`${element.y - 0.4}%`} 
                  stroke={element.color} 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  opacity="0.7" 
                />
              </g>
            );
          }
          
          // Test device - desktop/laptop monitor
          if (element.type === "testDevice") {
            return (
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={baseStyle}
              >
                <rect 
                  x={`${element.x}%`} 
                  y={`${element.y}%`} 
                  width={element.size * 1.3} 
                  height={element.size * 0.9} 
                  rx="3" 
                  fill={element.color} 
                  stroke="white"
                  strokeWidth="1.5"
                  opacity="0.6" 
                />
                <rect 
                  x={`${element.x + 0.05}%`} 
                  y={`${element.y + 0.08}%`} 
                  width={element.size * 1.2} 
                  height={element.size * 0.65} 
                  rx="1" 
                  fill="white" 
                  opacity="0.5" 
                />
                <rect 
                  x={`${element.x + 0.5}%`} 
                  y={`${element.y + 0.9}%`} 
                  width={element.size * 0.3} 
                  height="3" 
                  rx="1.5" 
                  fill={element.color} 
                  opacity="0.6" 
                />
                <circle 
                  cx={`${element.x + 0.15}%`} 
                  cy={`${element.y + 0.15}%`} 
                  r="1.5" 
                  fill={element.color} 
                  opacity="0.7" 
                />
              </g>
            );
          }
          
          // Data point/node - network connection hub
          if (element.type === "dataPoint") {
            return (
              <g 
                key={element.id} 
                className="animate-float transition-transform duration-300 ease-out" 
                style={baseStyle}
              >
                <circle 
                  cx={`${element.x}%`} 
                  cy={`${element.y}%`} 
                  r="5" 
                  fill={element.color} 
                  opacity="0.7" 
                />
                <circle 
                  cx={`${element.x}%`} 
                  cy={`${element.y}%`} 
                  r="9" 
                  fill="none" 
                  stroke={element.color} 
                  strokeWidth="2" 
                  opacity="0.4" 
                />
                <circle 
                  cx={`${element.x}%`} 
                  cy={`${element.y}%`} 
                  r="13" 
                  fill="none" 
                  stroke={element.color} 
                  strokeWidth="1.5" 
                  opacity="0.25" 
                />
              </g>
            );
          }
          
          return null;
        })}
        
      </svg>
    </div>
  );
};
