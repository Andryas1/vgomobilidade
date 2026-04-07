import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Vantagens", href: "#vantagens" },
    { label: "Agendar", href: "#agendar" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-bold tracking-tight">
          <span className="text-primary-foreground">V</span>
          <span className="text-gradient-gold">Go</span>
          <span className="text-primary-foreground text-base font-light ml-2 hidden sm:inline">Mobilidade</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-primary-foreground/80 hover:text-gold transition-colors font-medium text-sm uppercase tracking-wider"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#agendar"
            className="bg-gold hover:bg-gold-dark text-navy font-bold px-6 py-3 rounded-lg transition-all hover:scale-105"
          >
            Agendar Corrida
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-gold/20 px-6 pb-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-primary-foreground/80 hover:text-gold transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#agendar"
            onClick={() => setOpen(false)}
            className="block mt-3 text-center bg-gold hover:bg-gold-dark text-navy font-bold px-6 py-3 rounded-lg transition-all"
          >
            Agendar Corrida
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
