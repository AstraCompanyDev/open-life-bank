import Navbar from "@/components/Navbar";
import CardShowcase from "@/components/CardShowcase";
import AccountsSection from "@/components/AccountsSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Cards = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20" />
      <CardShowcase />
      <AccountsSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Cards;
