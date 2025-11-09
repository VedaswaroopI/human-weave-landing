import { LucideIcon, Heart, Car, Globe, DollarSign, ShoppingCart, Gamepad, Brain, ShieldCheck, CalendarClock, BadgeCheck, Zap, TrendingUp, Users } from "lucide-react";

export interface CaseStudy {
  slug: string;
  industry: string;
  tags: string[];
  title: string;
  heroImage: string;
  cardImage: string;
  metricValue: string;
  metricLabel: string;
  companyLogo?: string;
  challenge: {
    headline: string;
    body: string;
    imagePlaceholder?: string;
  };
  solution: {
    headline: string;
    intro: string;
    steps: {
      icon: LucideIcon;
      title: string;
      description: string;
    }[];
    imagePlaceholder?: string;
  };
  results: {
    headline: string;
    body: string;
    keyStats: {
      value: string;
      label: string;
      icon: LucideIcon;
    }[];
    imagePlaceholder?: string;
  };
  impact: {
    headline: string;
    body: string;
  };
}

export const allCaseStudies: CaseStudy[] = [
  {
    slug: "global-ai-transcription",
    industry: "AI & Data",
    tags: ["Voice AI", "Multilingual", "Data Services"],
    title: "Accelerating Global AI Through Precision Multilingual Transcription",
    heroImage: "https://images.unsplash.com/photo-1555949963-ff980847b864?w=1600&h=900&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1587740922316-c18ab41c6f71?w=600&h=400&fit=crop",
    metricValue: "5,000",
    metricLabel: "Hours Transcribed",
    companyLogo: "/placeholder.svg",
    challenge: {
      headline: "The Stakes: 5,000 Hours, 3 Languages, 0 Compromises",
      body: "A leading tech giant's new voice AI was struggling. They needed 5,000 hours of audio transcribed across Japanese, Chinese, and Korean. The catch? The complex linguistic nuances—dialects, tonal accuracy, and honorifics—could make or break the model's performance. Inaccurate data would corrupt the entire training process. Delays would mean missing their market launch. They needed a partner who could deliver perfection, at scale, yesterday."
    },
    solution: {
      headline: "A Managed Team of Native Linguists, Not a Crowd",
      intro: "We didn't just 'transcribe.' We deployed a proven framework combining native-speaking experts with enterprise-grade workflow management. This wasn't a job for gig workers; it was a mission for professionals.",
      steps: [
        {
          icon: Globe,
          title: "Expert Linguistic Assembly",
          description: "We handpicked native speakers from our 300,000+ community, specifically vetting them for regional dialect fluency and experience with transcription for AI training."
        },
        {
          icon: Brain,
          title: "Comprehensive Training & Guidelines",
          description: "Strict, language-specific guidelines were co-developed to handle background noise, overlapping speech, and technical terminology. All transcribers were trained before touching production audio."
        },
        {
          icon: ShieldCheck,
          title: "Human-in-the-Loop QA",
          description: "Every single transcription was reviewed by a second expert linguist. We embedded a dual-layer review process and real-time feedback loops to catch errors early and ensure consistency."
        }
      ],
    },
    results: {
      headline: "Results That Speak for Themselves",
      body: "We ran execution and QA in parallel, enabling a continuous improvement cycle that accelerated delivery while guaranteeing quality. The client received a flawless dataset, on time, every time.",
      keyStats: [
        { value: "99%", label: "Transcription Accuracy", icon: ShieldCheck },
        { value: "100+", label: "Hours Delivered Weekly", icon: CalendarClock },
        { value: "12", label: "Consecutive Weeks", icon: CalendarClock },
        { value: "0", label: "Delivery Delays", icon: BadgeCheck },
      ],
      imagePlaceholder: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop"
    },
    impact: {
      headline: "On-Track Launch & A Foundation for Excellence",
      body: "The project remained on schedule, with the client's team reporting high confidence in their launch timeline. Early model training results showed superior performance, eliminating the costly rework that plagues typical transcription projects and protecting the client's go-to-market strategy. The partnership has since expanded to new languages."
    },
  },
  
  {
    slug: "autonomous-vehicle-ai",
    industry: "AI & Data",
    tags: ["Autonomous Vehicles", "Computer Vision"],
    title: "Powering the Next Generation of Self-Driving AI",
    heroImage: "https://images.unsplash.com/photo-1503700022718-d7801a6d3605?w=1600&h=900&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1503700022718-d7801a6d3605?w=600&h=400&fit=crop",
    metricValue: "5M+",
    metricLabel: "Images Labeled",
    companyLogo: "/placeholder.svg",
    challenge: {
      headline: "Precision at 70mph: No Room for Error",
      body: "A leading autonomous vehicle manufacturer needed 5 million images annotated for their next-generation AI. Every pixel mattered—pedestrians, cyclists, road signs, lane markings. A single mislabeled object could mean the difference between a safe journey and a catastrophic failure. Traditional labeling services delivered inconsistent results and couldn't scale to their aggressive timeline."
    },
    solution: {
      headline: "Expert Annotators + Advanced QA Infrastructure",
      intro: "We assembled a specialized team of computer vision experts trained specifically on autonomous vehicle scenarios, backed by a multi-tier quality control system.",
      steps: [
        {
          icon: Car,
          title: "Domain-Specific Training",
          description: "Annotators were trained on edge cases: occluded objects, varying weather conditions, and complex urban environments."
        },
        {
          icon: ShieldCheck,
          title: "Three-Layer QA Process",
          description: "Every image underwent peer review, automated validation, and expert spot-checking before delivery."
        },
        {
          icon: Zap,
          title: "Rapid Scalability",
          description: "Our managed workforce scaled from 50 to 500 annotators in two weeks without sacrificing quality."
        }
      ],
    },
    results: {
      headline: "Industry-Leading Accuracy at Scale",
      body: "The client achieved record-breaking model performance, with their AI demonstrating superior object detection capabilities compared to competitors.",
      keyStats: [
        { value: "99.7%", label: "Annotation Accuracy", icon: ShieldCheck },
        { value: "5M+", label: "Images Labeled", icon: Zap },
        { value: "6", label: "Months to Completion", icon: CalendarClock },
        { value: "3x", label: "Faster Than In-House", icon: TrendingUp },
      ],
    },
    impact: {
      headline: "Market Leadership Through Superior Data",
      body: "The enhanced training data enabled the client to launch 6 months ahead of schedule, establishing market leadership in the competitive autonomous vehicle space. Their AI now operates in 15 cities worldwide."
    },
  },
  
  {
    slug: "global-saas-localization",
    industry: "Multilingual",
    tags: ["Global SaaS", "Localization"],
    title: "Launching a SaaS Platform in 20 Markets Simultaneously",
    heroImage: "https://images.unsplash.com/photo-1556761175-57019f0ff4c4?w=1600&h=900&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1556761175-57019f0ff4c4?w=600&h=400&fit=crop",
    metricValue: "150+",
    metricLabel: "Languages",
    companyLogo: "/placeholder.svg",
    challenge: {
      headline: "Go Global or Go Home: 20 Markets, One Deadline",
      body: "A fast-growing SaaS company had an ambitious goal: launch in 20 international markets simultaneously to beat competitors. They needed their entire platform—UI, documentation, support content, and marketing materials—localized into 20 languages. The challenge? Maintaining brand voice, technical accuracy, and cultural nuance across all markets while meeting an aggressive 90-day deadline."
    },
    solution: {
      headline: "Native Experts + Centralized Translation Management",
      intro: "We deployed regional translation teams of native speakers paired with a dedicated project manager to ensure consistency and on-time delivery across all languages.",
      steps: [
        {
          icon: Globe,
          title: "Regional Translation Hubs",
          description: "Native speakers in each target market handled translation, ensuring cultural relevance and local idioms."
        },
        {
          icon: ShieldCheck,
          title: "Brand Voice Guardians",
          description: "Specialized reviewers ensured consistent tone and terminology across all languages and content types."
        },
        {
          icon: Zap,
          title: "Agile Workflow Management",
          description: "Parallel workflows and real-time collaboration tools enabled rapid iteration without bottlenecks."
        }
      ],
    },
    results: {
      headline: "On-Time Global Launch with Zero Compromises",
      body: "All 20 language versions launched simultaneously, with user feedback praising the natural, culturally appropriate content.",
      keyStats: [
        { value: "20", label: "Markets Launched", icon: Globe },
        { value: "150K+", label: "Words Translated", icon: Zap },
        { value: "90", label: "Days to Launch", icon: CalendarClock },
        { value: "100%", label: "On-Time Delivery", icon: BadgeCheck },
      ],
    },
    impact: {
      headline: "3x International Revenue Growth in Year One",
      body: "The successful global launch enabled the client to capture market share in all 20 regions, with international revenue growing 3x in the first year. They've since expanded to 15 additional markets using the same proven process."
    },
  },
  
  {
    slug: "ecommerce-qa-testing",
    industry: "Quality Assurance",
    tags: ["E-commerce", "QA"],
    title: "Bug-Free Checkout: How Real Users Saved a 34% Conversion Lift",
    heroImage: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1600&h=900&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600&h=400&fit=crop",
    metricValue: "12K+",
    metricLabel: "Real Users",
    companyLogo: "/placeholder.svg",
    challenge: {
      headline: "Hidden Bugs Were Costing Millions in Lost Sales",
      body: "A major e-commerce platform was bleeding revenue. Their checkout flow had a 23% drop-off rate, but internal QA couldn't find the cause. Automated testing showed green lights, yet customers were abandoning carts at an alarming rate. They needed real human testers across devices, browsers, and payment methods to uncover the invisible friction points destroying conversions."
    },
    solution: {
      headline: "12,000 Real Users Testing Like Real Customers",
      intro: "We deployed a diverse community of 12,000+ testers representing actual customer demographics, testing the full purchase journey across hundreds of device and browser combinations.",
      steps: [
        {
          icon: Users,
          title: "Demographic Diversity",
          description: "Testers matched the client's actual customer base across age, location, and tech-savviness."
        },
        {
          icon: ShoppingCart,
          title: "Real-World Scenarios",
          description: "Testers performed complete purchase journeys including payment processing, not just clicking through flows."
        },
        {
          icon: ShieldCheck,
          title: "Comprehensive Coverage",
          description: "Testing across 200+ device/browser combinations and 15 payment methods revealed edge cases automated tests missed."
        }
      ],
    },
    results: {
      headline: "387 Critical Bugs Found, 34% Conversion Increase",
      body: "The testing uncovered 387 bugs, including 47 critical issues that were blocking purchases. After fixes were deployed, conversion rates jumped dramatically.",
      keyStats: [
        { value: "387", label: "Bugs Identified", icon: ShieldCheck },
        { value: "47", label: "Critical Issues", icon: BadgeCheck },
        { value: "34%", label: "Conversion Increase", icon: TrendingUp },
        { value: "12K+", label: "Real Testers", icon: Users },
      ],
    },
    impact: {
      headline: "$8.2M Additional Annual Revenue",
      body: "The 34% conversion lift translated to $8.2 million in additional annual revenue. The client now runs quarterly crowd testing cycles before every major release, preventing costly bugs from reaching production."
    },
  },
];

export const getIndustries = () => {
  const industries = allCaseStudies.map(study => study.industry);
  return ["All", ...Array.from(new Set(industries))];
};
