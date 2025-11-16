export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export interface StructuredDataOrganization {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string;
  description: string;
  address?: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    "@type": string;
    contactType: string;
    email: string;
  };
  sameAs?: string[];
}

const SITE_URL = "https://usergy.ai";
const DEFAULT_IMAGE = `${SITE_URL}/og-image-default.jpg`;

export const defaultSEO: SEOConfig = {
  title: "UsergyAI - 300,000+ Humans Powering Your AI Breakthrough",
  description: "Transform your AI vision into reality with 99.5%+ accuracy. From expert data annotation to global testing across 150+ languages. Enterprise security, one partner.",
  keywords: "AI data annotation, human in the loop AI, AI training data, quality assurance testing, multilingual localization, content moderation services",
  image: DEFAULT_IMAGE,
  url: SITE_URL,
  type: "website",
};

export const organizationSchema: StructuredDataOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "UsergyAI",
  url: SITE_URL,
  logo: `${SITE_URL}/og-logo.png`,
  description: "Expert human network powering AI with 99.5%+ accuracy through data annotation, testing, and localization in 150+ languages.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Brigade IRV Centre",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560103",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Business Inquiries",
    email: "hello@usergy.ai",
  },
  sameAs: [
    "https://twitter.com/UsergyAI",
    "https://www.linkedin.com/company/usergyai",
  ],
};

export const pageSEO: Record<string, SEOConfig> = {
  home: {
    title: "UsergyAI - 300,000+ Humans Powering Your AI Breakthrough",
    description: "Transform your AI vision into reality with 99.5%+ accuracy. From expert data annotation to global testing across 150+ languages. Enterprise security, one partner.",
    keywords: "AI data annotation services, human in the loop AI, AI training data, quality assurance testing, multilingual localization services, AI content moderation",
    image: DEFAULT_IMAGE,
    url: SITE_URL,
    type: "website",
  },
  whyUs: {
    title: "Why UsergyAI - Expert Human Network for AI Excellence",
    description: "Discover why leading AI companies trust UsergyAI for data annotation, QA testing, and localization. 300,000+ experts, 99.5% accuracy, enterprise security.",
    keywords: "AI service provider, data annotation experts, quality assurance professionals, human in the loop, AI training specialists",
    image: DEFAULT_IMAGE,
    url: `${SITE_URL}/why-us`,
    type: "website",
  },
  contact: {
    title: "Contact UsergyAI - Start Your AI Project Today",
    description: "Get in touch with UsergyAI to discuss your AI data annotation, QA testing, or localization needs. Enterprise-grade support for AI leaders.",
    keywords: "contact AI services, AI project consultation, data annotation inquiry, quality assurance quote",
    image: DEFAULT_IMAGE,
    url: `${SITE_URL}/contact`,
    type: "website",
  },
  projectsBoard: {
    title: "Active Projects - Join UsergyAI's Global Contributor Network",
    description: "Explore current AI data collection and annotation projects. Get paid to contribute to cutting-edge AI development. Remote opportunities worldwide.",
    keywords: "AI jobs, data annotation jobs, remote AI work, AI contributor opportunities, paid AI projects",
    image: DEFAULT_IMAGE,
    url: `${SITE_URL}/projects-board`,
    type: "website",
  },
  solutionsLanding: {
    title: "AI Solutions - Data Annotation, QA Testing & Localization Services",
    description: "Comprehensive AI services: expert data annotation, multilingual QA testing, content moderation, localization in 150+ languages, and enterprise BPO solutions.",
    keywords: "AI solutions, data annotation services, QA testing services, localization services, content moderation, enterprise BPO",
    image: `${SITE_URL}/og-image-solutions.jpg`,
    url: `${SITE_URL}/solutions`,
    type: "website",
  },
  caseStudies: {
    title: "Case Studies - Real Results from AI Industry Leaders",
    description: "Discover how UsergyAI helped leading companies achieve 99.5%+ accuracy in AI projects across healthcare, automotive, e-commerce, finance, and more.",
    keywords: "AI case studies, data annotation success stories, AI implementation results, machine learning case studies",
    image: `${SITE_URL}/og-image-case-studies.jpg`,
    url: `${SITE_URL}/case-studies`,
    type: "website",
  },
  dataServices: {
    title: "AI Data Annotation Services - 99.5% Accuracy Guarantee",
    description: "Expert data annotation for images, video, text, and audio. Domain specialists ensure precision for your AI models. Image labeling, NLP annotation, speech transcription.",
    keywords: "data annotation services, image annotation, video labeling, text annotation, NLP annotation, audio transcription, data labeling",
    image: `${SITE_URL}/og-image-solutions.jpg`,
    url: `${SITE_URL}/solutions/data-services`,
    type: "article",
  },
  qualityAssurance: {
    title: "AI Quality Assurance Testing - Human-Centered QA Services",
    description: "Comprehensive AI and software QA testing by real users. Functional testing, localization QA in 150+ languages, AI model validation. Find bugs automation misses.",
    keywords: "AI quality assurance, QA testing services, software testing, localization QA, AI model testing, functional testing, usability testing",
    image: `${SITE_URL}/og-image-solutions.jpg`,
    url: `${SITE_URL}/solutions/quality-assurance`,
    type: "article",
  },
  contentModeration: {
    title: "AI Content Moderation Services - Human + AI Hybrid Approach",
    description: "Protect your platform with expert human moderators and AI-powered content moderation. Handle nuance, context, and cultural sensitivity at scale.",
    keywords: "content moderation services, AI content moderation, human moderators, platform safety, community moderation, trust and safety",
    image: `${SITE_URL}/og-image-solutions.jpg`,
    url: `${SITE_URL}/solutions/content-moderation`,
    type: "article",
  },
  multilingual: {
    title: "Multilingual Localization Services - 150+ Languages Supported",
    description: "Global localization and testing services across 150+ languages. Cultural adaptation, linguistic QA, and market-specific testing for worldwide AI deployment.",
    keywords: "multilingual localization, translation services, localization testing, language QA, global testing, cultural adaptation",
    image: `${SITE_URL}/og-image-solutions.jpg`,
    url: `${SITE_URL}/solutions/multilingual`,
    type: "article",
  },
  enterpriseBPO: {
    title: "Enterprise BPO Services India - AI-Powered Business Process Outsourcing",
    description: "Scalable BPO solutions combining human expertise with AI efficiency. Data processing, customer support, back-office operations. Bengaluru-based with global delivery.",
    keywords: "enterprise BPO services, business process outsourcing India, AI BPO, data processing services, customer support outsourcing",
    image: `${SITE_URL}/og-image-solutions.jpg`,
    url: `${SITE_URL}/solutions/enterprise-bpo`,
    type: "article",
  },
  researchInsights: {
    title: "Market Research & User Insights Services - Data-Driven Intelligence",
    description: "Deep market research and user insights for AI products. User testing, surveys, focus groups, and behavioral analysis to inform your AI development.",
    keywords: "market research services, user research, user insights, user testing, market intelligence, consumer research",
    image: `${SITE_URL}/og-image-solutions.jpg`,
    url: `${SITE_URL}/solutions/research-insights`,
    type: "article",
  },
  privacyPolicy: {
    title: "Privacy Policy - UsergyAI Data Protection & Security",
    description: "Learn how UsergyAI protects your data with enterprise-grade security, GDPR compliance, and strict privacy policies.",
    keywords: "privacy policy, data protection, GDPR compliance, data security",
    image: DEFAULT_IMAGE,
    url: `${SITE_URL}/privacy-policy`,
    type: "website",
  },
  termsOfService: {
    title: "Terms of Service - UsergyAI Legal Agreement",
    description: "Review UsergyAI's terms of service, user agreements, and service level commitments for our AI annotation and testing services.",
    keywords: "terms of service, legal agreement, service terms, user agreement",
    image: DEFAULT_IMAGE,
    url: `${SITE_URL}/terms-of-service`,
    type: "website",
  },
  cookiePolicy: {
    title: "Cookie Policy - UsergyAI Cookie Usage & Preferences",
    description: "Understand how UsergyAI uses cookies to improve your experience and protect your privacy.",
    keywords: "cookie policy, cookies, privacy preferences, tracking",
    image: DEFAULT_IMAGE,
    url: `${SITE_URL}/cookie-policy`,
    type: "website",
  },
};

export const SITE_NAME = "UsergyAI";
export const TWITTER_HANDLE = "@UsergyAI";
