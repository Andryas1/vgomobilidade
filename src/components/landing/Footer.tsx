import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy border-t border-gold/15 py-8">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-primary-foreground/50 text-sm">
          © 2026 VGo Mobilidade Corporativa. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/vg0_013"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/50 hover:text-gold transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="mailto:vgomobilidade@gmail.com"
            className="text-primary-foreground/50 hover:text-gold transition-colors text-sm"
          >
            vgomobilidade@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
