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
    title: "Multilingual Chatbot Auditing",
    description: "We're seeking fluent speakers to audit and refine the conversational quality of a new generative AI chatbot. Your feedback will directly improve its natural language understanding.",
    startDate: "Ongoing",
    location: "Remote (Global)",
    requirements: ["Fluent in Spanish & English", "QA Experience", "Linguistics Background"],
    applyUrl: "https://tally.so/r/mD0NNk",
    icon: Briefcase,
  },
  {
    id: "p2",
    title: "Medical Image Segmentation",
    description: "Seeking certified medical professionals to perform high-accuracy segmentation on oncology CT scans. This project directly supports an FDA-approval process for a new diagnostic tool.",
    startDate: "Dec 1, 2025",
    location: "Remote (US-only, HIPAA)",
    requirements: ["MD or Radiologist", "HIPAA Certified", "Annotation Experience"],
    applyUrl: "https://tally.so/r/w4XXvQ",
    icon: Briefcase,
  },
  {
    id: "p3",
    title: "Autonomous Vehicle Data Logging",
    description: "In-vehicle data collection project. Requires driving specific routes in a provided vehicle to capture real-world sensor data for autonomous driving models.",
    startDate: "Nov 20, 2025",
    location: "Austin, TX",
    requirements: ["Valid US Driver's License", "Clean Driving Record", "5+ Years Driving"],
    applyUrl: "https://tally.so/r/w4XXvQ",
    icon: Briefcase,
  },
];
