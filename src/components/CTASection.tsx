import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Apple, Play } from "lucide-react";
import ctaBg from "@/assets/cta-lifestyle.png";

const CTASection = () => {
  const [appStoreClicked, setAppStoreClicked] = useState(false);
  const [playStoreClicked, setPlayStoreClicked] = useState(false);

  useEffect(() => {
    if (appStoreClicked) {
      const timer = setTimeout(() => setAppStoreClicked(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [appStoreClicked]);

  useEffect(() => {
    if (playStoreClicked) {
      const timer = setTimeout(() => setPlayStoreClicked(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [playStoreClicked]);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Banner with background image */}
        <div className="relative rounded-[2rem] overflow-hidden min-h-[400px] flex items-end">
          {/* Background image */}
          <img
            src={ctaBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

          {/* Content */}
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

        {/* App Store Buttons below banner */}
        <div className="flex justify-center gap-3 sm:gap-4 pt-8">
          <button
            onClick={() => setAppStoreClicked(true)}
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-secondary/50 border border-border/50 transition-all hover:bg-secondary/80"
          >
            {appStoreClicked ? (
              <span className="font-semibold gradient-text">Coming Soon</span>
            ) : (
              <>
                <Apple className="w-6 h-6 sm:w-7 sm:h-7 text-foreground" />
                <div className="text-left">
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Download on the</p>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">App Store</p>
                </div>
              </>
            )}
          </button>
          <button
            onClick={() => setPlayStoreClicked(true)}
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-secondary/50 border border-border/50 transition-all hover:bg-secondary/80"
          >
            {playStoreClicked ? (
              <span className="font-semibold gradient-text">Coming Soon</span>
            ) : (
              <>
                <Play className="w-6 h-6 sm:w-7 sm:h-7 text-foreground" />
                <div className="text-left">
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Get it on</p>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">Google Play</p>
                </div>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
