/**
 * Input sanitization utilities
 * Provides functions to sanitize and validate user inputs
 */

/**
 * Sanitize text input by removing potentially dangerous characters
 * and limiting length
 */
export const sanitizeText = (input: string, maxLength: number = 1000): string => {
  if (!input) return '';
  
  // Remove any HTML tags
  let sanitized = input.replace(/<[^>]*>/g, '');
  
  // Remove any script-like content
  sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Trim whitespace
  sanitized = sanitized.trim();
  
  // Limit length
  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength);
  }
  
  return sanitized;
};

/**
 * Sanitize email input
 */
export const sanitizeEmail = (email: string): string => {
  if (!email) return '';
  
  // Basic email sanitization - remove dangerous characters
  return email
    .toLowerCase()
    .trim()
    .replace(/[<>'"]/g, '')
    .substring(0, 255);
};

/**
 * Validate and sanitize URL
 */
export const sanitizeUrl = (url: string): string => {
  if (!url) return '';
  
  try {
    const parsed = new URL(url);
    // Only allow http and https protocols
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      return '';
    }
    return parsed.toString();
  } catch {
    return '';
  }
};

/**
 * Create a rate limiter for form submissions
 * Prevents spam by limiting submissions per time window
 */
export class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private maxAttempts: number;
  private windowMs: number;

  constructor(maxAttempts: number = 3, windowMs: number = 60000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  /**
   * Check if the identifier (e.g., email or IP) is rate limited
   */
  isLimited(identifier: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(identifier) || [];
    
    // Filter out old attempts outside the time window
    const recentAttempts = attempts.filter(time => now - time < this.windowMs);
    
    if (recentAttempts.length >= this.maxAttempts) {
      return true;
    }
    
    // Add current attempt
    recentAttempts.push(now);
    this.attempts.set(identifier, recentAttempts);
    
    return false;
  }

  /**
   * Get time until rate limit resets (in seconds)
   */
  getResetTime(identifier: string): number {
    const attempts = this.attempts.get(identifier);
    if (!attempts || attempts.length === 0) return 0;
    
    const oldestAttempt = Math.min(...attempts);
    const resetTime = oldestAttempt + this.windowMs;
    const now = Date.now();
    
    if (resetTime <= now) return 0;
    
    return Math.ceil((resetTime - now) / 1000);
  }

  /**
   * Clear rate limit for an identifier
   */
  clear(identifier: string): void {
    this.attempts.delete(identifier);
  }
}

/**
 * Generate a simple CSRF-like token for client-side validation
 * Note: This is not a replacement for server-side CSRF protection
 */
export const generateClientToken = (): string => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 15);
  return btoa(`${timestamp}-${random}`);
};

/**
 * Validate a client token (basic time-based validation)
 */
export const validateClientToken = (token: string, maxAgeMs: number = 3600000): boolean => {
  try {
    const decoded = atob(token);
    const [timestampStr] = decoded.split('-');
    const timestamp = parseInt(timestampStr, 10);
    
    if (isNaN(timestamp)) return false;
    
    const now = Date.now();
    const age = now - timestamp;
    
    return age >= 0 && age <= maxAgeMs;
  } catch {
    return false;
  }
};
