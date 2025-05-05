
import React from "react";
import { ArrowDown, ArrowRight, Check, FileText, Handshake, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import HeroSection from "@/components/HeroSection";
import ProblemStatementSection from "@/components/ProblemStatementSection";
import SolutionSection from "@/components/SolutionSection";
import TrustSection from "@/components/TrustSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 shadow-sm py-4">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-brand-blue">Payment<span className="text-brand-purple">Rescue</span></span>
            <span className="text-xs md:text-sm text-gray-600 ml-2">by Jigyasa Labs</span>
          </div>
          <Button onClick={scrollToContact} variant="default" className="bg-brand-purple hover:bg-brand-purple/90">
            Get Help Now
          </Button>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection scrollToContact={scrollToContact} />

        {/* Problem Statement Section */}
        <ProblemStatementSection />

        {/* Our Solution Section */}
        <SolutionSection />

        {/* Trust Section */}
        <TrustSection />

        {/* Contact Form Section */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
