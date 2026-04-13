import { useState } from "react";
import { Car, ArrowLeft, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const SejaMotorista = () => {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", cidade: "", experiencia: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Seja um Motorista] ${form.nome}`);
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nEmail: ${form.email}\nTelefone: ${form.telefone}\nCidade: ${form.cidade}\nExperiência: ${form.experiencia}\n\nMensagem:\n${form.mensagem}`
    );
    window.location.href = `mailto:vgomobilidade@gmail.com?subject=${subject}&body=${body}`;
    setEnviado(true);
  };

  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      <div className="bg-primary border-b border-secondary/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors">
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Voltar</span>
          </Link>
          <Link to="/" className="text-2xl font-bold tracking-tight">
            <span className="text-primary-foreground">V</span>
            <span className="text-gradient-gold">Go</span>
          </Link>
          <div className="w-16" />
        </div>
      </div>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-secondary/20 mb-8">
            <Car size={40} className="text-secondary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Seja um <span className="text-gradient-gold">Motorista VGo</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Faça parte da nossa equipe de motoristas parceiros. Ganhe mais com corridas corporativas e tenha estabilidade.
          </p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-8">
          {[
            { title: "Ganhos Atrativos", desc: "Corridas corporativas com valores acima da média do mercado." },
            { title: "Agenda Flexível", desc: "Você escolhe seus horários e regiões de atuação." },
            { title: "Suporte Completo", desc: "Treinamento, suporte 24h e ferramentas para facilitar seu dia a dia." },
          ].map((item) => (
            <div key={item.title} className="bg-primary-foreground/5 border border-secondary/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-primary-foreground/5 border border-secondary/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-2">Cadastre-se como motorista</h2>
            <p className="text-primary-foreground/60 mb-8">Preencha seus dados e entraremos em contato.</p>

            {enviado ? (
              <div className="text-center py-12">
                <p className="text-secondary text-xl font-bold mb-2">✅ Formulário aberto no seu email!</p>
                <p className="text-primary-foreground/60">Envie o email para completar o cadastro.</p>
                <button onClick={() => setEnviado(false)} className="mt-6 text-secondary underline">Enviar novamente</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input required placeholder="Nome Completo" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} className="w-full bg-primary-foreground/10 border border-secondary/20 rounded-xl px-5 py-4 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-primary-foreground/10 border border-secondary/20 rounded-xl px-5 py-4 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors" />
                  <input required placeholder="Telefone" value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} className="w-full bg-primary-foreground/10 border border-secondary/20 rounded-xl px-5 py-4 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors" />
                </div>
                <input required placeholder="Cidade" value={form.cidade} onChange={(e) => setForm({ ...form, cidade: e.target.value })} className="w-full bg-primary-foreground/10 border border-secondary/20 rounded-xl px-5 py-4 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors" />
                <input placeholder="Experiência como motorista (ex: 3 anos)" value={form.experiencia} onChange={(e) => setForm({ ...form, experiencia: e.target.value })} className="w-full bg-primary-foreground/10 border border-secondary/20 rounded-xl px-5 py-4 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors" />
                <textarea placeholder="Alguma observação?" rows={3} value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })} className="w-full bg-primary-foreground/10 border border-secondary/20 rounded-xl px-5 py-4 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors resize-none" />
                <button type="submit" className="w-full bg-secondary hover:bg-accent text-accent-foreground font-bold py-4 rounded-xl transition-all hover:scale-[1.02]">
                  Quero ser Motorista
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="text-primary-foreground/50 mb-4">Ou entre em contato diretamente:</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/70">
            <a href="mailto:vgomobilidade@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail size={18} /> vgomobilidade@gmail.com
            </a>
            <a href="https://wa.me/5513978180057" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SejaMotorista;
