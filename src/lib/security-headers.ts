/**
 * Security headers and CSP configuration
 * These should ideally be configured on the server/hosting platform
 * But this file serves as documentation for required security headers
 */

export const SECURITY_HEADERS = {
  // Content Security Policy - prevents XSS attacks
  'Content-Security-Policy': `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://formspree.io https://calendly.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' data: https: blob:;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self' https://formspree.io https://api.calendly.com;
    frame-src 'self' https://calendly.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self' https://formspree.io;
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `.replace(/\s+/g, ' ').trim(),

  // Prevent clickjacking
  'X-Frame-Options': 'DENY',
  
  // Prevent MIME type sniffing
  'X-Content-Type-Options': 'nosniff',
  
  // Enable XSS protection in older browsers
  'X-XSS-Protection': '1; mode=block',
  
  // Control referrer information
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  
  // Permissions policy
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
  
  // HSTS - Force HTTPS (only enable in production)
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
};

/**
 * Instructions for implementing these headers:
 * 
 * For Vercel (vercel.json):
 * {
 *   "headers": [
 *     {
 *       "source": "/(.*)",
 *       "headers": [
 *         { "key": "X-Frame-Options", "value": "DENY" },
 *         { "key": "X-Content-Type-Options", "value": "nosniff" },
 *         ... (add all headers above)
 *       ]
 *     }
 *   ]
 * }
 * 
 * For Netlify (_headers file):
 * /*
 *   X-Frame-Options: DENY
 *   X-Content-Type-Options: nosniff
 *   ... (add all headers above)
 * 
 * For Cloudflare Pages (_headers file):
 * Same as Netlify
 * 
 * For Apache (.htaccess):
 * <IfModule mod_headers.c>
 *   Header set X-Frame-Options "DENY"
 *   Header set X-Content-Type-Options "nosniff"
 *   ... (add all headers above)
 * </IfModule>
 */

export const setupSecurityHeaders = () => {
  // This is a placeholder for documentation purposes
  // Actual implementation depends on hosting platform
  console.info('Security headers should be configured on the hosting platform');
  console.info('See src/lib/security-headers.ts for implementation instructions');
};
