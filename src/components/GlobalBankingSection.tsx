import { Globe } from "lucide-react";
import worldMap from "@/assets/world-map.png";

const row1 = [
  { name: "United States", flag: "🇺🇸" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "France", flag: "🇫🇷" },
  { name: "Brazil", flag: "🇧🇷" },
  { name: "Japan", flag: "🇯🇵" },
  { name: "India", flag: "🇮🇳" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "UAE", flag: "🇦🇪" },
  { name: "South Korea", flag: "🇰🇷" },
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "Mexico", flag: "🇲🇽" },
  { name: "Argentina", flag: "🇦🇷" },
];

const row2 = [
  { name: "Switzerland", flag: "🇨🇭" },
  { name: "South Africa", flag: "🇿🇦" },
  { name: "Philippines", flag: "🇵🇭" },
  { name: "Indonesia", flag: "🇮🇩" },
  { name: "Thailand", flag: "🇹🇭" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Poland", flag: "🇵🇱" },
  { name: "Turkey", flag: "🇹🇷" },
  { name: "Colombia", flag: "🇨🇴" },
  { name: "Kenya", flag: "🇰🇪" },
  { name: "Portugal", flag: "🇵🇹" },
  { name: "Sweden", flag: "🇸🇪" },
  { name: "Norway", flag: "🇳🇴" },
];

const FlagItem = ({ flag, name }: { flag: string; name: string }) => (
  <div className="flex flex-col items-center gap-3 flex-shrink-0 mx-4">
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-card flex items-center justify-center text-3xl md:text-4xl shadow-sm border border-border/50">
      {flag}
    </div>
    <span className="text-xs md:text-sm text-muted-foreground text-center font-medium leading-tight whitespace-nowrap">
      {name}
    </span>
  </div>
);

interface GlobalBankingSectionProps {
  showMap?: boolean;
}

const GlobalBankingSection = ({ showMap = false }: GlobalBankingSectionProps) => {
  // Duplicate items for seamless loop
  const row1Items = [...row1, ...row1];
  const row2Items = [...row2, ...row2];

  return (
    <section className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Globe className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />
            Worldwide Access
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A truly{" "}
            <span className="gradient-text">global remittance</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Send, spend, and receive money across 180+ countries — with no borders and no barriers.
          </p>
        </div>

        {/* Row 1 - moves left to right */}
        <div className="relative mb-8 overflow-hidden max-w-7xl mx-auto">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />
          <div className="flex animate-scroll-right">
            {row1Items.map((country, i) => (
              <FlagItem key={`r1-${i}`} flag={country.flag} name={country.name} />
            ))}
          </div>
        </div>

        {/* Row 2 - moves right to left */}
        <div className="relative overflow-hidden max-w-7xl mx-auto">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />
          <div className="flex animate-scroll-left">
            {row2Items.map((country, i) => (
              <FlagItem key={`r2-${i}`} flag={country.flag} name={country.name} />
            ))}
          </div>
        </div>

        {/* World Map - About page only */}
        {showMap && (
          <div className="mt-16 max-w-5xl mx-auto">
            <img
              src={worldMap}
              alt="Global banking network map showing connections across 180+ countries"
              className="w-full rounded-2xl"
            />
          </div>
        )}

        {/* Bottom text */}
        <p className="text-center text-muted-foreground mt-12 text-sm">
          And <span className="text-foreground font-semibold">150+ more countries</span> supported worldwide
        </p>
      </div>
    </section>
  );
};

export default GlobalBankingSection;
