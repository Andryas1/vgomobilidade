import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2021, label: "Ano de fundação", prefix: "", suffix: "" },
  { value: 500, label: "Viagens realizadas", prefix: "+", suffix: "" },
  { value: 50, label: "Motoristas parceiros", prefix: "+", suffix: "" },
  { value: 98, label: "Satisfação dos clientes", prefix: "", suffix: "%" },
];

const StatsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-navy">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl md:text-5xl font-black text-secondary mb-2">
                {visible ? `${s.prefix}${s.value.toLocaleString("pt-BR")}${s.suffix}` : "0"}
              </p>
              <p className="text-primary-foreground/60 text-sm md:text-base">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
