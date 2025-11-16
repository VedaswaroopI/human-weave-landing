import { useEffect } from "react";

/**
 * Hook to update document title dynamically
 * Use as fallback for pages that don't use the SEO component
 */
export const usePageTitle = (title: string) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
};

/**
 * Generate breadcrumb structured data
 */
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
};

/**
 * Generate Service structured data
 */
export const generateServiceSchema = (
  name: string,
  description: string,
  url: string,
  features: string[]
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "provider": {
      "@type": "Organization",
      "name": "UsergyAI",
      "url": "https://usergy.ai",
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${name} Features`,
      "itemListElement": features.map((feature, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": feature,
        },
      })),
    },
  };
};

/**
 * Generate Article structured data for case studies
 */
export const generateArticleSchema = (
  title: string,
  description: string,
  url: string,
  imageUrl: string,
  publishedDate?: string,
  modifiedDate?: string
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "image": imageUrl,
    "author": {
      "@type": "Organization",
      "name": "UsergyAI",
      "url": "https://usergy.ai",
    },
    "publisher": {
      "@type": "Organization",
      "name": "UsergyAI",
      "url": "https://usergy.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://usergy.ai/og-logo.png",
      },
    },
    ...(publishedDate && { "datePublished": publishedDate }),
    ...(modifiedDate && { "dateModified": modifiedDate }),
  };
};

/**
 * Generate LocalBusiness structured data
 */
export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "UsergyAI",
    "description": "Expert human network powering AI with data annotation, testing, and localization services.",
    "url": "https://usergy.ai",
    "telephone": "+91-80-XXXX-XXXX",
    "email": "hello@usergy.ai",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Brigade IRV Centre",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560103",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9716",
      "longitude": "77.5946",
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00",
    },
    "priceRange": "$$",
  };
};
