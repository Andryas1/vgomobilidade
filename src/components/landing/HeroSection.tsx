import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative z-10 container mx-auto px-6 py-32">
        <h1 className="text-5xl md:text-7xl font-black mb-2 leading-tight">
          <span className="text-primary-foreground">V</span>
          <span className="text-gradient-gold">Go</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/60 font-light mb-6 tracking-wide">
          Tecnologia Corporativa
        </p>
        <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Transporte corporativo com segurança, tecnologia e conforto para sua empresa.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="#agendar"
            className="bg-gold hover:bg-gold-dark text-navy font-bold text-lg px-10 py-5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-gold/30"
          >
            Agendar Corrida
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
