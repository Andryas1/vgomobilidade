import { useState } from "react";
import { toast } from "sonner";

const BookingForm = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const texto = encodeURIComponent(
      `*Nova solicitação de corrida*\n\n` +
      `👤 Nome: ${form.nome}\n` +
      `📞 Telefone: ${form.telefone}\n` +
      `📧 Email: ${form.email || "Não informado"}\n` +
      `📝 Detalhes: ${form.mensagem}`
    );

    window.open(`https://wa.me/5513978180057?text=${texto}`, "_blank");

    toast.success("Redirecionando para o WhatsApp...");
    setForm({ nome: "", telefone: "", email: "", mensagem: "" });
  };

  return (
    <section id="agendar" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Agende sua <span className="text-gradient-gold">Corrida</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12">
          Preencha o formulário e envie pelo WhatsApp.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Seu nome"
            required
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            className="w-full px-6 py-5 rounded-xl border border-border bg-card text-foreground text-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
          />
          <input
            type="tel"
            placeholder="Telefone"
            required
            value={form.telefone}
            onChange={(e) => setForm({ ...form, telefone: e.target.value })}
            className="w-full px-6 py-5 rounded-xl border border-border bg-card text-foreground text-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-6 py-5 rounded-xl border border-border bg-card text-foreground text-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
          />
          <textarea
            placeholder="Detalhes da corrida (origem, destino, horário...)"
            rows={4}
            required
            value={form.mensagem}
            onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
            className="w-full px-6 py-5 rounded-xl border border-border bg-card text-foreground text-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition resize-none"
          />
          <button
            type="submit"
            className="w-full bg-gold hover:bg-gold-dark text-navy font-bold text-xl px-8 py-5 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-gold/20"
          >
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
