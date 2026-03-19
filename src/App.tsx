import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/use-auth";
import Index from "./pages/Index";
import Ecosystem from "./pages/Ecosystem";
import Contact from "./pages/Contact";

import About from "./pages/About";
import NotFound from "./pages/NotFound";
import GetUPay from "./pages/GetUPay";
import InvestorContact from "./pages/InvestorContact";
import OpenAccount from "./pages/OpenAccount";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Admin from "./pages/Admin";
import AdminAuth from "./pages/AdminAuth";
import ScrollToTopOnNavigate from "./components/ScrollToTopOnNavigate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTopOnNavigate />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/get-upay" element={<GetUPay />} />
            <Route path="/investor-contact" element={<InvestorContact />} />
            <Route path="/open-account" element={<OpenAccount />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/auth" element={<AdminAuth />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
