import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coins, Headphones, Gift, PiggyBank, Landmark } from "lucide-react";
import lifestyleImage from "@/assets/lifestyle-travel.jpg";

const features = [
  { icon: Coins, text: "Multiple currency support" },
  { icon: Headphones, text: "24/7 multi-language support" },
  { icon: Gift, text: "Exclusive rewards & perks" },
];


const AccountsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden card-clean">
              <img
                src={lifestyleImage}
                alt="Person enjoying financial freedom"
                className="w-full h-[500px] lg:h-[600px] object-cover object-[center_20%]"
              />
            </div>
            
            {/* Phone Mockup */}
            <div className="absolute -bottom-12 right-2 sm:-bottom-6 sm:-right-4 lg:-right-8 w-32 sm:w-48 md:w-52 lg:w-60">
              <div className="bg-white rounded-[2rem] p-2 card-clean">
                <div className="bg-secondary/30 rounded-[1.5rem] overflow-hidden">
                  <div className="p-4">
                    <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                      <span>9:41</span>
                      <div className="w-4 h-2 bg-muted-foreground/30 rounded-sm" />
                    </div>
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-1">Accounts</p>
                      <p className="text-2xl font-bold">22,721.60</p>
                      <p className="text-xs text-green-600">+6.1% | $1,388.61</p>
                    </div>
                    <div className="space-y-3">
                      {[
                        { name: "USDT", val: "$5,500.00", pct: "+0.2%" },
                        { name: "ETH", val: "$9,202.00", pct: "+12.3%" },
                        { name: "BTC", val: "$8,019.60", pct: "+3.2%" },
                      ].map((item) => (
                        <div key={item.name} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                          <div>
                            <p className="text-sm font-medium">{item.name}</p>
                            <p className="text-xs text-muted-foreground">Main Wallet</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">{item.val}</p>
                            <p className="text-xs text-green-600">{item.pct}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <span className="inline-block text-sm text-primary uppercase tracking-wider font-semibold bg-primary/10 px-4 py-1.5 rounded-full">
              Accounts
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              One App.{" "}
              <span className="gradient-text">All Your Assets</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Track, earn, and grow your portfolio across a wide range of digital assets — all in one app.
            </p>
            
            <Link to="/open-account" className="inline-block mt-2">
              <Button variant="hero" size="lg">
                Join the Waitlist
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-5 rounded-3xl bg-white card-clean">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground font-medium leading-snug">{feature.text}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountsSection;
