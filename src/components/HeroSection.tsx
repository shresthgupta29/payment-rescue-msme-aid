
import React from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  scrollToContact: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToContact }) => {
  return (
    <section className="bg-gradient-to-br from-brand-lightPurple via-white to-brand-lightBlue section-padding min-h-[90vh] flex items-center">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue leading-tight mb-6">
              Are Delayed Payments Hurting Your Business?
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Every day, thousands of MSMEs in India struggle with late payments, 
              affecting their cash flow and growth. We help you recover what's rightfully yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact} 
                size="lg" 
                className="bg-brand-purple hover:bg-brand-purple/90 text-white font-medium px-8 py-6"
              >
                Get Help Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-brand-purple text-brand-purple hover:bg-brand-purple/10 font-medium px-8 py-6"
                onClick={() => {
                  const problemSection = document.getElementById("problem");
                  if (problemSection) {
                    problemSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Learn More <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-orange opacity-10 rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-purple opacity-10 rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Stressed business owner"
              className="rounded-lg shadow-2xl w-full object-cover z-10 relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
