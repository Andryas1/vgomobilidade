import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import AdvantagesSection from "@/components/landing/AdvantagesSection";
import StatsSection from "@/components/landing/StatsSection";
import JourneySection from "@/components/landing/JourneySection";
import ParallaxSection from "@/components/landing/ParallaxSection";
import PartnersSection from "@/components/landing/PartnersSection";
import BookingForm from "@/components/landing/BookingForm";
import ContactSection from "@/components/landing/ContactSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AdvantagesSection />
      <StatsSection />
      <JourneySection />
      <ParallaxSection />
      <PartnersSection />
      <BookingForm />
      <ContactSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
