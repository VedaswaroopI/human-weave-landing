import { LucideIcon, Briefcase, MapPin, Calendar, CheckSquare } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  startDate: string;
  location: string;
  requirements: string[];
  applyUrl: string;
  icon: LucideIcon;
}

export const allProjects: Project[] = [
  {
    id: "p1",
    title: "SafeAtHome: Elderly Activity Recording",
    description: "Help build an AI dataset that improves smart home safety devices for seniors. Capture short video clips of daily activities with a household member aged 65+. Simple smartphone recording, fixed angle setup.",
    startDate: "Starting Soon",
    location: "Remote (Global)",
    requirements: ["Household member aged 65+", "1080p capable smartphone/camera", "Access to living room, kitchen & bedroom"],
    applyUrl: "https://forms.usergy.ai/project-safeathome",
    icon: Briefcase,
  },
  {
    id: "p2",
    title: "15-Minute Zoom Conversation Study",
    description: "Get paid for a casual 15-minute guided conversation over Zoom. Help improve next-generation communication technology by participating in a one-on-one session with another participant.",
    startDate: "Starting in 1-2 weeks",
    location: "Remote (Global)",
    requirements: ["Native/Fluent English speaker", "Age 18+", "Smartphone (2023+) with stable Wi-Fi & Zoom"],
    applyUrl: "https://forms.usergy.ai/zoom-video-project",
    icon: Briefcase,
  },
  {
    id: "p3",
    title: "Asian Language Audio Transcription",
    description: "Seeking native or fluent speakers of Chinese, Japanese, or Korean to transcribe audio recordings for AI training. 100% remote with flexible hours. Top performers advance to QA Reviewer roles.",
    startDate: "Starting Soon",
    location: "Remote (Global)",
    requirements: ["Native/Fluent in Chinese, Japanese, or Korean", "Exceptional accuracy & attention to detail", "Available to start soon"],
    applyUrl: "https://tally.so/r/wkMLbj",
    icon: Briefcase,
  },
  {
    id: "p4",
    title: "Real-World Menu & Poster Collection",
    description: "Help train Computer Vision AI by capturing high-quality photos of menus and promotional posters from local establishments. Earn $2 per set (5 photos per item, ~5 minutes). Fast approval and payout.",
    startDate: "Starting Soon",
    location: "Remote (France, Korea, Spain, Portugal, English regions)",
    requirements: ["Located in France, Korea, Spain, Portugal, or English-speaking regions", "5 distinct photos per item (different angles)", "Real-world, on-site photos only"],
    applyUrl: "https://forms.usergy.ai/poster-collection",
    icon: Briefcase,
  },
  {
    id: "p5",
    title: "Digital Identity Research Study",
    description: "Help improve digital identity verification technology. Submit 9 photos via a secure mobile app (iOS/Android) to train next-gen identity verification AI. GDPR compliant, fully encrypted, ~10 minutes to complete.",
    startDate: "Starting Soon",
    location: "Remote (Global)",
    requirements: ["NFC-enabled ID (passport, biometric national ID, or enhanced driver's license)", "iOS or Android smartphone", "Payment: $8-15 USD per approved submission"],
    applyUrl: "https://forms.usergy.ai/digital-identity-research",
    icon: Briefcase,
  },
];
