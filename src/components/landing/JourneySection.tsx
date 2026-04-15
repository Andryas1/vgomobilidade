import { Building2, Car, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const JourneySection = () => {
  const journeys = [
    {
      icon: Building2,
      title: "Para Empresas",
      desc: "Mobilidade corporativa feita sob medida para sua empresa.",
      cta: "Quero uma proposta",
      to: "/para-empresas",
    },
    {
      icon: Car,
      title: "Seja um Motorista",
      desc: "Dirija no mercado corporativo com segurança e renda garantida.",
      cta: "Seja um motorista",
      to: "/seja-motorista",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <p className="text-secondary font-semibold text-sm uppercase tracking-wider text-center mb-3">
          Escolha sua Jornada
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
          Explore seu futuro com a <span className="text-gradient-gold">VGo</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {journeys.map((j) => (
            <Link
              key={j.to}
              to={j.to}
              className="group bg-card border border-border rounded-2xl p-10 hover:border-secondary/50 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <j.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{j.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{j.desc}</p>
              <span className="inline-flex items-center text-secondary font-bold group-hover:gap-3 gap-2 transition-all">
                {j.cta} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
