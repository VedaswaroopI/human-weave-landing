import { useEffect } from 'react';

/**
 * SkipLinks component for improved screen reader accessibility
 * Provides keyboard users quick navigation to main content areas
 */
export const SkipLinks = () => {
  return (
    <nav aria-label="Skip links" className="sr-only focus-within:not-sr-only">
      <ul className="fixed top-0 left-0 z-[9999] flex gap-2 p-4 bg-background border-b border-border">
        <li>
          <a
            href="#main-content"
            className="inline-block px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Skip to main content
          </a>
        </li>
        <li>
          <a
            href="#navigation"
            className="inline-block px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Skip to navigation
          </a>
        </li>
        <li>
          <a
            href="#footer"
            className="inline-block px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Skip to footer
          </a>
        </li>
      </ul>
    </nav>
  );
};
