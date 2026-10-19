import React from 'react';
import { Search, CheckCircle2, MessageSquare, Truck, ArrowRight } from 'lucide-react';

export const OrderSupport: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Explore Our Products',
      description: 'Explore the full listing of dental appliances, prosthetics, and restorative products.',
      icon: <Search className="w-5 h-5 text-white stroke-[1.5]" />,
    },
    {
      step: '02',
      title: 'Select the Required Product',
      description: 'Identify the exact item name and category matching your clinical prescription.',
      icon: <CheckCircle2 className="w-5 h-5 text-white stroke-[1.5]" />,
    },
    {
      step: '03',
      title: 'Contact Us to Confirm Details',
      description: 'Contact us directly to confirm product information, availability, and order arrangements.',
      icon: <MessageSquare className="w-5 h-5 text-white stroke-[1.5]" />,
    },
  ];

  return (
    <section id="order-support" className="py-20 md:py-28 bg-[#0D0F13] border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#A0A5AE] mb-2">
            <span>Enquiry Protocol</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Outfit'] text-white tracking-tight">
            Order Enquiry Process
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#8E95A2] leading-relaxed font-light">
            Our streamlined three-step enquiry procedure ensures effortless coordination between your dental clinic and our laboratory.
          </p>
        </div>

        {/* 3 Simple Steps */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-[#111317] p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-['Outfit'] font-bold text-2xl text-[#3A3E47]">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8E95A2] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pickup & Delivery Coordination Notice */}
        <div className="mt-8 p-6 rounded-xl bg-[#15171B] border border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#C0C4CA]" />
                <span>Pickup and Delivery Coordination</span>
              </h4>
              <p className="text-xs text-[#8E95A2] max-w-2xl font-light">
                Pickup and delivery coordination is available as an enquiry option during order discussion. Contact Saravana Kumar to coordinate logistical arrangements according to your clinic schedule.
              </p>
            </div>
            <a
              href="#contact"
              className="metallic-silver-badge inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white hover:text-black hover:bg-white rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>Coordinate via Contact Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
