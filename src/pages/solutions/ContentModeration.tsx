import React from "react";
import { SolutionPageLayout } from "@/components/layouts/SolutionPageLayout";
import { Eye, MessagesSquare, BrainCircuit, Bot, ShieldCheck, ClipboardCheck } from "lucide-react";
import { SEO } from "@/components/SEO";
import { pageSEO } from "@/utils/seo-config";
import { generateServiceSchema } from "@/hooks/useSEO";

const ContentModeration = () => {
  const serviceSchema = generateServiceSchema(
    "AI Content Moderation Services",
    "24/7 human content moderation combined with AI. Protect your platform with expert moderators trained in cultural nuance, handling proactive and reactive moderation.",
    "https://usergy.ai/solutions/content-moderation",
    [
      "Proactive Content Review",
      "24/7 Live Moderation",
      "AI Training & Optimization",
      "Cultural Context Understanding",
      "User Appeals Management",
      "Policy Consultation"
    ]
  );
  return (
    <SolutionPageLayout
      badge="Content Moderation"
      title={
        <>
          Protect Your Community.
          <br />
          <span className="gradient-text animate-gradient">
            Preserve Your Brand.
          </span>
        </>
      }
      subtitle="AI can't understand cultural nuance or sarcasm. Our managed, 24/7 team of Trust & Safety experts protects your users from harmful content with the human judgment automation lacks."
      problemTitle="The Automation Blindspot"
      problemSubtitle="Relying on AI alone doesn't just miss harmful content; it creates new problems."
      problems={[
        {
          title: "AI Lacks Nuance",
          description:
            "AI can't tell the difference between sarcastic hate speech and a healthy debate. It misses coded language, cultural symbols, and emerging harmful trends.",
        },
        {
          title: "False Positives Erode Trust",
          description:
            "When your AI incorrectly flags a user's harmless post, you frustrate and alienate your best users. Over-moderation feels like censorship.",
        },
        {
          title: "The Mental Health Cost",
          description:
            "Traditional moderation farms have high turnover because the work is hard. High turnover means low-quality, inconsistent decisions that hurt your platform.",
        },
      ]}
      servicesTitle="A 360-Degree Trust & Safety Solution"
      servicesSubtitle="We protect your users at every touchpoint, from sign-up to live-stream, all while making your own systems smarter."
      services={[
        {
          value: "proactive",
          label: "Proactive Moderation",
          icon: Eye,
          title: "Proactive Moderation",
          description:
            "Stop harmful content before it impacts your community. Our teams review user-generated content (UGC) as it's submitted, ensuring brand safety from the start.",
          features: [
            "Image & Video Uploads",
            "User Profiles & Avatars",
            "Marketplace & Product Listings",
            "Ad & Creative Review",
            "Forum & Group Posts",
            "Spam & Scam Prevention",
          ],
        },
        {
          value: "reactive",
          label: "Reactive & Live Moderation",
          icon: MessagesSquare,
          title: "Reactive & Live Moderation",
          description:
            "Act instantly on user reports and live-streams. Our 24/7 global teams provide immediate review of flagged content to handle escalations and protect users in real-time.",
          features: [
            "User-Reported Content Review",
            "Live-Stream Monitoring",
            "In-Game Chat Moderation",
            "User Appeals & Escalations",
            "Account & Ban Enforcement",
            "24/7/365 Global Coverage",
          ],
        },
        {
          value: "ai-training",
          label: "AI Moderation Training",
          icon: BrainCircuit,
          title: "AI Moderation Training (Human-in-the-Loop)",
          description:
            "Don't just moderate; improve. We use our expert decisions to create high-quality datasets to train, test, and fine-tune your own automated moderation models.",
          features: [
            "Policy Creation & Consultation",
            "Data Labeling for Violations",
            "AI Model Fairness & Bias Audits",
            "Classifier Accuracy Testing",
            "Exception & Edge Case Datasets",
            "Feedback Loop Implementation",
          ],
        },
      ]}
      defaultServiceTab="proactive"
      expertTitle={
        <>
          Your Resilient,
          <span className="gradient-text animate-gradient">
            {" "}
            Well-Supported Workforce
          </span>
        </>
      }
      expertSubtitle="High-quality moderation comes from high-quality teams. We invest in our moderators' well-being to ensure consistent, accurate, and sustainable results for your platform."
      characters={[
        {
          type: "linguist-leila",
          title: "Cultural Nuance Experts",
          description:
            "Leila, a cultural expert, identified a new, trending emoji combination as a coded dog-whistle for hate speech, stopping a new harassment campaign before it spread.",
        },
        {
          type: "researcher-rachel",
          title: "Policy Specialists",
          description:
            "Rachel, a policy analyst, reviewed 500 user appeals for a gaming client. She found 20% were false positives from an AI update, helping them fix the algorithm.",
        },
        {
          type: "tester-tom",
          title: "Resilience-Trained Pros",
          description:
            "Tom is part of our team with full mental health support and managed shift rotations. This allows him to make clear, consistent, high-stakes decisions 8 hours a day.",
        },
      ]}
      additionalSectionTitle="AI-First, Human-in-the-Loop"
      additionalSectionSubtitle="Our process combines the best of AI speed with the necessity of human judgment."
      processSteps={[
        {
          icon: Bot,
          title: "1. AI Triage",
          description:
            "Your content first passes through an AI filter. 90-95% of obvious spam, nudity, and clear violations are handled instantly, reducing cost and noise.",
        },
        {
          icon: ShieldCheck,
          title: "2. Human Review",
          description:
            "The remaining 5-10% (the complex, contextual, and sensitive cases) are escalated to our trained Trust & Safety experts for a final, nuanced decision.",
        },
        {
          icon: ClipboardCheck,
          title: "3. Feedback Loop",
          description:
            "We don't just send a report. We feed these high-quality human decisions back into a training dataset, constantly making your own AI models smarter and more accurate.",
        },
      ]}
    />
  );
};

export default ContentModeration;
