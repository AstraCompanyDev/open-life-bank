import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import CardTypesSection from "@/components/CardTypesSection";
import BankForPeopleSection from "@/components/BankForPeopleSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <HeroSection />
        <PartnersSection />
        <CardTypesSection />
        <BankForPeopleSection />
        <CTASection />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
};

export default Index;
