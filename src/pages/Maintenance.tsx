import utopiaLogo from "@/assets/logo-utopia.avif";

const Maintenance = () => {
  return (
    <div className="min-h-screen bg-foreground flex flex-col items-center justify-center px-6">
      <img
        src={utopiaLogo}
        alt="U-topia"
        className="h-20 sm:h-28 md:h-36 w-auto brightness-0 invert mb-12"
      />
      <div className="overflow-hidden w-full max-w-2xl">
        <p className="text-white/80 text-lg sm:text-xl md:text-2xl font-medium tracking-wide text-center animate-pulse-slow">
          Site Under Maintenance
        </p>
      </div>
      <p className="text-white/40 text-sm mt-6">We'll be back shortly.</p>
    </div>
  );
};

export default Maintenance;
