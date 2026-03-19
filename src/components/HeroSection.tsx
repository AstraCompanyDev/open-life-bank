import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Subtle dark overlay for depth */}
      <div className="absolute inset-0 bg-foreground/20" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* White translucent card */}
        <div className="max-w-2xl bg-background/75 backdrop-blur-md rounded-3xl p-10 md:p-14 shadow-lg space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-foreground">
            A <span className="whitespace-nowrap">U-topia</span>{" "}
            <span className="gradient-text">built for YOU</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Reimagining money so you can spend, save, earn, and invest your way. The best of Web2 & Web3 — putting YOU first.
          </p>

          <div className="flex gap-4">
            <Link to="/open-account">
              <Button variant="hero" size="lg">
                Open Account
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/get-upay">
              <Button variant="outline" size="lg" className="rounded-full">
                <Smartphone className="mr-2 w-4 h-4" />
                Get uPay
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-8 pt-4">
            <div>
              <p className="text-3xl font-bold text-foreground">70%</p>
              <p className="text-sm text-muted-foreground">Fee savings</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <p className="text-3xl font-bold text-foreground">Instant</p>
              <p className="text-sm text-muted-foreground">Settlements</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <p className="text-3xl font-bold text-foreground">Global</p>
              <p className="text-sm text-muted-foreground">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
