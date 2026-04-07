import aboutBg from "@/assets/about-bg.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={aboutBg}
              alt="Transporte corporativo VGo"
              className="w-full h-[400px] object-cover"
              loading="lazy"
              width={1280}
              height={720}
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Sobre a <span className="text-gradient-gold">VGo</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A VGo é um aplicativo de transporte corporativo que conecta passageiros a motoristas qualificados. Nossa plataforma oferece uma experiência premium com foco em segurança, pontualidade e conforto.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com o app VGo, sua empresa tem controle total sobre deslocamentos, com relatórios, agendamento e acompanhamento em tempo real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
