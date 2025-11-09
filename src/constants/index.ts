/**
 * Application-wide constants
 * Centralized location for all magic numbers and configuration values
 */

// Spline 3D Scene Configuration
export const SPLINE_CONFIG = {
  TIMEOUT_MS: 8000,
  LOAD_CHECK_INTERVAL_MS: 250,
  INTERSECTION_THRESHOLD: 0.3,
  SCENE_URL: 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode',
} as const;

// Performance Thresholds
export const PERFORMANCE = {
  MOBILE_BREAKPOINT: 768,
  DEBOUNCE_DELAY_MS: 300,
  ANIMATION_DURATION_MS: 300,
  SCROLL_THROTTLE_MS: 100,
} as const;

// Form Configuration
export const FORM_CONFIG = {
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 100,
  MAX_EMAIL_LENGTH: 255,
  MAX_COMPANY_LENGTH: 100,
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 2000,
} as const;

// Rate Limiting
export const RATE_LIMIT = {
  MAX_ATTEMPTS: 3,
  WINDOW_MS: 60000, // 1 minute
  RESET_DELAY_MS: 5000,
} as const;

// Animation Timings
export const ANIMATION = {
  STAGGER_DELAY_MS: 150,
  INITIAL_DELAY_MS: 200,
  FADE_DURATION_MS: 600,
  SCALE_DURATION_MS: 200,
  PULSE_ANIMATION_DELAY_MS: 700,
} as const;

// Cookie Consent
export const COOKIE_CONFIG = {
  BANNER_DELAY_MS: 1000,
  VERSION: '1.0',
  STORAGE_KEY: 'cookie-consent',
} as const;

// External URLs
export const EXTERNAL_URLS = {
  CALENDLY: 'https://calendly.com/swaroop-usergy/30min',
  EMAIL: 'mailto:connect@usergy.ai',
  WHATSAPP: 'https://wa.me/+917330703310',
  LINKEDIN: 'https://www.linkedin.com/company/usergy-ai',
} as const;

// Company Information
export const COMPANY = {
  NAME: 'UsergyAI',
  TAGLINE: 'The human insight behind AI\'s potential.',
  EMAIL: 'connect@usergy.ai',
  EXPERT_NETWORK_SIZE: '300,000+',
  ACCURACY_GUARANTEE: '99.5%',
} as const;

// Network Conditions
export const NETWORK = {
  SLOW_CONNECTIONS: ['2g', 'slow-2g'] as const,
  REDUCE_DATA_PREFERENCE: '(prefers-reduced-data: reduce)',
  REDUCE_MOTION_PREFERENCE: '(prefers-reduced-motion: reduce)',
} as const;

// Security Headers (for documentation)
export const SECURITY_HEADERS = {
  FRAME_OPTIONS: 'DENY',
  CONTENT_TYPE_OPTIONS: 'nosniff',
  XSS_PROTECTION: '1; mode=block',
  REFERRER_POLICY: 'strict-origin-when-cross-origin',
} as const;

// API Configuration
export const API = {
  // Add API endpoints when backend is implemented
  // BASE_URL: process.env.VITE_API_BASE_URL || 'http://localhost:3000',
} as const;

// Feature Flags
export const FEATURES = {
  ENABLE_SPLINE: true,
  ENABLE_ANALYTICS: false, // Set to true when analytics is configured
  ENABLE_ERROR_TRACKING: false, // Set to true when Sentry is configured
} as const;

// Z-Index Layers (to prevent conflicts)
export const Z_INDEX = {
  DROPDOWN: 50,
  STICKY: 100,
  MODAL_BACKDROP: 1000,
  MODAL: 1010,
  TOAST: 2000,
  TOOLTIP: 3000,
} as const;
