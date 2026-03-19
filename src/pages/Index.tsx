import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import VideoSection from "@/components/VideoSection";
import CardTypesSection from "@/components/CardTypesSection";
import BankForPeopleSection from "@/components/BankForPeopleSection";
import GlobalBankingSection from "@/components/GlobalBankingSection";
import FeaturesSection from "@/components/FeaturesSection";
import LifestyleSection from "@/components/LifestyleSection";
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
      <FeaturesSection />
      <CardTypesSection />
      <GlobalBankingSection showMap />
      <VideoSection />
      <BankForPeopleSection />
      <LifestyleSection />
      <TeamSection />
      <CTASection />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
