import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BathroomRemodeling from "./pages/BathroomRemodeling";
import KitchenRemodeling from "./pages/KitchenRemodeling";
import BasementRemodeling from "./pages/BasementRemodeling";
import HomeAdditions from "./pages/HomeAdditions";
import TownLandingPage from "./pages/TownLandingPage";
import OurProcess from "./pages/OurProcess";
import Projects from "./pages/Projects";
import Reviews from "./pages/Reviews";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LicensesInsurance from "./pages/LicensesInsurance";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import CountyLandingPage from "./pages/CountyLandingPage";

const queryClient = new QueryClient();

const towns = ["bridgewater", "hillsborough", "warren", "somerville", "basking-ridge", "bernardsville", "watchung", "green-brook", "bound-brook", "raritan", "manville", "bedminster", "edison", "princeton", "montgomery", "north-brunswick", "south-brunswick", "piscataway"];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bathroom-remodeling" element={<BathroomRemodeling />} />
          <Route path="/kitchen-remodeling" element={<KitchenRemodeling />} />
          <Route path="/basement-remodeling" element={<BasementRemodeling />} />
          <Route path="/home-additions" element={<HomeAdditions />} />
          
          {/* Town Landing Pages */}
          {towns.map((town) => (
            <Route key={`bathroom-${town}`} path={`/bathroom-remodeling-${town}-nj`} element={<TownLandingPage service="bathroom" town={town} />} />
          ))}
          {towns.map((town) => (
            <Route key={`kitchen-${town}`} path={`/kitchen-remodeling-${town}-nj`} element={<TownLandingPage service="kitchen" town={town} />} />
          ))}
          {towns.map((town) => (
            <Route key={`basement-${town}`} path={`/basement-remodeling-${town}-nj`} element={<TownLandingPage service="basement" town={town} />} />
          ))}
          
          {/* County Landing Pages */}
          <Route path="/somerset-county-nj" element={<CountyLandingPage county="somerset" />} />
          <Route path="/middlesex-county-nj" element={<CountyLandingPage county="middlesex" />} />
          
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/licenses-insurance" element={<LicensesInsurance />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
