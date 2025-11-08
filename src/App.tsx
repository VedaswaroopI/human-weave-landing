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
import SolutionsLanding from "./pages/SolutionsLanding";
import DataServices from "./pages/solutions/DataServices";
import QualityAssurance from "./pages/solutions/QualityAssurance";
import Multilingual from "./pages/solutions/Multilingual";
import EnterpriseBPO from "./pages/solutions/EnterpriseBPO";
import ContentModeration from "./pages/solutions/ContentModeration";
import ResearchInsights from "./pages/solutions/ResearchInsights";

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
              
              {/* SOLUTIONS PAGES */}
              <Route path="/solutions" element={<SolutionsLanding />} />
              <Route path="/solutions/data-services" element={<DataServices />} />
              <Route path="/solutions/quality-assurance" element={<QualityAssurance />} />
              <Route path="/solutions/multilingual" element={<Multilingual />} />
              <Route path="/solutions/enterprise-bpo" element={<EnterpriseBPO />} />
              <Route path="/solutions/content-moderation" element={<ContentModeration />} />
              <Route path="/solutions/research-insights" element={<ResearchInsights />} />
              {/* END SOLUTIONS PAGES */}
              
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
