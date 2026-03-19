const VideoSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="relative rounded-3xl overflow-hidden min-h-[500px] md:min-h-[600px]">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />

          {/* Content Card - Left Side */}
          <div className="relative z-10 flex items-center h-full min-h-[500px] md:min-h-[600px] p-8 md:p-16">
            <div className="max-w-md space-y-6 bg-background/90 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-lg">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary">
                Our Vision
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">
                Why We Built{" "}
                <span className="gradient-text">U-topia</span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                We're building a seamless bridge between traditional finance and the decentralized
                future — making digital assets accessible, secure, and effortless for everyone.
              </p>
              <a
                href="/ecosystem"
                className="inline-flex items-center px-6 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Explore Ecosystem
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
