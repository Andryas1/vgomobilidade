import { Car, Shield, Smartphone, Clock, MapPin, CreditCard } from "lucide-react";

const advantages = [
  {
    icon: Car,
    title: "Frota Qualificada",
    desc: "Veículos confortáveis e bem cuidados para garantir a melhor experiência.",
  },
  {
    icon: Shield,
    title: "Segurança",
    desc: "Motoristas verificados e viagens monitoradas do início ao fim.",
  },
  {
    icon: Smartphone,
    title: "App Intuitivo",
    desc: "Solicite corridas de forma rápida e fácil pelo aplicativo VGo.",
  },
  {
    icon: Clock,
    title: "Pontualidade",
    desc: "Agendamento prévio e acompanhamento em tempo real do seu transporte.",
  },
  {
    icon: MapPin,
    title: "Cobertura Regional",
    desc: "Atendimento em diversas regiões com expansão contínua.",
  },
  {
    icon: CreditCard,
    title: "Pagamento Fácil",
    desc: "Diversas formas de pagamento integradas no app para sua comodidade.",
  },
];

const AdvantagesSection = () => {
  return (
    <section id="vantagens" className="py-24 md:py-32 bg-navy">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary-foreground mb-4">
          Por que escolher a <span className="text-gradient-gold">VGo</span>?
        </h2>
        <p className="text-center text-primary-foreground/60 text-lg mb-16 max-w-xl mx-auto">
          Tudo o que você precisa em um app de transporte corporativo.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((a) => (
            <div
              key={a.title}
              className="bg-navy-light/50 border border-gold/15 rounded-2xl p-8 hover:border-gold/40 transition-all hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/15 flex items-center justify-center mb-6 group-hover:bg-gold/25 transition-colors">
                <a.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-3">{a.title}</h3>
              <p className="text-primary-foreground/60 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
