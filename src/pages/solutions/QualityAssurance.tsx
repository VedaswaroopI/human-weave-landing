import React from "react";
import { SolutionPageLayout } from "@/components/layouts/SolutionPageLayout";
import { Smartphone, Globe, Bot, ClipboardCheck, Workflow, BadgeCheck } from "lucide-react";

const QualityAssurance = () => {
  return (
    <SolutionPageLayout
      badge="Quality Assurance"
      title={
        <>
          Find the Bugs
          <br />
          <span className="gradient-text animate-gradient">
            Automation Can't See.
          </span>
        </>
      }
      subtitle="Your product works in the lab. But what about in Mumbai on a 3G network? Our global team of 300,000 or more real-world testers ensures your software, hardware, and AI models are flawless everywhere."
      problemTitle="Why Automated Tests Aren't Enough"
      problemSubtitle="Automated scripts are fast, but they have no patience, no cultural context, and can't tell you how a feature feels."
      problems={[
        {
          title: 'The "It Works on My Machine" Trap',
          description:
            "Automated tests run in a clean, perfect environment. They miss the critical bugs caused by real-world network lag, older hardware, or unexpected user behavior.",
        },
        {
          title: "The Context Blindspot",
          description:
            'An automated script can\'t tell you if a joke is offensive in Brazil, if a payment flow is confusing, or if your new AI\'s tone feels "arrogant." Only a human can.',
        },
        {
          title: 'The "Edge Case" Epidemic',
          description:
            "Real users tap, swipe, and break things in ways you'd never expect. These unpredictable edge cases are what automation misses and what lead to 1-star reviews.",
        },
      ]}
      servicesTitle="A Full-Spectrum QA Partnership"
      servicesSubtitle="From functional testing to complex AI validation, we provide the human insight you need to launch with 100% confidence."
      services={[
        {
          value: "functional",
          label: "Functional & Usability",
          icon: Smartphone,
          title: "Flawless Functionality, Seamless Experience",
          description:
            "We go beyond test scripts. Our global teams perform exploratory testing, regression analysis, and genuine usability testing to find bugs and friction points that frustrate real users.",
          features: [
            "Real-World Bug Hunts",
            "Cross-Device & Browser Testing",
            "Usability & UX Feedback",
            "Accessibility (WCAG) Audits",
            "Regression Testing",
            "Performance & Load Testing",
          ],
        },
        {
          value: "localization",
          label: "Localization QA",
          icon: Globe,
          title: "Speak Like a Local, Not a Robot",
          description:
            "A direct translation is not enough. Our in-country native speakers check your product for linguistic accuracy, cultural appropriateness, and visual layout issues (like text expansion).",
          features: [
            "Linguistic Accuracy",
            "Cultural Nuance Review",
            "UI/UX & Layout Verification",
            "Local Payment & Date Formats",
            "In-Country Compliance",
            "Image & Content Appropriateness",
          ],
        },
        {
          value: "ai-model",
          label: "AI & Model Validation",
          icon: Bot,
          title: "Is Your AI Behaving as Designed?",
          description:
            "This is the most critical step. We provide adversarial testing and real-world validation to ensure your AI models are fair, accurate, safe, and helpful.",
          features: [
            "LLM Response Evaluation",
            "Bias & Fairness Testing",
            "Adversarial Prompting",
            "Model Accuracy Validation",
            "AI Safety & Moderation Testing",
            "Real-World Data Drift Analysis",
          ],
        },
      ]}
      defaultServiceTab="functional"
      expertTitle={
        <>
          Your Testers are Your
          <span className="gradient-text animate-gradient"> Real End-Users</span>
        </>
      }
      expertSubtitle="Our network is not just 'testers.' They are gamers, parents, bankers, and students from 150+ countries. We match your product with its exact target audience."
      characters={[
        {
          type: "tester-tom",
          title: "The Device Specialist",
          description:
            "Tester Tom tested a new mobile game on a 3-year-old Android phone in rural India, finding a critical bug that emulators missed, saving the launch.",
        },
        {
          type: "researcher-rachel",
          title: "The Usability Expert",
          description:
            'Researcher Rachel led a "first impressions" test for a new e-commerce app, providing a 20-page report on user friction that led to a 34% increase in conversion.',
        },
        {
          type: "engineer-erik",
          title: "The AI Ethicist",
          description:
            "Engineer Erik led an adversarial attack team that stress-tested a new FinTech AI, identifying 3 critical security and bias vulnerabilities before they became headlines.",
        },
      ]}
      additionalSectionTitle="The UsergyAI QA Process"
      additionalSectionSubtitle="Rigorous, managed, and transparent from day one."
      processSteps={[
        {
          icon: ClipboardCheck,
          title: "1. Test Plan & Team Setup",
          description:
            "We work with you to define test cases, success criteria, and device requirements. We then assemble and train a dedicated, managed team from our network.",
        },
        {
          icon: Workflow,
          title: "2. Managed Test Cycles",
          description:
            "Our Project Managers run the test cycles. You get real-time bug reports, complete with videos, logs, and replication steps, in your Jira or dashboard.",
        },
        {
          icon: BadgeCheck,
          title: "3. Final Report & Validation",
          description:
            'We deliver a comprehensive final report detailing all bugs found, their severity, and a final "go/no-go" recommendation based on our findings.',
        },
      ]}
    />
  );
};

export default QualityAssurance;
