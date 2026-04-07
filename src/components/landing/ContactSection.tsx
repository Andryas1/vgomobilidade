import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 md:py-32 bg-navy">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-12">
          <span className="text-gradient-gold">Contato</span>
        </h2>
        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center">
              <Phone className="w-6 h-6 text-gold" />
            </div>
            <p className="text-primary-foreground font-semibold">(13) 97818-0057</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center">
              <Mail className="w-6 h-6 text-gold" />
            </div>
            <p className="text-primary-foreground font-semibold">contato@vgo.com.br</p>
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
