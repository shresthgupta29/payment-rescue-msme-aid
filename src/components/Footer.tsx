
import React from "react";
import { Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Payment<span className="text-brand-purple">Rescue</span></h3>
            <p className="text-gray-300 mb-4">
              We help MSMEs in India recover delayed payments through effective legal aid and professional support.
            </p>
            <p className="text-sm text-gray-400">
              Made with ❤️ for India's MSMEs
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="mailto:contact@paymentrescue.in" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                contact@paymentrescue.in
              </a>
              <a href="https://wa.me/919876543210" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <MessageSquare className="w-5 h-5 mr-2" />
                +91 98765 43210
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-300 mb-4">
              Have questions about our services? Reach out to us directly for a quick response.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue">
                <Mail className="w-4 h-4 mr-2" /> Email Us
              </Button>
              <Button variant="outline" className="border-brand-purple bg-brand-purple text-white hover:bg-brand-purple/80">
                <MessageSquare className="w-4 h-4 mr-2" /> WhatsApp
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} PaymentRescue. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
