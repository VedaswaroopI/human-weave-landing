import React from "react";
import { SEO } from "@/components/SEO";
import { pageSEO } from "@/utils/seo-config";
import { generateServiceSchema } from "@/hooks/useSEO";
import { SolutionPageLayout } from "@/components/layouts/SolutionPageLayout";
import { Video, Type, Mic, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const DataServices = () => {
  const serviceSchema = generateServiceSchema(
    "AI Data Annotation Services",
    "Expert data annotation for images, video, text, and audio with 99.5%+ accuracy",
    "https://usergy.ai/solutions/data-services",
    ["Image & Video Annotation", "Text & NLP Annotation", "Audio & Speech Annotation"]
  );

  return (
    <>
      <SEO {...pageSEO.dataServices} structuredData={serviceSchema} />
      <SolutionPageLayout
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Solutions", url: "/solutions" },
          { name: "Data Services" },
        ]}
        badge="AI & Data Services"
        title="Data That Doesn't Just Inform. It Understands."
        subtitle="Your AI model is only as smart as the data it learns from. We provide high-quality data (99.5% accuracy or better) that's context-rich and annotated by genuine domain experts, not crowd workers."
      problemTitle='The High Cost of "Good Enough" Data'
      problemSubtitle="Garbage in, Garbage out. In AI, this is an ironclad rule."
      problems={[
        {
          title: "Bias In, Bias Out",
          description:
            "Generic annotators introduce subtle, invisible biases that your models will learn, amplify, and scale. This is not just a technical problem; it is a reputational one.",
        },
        {
          title: "A 1% Error is a 100% Failure",
          description:
            "In fields like medicine or autonomous driving, a single mislabeled data point is not a rounding error. It is a misdiagnosis, a missed obstacle, a critical failure.",
        },
        {
          title: "Context is Everything",
          description:
            "A machine cannot teach another machine context. You need humans who understand slang, irony, medical terminology, and cultural nuance. Without it, your model is just guessing.",
        },
      ]}
      servicesTitle="A Full Spectrum of Data Solutions"
      servicesSubtitle="We provide the high-quality, structured data you need to build, test, and deploy with confidence."
      services={[
        {
          value: "image-video",
          label: "Image & Video",
          icon: Video,
          title: "For Computer Vision That Truly Sees",
          description:
            "From autonomous vehicles to medical diagnostics, our pixel-perfect annotations train your models to perceive the world with superhuman accuracy.",
          features: [
            "2D Bounding Boxes",
            "Polygons & Segmentation",
            "Keypoint Annotation",
            "3D Point Cloud (LiDAR)",
            "Object Tracking",
            "Medical Image Annotation",
          ],
        },
        {
          value: "text-nlp",
          label: "Text & NLP",
          icon: Type,
          title: "For Models That Understand Language, Not Just Words",
          description:
            "Our linguists and domain experts fine-tune your LLMs and NLP models to understand intent, sentiment, and complex context.",
          features: [
            "Named Entity Recognition",
            "Sentiment Analysis",
            "Text Classification",
            "Chatbot Training",
            "LLM Fine-Tuning (RLHF)",
            "Prompt Generation",
          ],
        },
        {
          value: "audio-speech",
          label: "Audio & Speech",
          icon: Mic,
          title: "For Applications That Hear the Difference",
          description:
            "Train your speech models with clean, accurately transcribed, and tagged audio data from a diverse range of speakers and environments.",
          features: [
            "Audio Transcription",
            "Speaker Diarization",
            "Sound Classification",
            "Event Tagging",
            "Acoustic Event Detection",
            "Tone & Sentiment Analysis",
          ],
        },
      ]}
      defaultServiceTab="image-video"
      expertTitle={
        <>
          Meet the <span className="gradient-text animate-gradient">Humans</span> Behind
          Your Data
        </>
      }
      expertSubtitle="We deploy managed teams of verified professionals. Your medical data is handled by MDs. Your legal data by JDs. Your model is trained by the best."
      characters={[
        {
          type: "doctor-dan",
          title: "Certified Professionals",
          description:
            "Doctor Dan, representing our network of MDs and PhDs, annotated 2M+ medical images for a Fortune 500 healthcare company. 99.8% accuracy, 100% HIPAA compliant.",
        },
        {
          type: "linguist-leila",
          title: "Global Linguists",
          description:
            "Linguist Leila fine-tuned an LLM for a global SaaS client in 15 languages, ensuring cultural nuance and correct sentiment for non-English users.",
        },
        {
          type: "data-anna",
          title: "Domain Experts",
          description:
            "Data Anna sifted through 5M+ financial documents to identify and tag key entities, training a model that outperforms all public benchmarks.",
        },
      ]}
      additionalSectionTitle={
        <>
          Enterprise-Grade Security.{" "}
          <span className="gradient-text animate-gradient">Zero Compromises.</span>
        </>
      }
      additionalSectionSubtitle="We are built to handle your most sensitive data with fortress-level security and full compliance."
      securityFeatures={[
        {
          icon: ShieldCheck,
          title: "SOC 2 Type II",
          description:
            "Audited and verified processes for data security, availability, and confidentiality.",
        },
        {
          icon: ShieldCheck,
          title: "HIPAA & GDPR",
          description:
            "Full compliance for handling sensitive Protected Health Information (PHI) and personal user data.",
        },
        {
          icon: ShieldCheck,
          title: "ISO 27001",
          description:
            "A world-class Information Security Management System (ISMS) protecting your assets.",
        },
      ]}
    />
    </>
  );
};

export default DataServices;
