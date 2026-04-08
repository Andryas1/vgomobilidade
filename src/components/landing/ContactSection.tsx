import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 md:py-32 bg-navy">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-12">
          <span className="text-gradient-gold">Contato</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center">
              <Phone className="w-6 h-6 text-gold" />
            </div>
            <p className="text-primary-foreground font-semibold">(13) 97818-0057</p>
            <a
              href="https://wa.me/5513978180057"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold text-sm hover:underline"
            >
              Chamar no WhatsApp
            </a>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center">
              <Mail className="w-6 h-6 text-gold" />
            </div>
            <a
              href="mailto:vgomobilidade@gmail.com"
              className="text-primary-foreground font-semibold hover:text-gold transition-colors"
            >
              vgomobilidade@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center">
              <Instagram className="w-6 h-6 text-gold" />
            </div>
            <a
              href="https://instagram.com/vg0_013"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground font-semibold hover:text-gold transition-colors"
            >
              @vg0_013
            </a>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-gold" />
            </div>
            <p className="text-primary-foreground font-semibold">Atendimento Regional</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
