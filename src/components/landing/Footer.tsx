import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy border-t border-gold/15 py-12">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold tracking-tight">
              <span className="text-primary-foreground">V</span>
              <span className="text-gradient-gold">Go</span>
            </Link>
            <p className="text-primary-foreground/50 text-sm mt-3 leading-relaxed">
              Tecnologia Corporativa
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Navegação</h4>
            <div className="flex flex-col gap-2">
              <a href="#sobre" className="text-primary-foreground/50 hover:text-gold transition-colors text-sm">Sobre</a>
              <a href="#vantagens" className="text-primary-foreground/50 hover:text-gold transition-colors text-sm">Vantagens</a>
              <a href="#agendar" className="text-primary-foreground/50 hover:text-gold transition-colors text-sm">Agendar</a>
              <a href="#contato" className="text-primary-foreground/50 hover:text-gold transition-colors text-sm">Contato</a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Soluções</h4>
            <div className="flex flex-col gap-2">
              <Link to="/para-empresas" className="text-primary-foreground/50 hover:text-gold transition-colors text-sm">Para Empresas</Link>
              <Link to="/seja-motorista" className="text-primary-foreground/50 hover:text-gold transition-colors text-sm">Seja um Motorista</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Contato</h4>
            <div className="flex flex-col gap-2">
              <a href="mailto:vgomobilidade@gmail.com" className="text-primary-foreground/50 hover:text-gold transition-colors text-sm">
                vgomobilidade@gmail.com
              </a>
              <a href="https://wa.me/5513978180057" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-gold transition-colors text-sm">
                (13) 97818-0057
              </a>
              <a href="https://instagram.com/vg0_013" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-gold transition-colors text-sm flex items-center gap-2">
                <Instagram className="w-4 h-4" /> @vg0_013
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/15 pt-6 text-center">
          <p className="text-primary-foreground/40 text-sm">
            Desde 2021
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
