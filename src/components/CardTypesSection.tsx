const CardTypesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl mx-auto text-center">
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
      </div>
    </section>
  );
};

export default CardTypesSection;
