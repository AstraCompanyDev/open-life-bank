import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroAppDark from "@/assets/hero-app-dark.png";

const HeroSection = () => {
  return (
    <section className="relative pt-0 pb-0 bg-background">
      <div className="mx-auto px-2 sm:px-3">
        <div
          className="relative rounded-2xl overflow-hidden h-screen flex items-end"
          style={{
            backgroundImage: `url(${heroAppDark})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 w-full px-8 md:px-16 py-14">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white">
                A <span className="whitespace-nowrap">U-topia</span>{" "}
                <span className="gradient-text">built for YOU</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/80 max-w-lg leading-relaxed">
                Reimagining money so you can spend, save, earn, and invest your way. The best of Web2 & Web3 — putting YOU first.
              </p>

              <Link to="/open-account">
                <Button variant="hero" size="lg">
                  Open Account
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
