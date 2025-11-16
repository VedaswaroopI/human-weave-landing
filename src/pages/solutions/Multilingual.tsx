// src/pages/solutions/Multilingual.tsx

import { PageLayout } from "@/components/layouts/PageLayout";
import { SolutionHero } from "@/components/SolutionHero";
import { SEO } from "@/components/SEO";
import { pageSEO } from "@/utils/seo-config";
import { generateServiceSchema } from "@/hooks/useSEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { CharacterIllustration } from "@/components/CharacterIllustration";
import {
  CheckCircle,
  MessageSquare,
  Globe,
  Bot,
  Megaphone,
  Paintbrush,
  Languages,
} from "lucide-react";

// --- Section 1: Hero ---
const HeroSection = () => (
  <SolutionHero
    badge="Multilingual Services"
    title={
      <>
        Speak Every Language.
        <br />
        <span className="gradient-text animate-gradient">
          Understand Every Culture.
        </span>
      </>
    }
    subtitle="Go beyond robotic machine translation. Our 300,000 or more native speakers and cultural experts provide translation, localization, and transcreation that connects with your audience on a human level."
  />
);

// --- Section 2: The Problem ("The Why") ---
const ProblemSection = () => (
  <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          When "Global" Fails to be "Local"
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          A 99% accurate machine translation can still be a 100% cultural
          failure.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glassmorphic bg-card/50 p-6 rounded-2xl border border-border">
          <h3 className="text-xl font-bold mb-3">
            The 'Lost in Translation' Error
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            A slogan translates literally, becoming nonsense or, worse,
            offensive. A joke that works in one culture fails in another. This
            is where automation breaks down.
          </p>
        </div>
        <div className="glassmorphic bg-card/50 p-6 rounded-2xl border border-border">
          <h3 className="text-xl font-bold mb-3">The Context Blindspot</h3>
          <p className="text-muted-foreground leading-relaxed">
            Machine translation can't understand irony, humor, or regional
            slang. It sounds robotic and inauthentic, breaking the trust you
            worked so hard to build.
          </p>
        </div>
        <div className="glassmorphic bg-card/50 p-6 rounded-2xl border border-border">
          <h3 className="text-xl font-bold mb-3">The Format Failure</h3>
          <p className="text-muted-foreground leading-relaxed">
            Your UI breaks because German text is 30% longer. Your dates
            (MM/DD vs DD/MM) are wrong. Your prices don't show local currency.
            These are not translation errors; they are localization failures.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// --- Section 3: Our Services ("The What") ---
const ServicesTabs = () => (
  <section className="py-16 sm:py-20 md:py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          More Than Translation. Total Immersion.
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          We provide end-to-end services to ensure your product, marketing,
          and AI feel native in any language.
        </p>
      </div>

      <Tabs defaultValue="localization" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto sm:h-12">
          <TabsTrigger value="localization" className="py-2.5 sm:py-1.5">
            <Globe className="mr-2 w-4 h-4" />
            Software & Web Localization
          </TabsTrigger>
          <TabsTrigger value="transcreation" className="py-2.5 sm:py-1.5">
            <Megaphone className="mr-2 w-4 h-4" />
            Marketing Transcreation
          </TabsTrigger>
          <TabsTrigger value="ai-data" className="py-2.5 sm:py-1.5">
            <Bot className="mr-2 w-4 h-4" />
            Multilingual AI Data
          </TabsTrigger>
        </TabsList>
        <div className="mt-8">
          <TabsContent value="localization">
            <div className="glassmorphic bg-card/50 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4">
                Software & Web Localization
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We adapt your entire user experience. Our teams work inside
                your code, design files, and CMS to ensure every menu, button,
                and error message is functionally and culturally perfect.
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  App & Web UI/UX
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Documentation & Help Desks
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Linguistic QA Testing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  In-Context Review
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  CMS & String Management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Video & Audio Subtitling
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="transcreation">
            <div className="glassmorphic bg-card/50 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4">
                Marketing Transcreation
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                This is not translation; it's adaptation. Our in-country
                copywriters and marketing experts re-create your campaigns to
                evoke the same emotion, not just say the same words.
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Ad Copy & Slogans
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Global SEO & SEM
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Social Media Content
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Video & Ad Scripting
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Cultural Consulting
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Brand Voice Adaptation
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="ai-data">
            <div className="glassmorphic bg-card/50 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4">
                Multilingual AI Data
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your AI is only as global as its data. We build and enrich
                multilingual datasets to train your chatbots, voice assistants,
                and translation models to be fluent and accurate.
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Multilingual Data Collection
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Speech & Audio Collection
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Cross-Cultural Sentiment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  LLM Fine-Tuning
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Translation Model Validation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Chatbot Response Auditing
                </li>
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </section>
);

// --- Section 4: The "Who" Differentiator ---
const ExpertSection = () => (
  <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Your Global Team is Already Local
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          Our network isn't just people who speak a language; they live
          the culture. We deploy in-country experts, not remote translators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center flex flex-col items-center">
          <CharacterIllustration
            type="linguist-leila"
            className="w-48 h-48"
            animate={true}
          />
          <h3 className="text-xl font-bold mt-4">The Native Linguist</h3>
          <p className="text-muted-foreground leading-relaxed mt-2 max-w-xs">
            Leila reviewed a new chatbot's Japanese, catching subtle
            politeness errors that would have alienated users. She then provided
            100+ new prompts to fix its tone.
          </p>
        </div>
        <div className="text-center flex flex-col items-center">
          <CharacterIllustration
            type="researcher-rachel"
            className="w-48 h-48"
            animate={true}
          />
          <h3 className="text-xl font-bold mt-4">The Cultural Strategist</h3>
          <p className="text-muted-foreground leading-relaxed mt-2 max-w-xs">
            Rachel advised a US tech brand on a Middle East launch,
            recommending changes to ad imagery and color palettes to build
            local trust and avoid cultural missteps.
          </p>
        </div>
        <div className="text-center flex flex-col items-center">
          <CharacterIllustration
            type="tester-tom"
            className="w-48 h-48"
            animate={true}
          />
          <h3 className="text-xl font-bold mt-4">The In-Country Tester</h3>
          <p className="text-muted-foreground leading-relaxed mt-2 max-w-xs">
            Tom, based in Berlin, tested a new app's German localization.
            He found 5 instances of text overlapping and breaking the UI, a bug
            the dev team's emulators never caught.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// --- Section 5: Our Differentiator ---
const ProcessSection = () => (
  <section className="py-16 sm:py-20 md:py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          The UsergyAI Translation Engine
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          We combine AI speed with human nuance for a process that is fast,
          scalable, and perfectly accurate.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-start gap-4">
          <Bot className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold mb-1">1. AI-Powered Foundation</h3>
            <p className="text-muted-foreground leading-relaxed">
              We use AI and translation memory (TM) to handle the initial
              pass, ensuring baseline consistency, speed, and cost-efficiency
              across all your content.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Languages className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold mb-1">2. Human-Led Nuance</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our native-speaking experts take over. They review, edit, and
              transcreate the content, infusing it with cultural context,
              regional slang, and the correct brand tone.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Paintbrush className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold mb-1">3. In-Context Validation</h3>
            <p className="text-muted-foreground leading-relaxed">
              We do not just send you a file. We test the final, translated
              content live in your app or on your website to catch layout,
              formatting, and functional errors before your users do.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Page Component ---
const Multilingual = () => {
  const serviceSchema = generateServiceSchema(
    "Multilingual Localization Services",
    "Professional translation and localization in 150+ languages by native speakers. Go beyond machine translation with cultural adaptation, linguistic QA, and transcreation.",
    "https://usergy.ai/solutions/multilingual",
    [
      "Software & Web Localization",
      "AI & LLM Localization",
      "Marketing Transcreation",
      "Cultural Adaptation",
      "Linguistic Quality Assurance",
      "150+ Languages Supported"
    ]
  );

  return (
    <>
      <SEO 
        {...pageSEO.multilingual}
        structuredData={serviceSchema}
      />
      <PageLayout>
        <div className="container mx-auto px-4 sm:px-6 pt-24">
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Solutions", url: "/solutions" },
              { name: "Multilingual Services" },
            ]}
          />
        </div>
        <HeroSection />
        <ProblemSection />
        <ServicesTabs />
        <ExpertSection />
        <ProcessSection />
      </PageLayout>
    </>
  );
};

export default Multilingual;
