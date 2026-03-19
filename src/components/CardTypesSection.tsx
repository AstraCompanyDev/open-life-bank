import { useState } from "react";
import { Wallet, CreditCard, Gift, TrendingUp } from "lucide-react";
import virtualImg from "@/assets/card-ubank-app.png";
import plasticImg from "@/assets/card-upay-checkout.png";
import metalImg from "@/assets/card-uearn-premium.png";
import investImg from "@/assets/lifestyle-crypto.jpg";

const cardTypes = [
  {
    id: "ubank",
    label: "U-Bank",
    icon: Wallet,
    image: virtualImg,
    description:
      "Borderless payments without high FX or cross-border fees. Decentralized & direct transactions with no banking middlemen.",
  },
  {
    id: "upay",
    label: "U-Pay",
    icon: CreditCard,
    image: plasticImg,
    description:
      "Spend crypto like cash at 140M+ merchants worldwide. Up to 70% savings on transaction fees — powered by your uPay card.",
  },
  {
    id: "uearn",
    label: "U-Earn",
    icon: Gift,
    image: metalImg,
    description:
      "Transform loyalty and rewards into tokenised value. Your rewards as liquid value, unlike static Web2 loyalty programs.",
  },
  {
    id: "uinvest",
    label: "U-Invest",
    icon: TrendingUp,
    image: investImg,
    description:
      "Access diversified investment opportunities across crypto and traditional assets. Build and grow your portfolio with smart, guided strategies.",
  },
];

const CardTypesSection = () => {
  const [activeId, setActiveId] = useState("ubank");

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[420px]">
          {cardTypes.map((card) => {
            const isActive = activeId === card.id;
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveId(card.id)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
                  isActive
                    ? "lg:flex-[3] flex-auto"
                    : "lg:flex-[1] flex-auto"
                } ${isActive ? "h-[320px] lg:h-full" : "h-[100px] lg:h-full"}`}
              >
                {/* Expanded state - with image */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={card.image}
                    alt={card.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                    <div>
                      <div className="w-10 h-10 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {card.label}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-white/90 max-w-md leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Collapsed state - minimal */}
                <div
                  className={`absolute inset-0 bg-secondary/50 border border-border/50 rounded-2xl flex transition-opacity duration-500 ${
                    isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                  } ${
                    isActive ? "" : "flex-row lg:flex-col"
                  } items-center lg:items-start gap-3 p-5 lg:p-6`}
                >
                  <div className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {card.label}
                  </h3>
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
