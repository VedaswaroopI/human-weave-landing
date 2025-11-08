// src/pages/solutions/DataServices.tsx

import { PageLayout } from "@/components/layouts/PageLayout";
import { SolutionHero } from "@/components/SolutionHero";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { CharacterIllustration } from "@/components/CharacterIllustration";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  CheckCircle,
  ShieldCheck,
  Video,
  Type,
  Mic,
} from "lucide-react";

// Section 1: Hero
const HeroSection = () => (
  <SolutionHero
    badge="AI & Data Services"
    title={
      <>
        Data That Doesn't Just Inform.
        <br />
        <span className="gradient-text animate-gradient">It Understands.</span>
      </>
    }
    subtitle="Your AI model is only as smart as the data it learns from. We provide high-quality, 99.5%+ accurate, and context-rich data annotated by genuine domain experts, not crowd workers."
  />
);

// Section 2: The Problem (The "Why")
const ProblemSection = () => (
  <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          The High Cost of "Good Enough" Data
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          Garbage in, garbage out. In AI, this is an ironclad rule.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="relative glassmorphic bg-card/50 p-6 rounded-2xl border border-border overflow-hidden">
          <GlowingEffect spread={40} glow={true} proximity={100} borderWidth={2.5} disabled={false} />
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-3">Bias In, Bias Out</h3>
            <p className="text-muted-foreground leading-relaxed">
              Generic annotators introduce subtle, invisible biases that your
              models will learn, amplify, and scale. This is not just a
              technical problem; it is a reputational one.
            </p>
          </div>
        </div>
        <div className="relative glassmorphic bg-card/50 p-6 rounded-2xl border border-border overflow-hidden">
          <GlowingEffect spread={40} glow={true} proximity={100} borderWidth={2.5} disabled={false} />
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-3">A 1% Error is a 100% Failure</h3>
            <p className="text-muted-foreground leading-relaxed">
              In fields like medicine or autonomous driving, a single mislabeled
              data point is not a rounding error. It is a misdiagnosis, a missed
              obstacle, a critical failure.
            </p>
          </div>
        </div>
        <div className="relative glassmorphic bg-card/50 p-6 rounded-2xl border border-border overflow-hidden">
          <GlowingEffect spread={40} glow={true} proximity={100} borderWidth={2.5} disabled={false} />
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-3">Context is Everything</h3>
            <p className="text-muted-foreground leading-relaxed">
              A machine cannot teach another machine context. You need humans who
              understand slang, irony, medical terminology, and cultural nuance.
              Without it, your model is just guessing.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Section 3: Our Services (The "What")
const ServicesTabs = () => (
  <section className="py-16 sm:py-20 md:py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          A Full Spectrum of Data Solutions
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          We provide the high-quality, structured data you need to build,
          test, and deploy with confidence.
        </p>
      </div>

      <Tabs defaultValue="image-video" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto sm:h-12">
          <TabsTrigger value="image-video" className="py-2.5 sm:py-1.5">
            <Video className="mr-2 w-4 h-4" />
            Image & Video
          </TabsTrigger>
          <TabsTrigger value="text-nlp" className="py-2.5 sm:py-1.5">
            <Type className="mr-2 w-4 h-4" />
            Text & NLP
          </TabsTrigger>
          <TabsTrigger value="audio-speech" className="py-2.5 sm:py-1.5">
            <Mic className="mr-2 w-4 h-4" />
            Audio & Speech
          </TabsTrigger>
        </TabsList>
        <div className="mt-8">
          <TabsContent value="image-video">
            <div className="relative glassmorphic bg-card/50 p-8 rounded-2xl border border-border overflow-hidden">
              <GlowingEffect spread={40} glow={true} proximity={100} borderWidth={2.5} disabled={false} />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">
                  For Computer Vision That Truly Sees
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  From autonomous vehicles to medical diagnostics, our pixel-perfect
                  annotations train your models to perceive the world with superhuman
                  accuracy.
                </p>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    2D Bounding Boxes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Polygons & Segmentation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Keypoint Annotation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    3D Point Cloud (LiDAR)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Object Tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Medical Image Annotation
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="text-nlp">
            <div className="relative glassmorphic bg-card/50 p-8 rounded-2xl border border-border overflow-hidden">
              <GlowingEffect spread={40} glow={true} proximity={100} borderWidth={2.5} disabled={false} />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">
                  For Models That Understand Language, Not Just Words
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our linguists and domain experts fine-tune your LLMs and NLP models
                  to understand intent, sentiment, and complex context.
                </p>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Named Entity Recognition
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Sentiment Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Text Classification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Chatbot Training
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    LLM Fine-Tuning (RLHF)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Prompt Generation
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="audio-speech">
            <div className="relative glassmorphic bg-card/50 p-8 rounded-2xl border border-border overflow-hidden">
              <GlowingEffect spread={40} glow={true} proximity={100} borderWidth={2.5} disabled={false} />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">
                  For Applications That Hear the Difference
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Train your speech models with clean, accurately transcribed, and
                  tagged audio data from a diverse range of speakers and environments.
                </p>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Audio Transcription
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Speaker Diarization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Sound Classification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Event Tagging
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Acoustic Event Detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Tone & Sentiment Analysis
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </section>
);

// Section 4: The "Who" (Our Differentiator)
const ExpertSection = () => (
  <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Meet the <span className="gradient-text animate-gradient">Humans</span>{" "}
          Behind Your Data
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          We deploy managed teams of verified professionals. Your medical
          data is handled by MDs. Your legal data by JDs. Your model is trained
          by the best.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Doctor Dan */}
        <div className="text-center flex flex-col items-center">
          <CharacterIllustration
            type="doctor-dan"
            className="w-48 h-48"
            animate={true}
          />
          <h3 className="text-xl font-bold mt-4">Certified Professionals</h3>
          <p className="text-muted-foreground leading-relaxed mt-2 max-w-xs">
            <strong>Doctor Dan</strong>, representing our network of MDs and PhDs,
            annotated 2M+ medical images for a Fortune 500 healthcare
            company. 99.8% accuracy, 100% HIPAA compliant.
          </p>
        </div>

        {/* Linguist Leila */}
        <div className="text-center flex flex-col items-center">
          <CharacterIllustration
            type="linguist-leila"
            className="w-48 h-48"
            animate={true}
          />
          <h3 className="text-xl font-bold mt-4">Global Linguists</h3>
          <p className="text-muted-foreground leading-relaxed mt-2 max-w-xs">
            <strong>Linguist Leila</strong> fine-tuned an LLM for a global SaaS client
            in 15 languages, ensuring cultural nuance and correct sentiment
            for non-English users.
          </p>
        </div>

        {/* Data Anna */}
        <div className="text-center flex flex-col items-center">
          <CharacterIllustration
            type="data-anna"
            className="w-48 h-48"
            animate={true}
          />
          <h3 className="text-xl font-bold mt-4">Domain Experts</h3>
          <p className="text-muted-foreground leading-relaxed mt-2 max-w-xs">
            <strong>Data Anna</strong> sifted through 5M+ financial documents to
            identify and tag key entities, training a model that outperforms
            all public benchmarks.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Section 5: Security & Compliance
const SecuritySection = () => (
  <section className="py-16 sm:py-20 md:py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Enterprise-Grade Security.{" "}
          <span className="gradient-text animate-gradient">Zero Compromises.</span>
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          We are built to handle your most sensitive data with fortress-level
          security and full compliance.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="relative glassmorphic bg-card/50 p-6 rounded-2xl border border-border overflow-hidden">
          <GlowingEffect spread={40} glow={true} proximity={100} borderWidth={2.5} disabled={false} />
          <div className="relative z-10 flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-1">SOC 2 Type II</h3>
              <p className="text-muted-foreground leading-relaxed">
                Audited and verified processes for data security, availability,
                and confidentiality.
              </p>
            </div>
          </div>
        </div>
        <div className="relative glassmorphic bg-card/50 p-6 rounded-2xl border border-border overflow-hidden">
          <GlowingEffect spread={40} glow={true} proximity={100} borderWidth={2.5} disabled={false} />
          <div className="relative z-10 flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-1">HIPAA & GDPR</h3>
              <p className="text-muted-foreground leading-relaxed">
                Full compliance for handling sensitive Protected Health
                Information (PHI) and personal user data.
              </p>
            </div>
          </div>
        </div>
        <div className="relative glassmorphic bg-card/50 p-6 rounded-2xl border border-border overflow-hidden">
          <GlowingEffect spread={40} glow={true} proximity={100} borderWidth={2.5} disabled={false} />
          <div className="relative z-10 flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-1">ISO 27001</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world-class Information Security Management System (ISMS)
                protecting your assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Page Component ---
const DataServices = () => {
  return (
    <PageLayout>
      <HeroSection />
      <ProblemSection />
      <ServicesTabs />
      <ExpertSection />
      <SecuritySection />
    </PageLayout>
  );
};

export default DataServices;
