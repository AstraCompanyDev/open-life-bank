import { useState } from "react";
import { CreditCard, Gift, TrendingUp, Wallet, ArrowRight } from "lucide-react";
import upayImg from "@/assets/cardtype-upay.jpg";
import ucardImg from "@/assets/cardtype-ucard.jpg";
import uearnImg from "@/assets/cardtype-uearn.jpg";
import globalImg from "@/assets/cardtype-global.jpg";

const cardTypes = [
  {
    id: "upay",
    label: "U-Pay",
    icon: Wallet,
    image: upayImg,
    description:
      "Borderless payments, no high FX or cross-border fees.",
  },
  {
    id: "ucard",
    label: "U-Card",
    icon: CreditCard,
    image: ucardImg,
    description:
      "The physical and virtual Visa card.",
  },
  {
    id: "daily-life",
    label: "Cards for your Daily Life",
    icon: Gift,
    image: uearnImg,
    description:
      "Spend, save, and earn rewards on the everyday essentials, designed to fit seamlessly into your routine.",
  },
  {
    id: "global",
    label: "Global Payments",
    icon: TrendingUp,
    image: globalImg,
    description:
      "Diversified investment across crypto and traditional assets.",
  },
];

const CardTypesSection = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
            The U-topia Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
            Introducing{" "}
            <span className="gradient-text">U-topia</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
            U-topia brings a new standard to digital finance with a fully integrated payments ecosystem.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            A decentralized crypto payments platform combining global payments, yield opportunities, and non-custodial control, delivering everything you expect from modern finance, redesigned for Web3.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 h-auto sm:h-[420px] lg:h-[480px]">
          {cardTypes.map((card) => {
            const isActive = activeId === card.id;
            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveId(card.id)}
                onMouseLeave={() => setActiveId(null)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out h-[280px] sm:h-full ${
                  isActive ? "sm:flex-[2.5]" : "sm:flex-1"
                }`}
              >
                <img
                  src={card.image}
                  alt={card.label}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                  <div
                    className={`transition-all duration-500 ease-out overflow-hidden ${
                      isActive ? "max-h-48 opacity-100 mb-4" : "max-h-0 opacity-0 mb-0"
                    }`}
                  >
                    <h3 className="text-lg font-bold text-white mb-2">{card.label}</h3>
                    <p className="text-sm text-white/85 leading-relaxed mb-3">
                      {card.description}
                    </p>
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div
                    className={`bg-white/15 backdrop-blur-md rounded-xl px-4 py-3 transition-all duration-500 ${
                      isActive ? "opacity-0 max-h-0 -mb-4" : "opacity-100 max-h-16"
                    }`}
                  >
                    <h3 className="text-sm font-semibold text-white">{card.label}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardTypesSection;
