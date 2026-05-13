import { Globe } from "lucide-react";
import worldMap from "@/assets/world-map.png";

interface GlobalBankingSectionProps {
  showMap?: boolean;
}

const GlobalBankingSection = ({ showMap = false }: GlobalBankingSectionProps) => {
  return (
    <section className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Globe className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />
            Global Transfers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Send Money{" "}
            <span className="gradient-text">Across the World</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Send and receive across supported markets worldwide. Fast, transparent, and built for global mobility.
          </p>
        </div>

        {/* Service disclosure */}
        <div className="max-w-3xl mx-auto rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-6 md:p-8 text-center">
          <p className="text-base md:text-lg text-foreground font-medium mb-2">
            U-topia Transfer Service
          </p>
          <p className="text-sm md:text-base text-muted-foreground">
            Available in supported markets. This service operates independently of the U-topia card program.
          </p>
        </div>

        {/* World Map - About page only */}
        {showMap && (
          <div className="mt-16 max-w-5xl mx-auto">
            <img
              src={worldMap}
              alt="Global transfer network map showing connections across supported markets"
              className="w-full rounded-2xl"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default GlobalBankingSection;
