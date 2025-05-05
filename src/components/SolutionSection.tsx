
import React from "react";
import { Check, FileText, Phone, HandShake } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const solutions = [
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "Case Assessment",
      description: "We collect basic details about your case and the pending payment."
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: "Professional Follow-up",
      description: "Our team initiates formal communication with the buyer on your behalf."
    },
    {
      icon: <HandShake className="w-6 h-6 text-white" />,
      title: "Resolution & Recovery",
      description: "If required, we escalate to legal proceedings and help recover your money."
    }
  ];

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Our <span className="text-brand-purple">Simple</span> Solution
          </h2>
          <p className="text-lg text-gray-700">
            We provide professional help to recover your payments without the hassle and complexity.
            No legal expertise required - we handle everything.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="bg-brand-purple p-4">
                <div className="bg-brand-blue bg-opacity-30 w-12 h-12 rounded-full flex items-center justify-center">
                  {solution.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-blue mb-3">
                  {index + 1}. {solution.title}
                </h3>
                <p className="text-gray-700">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-brand-purple">
          <h3 className="text-2xl font-bold text-brand-blue mb-4">How We're Different</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-brand-purple rounded-full p-1 mr-3 mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">No Upfront Costs</h4>
                <p className="text-gray-700">We only charge a small percentage of the successfully recovered amount.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-brand-purple rounded-full p-1 mr-3 mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Expertise at Your Service</h4>
                <p className="text-gray-700">Our team combines financial and legal expertise to maximize recovery chances.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-brand-purple rounded-full p-1 mr-3 mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Fully Managed Process</h4>
                <p className="text-gray-700">From documentation to resolution, we handle the entire process for you.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Button 
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }} 
              className="bg-brand-purple hover:bg-brand-purple/90"
            >
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
