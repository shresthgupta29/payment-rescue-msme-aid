
import React from "react";
import { AlertCircle, Clock, DollarSign, Frown } from "lucide-react";

const ProblemStatementSection = () => {
  const problems = [
    {
      icon: <Clock className="w-10 h-10 text-brand-purple" />,
      title: "Long Payment Cycles",
      description: "Many MSMEs are forced to accept 60-90 day payment terms, stretching resources thin."
    },
    {
      icon: <Frown className="w-10 h-10 text-brand-purple" />,
      title: "Frequent Delays",
      description: "Even after agreed terms, buyers often extend payment timelines without consequences."
    },
    {
      icon: <DollarSign className="w-10 h-10 text-brand-purple" />,
      title: "Cash Flow Crunch",
      description: "Late payments create severe cash flow problems, hampering operations and growth."
    },
    {
      icon: <AlertCircle className="w-10 h-10 text-brand-purple" />,
      title: "Limited Resources",
      description: "Most MSMEs lack the legal knowledge and financial resources to pursue payment claims."
    }
  ];

  return (
    <section id="problem" className="bg-white section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            The <span className="text-brand-purple">Payment Crisis</span> Facing Indian MSMEs
          </h2>
          <p className="text-lg text-gray-700">
            Delayed payments are more than just an inconvenience - they're threatening the very survival 
            of small businesses across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="bg-brand-lightPurple p-3 rounded-full">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-blue mb-2">{problem.title}</h3>
                  <p className="text-gray-700">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-brand-lightBlue rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-brand-blue mb-2">The Hard Reality</h3>
              <p className="text-gray-700">
                According to the MSME Ministry, over ₹10,000 crores in MSME payments are delayed annually, 
                with the average delay exceeding 195 days. This is unacceptable.
              </p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Delayed Payments Impact" 
              className="w-full md:w-1/3 h-48 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatementSection;
