import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhyUs from "./pages/WhyUs";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import SolutionsLanding from "./pages/SolutionsLanding";
import DataServices from "./pages/solutions/DataServices";
import QualityAssurance from "./pages/solutions/QualityAssurance";
import Multilingual from "./pages/solutions/Multilingual";
import EnterpriseBPO from "./pages/solutions/EnterpriseBPO";
import ContentModeration from "./pages/solutions/ContentModeration";
import ResearchInsights from "./pages/solutions/ResearchInsights";
import GlobalAIDevelopment from "./pages/case-studies/GlobalAIDevelopment";
import GlobalAITranscription from "./pages/case-studies/GlobalAITranscription";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        forcedTheme="dark"
        disableTransitionOnChange={false}
      >
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/why-us" element={<WhyUs />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* SOLUTIONS PAGES */}
              <Route path="/solutions" element={<SolutionsLanding />} />
              <Route path="/solutions/data-services" element={<DataServices />} />
              <Route path="/solutions/quality-assurance" element={<QualityAssurance />} />
              <Route path="/solutions/multilingual" element={<Multilingual />} />
              <Route path="/solutions/enterprise-bpo" element={<EnterpriseBPO />} />
              <Route path="/solutions/content-moderation" element={<ContentModeration />} />
              <Route path="/solutions/research-insights" element={<ResearchInsights />} />
              {/* END SOLUTIONS PAGES */}
              
              {/* CASE STUDY PAGES */}
              <Route path="/case-studies/global-ai-development" element={<GlobalAIDevelopment />} />
              <Route path="/case-studies/global-ai-transcription" element={<GlobalAITranscription />} />
              {/* END CASE STUDY PAGES */}
              
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
