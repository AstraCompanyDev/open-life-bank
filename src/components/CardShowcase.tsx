import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import upayCards from "@/assets/utopia-cards-trio.png";

const cardFeatures = [
  "Free virtual card instantly",
  "Physical card delivered free",
  "Contactless payments worldwide",
  "Instant freeze & unfreeze",
  "Real-time spending notifications",
  "Custom spending limits",
];

const CardShowcase = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Card Visual */}
          <div className="relative flex items-center justify-center order-2 lg:order-1">
            <img
              src={upayCards}
              alt="U-topia Visa Cards - Your Money, Your Rules"
              className="w-full max-w-md"
            />
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <span className="inline-block text-sm text-primary uppercase tracking-wider font-semibold bg-primary/10 px-4 py-1.5 rounded-full mb-4">
                uPay Card
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The card that{" "}
                <span className="gradient-text">does more</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Get a beautiful card that works everywhere. Virtual cards instantly, physical cards delivered to your door.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {cardFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={3} />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/get-upay" className="inline-block mt-4">
              <Button variant="hero" size="lg">
                Get Your Card
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardShowcase;
