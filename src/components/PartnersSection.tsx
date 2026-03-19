import atsGroup from "@/assets/partners/ats-group.png";
import fireblocks from "@/assets/partners/fireblocks.png";
import theBlock from "@/assets/partners/the-block-new.png";
import visa from "@/assets/partners/visa.png";
import yellowCapital from "@/assets/partners/yellow-capital.png";

const partners = [
  { name: "ATS Group", logo: atsGroup },
  { name: "Fireblocks", logo: fireblocks },
  { name: "The Block", logo: theBlock },
  { name: "Visa", logo: visa },
  { name: "Yellow Capital", logo: yellowCapital },
];

const PartnersSection = () => {
  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 mb-8">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-wider font-medium">
          Backed by leading investors, partners & advisors
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee items-center">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 md:px-12 lg:px-14 h-20 md:h-24 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="h-[2.6rem] md:h-[3.6rem] max-w-[144px] md:max-w-[173px] w-auto object-contain block opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default PartnersSection;
