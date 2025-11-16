import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { CookieConsent } from "./components/CookieConsent";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ScrollToTop } from "./components/ScrollToTop";
import { SkipLinks } from "./components/accessibility/SkipLinks";

// Lazy load pages for better code splitting and performance
const Index = lazy(() => import("./pages/Index"));
const WhyUs = lazy(() => import("./pages/WhyUs"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SolutionsLanding = lazy(() => import("./pages/SolutionsLanding"));
const DataServices = lazy(() => import("./pages/solutions/DataServices"));
const QualityAssurance = lazy(() => import("./pages/solutions/QualityAssurance"));
const ContentModeration = lazy(() => import("./pages/solutions/ContentModeration"));
const Multilingual = lazy(() => import("./pages/solutions/Multilingual"));
const EnterpriseBPO = lazy(() => import("./pages/solutions/EnterpriseBPO"));
const ResearchInsights = lazy(() => import("./pages/solutions/ResearchInsights"));
const DynamicCaseStudy = lazy(() => import("./pages/case-studies/DynamicCaseStudy"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const ProjectsBoard = lazy(() => import("./pages/ProjectsBoard"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <TooltipProvider>
          <BrowserRouter>
            <SkipLinks />
            <ScrollToTop />
            <Toaster />
            <Sonner />
            <CookieConsent />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/why-us" element={<WhyUs />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects-board" element={<ProjectsBoard />} />
                
                {/* SOLUTIONS PAGES */}
                <Route path="/solutions" element={<SolutionsLanding />} />
                <Route path="/solutions/data-services" element={<DataServices />} />
                <Route path="/solutions/quality-assurance" element={<QualityAssurance />} />
                <Route path="/solutions/content-moderation" element={<ContentModeration />} />
                <Route path="/solutions/multilingual" element={<Multilingual />} />
                <Route path="/solutions/enterprise-bpo" element={<EnterpriseBPO />} />
                <Route path="/solutions/research-insights" element={<ResearchInsights />} />
                
                {/* CASE STUDY PAGES */}
                <Route path="/case-studies/:slug" element={<DynamicCaseStudy />} />
                
                {/* LEGAL PAGES */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />

                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;
