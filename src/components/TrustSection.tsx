import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"

const testimonials = [
  {
    author: {
      name: "Dr. Sarah Chen",
      handle: "Head of AI, HealthTech Corp",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "UsergyAI delivered our HIPAA-compliant medical imaging dataset with 99.8% accuracy. Their team includes actual doctors who understand the nuances of medical data annotation."
  },
  {
    author: {
      name: "Marcus Rodriguez",
      handle: "VP Engineering, AutoDrive AI",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The quality of their 3D point cloud annotations for our autonomous vehicle training exceeded expectations. Fast turnaround without compromising on precision."
  },
  {
    author: {
      name: "Emily Watson",
      handle: "CTO, VisionTech Solutions",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "We needed domain experts for our computer vision project. UsergyAI's annotators are specialists in their fields, not just click workers. Game changer for our ML accuracy."
  },
  {
    author: {
      name: "Dr. James Liu",
      handle: "Research Lead, BioAI Labs",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Their SOC 2 and HIPAA aligned practices gave us confidence to handle sensitive patient data. The annotation quality from medical professionals was exactly what we needed."
  },
  {
    author: {
      name: "Priya Sharma",
      handle: "Head of Data, FinanceML Inc",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "Switched from 3 other providers to UsergyAI. Their expert-level NLP annotations and multilingual support helped us reduce training time by 40% while improving model performance."
  },
  {
    author: {
      name: "David Kim",
      handle: "ML Engineer, RetailAI",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "The combination of domain expertise and technology is unmatched. Their quality assurance process caught edge cases our previous vendor missed completely."
  }
]

export const TrustSection = () => {
  return (
    <TestimonialsSection
      title="Trusted by AI Teams Building the Future"
      description="Join leading companies who rely on expert-level data annotation to train production-grade AI models"
      testimonials={testimonials}
    />
  );
};
