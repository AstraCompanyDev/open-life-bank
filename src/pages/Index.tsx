import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import CardTypesSection from "@/components/CardTypesSection";
import BankForPeopleSection from "@/components/BankForPeopleSection";
import GlobalBankingSection from "@/components/GlobalBankingSection";
import AccountsSection from "@/components/AccountsSection";

import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <CardTypesSection />
      <GlobalBankingSection />
      <TeamSection />
      <BankForPeopleSection />
      <AccountsSection />
      <LifestyleSection />
      <CTASection />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
