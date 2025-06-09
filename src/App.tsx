
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DepartmentDetail from "./pages/DepartmentDetail";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import Scenarios from "./pages/Scenarios";
import ScenarioDetail from "./pages/ScenarioDetail";
import DemoComingSoon from "./pages/DemoComingSoon";
import { HoloOrgDashboard } from "./components/holo-org/HoloOrgDashboard";
import { OrganizationalDashboard } from "./components/organizational/OrganizationalDashboard";

// Optimized query client for production
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/department/:departmentId" element={<DepartmentDetail />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/scenarios" element={<Scenarios />} />
          <Route path="/scenarios/:scenarioId" element={<ScenarioDetail />} />
          <Route path="/demo" element={<DemoComingSoon />} />
          <Route path="/holo-org" element={<HoloOrgDashboard />} />
          <Route path="/organizational-intelligence" element={<OrganizationalDashboard />} />
          {/* Catch-all route for 404 handling - MUST be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
