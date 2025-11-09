/**
 * Shared TypeScript types and interfaces
 */

// Cookie Consent Types
export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  timestamp?: string;
  version?: string;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

// Spline Types
export interface SplineSceneProps {
  scene: string;
  className?: string;
  onLoad?: () => void;
}

// Analytics Types
export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp: number;
}

// Error Types
export interface ErrorDetails {
  message: string;
  code?: string;
  field?: string;
  statusCode?: number;
}

// Network Connection Types
export interface NetworkInformation {
  effectiveType?: '2g' | 'slow-2g' | '3g' | '4g';
  downlink?: number;
  rtt?: number;
  saveData?: boolean;
}

// Component Props Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

// Navigation Types
export interface NavItem {
  name: string;
  url: string;
  icon?: React.ComponentType<IconProps>;
  external?: boolean;
}

// Case Study Types (extends from case-studies-db.tsx)
export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudyLayoutProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  heroMetrics?: Metric[];
  challengeTitle: string;
  challengeContent: React.ReactNode;
  solutionTitle: string;
  solutionContent: React.ReactNode;
  resultsTitle: string;
  resultsContent: React.ReactNode;
  impactTitle?: string;
  impactContent?: React.ReactNode;
  showHeroImagePlaceholder?: boolean;
  showChallengeImagePlaceholder?: boolean;
  showResultsImagePlaceholder?: boolean;
}
