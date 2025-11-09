import { FC } from "react";

interface CharacterProps {
  type: "data-anna" | "tester-tom" | "linguist-leila" | "doctor-dan" | "researcher-rachel" | "engineer-erik";
  className?: string;
  animate?: boolean;
}

export const CharacterIllustration: FC<CharacterProps> = ({ type, className = "", animate = true }) => {
  const animations = animate ? "animate-float" : "";

  if (type === "data-anna") {
    return (
      <svg viewBox="0 0 200 200" className={`${className} ${animations}`} style={{ animationDelay: "0s" }} aria-hidden="true">
        {/* Head */}
        <circle cx="100" cy="60" r="28" fill="hsl(4 100% 75%)" />
        {/* Glasses */}
        <circle cx="90" cy="58" r="8" fill="none" stroke="hsl(237 51% 35%)" strokeWidth="2" />
        <circle cx="110" cy="58" r="8" fill="none" stroke="hsl(237 51% 35%)" strokeWidth="2" />
        <line x1="98" y1="58" x2="102" y2="58" stroke="hsl(237 51% 35%)" strokeWidth="2" />
        {/* Body */}
        <rect x="78" y="88" width="44" height="60" rx="12" fill="hsl(237 51% 35%)" />
        {/* Arms */}
        <line x1="78" y1="100" x2="55" y2="125" stroke="hsl(237 51% 35%)" strokeWidth="8" strokeLinecap="round" />
        <line x1="122" y1="100" x2="145" y2="125" stroke="hsl(237 51% 35%)" strokeWidth="8" strokeLinecap="round" />
        {/* Tablet */}
        <rect x="130" y="115" width="25" height="35" rx="3" fill="hsl(162 100% 43%)" />
        <line x1="135" y1="125" x2="150" y2="125" stroke="white" strokeWidth="1" />
        <line x1="135" y1="130" x2="145" y2="130" stroke="white" strokeWidth="1" />
        {/* Magnifying glass */}
        <circle cx="60" cy="130" r="10" fill="none" stroke="hsl(162 100% 43%)" strokeWidth="3" />
        <line x1="52" y1="138" x2="45" y2="145" stroke="hsl(162 100% 43%)" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "tester-tom") {
    return (
      <svg viewBox="0 0 200 200" className={`${className} ${animations}`} style={{ animationDelay: "0.3s" }} aria-hidden="true">
        {/* Head */}
        <circle cx="100" cy="60" r="28" fill="hsl(4 100% 75%)" />
        {/* Headphones */}
        <path d="M 72 60 Q 72 40, 100 40 Q 128 40, 128 60" stroke="hsl(162 100% 43%)" strokeWidth="4" fill="none" />
        <circle cx="72" cy="60" r="8" fill="hsl(162 100% 43%)" />
        <circle cx="128" cy="60" r="8" fill="hsl(162 100% 43%)" />
        {/* Body */}
        <rect x="78" y="88" width="44" height="60" rx="12" fill="hsl(237 51% 35%)" />
        {/* Arms */}
        <line x1="78" y1="100" x2="50" y2="130" stroke="hsl(237 51% 35%)" strokeWidth="8" strokeLinecap="round" />
        <line x1="122" y1="100" x2="150" y2="130" stroke="hsl(237 51% 35%)" strokeWidth="8" strokeLinecap="round" />
        {/* Devices */}
        <rect x="40" y="125" width="18" height="28" rx="3" fill="hsl(4 100% 75%)" />
        <rect x="142" y="125" width="18" height="28" rx="3" fill="hsl(162 100% 43%)" />
      </svg>
    );
  }

  if (type === "linguist-leila") {
    return (
      <svg viewBox="0 0 200 200" className={`${className} ${animations}`} style={{ animationDelay: "0.6s" }} aria-hidden="true">
        {/* Head */}
        <circle cx="100" cy="60" r="28" fill="hsl(4 100% 75%)" />
        {/* Body */}
        <rect x="78" y="88" width="44" height="60" rx="12" fill="hsl(237 51% 35%)" />
        {/* Arms */}
        <line x1="78" y1="100" x2="55" y2="120" stroke="hsl(237 51% 35%)" strokeWidth="8" strokeLinecap="round" />
        <line x1="122" y1="100" x2="145" y2="120" stroke="hsl(237 51% 35%)" strokeWidth="8" strokeLinecap="round" />
        {/* Speech bubbles */}
        <g className="animate-pulse" style={{ animationDuration: "2s" }}>
          <ellipse cx="140" cy="75" rx="20" ry="15" fill="hsl(162 100% 43%)" opacity="0.8" />
          <text x="135" y="80" fontSize="12" fill="white" fontWeight="bold">你好</text>
        </g>
        <g className="animate-pulse" style={{ animationDuration: "2s", animationDelay: "0.5s" }}>
          <ellipse cx="60" cy="85" rx="22" ry="16" fill="hsl(4 100% 75%)" opacity="0.8" />
          <text x="48" y="91" fontSize="12" fill="white" fontWeight="bold">Bonjour</text>
        </g>
        <g className="animate-pulse" style={{ animationDuration: "2s", animationDelay: "1s" }}>
          <ellipse cx="100" cy="30" rx="20" ry="15" fill="hsl(237 75% 70%)" opacity="0.8" />
          <text x="87" y="35" fontSize="12" fill="white" fontWeight="bold">مرحبا</text>
        </g>
      </svg>
    );
  }

  if (type === "doctor-dan") {
    return (
      <svg viewBox="0 0 200 200" className={`${className} ${animations}`} style={{ animationDelay: "0.9s" }} aria-hidden="true">
        {/* Head */}
        <circle cx="100" cy="60" r="28" fill="hsl(4 100% 75%)" />
        {/* Surgical cap */}
        <path d="M 72 50 Q 100 45, 128 50 L 128 60 L 72 60 Z" fill="hsl(162 100% 43%)" />
        {/* Body (scrubs) */}
        <rect x="78" y="88" width="44" height="60" rx="12" fill="hsl(162 100% 43%)" />
        {/* Arms */}
        <line x1="78" y1="100" x2="50" y2="120" stroke="hsl(162 100% 43%)" strokeWidth="8" strokeLinecap="round" />
        <line x1="122" y1="100" x2="150" y2="125" stroke="hsl(162 100% 43%)" strokeWidth="8" strokeLinecap="round" />
        {/* Medical chart */}
        <rect x="135" y="115" width="25" height="30" rx="2" fill="white" />
        <line x1="140" y1="125" x2="155" y2="125" stroke="hsl(237 51% 35%)" strokeWidth="1" />
        <line x1="140" y1="130" x2="155" y2="130" stroke="hsl(237 51% 35%)" strokeWidth="1" />
        <line x1="140" y1="135" x2="150" y2="135" stroke="hsl(237 51% 35%)" strokeWidth="1" />
        {/* Stethoscope */}
        <path d="M 50 120 Q 60 110, 70 105" stroke="hsl(237 51% 35%)" strokeWidth="3" fill="none" />
        <circle cx="70" cy="105" r="4" fill="hsl(237 51% 35%)" />
      </svg>
    );
  }

  if (type === "researcher-rachel") {
    return (
      <svg viewBox="0 0 200 200" className={`${className} ${animations}`} style={{ animationDelay: "1.2s" }} aria-hidden="true">
        {/* Head */}
        <circle cx="100" cy="60" r="28" fill="hsl(4 100% 75%)" />
        {/* Body */}
        <rect x="78" y="88" width="44" height="60" rx="12" fill="hsl(237 51% 35%)" />
        {/* Arms */}
        <line x1="78" y1="100" x2="55" y2="130" stroke="hsl(237 51% 35%)" strokeWidth="8" strokeLinecap="round" />
        <line x1="122" y1="100" x2="145" y2="115" stroke="hsl(237 51% 35%)" strokeWidth="8" strokeLinecap="round" />
        {/* Book */}
        <rect x="130" y="105" width="30" height="40" rx="2" fill="hsl(162 100% 43%)" />
        <line x1="145" y1="105" x2="145" y2="145" stroke="white" strokeWidth="2" />
        <line x1="135" y1="115" x2="155" y2="115" stroke="white" strokeWidth="1" />
        <line x1="135" y1="120" x2="155" y2="120" stroke="white" strokeWidth="1" />
        {/* Coffee cup */}
        <rect x="45" y="125" width="15" height="18" rx="2" fill="hsl(4 100% 75%)" />
        <ellipse cx="52" cy="125" rx="8" ry="3" fill="hsl(4 100% 75%)" />
        <path d="M 60 130 Q 65 130, 65 135 Q 65 140, 60 140" stroke="hsl(4 100% 75%)" strokeWidth="2" fill="none" />
      </svg>
    );
  }

  // engineer-erik
  return (
    <svg viewBox="0 0 200 200" className={`${className} ${animations}`} style={{ animationDelay: "1.5s" }} aria-hidden="true">
      {/* Head */}
      <circle cx="100" cy="60" r="28" fill="hsl(4 100% 75%)" />
      {/* Body */}
      <rect x="78" y="88" width="44" height="60" rx="12" fill="hsl(237 51% 35%)" />
      {/* Arms */}
      <line x1="78" y1="100" x2="50" y2="125" stroke="hsl(237 51% 35%)" strokeWidth="8" strokeLinecap="round" />
      <line x1="122" y1="100" x2="150" y2="125" stroke="hsl(237 51% 35%)" strokeWidth="8" strokeLinecap="round" />
      {/* AI Nodes/Blocks */}
      <g>
        <rect x="40" y="115" width="20" height="20" rx="3" fill="hsl(162 100% 43%)" />
        <circle cx="50" cy="125" r="3" fill="white" />
        <rect x="140" y="115" width="20" height="20" rx="3" fill="hsl(4 100% 75%)" />
        <circle cx="150" cy="125" r="3" fill="white" />
        {/* Connecting lines */}
        <line x1="60" y1="125" x2="140" y2="125" stroke="hsl(162 100% 43%)" strokeWidth="2" strokeDasharray="4,4" />
      </g>
    </svg>
  );
};
