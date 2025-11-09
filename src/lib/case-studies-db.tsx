import { LucideIcon, Heart, Car, Globe, DollarSign, ShoppingCart, Gamepad, Brain, ShieldCheck, CalendarClock, BadgeCheck, Zap, TrendingUp, Users, CheckSquare } from "lucide-react";

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
  };
  solution: {
    headline: string;
    intro: string;
    steps: {
      icon: LucideIcon;
      title: string;
      description: string;
    }[];
  };
  results: {
    headline: string;
    body: string;
    keyStats: {
      value: string;
      label: string;
      icon: LucideIcon;
    }[];
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
    heroImage: "https://storage.googleapis.com/website_imagess/transcription",
    cardImage: "https://storage.googleapis.com/website_imagess/transcription",
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
    },
    impact: {
      headline: "On-Track Launch & A Foundation for Excellence",
      body: "The project remained on schedule, with the client's team reporting high confidence in their launch timeline. Early model training results showed superior performance, eliminating the costly rework that plagues typical transcription projects and protecting the client's go-to-market strategy. The partnership has since expanded to new languages."
    },
  },
  
  {
    slug: "healthcare-ai-diagnostics",
    industry: "Healthcare",
    tags: ["AI & Data", "Healthcare", "Computer Vision"],
    title: "Training an FDA-Approved AI Diagnostic Tool with 99.8% Accuracy",
    heroImage: "https://storage.googleapis.com/website_imagess/Medical%20annotation.png",
    cardImage: "https://storage.googleapis.com/website_imagess/Medical%20annotation.png",
    metricValue: "99.8%",
    metricLabel: "Annotation Accuracy",
    companyLogo: "/placeholder.svg",
    challenge: {
      headline: "The Stakes: Misdiagnosis is Not an Option",
      body: "A Fortune 500 healthcare company was developing a revolutionary AI diagnostic tool. To get FDA approval, their model had to be trained on data with near-perfect accuracy. A 1% error wasn't just a bug; it was a potential misdiagnosis. They needed 2 million medical images (MRIs, CT scans) annotated, but standard crowd-workers couldn't tell the difference between a benign shadow and a malignant tumor. They needed genuine medical professionals, and a 100% HIPAA-compliant workflow, all delivered in just 8 weeks."
    },
    solution: {
      headline: "A Managed Team of Doctors & A Fortress-Level Secure Platform",
      intro: "We didn't provide 'annotators.' We assembled a dedicated, managed team of board-certified radiologists and pathologists from our 300,000+ expert network. This team worked within our SOC 2 & HIPAA-compliant platform, ensuring total data security.",
      steps: [
        {
          icon: Heart,
          title: "Expert-Only Annotation",
          description: "Every single one of the 2 million images was annotated by a qualified medical doctor with specific domain expertise in diagnostic imaging."
        },
        {
          icon: ShieldCheck,
          title: "Multi-Layer Peer Review QA",
          description: "Our process mandated a dual-layer review. Every annotation was validated by a second, senior radiologist to eliminate any possibility of individual error or bias, guaranteeing the 'zero errors' requirement."
        },
        {
          icon: Brain,
          title: "HIPAA-Compliant Infrastructure",
          description: "All data processing occurred within our SOC 2 and HIPAA-certified platform, with end-to-end encryption and strict access controls."
        }
      ],
    },
    results: {
      headline: "Delivered: 2 Million Perfect Annotations in 8 Weeks",
      body: "By matching medical-grade expertise with a rigorous, parallel QA workflow, we delivered the complete, validated dataset on schedule, empowering the client to move to the next phase of their FDA submission with full confidence in their data foundation.",
      keyStats: [
        { value: "99.8%", label: "Annotation Accuracy", icon: ShieldCheck },
        { value: "2M", label: "Medical Images", icon: Brain },
        { value: "0", label: "Critical Errors", icon: BadgeCheck },
        { value: "8", label: "Week Delivery", icon: CalendarClock },
      ],
    },
    impact: {
      headline: "FDA Submission Accelerated, Model Outperforms Benchmarks",
      body: "The client's AI model, trained on this pristine, expert-validated dataset, surpassed all internal and external benchmarks for diagnostic accuracy. This not only accelerated their 'De Novo' submission to the FDA but also positioned them to be the first-to-market with a tool that could genuinely save lives."
    },
  },
  
  {
    slug: "autonomous-vehicle-ai",
    industry: "AI & Data",
    tags: ["Autonomous Vehicles", "Computer Vision", "LiDAR"],
    title: "Teaching AI to See: Powering a Leader in Autonomous Vehicles",
    heroImage: "https://storage.googleapis.com/website_imagess/Self-Driving%20AI%20annotation.png",
    cardImage: "https://storage.googleapis.com/website_imagess/Self-Driving%20AI%20annotation.png",
    metricValue: "5M+",
    metricLabel: "Images & 3D Frames Labeled",
    companyLogo: "/placeholder.svg",
    challenge: {
      headline: "A Single Pixel Can Be Catastrophic",
      body: "A top-tier autonomous vehicle company was stuck. Their perception models performed well in perfect weather, but failed on the 'edge cases' that define real-world driving: a blurry pedestrian in the rain, a deer at dusk, a partially occluded stop sign. Their model couldn't just be 'good'; it had to be safer than a human. They needed a partner who could provide millions of pixel-perfect 2D segmentations and, most critically, highly complex 3D LiDAR (point cloud) annotations that their existing vendors kept failing."
    },
    solution: {
      headline: "Specialist Teams Trained to Hunt for Edge Cases",
      intro: "This wasn't a task for a crowd. We assembled a dedicated, managed team of 200+ annotation specialists, trained specifically for AV perception systems. We treated this not as a 'labeling' job, but as a 'safety-critical' operation.",
      steps: [
        {
          icon: Car,
          title: "3D Point Cloud & Sensor Fusion",
          description: "Our team was trained on the client's proprietary tooling to perform complex 3D cuboid annotation on LiDAR data, fusing it with camera imagery to create a single, unified source of truth for the AI."
        },
        {
          icon: CheckSquare,
          title: "Pixel-Perfect Semantic Segmentation",
          description: "For 2D imagery, our specialists meticulously segmented every frame, differentiating between 'road,' 'sky,' 'pedestrian,' 'vehicle,' and 'lane marking' with near-perfect accuracy."
        },
        {
          icon: ShieldCheck,
          title: "Dedicated Edge Case QA",
          description: "A separate, senior QA team actively hunted for errors in the most difficult scenarios: night, fog, rain, and occlusion. This feedback loop ensured continuous improvement, not just output."
        }
      ],
    },
    results: {
      headline: "A 40% Jump in Perception Model Accuracy",
      body: "The client's AI, now trained on this hyper-accurate, edge-case-rich dataset, saw a dramatic improvement in its ability to perceive and react to complex driving scenarios. Our human-in-the-loop process provided the judgment that the AI needed to learn.",
      keyStats: [
        { value: "99.6%", label: "Annotation Accuracy", icon: ShieldCheck },
        { value: "5M+", label: "Images & LiDAR Frames", icon: Car },
        { value: "40%", label: "Model Accuracy Gain", icon: Brain },
        { value: "100%", label: "On-Time Delivery", icon: BadgeCheck },
      ],
    },
    impact: {
      headline: "Accelerating the Path to Level 4 Autonomy",
      body: "Our work directly translated to a measurable reduction in 'disengagements' during real-world test drives. By providing a reliable data foundation, we helped the client accelerate their R&D timeline, moving them significantly closer to their goal of deploying a fully autonomous, Level 4-capable vehicle fleet."
    },
  },
  
  {
    slug: "global-saas-localization",
    industry: "Multilingual",
    tags: ["Global SaaS", "Localization"],
    title: "Launching a SaaS Platform in 20 Markets Simultaneously",
    heroImage: "https://storage.googleapis.com/website_imagess/SaaS.png",
    cardImage: "https://storage.googleapis.com/website_imagess/SaaS.png",
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
    heroImage: "https://storage.googleapis.com/website_imagess/Crowd%20Testing.png",
    cardImage: "https://storage.googleapis.com/website_imagess/Crowd%20Testing.png",
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
