
import React, { useState } from "react";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    msmeName: "",
    contactPerson: "",
    email: "",
    phone: "",
    buyerName: "",
    amount: "",
    daysPending: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast.success("Your case details have been submitted! We'll contact you within 24 hours.");
      
      // Reset form
      setFormData({
        msmeName: "",
        contactPerson: "",
        email: "",
        phone: "",
        buyerName: "",
        amount: "",
        daysPending: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-brand-purple p-6 md:p-8 flex items-center">
              <FileText className="w-8 h-8 text-white mr-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Get Started – Tell Us Your Case
              </h2>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="msmeName" className="block text-sm font-medium text-gray-700">
                    Name of MSME
                  </label>
                  <Input
                    id="msmeName"
                    name="msmeName"
                    placeholder="Your company name"
                    value={formData.msmeName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">
                    Contact Person
                  </label>
                  <Input
                    id="contactPerson"
                    name="contactPerson"
                    placeholder="Your name"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Your contact number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="buyerName" className="block text-sm font-medium text-gray-700">
                    Buyer's Name/Company
                  </label>
                  <Input
                    id="buyerName"
                    name="buyerName"
                    placeholder="Who owes you money"
                    value={formData.buyerName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                    Approx. Payment Amount Pending (₹)
                  </label>
                  <Input
                    id="amount"
                    name="amount"
                    placeholder="Amount in INR"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="daysPending" className="block text-sm font-medium text-gray-700">
                    Days Since Payment Overdue
                  </label>
                  <Input
                    id="daysPending"
                    name="daysPending"
                    placeholder="Number of days"
                    value={formData.daysPending}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Additional Details (Optional)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Any other relevant information about your case"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-brand-purple hover:bg-brand-purple/90 py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Your Case"}
                </Button>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  By submitting, you agree to our privacy policy and terms of service.
                  We'll respond within 24 hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
