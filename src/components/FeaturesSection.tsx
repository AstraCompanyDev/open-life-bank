import { Wallet, CreditCard, Gift, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "uBank",
    description: "Web2-native banking experience with inclusive financial access. Compliance-ready account structures bridging traditional banking with decentralized rails.",
  },
  {
    icon: CreditCard,
    title: "uPay",
    description: "Global spending with a unified card. Frictionless P2P transfers and smooth online and in-store payments connecting TradFi with Web3.",
  },
  {
    icon: Gift,
    title: "uEarn",
    description: "Loyalty points, cashback, and yield converted into interoperable U-Rewards. Rewards structured as digital assets you can hold, redeem, stake, or transfer.",
  },
  {
    icon: Shield,
    title: "Modern Risk Management",
    description: "Advanced algorithms to reduce financial fraud and operational risks. The security of Web2 and decentralization of Web3.",
  },
  {
    icon: Zap,
    title: "Unparalleled Speed",
    description: "Instant settlements without delays commonplace in traditional finance. Borderless payments without high FX or cross-border fees.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            The Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A unified financial ecosystem{" "}
            <span className="gradient-text">designed for real world use</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            The best of Web2 & Web3. You get the best out of both TradFi and DeFi.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-3xl bg-card hover:bg-secondary/50 transition-all duration-300 card-clean"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
