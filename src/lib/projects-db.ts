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
];
