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
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {cardTypes.map((card) => {
            const isActive = activeId === card.id;
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveId(card.id)}
                onMouseLeave={() => setActiveId(null)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer h-[360px] md:h-[420px]"
              >
                {/* Image always visible */}
                <img
                  src={card.image}
                  alt={card.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Default gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Hover overlay - darker */}
                <div
                  className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Label - always visible at bottom */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                  {/* Description - slides up on hover */}
                  <div
                    className={`transition-all duration-400 ease-out overflow-hidden ${
                      isActive ? "max-h-40 opacity-100 mb-3" : "max-h-0 opacity-0 mb-0"
                    }`}
                  >
                    <p className="text-sm text-white/90 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Label bar */}
                  <div className="bg-white/15 backdrop-blur-md rounded-xl px-4 py-3 flex items-center gap-3">
                    <Icon className="w-5 h-5 text-white flex-shrink-0" />
                    <h3 className="text-base font-semibold text-white">
                      {card.label}
                    </h3>
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
