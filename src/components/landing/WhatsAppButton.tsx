import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5513978180057"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-primary-foreground" />
    </a>
  );
};

export default WhatsAppButton;
