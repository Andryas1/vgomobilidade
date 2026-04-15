import { useState } from "react";
import { Building2, ArrowLeft, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ParaEmpresas = () => {
  const [form, setForm] = useState({ empresa: "", responsavel: "", email: "", telefone: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Para Empresas] Contato de ${form.empresa}`);
    const body = encodeURIComponent(
      `Empresa: ${form.empresa}\nResponsável: ${form.responsavel}\nEmail: ${form.email}\nTelefone: ${form.telefone}\n\nMensagem:\n${form.mensagem}`
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
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-secondary/20 mb-8">
              <Building2 size={40} className="text-secondary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Para <span className="text-gradient-gold">Empresas</span>
            </h1>
            <p className="text-primary-foreground/60">Preencha o formulário e entraremos em contato.</p>
          </div>

          <div className="bg-primary-foreground/5 border border-secondary/20 rounded-2xl p-8 md:p-12">
            {enviado ? (
              <div className="text-center py-12">
                <p className="text-secondary text-xl font-bold mb-2">✅ Formulário aberto no seu email!</p>
                <p className="text-primary-foreground/60">Envie o email para completar a solicitação.</p>
                <button onClick={() => setEnviado(false)} className="mt-6 text-secondary underline">Enviar novamente</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input required placeholder="Nome da Empresa" value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })} className="w-full bg-primary-foreground/10 border border-secondary/20 rounded-xl px-5 py-4 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors" />
                <input required placeholder="Nome do Responsável" value={form.responsavel} onChange={(e) => setForm({ ...form, responsavel: e.target.value })} className="w-full bg-primary-foreground/10 border border-secondary/20 rounded-xl px-5 py-4 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-primary-foreground/10 border border-secondary/20 rounded-xl px-5 py-4 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors" />
                  <input required placeholder="Telefone" value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} className="w-full bg-primary-foreground/10 border border-secondary/20 rounded-xl px-5 py-4 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors" />
                </div>
                <textarea required placeholder="Como podemos ajudar sua empresa?" rows={4} value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })} className="w-full bg-primary-foreground/10 border border-secondary/20 rounded-xl px-5 py-4 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors resize-none" />
                <button type="submit" className="w-full bg-secondary hover:bg-accent text-accent-foreground font-bold py-4 rounded-xl transition-all hover:scale-[1.02]">
                  Enviar Solicitação
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParaEmpresas;
