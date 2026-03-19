import logoUtopia from "@/assets/logo-utopia.avif";

const Index = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <img
        src={logoUtopia}
        alt="U-topia"
        className="h-12 sm:h-16 w-auto brightness-0 mb-10 animate-fade-in"
      />
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground text-center mb-12 animate-fade-in">
        Coming Soon
      </h1>

      {/* Loading bar */}
      <div className="w-64 sm:w-80 h-1.5 rounded-full bg-secondary overflow-hidden">
        <div className="h-full rounded-full bg-primary animate-[loading_2s_ease-in-out_infinite]" />
      </div>
    </main>
  );
};

export default Index;
