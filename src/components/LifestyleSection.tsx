import { useState, useEffect, useRef } from "react";
import { Wallet, CreditCard, Gift } from "lucide-react";
import coupleImage from "@/assets/lifestyle-couple.jpg";
import cafeImage from "@/assets/lifestyle-cafe.jpg";
import rewardsImage from "@/assets/lifestyle-rewards.jpg";

const useInView = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.2, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
};

const lifestyleCards = [
  {
    image: coupleImage,
    imagePosition: "object-center",
    icon: Wallet,
    title: "uBank",
    hook: "Your money moves free. No borders. No middlemen.",
    description: "Borderless payments without high FX or cross-border fees. Decentralized & direct transactions with no banking middlemen.",
  },
  {
    image: cafeImage,
    imagePosition: "object-[center_25%]",
    icon: CreditCard,
    title: "uPay",
    hook: "Spend crypto like cash. 140M+ merchants. 70% less fees.",
    description: "Up to 70% savings on transaction fees. Use your digital assets to shop, dine, or travel — powered by uPay card.",
  },
  {
    image: rewardsImage,
    imagePosition: "object-center",
    icon: Gift,
    title: "uEarn",
    hook: "Rewards that actually pay. Not points that expire.",
    description: "Transform loyalty and rewards into tokenised value. Your rewards as liquid value, unlike static Web2 loyalty programs.",
  },
];

const MobileCard = ({ card, Icon, index }: { card: typeof lifestyleCards[0]; Icon: typeof Wallet; index: number }) => {
  const { ref, isInView } = useInView();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      ref={ref}
      onClick={() => setIsExpanded(!isExpanded)}
      className={`relative overflow-hidden rounded-3xl h-[280px] transition-all duration-700 ease-out cursor-pointer ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0">
        <img src={card.image} alt={card.title} className={`w-full h-full object-cover ${card.imagePosition}`} />
      </div>
      <div className={`absolute inset-0 transition-all duration-500 ${
        isExpanded ? "bg-gradient-to-t from-black/85 via-black/50 to-transparent" : "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
      }`} />
      <div className="relative h-full flex flex-col justify-end p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">{card.title}</h3>
        </div>
        <p className="text-sm text-white/80 font-medium uppercase tracking-wide mb-2">{card.hook}</p>
        <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
          <p className="text-white/90 text-base leading-relaxed">{card.description}</p>
        </div>
      </div>
    </div>
  );
};

const LifestyleSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Your Benefits
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Financial freedom{" "}
            <span className="gradient-text">in your pocket</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            U-topia puts YOU first — connecting modern banking, digital assets, and cross-chain opportunities in one universal wallet.
          </p>
        </div>

        {/* Mobile Cards */}
        <div className="flex flex-col gap-6 md:hidden">
          {lifestyleCards.map((card, index) => (
            <MobileCard key={card.title} card={card} Icon={card.icon} index={index} />
          ))}
        </div>

        {/* Desktop Cards */}
        <div className="hidden md:grid grid-cols-2 gap-6 [&>*:last-child:nth-child(odd)]:col-span-2 [&>*:last-child:nth-child(odd)]:max-w-[calc(50%-0.75rem)] [&>*:last-child:nth-child(odd)]:mx-auto">
          {lifestyleCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="group relative overflow-hidden rounded-3xl h-[400px] cursor-pointer">
                <div className="absolute inset-0">
                  <img src={card.image} alt={card.title} className={`w-full h-full object-cover ${card.imagePosition} transition-transform duration-700 group-hover:scale-105`} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/85 group-hover:via-black/50" />
                <div className="relative h-full flex flex-col justify-end p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">{card.title}</h3>
                  </div>
                  <p className="text-sm text-white/80 font-medium uppercase tracking-wide mb-2">{card.hook}</p>
                  <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100">
                    <p className="text-base text-white/90 leading-relaxed max-w-md">{card.description}</p>
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

export default LifestyleSection;
