import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ctaBg from "@/assets/cta-lifestyle.png";

const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="relative rounded-[2rem] overflow-hidden min-h-[400px] flex items-end">
          <img
            src={ctaBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

          <div className="relative z-10 w-full p-8 md:p-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60 font-medium">
                Get Started
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
                Your future in finance starts here
              </h2>
              <p className="text-sm md:text-base text-white/70 max-w-lg leading-relaxed">
                Join thousands already banking smarter. Take control of your money, earn rewards, and experience what modern finance should feel like.
              </p>
            </div>

            <div className="flex-shrink-0">
              <a href="https://u-dex.com/stake/" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="whitespace-nowrap">
                  Discover What's Next
                  <ArrowRight className="ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
