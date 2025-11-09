# Security Implementation Guide

This document outlines the security measures implemented in the UsergyAI application and provides guidance for production deployment.

## Implemented Security Measures

### 1. Input Validation & Sanitization

**Location:** `src/lib/sanitize.ts`, `src/pages/Contact.tsx`

- **Enhanced Zod Schema Validation:**
  - Name: 2-100 characters, alphanumeric with spaces, hyphens, apostrophes only
  - Email: Valid email format, max 255 characters, lowercase normalized
  - Company: Max 100 characters (optional)
  - Message: 10-2000 characters

- **Input Sanitization:**
  - `sanitizeText()`: Removes HTML tags, scripts, limits length
  - `sanitizeEmail()`: Normalizes and removes dangerous characters
  - All inputs are sanitized before sending to external services

### 2. Rate Limiting

**Location:** `src/lib/sanitize.ts` (RateLimiter class)

- **Client-Side Rate Limiting:**
  - Max 3 submissions per 60 seconds per email address
  - Prevents form spam and abuse
  - User-friendly error messages with countdown timer

**Production Recommendation:**
- Implement server-side rate limiting (e.g., using Cloudflare, API Gateway, or Express middleware)
- Example: `express-rate-limit` for Node.js backend

### 3. CSRF Protection

**Current Status:** ⚠️ Partial Implementation

- **Client-Side Token:** `generateClientToken()` creates time-based tokens
- **Limitation:** Formspree handles form submissions, so full CSRF protection requires their built-in security

**Production Recommendation:**
If migrating to own backend:
```typescript
// Example with express-csrf
import csrf from 'csurf';
app.use(csrf({ cookie: true }));
```

### 4. Environment Variables

**Location:** `.env.example`, `.env.development`

- **Sensitive Data Protection:**
  - Formspree endpoint moved to `VITE_FORMSPREE_ENDPOINT`
  - Component tagger controlled via `VITE_DISABLE_TAGGER`
  - Never commit actual `.env` file to version control
  - Use hosting platform's environment variable management

**Setup:**
```bash
cp .env.example .env
# Edit .env and add your actual endpoint and settings
```

**Development Settings:**
- `.env.development` controls development-specific features
- Component tagger can be disabled to improve preview performance

### 5. Storage Security

**Location:** `src/utils/safeStorage.ts`, `src/components/CookieConsent.tsx`

- **Safe Storage Utilities:**
  - `safeStorage` wrapper prevents SSR errors and handles quota exceeded gracefully
  - Try-catch protection for all localStorage/sessionStorage operations
  - Prevents app crashes from storage-related errors
  
- **Enhanced Cookie Consent:**
  - Uses `safeStorage` for robust preference persistence
  - Validates cookie preference structure before loading
  - Prevents tampering by validating data types
  - Includes timestamp and version for future migrations
  - Graceful error handling for corrupted data

- **Error Boundary:**
  - "Reset App Storage" button clears localStorage, sessionStorage, and IndexedDB
  - Helps users recover from storage-related errors
  - Detailed error messages in development mode

**Note:** Cookie consent preferences are non-sensitive and appropriate for localStorage. For sensitive data, use httpOnly cookies set by backend.

### 6. Security Headers

**Location:** `src/lib/security-headers.ts`

**Headers to Configure (on hosting platform):**

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://formspree.io; ...
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

**Implementation Instructions:**

#### Vercel (`vercel.json`):
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

#### Netlify (`_headers` file in public/):
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

#### Cloudflare Pages (`_headers` file):
Same as Netlify

## Production Deployment Checklist

### Critical (Must-Do)

- [ ] Configure security headers on hosting platform
- [ ] Set up environment variables for sensitive data
- [ ] Enable HTTPS (required for HSTS and security headers)
- [x] Console logs removed in production build (configured in vite.config.ts)
- [ ] Implement server-side rate limiting (if using own backend)
- [ ] Add CAPTCHA for contact form (recommended: hCaptcha or reCAPTCHA)

### Recommended

- [ ] Set up Content Security Policy (CSP) reporting endpoint
- [ ] Implement proper error logging (e.g., Sentry, LogRocket)
- [ ] Add Web Application Firewall (WAF) protection
- [ ] Enable DDoS protection (Cloudflare, AWS Shield)
- [ ] Regular security audits and dependency updates
- [ ] Implement subresource integrity (SRI) for CDN assets

### Formspree-Specific Security

- [ ] Enable reCAPTCHA on Formspree dashboard
- [ ] Set up email notification rate limits
- [ ] Configure allowed domains in Formspree settings
- [ ] Review Formspree's spam protection settings

## Remaining Vulnerabilities & Mitigations

### 1. No Server-Side Validation
**Risk:** Client-side validation can be bypassed
**Current Mitigation:** Formspree provides server-side validation
**Long-term Solution:** Implement own backend with server-side validation

### 2. Limited CSRF Protection
**Risk:** Cross-site request forgery (mitigated by Formspree's same-origin policy)
**Current Mitigation:** Client-side tokens, Formspree's built-in protection
**Long-term Solution:** Implement CSRF tokens when migrating to own backend

### 3. No CAPTCHA
**Risk:** Automated spam submissions
**Current Mitigation:** Client-side rate limiting, Formspree's spam filter
**Recommended:** Enable CAPTCHA on Formspree or add hCaptcha/reCAPTCHA

## Security Incident Response

1. **If form spam occurs:**
   - Enable CAPTCHA on Formspree dashboard
   - Reduce rate limit threshold in `src/lib/sanitize.ts`
   - Block IP addresses via hosting platform

2. **If XSS vulnerability discovered:**
   - Audit all user input rendering points
   - Ensure `sanitizeText()` is applied everywhere
   - Never use `dangerouslySetInnerHTML`

3. **If sensitive data exposed:**
   - Rotate all API keys and secrets immediately
   - Review environment variable configuration
   - Check version control history for committed secrets

## Contact for Security Issues

For security vulnerabilities, please contact: connect@usergy.ai

## References

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Formspree Security](https://help.formspree.io/hc/en-us/articles/360056076314-Security)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
