# Accessibility Guide

## Implemented Accessibility Features

### WCAG 2.1 AA Compliance

This application implements the following accessibility features to meet WCAG 2.1 Level AA standards:

### 1. Skip Links ✅

**Location:** `src/components/accessibility/SkipLinks.tsx`

Skip links allow keyboard and screen reader users to bypass repetitive content:
- Skip to main content
- Skip to navigation
- Skip to footer

**How it works:**
- Hidden by default with `sr-only` class
- Becomes visible when focused with keyboard (Tab key)
- Positioned at the top of the page with highest z-index

### 2. Semantic HTML & ARIA Landmarks ✅

**Implemented in:**
- `src/components/layouts/PageLayout.tsx` - `<main id="main-content" role="main">`
- `src/components/Header.tsx` - `<header role="banner">`, `<nav aria-label="Main navigation">`
- `src/components/Footer.tsx` - `<footer role="contentinfo">`

**Benefits:**
- Screen readers can navigate by landmarks
- Clear document structure
- Improved SEO

### 3. ARIA Labels on Interactive Elements ✅

**Updated components:**
- **Header navigation** - `aria-label="UsergyAI Home"`, `aria-label="Main navigation"`
- **Carousel controls** - `aria-label="Previous slide"`, `aria-label="Next slide"`
- **Buttons** - `aria-label` on all icon-only buttons
- **Links** - Descriptive labels on all links

**Pattern:**
```tsx
// Icon-only button
<button aria-label="Toggle menu">
  <Menu className="w-5 h-5" />
  <span className="sr-only">Toggle menu</span>
</button>

// Decorative icons
<ChevronDown className="w-6 h-6" aria-hidden="true" />
```

### 4. Keyboard Navigation ✅

**Carousel Component** (`src/components/ui/carousel.tsx`):
- ✅ Arrow keys navigate slides (Left/Right)
- ✅ `tabIndex={0}` makes carousel focusable
- ✅ Focus visible styles applied
- ✅ Disabled state on navigation buttons

**Focus Management:**
- All interactive elements receive visible focus indicators
- Custom focus styles in `src/index.css`:
  ```css
  *:focus-visible {
    @apply outline-none ring-2 ring-primary ring-offset-2;
  }
  ```

### 5. Color Contrast ✅

**Before:**
- Muted foreground: `240 10% 50%` (Contrast: ~3.1:1) ❌

**After:**
- Muted foreground: `240 15% 35%` (Contrast: ~4.6:1) ✅

**Location:** `src/index.css` line 37

**Verification:**
Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Target: Minimum 4.5:1 for normal text (WCAG AA)
- Target: Minimum 3:1 for large text (WCAG AA)

### 6. Reduced Motion Support ✅

**Location:** `src/index.css`

Respects user's motion preferences:
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Also implemented in `src/components/HeroWithSpline.tsx` - Framer Motion animations disabled when user prefers reduced motion.

## Accessibility Testing Checklist

### Automated Testing

Run these tools regularly:

1. **Lighthouse (Chrome DevTools)**
   ```
   - Open DevTools (F12)
   - Go to "Lighthouse" tab
   - Select "Accessibility"
   - Click "Generate report"
   Target: Score 90+
   ```

2. **axe DevTools**
   ```
   Install: https://www.deque.com/axe/devtools/
   Run in browser console
   Fix all Critical and Serious issues
   ```

3. **WAVE (Web Accessibility Evaluation Tool)**
   ```
   Browser extension: https://wave.webaim.org/extension/
   Check each major page
   Address all errors, review alerts
   ```

### Manual Testing

#### Keyboard Navigation Test

1. **Tab through entire page**
   - [ ] All interactive elements focusable
   - [ ] Focus order is logical
   - [ ] Focus indicators visible
   - [ ] No keyboard traps

2. **Test skip links**
   - [ ] Press Tab on page load
   - [ ] Skip links appear
   - [ ] Skip links work correctly

3. **Carousel navigation**
   - [ ] Tab to carousel
   - [ ] Arrow keys move slides
   - [ ] Enter/Space activates buttons

#### Screen Reader Test

**Windows:** NVDA (free)
**Mac:** VoiceOver (built-in, Cmd+F5)

1. **Navigate by landmarks**
   - [ ] Header, main, footer announced
   - [ ] Can jump between landmarks

2. **Form labels**
   - [ ] All form fields have labels
   - [ ] Error messages associated with fields

3. **Image alt text**
   - [ ] Decorative images have `aria-hidden="true"` or empty alt
   - [ ] Meaningful images have descriptive alt text

4. **Link text**
   - [ ] Links make sense out of context
   - [ ] No "click here" or "read more" without context

#### Color Contrast Test

Use browser extensions:
- [WCAG Color Contrast Checker](https://chrome.google.com/webstore/detail/wcag-color-contrast-check)
- Check all text, buttons, form inputs
- Verify both light and dark modes

## Common Accessibility Issues to Avoid

### ❌ Don't Do This

```tsx
// Missing label
<button onClick={handleClick}>
  <X />
</button>

// Generic link text
<a href="/case-studies">Click here</a>

// No alt text
<img src="hero.jpg" />

// Inaccessible color contrast
<p style={{ color: '#888', background: '#ddd' }}>Low contrast text</p>
```

### ✅ Do This Instead

```tsx
// Proper label
<button onClick={handleClick} aria-label="Close dialog">
  <X aria-hidden="true" />
  <span className="sr-only">Close</span>
</button>

// Descriptive link text
<a href="/case-studies">View our case studies</a>

// Descriptive alt text
<img src="hero.jpg" alt="Medical professional reviewing AI-annotated X-ray data" />

// Accessible colors
<p className="text-foreground bg-background">High contrast text</p>
```

## Accessibility Resources

### Official Guidelines
- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM (Web Accessibility in Mind)](https://webaim.org/)

### Testing Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [Color Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/)

### Screen Readers
- [NVDA (Windows, Free)](https://www.nvaccess.org/)
- [JAWS (Windows, Paid)](https://www.freedomscientific.com/products/software/jaws/)
- [VoiceOver (Mac/iOS, Built-in)](https://www.apple.com/accessibility/voiceover/)
- [TalkBack (Android, Built-in)](https://support.google.com/accessibility/android/answer/6283677)

### React-Specific
- [React Accessibility Docs](https://react.dev/learn/accessibility)
- [Radix UI Accessibility](https://www.radix-ui.com/primitives/docs/overview/accessibility)

## Continuous Monitoring

1. **Set up automated testing**
   - Add Lighthouse CI to build pipeline
   - Run axe-core in E2E tests

2. **Regular audits**
   - Monthly accessibility reviews
   - Test with actual screen readers
   - Gather feedback from users with disabilities

3. **Team training**
   - Educate developers on accessibility
   - Include accessibility in code reviews
   - Test with keyboard-only before shipping

## Legal Compliance

**Relevant Laws:**
- **ADA (Americans with Disabilities Act)** - US
- **Section 508** - US Federal websites
- **EAA (European Accessibility Act)** - EU
- **AODA (Accessibility for Ontarians with Disabilities Act)** - Canada

**Risk Mitigation:**
- Aim for WCAG 2.1 AA as minimum
- Document accessibility decisions
- Maintain audit trail
- Provide accessibility statement

## Contact

For accessibility issues or questions:
- Email: connect@usergy.ai
- Report issues: [GitHub Issues](link-to-repo)
