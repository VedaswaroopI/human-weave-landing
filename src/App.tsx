import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import WhyUs from "./pages/WhyUs";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SolutionsLanding from "./pages/SolutionsLanding";
import DataServices from "./pages/solutions/DataServices";
import QualityAssurance from "./pages/solutions/QualityAssurance";
import ContentModeration from "./pages/solutions/ContentModeration";
import Multilingual from "./pages/solutions/Multilingual";
import EnterpriseBPO from "./pages/solutions/EnterpriseBPO";
import ResearchInsights from "./pages/solutions/ResearchInsights";
import DynamicCaseStudy from "./pages/case-studies/DynamicCaseStudy";
import GlobalAIDevelopment from "./pages/case-studies/GlobalAIDevelopment";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import { CookieConsent } from "./components/CookieConsent";
import { ErrorBoundary } from "./components/ErrorBoundary";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <TooltipProvider>
          <BrowserRouter>
            <Toaster />
            <Sonner />
            <CookieConsent />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/why-us" element={<WhyUs />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* SOLUTIONS PAGES */}
              <Route path="/solutions" element={<SolutionsLanding />} />
              <Route path="/solutions/data-services" element={<DataServices />} />
              <Route path="/solutions/quality-assurance" element={<QualityAssurance />} />
              <Route path="/solutions/content-moderation" element={<ContentModeration />} />
              <Route path="/solutions/multilingual" element={<Multilingual />} />
              <Route path="/solutions/enterprise-bpo" element={<EnterpriseBPO />} />
              <Route path="/solutions/research-insights" element={<ResearchInsights />} />
              
              {/* CASE STUDY PAGES */}
              <Route path="/case-studies/global-ai-development" element={<GlobalAIDevelopment />} />
              <Route path="/case-studies/:slug" element={<DynamicCaseStudy />} />
              
              {/* LEGAL PAGES */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
