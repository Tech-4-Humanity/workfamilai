
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ProductionErrorBoundary } from "@/components/ui/production-error-boundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { Suspense } from "react";
import i18n from "./i18n/config";
import Index from "./pages/Index";
import DepartmentDetail from "./pages/DepartmentDetail";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import ContactTest from "./pages/ContactTest";
import Scenarios from "./pages/Scenarios";
import ScenarioDetail from "./pages/ScenarioDetail";
import DemoComingSoon from "./pages/DemoComingSoon";
import Donations from "./pages/Donations";
import DonationSuccess from "./pages/DonationSuccess";
import DonationCancel from "./pages/DonationCancel";
import WorkPackages from "./pages/WorkPackages";
import { useEffect } from "react";
import FamilyNetwork from "./pages/FamilyNetwork";
import { OrganizationalDashboard } from "./components/organizational/OrganizationalDashboard";
import { CompleteOrganizationalStructure } from "./components/organizational/CompleteOrganizationalStructure";
import { NavigationHeader } from "./components/ui/navigation-header";

// Optimized query client for production
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (renamed from cacheTime)
    },
  },
});

const LoadingFallback = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

// Redirect component for external work packages link
const WorkPackageRedirect = () => {
  useEffect(() => {
    window.location.replace('https://www.augmentedhumanity.coach/solutions');
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Redirecting to solutions...</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ProductionErrorBoundary>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <NavigationHeader />
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/work-packages" element={<WorkPackageRedirect />} />
                  <Route path="/family-network" element={<FamilyNetwork />} />
                  <Route path="/department/:departmentId" element={<DepartmentDetail />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/contact-test" element={<ContactTest />} />
                  <Route path="/scenarios" element={<Scenarios />} />
                  <Route path="/scenarios/:scenarioId" element={<ScenarioDetail />} />
                  <Route path="/demo" element={<DemoComingSoon />} />
                  <Route path="/donations" element={<Donations />} />
                  <Route path="/donation-success" element={<DonationSuccess />} />
                  <Route path="/donation-cancel" element={<DonationCancel />} />
                  
                  <Route path="/organizational-intelligence" element={<OrganizationalDashboard />} />
                  <Route path="/complete-structure" element={<CompleteOrganizationalStructure />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </I18nextProvider>
    </ProductionErrorBoundary>
  );
};

export default App;
