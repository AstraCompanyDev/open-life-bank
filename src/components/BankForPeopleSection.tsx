import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BankForPeopleSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
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

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-foreground/20" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-20">
        <div className="max-w-2xl ml-auto bg-background/75 backdrop-blur-md rounded-3xl p-10 md:p-14 shadow-lg space-y-6">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary">
            Our Mission
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-foreground">
            A bank built{" "}
            <span className="gradient-text">for the people</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            U-topia puts YOU at the centre of everything. No hidden fees, no gatekeepers — just
            seamless access to spending, saving, earning, and investing across traditional and
            digital finance.
          </p>
          <div className="flex gap-4 pt-2">
            <Link to="/open-account">
              <Button variant="hero" size="lg">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/ecosystem">
              <Button variant="outline" size="lg" className="rounded-full">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankForPeopleSection;
