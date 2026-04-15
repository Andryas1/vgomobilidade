const CTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          VGo é o seu <span className="text-gradient-gold">futuro</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
          Entre em contato e transforme a sua relação com a mobilidade corporativa.
        </p>
        <a
          href="#agendar"
          className="bg-secondary hover:bg-accent text-accent-foreground font-bold text-lg px-10 py-5 rounded-xl transition-all hover:scale-105 inline-block"
        >
          Agendar Corrida
        </a>
      </div>
    </section>
  );
};

export default CTASection;
