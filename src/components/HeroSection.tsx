import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroMobileMockup from "@/assets/hero-mobile-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative pt-20 md:pt-28 pb-8 md:pb-12 bg-background">
      <div className="mx-auto px-2 sm:px-6 lg:px-8 max-w-none sm:container">
        <div
          className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl min-h-[calc(100svh-8rem)] sm:min-h-[620px] md:h-[80vh] md:min-h-[500px] max-h-[800px] flex items-end bg-no-repeat bg-cover [background-position:78%_center] md:[background-position:center_center]"
          style={{
            backgroundImage: `url(${heroMobileMockup})`,
          }}
        >
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 w-full px-5 sm:px-10 md:px-16 py-7 sm:py-10 md:py-14">
            <div className="max-w-2xl space-y-5 md:space-y-6">
              <h1 className="text-[2.45rem] sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white">
                A <span className="whitespace-nowrap">U-topia</span>{" "}
                <span className="gradient-text">built for YOU</span>
              </h1>

              <p className="text-base sm:text-xl text-white/80 max-w-lg leading-relaxed">
                Changing how global finance is used every day.
                <br />
                Simple. Yours. Ready When You Are.
              </p>

              <div className="pt-2 md:pt-4">
                <Link to="/open-account">
                  <Button variant="outline" size="lg" className="h-12 px-6 sm:h-14 sm:px-8 border-white text-white hover:bg-white/10 hover:border-white">
                    Join the Waitlist
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
