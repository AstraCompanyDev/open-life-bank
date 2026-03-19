import Navbar from "@/components/Navbar";
import VideoSection from "@/components/VideoSection";
import CardShowcase from "@/components/CardShowcase";
import AccountsSection from "@/components/AccountsSection";
import TeamSection from "@/components/TeamSection";
import GlobalBankingSection from "@/components/GlobalBankingSection";
import FeaturesSection from "@/components/FeaturesSection";
import LifestyleSection from "@/components/LifestyleSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20" />
      <VideoSection />
      <CardShowcase />
      <AccountsSection />
      <TeamSection />
      <GlobalBankingSection showMap />
      <FeaturesSection />
      <LifestyleSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default About;
