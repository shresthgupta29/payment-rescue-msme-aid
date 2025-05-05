
import React from "react";
import { Users, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const TrustSection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-brand-purple/10 to-brand-orange/10 rounded-2xl p-8 md:p-10 shadow-lg border border-brand-purple/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <div className="inline-flex items-center py-1 px-3 bg-brand-orange/20 text-brand-orange rounded-full text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4 mr-1" /> Early Bird Offer
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
                  We're Helping the First <span className="text-brand-purple">100 MSMEs</span> For FREE
                </h2>
                <p className="text-gray-700 mb-6">
                  As part of our launch, we're waiving our success fee for the first 100 businesses. 
                  Take advantage of this limited-time offer to recover your payments at no cost.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center bg-white py-2 px-4 rounded-lg shadow-sm">
                    <div className="bg-brand-purple/10 p-2 rounded-full mr-3">
                      <Users className="w-5 h-5 text-brand-purple" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">MSMEs Helped</p>
                      <p className="font-semibold">23/100</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-white py-2 px-4 rounded-lg shadow-sm">
                    <div className="bg-brand-orange/10 p-2 rounded-full mr-3">
                      <Star className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Success Rate</p>
                      <p className="font-semibold">87%</p>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }} 
                  className="bg-brand-orange hover:bg-brand-orange/90"
                >
                  Claim Your Free Spot
                </Button>
              </div>
              <div className="hidden md:block md:w-1/3">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-40 h-40 bg-brand-purple opacity-10 rounded-full animate-pulse"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                    alt="Technology helping MSMEs" 
                    className="rounded-lg shadow-lg relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-brand-blue mb-4">Why MSMEs Trust Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="bg-brand-lightPurple h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-brand-blue mb-2">Transparent Process</h4>
                <p className="text-gray-700">Know exactly where your case stands at every step of the recovery process.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="bg-brand-lightPurple h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-brand-blue mb-2">Professional Team</h4>
                <p className="text-gray-700">Our experts have experience in financial and legal matters specific to MSMEs.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="bg-brand-lightPurple h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-brand-blue mb-2">No Recovery, No Fee</h4>
                <p className="text-gray-700">We only charge when we successfully recover your money, aligning our interests with yours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
