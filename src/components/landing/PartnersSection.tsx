import mobicityLogo from "@/assets/mobicity-logo.png";

const PartnersSection = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-6 text-center">
        <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
          Parceria de sucesso
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-12">
          Nossos <span className="text-gradient-gold">Parceiros</span>
        </h2>
        <div className="flex items-center justify-center">
          <a
            href="http://mobicity.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-2xl p-8 hover:border-secondary/50 transition-all hover:-translate-y-1"
          >
            <img
              src={mobicityLogo}
              alt="Mobicity - Parceiro VGo Mobilidade"
              className="h-16 md:h-20 w-auto object-contain"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
