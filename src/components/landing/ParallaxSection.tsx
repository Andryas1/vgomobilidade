import parallaxBg from "@/assets/parallax-bg.jpg";

const ParallaxSection = () => {
  return (
    <section
      className="relative py-32 flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${parallaxBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
          Experiência <span className="text-gradient-gold">Premium</span> em Mobilidade
        </h2>
        <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10">
          Baixe o app VGo e transforme o transporte da sua empresa.
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=br.com.vgo.passenger.drivermachine"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold hover:bg-gold-dark text-navy font-bold text-lg px-12 py-5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-gold/30"
        >
          📲 Baixar o App VGo
        </a>
      </div>
    </section>
  );
};

export default ParallaxSection;
