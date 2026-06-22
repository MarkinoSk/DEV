import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import CookieBanner from "./components/CookieBanner";

function RestoreGithubPagesRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    const restoredRoute = sessionStorage.getItem("gh-pages-redirect");
    if (!restoredRoute) {
      return;
    }

    sessionStorage.removeItem("gh-pages-redirect");
    navigate(restoredRoute, { replace: true });
  }, [navigate]);

  return null;
}

export default function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <RestoreGithubPagesRoute />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  );
}
