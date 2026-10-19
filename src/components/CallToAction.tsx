import React from 'react';
import { MessageCircle, Phone, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-[#0D0F13] to-[#08090B] border-t border-b border-white/10 relative overflow-hidden">
      {/* Background Sheen */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(192,196,202,0.1)_0%,transparent_70%)] blur-2xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#C0C4CA]">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>Professional Dental Laboratory Support</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Outfit'] text-white tracking-tight [text-wrap:balance]">
          Looking for the Right Dental Solution?
        </h2>

        <p className="text-base sm:text-lg text-[#A0A5AE] leading-relaxed max-w-2xl mx-auto font-light">
          Connect directly with Saravana Kumar to discuss patient case requirements, custom appliance configurations, and prompt order coordination for your dental clinic.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/917639664119?text=Hello%20Saravana%20Kumar%2C%20I%20am%20looking%20for%20dental%20laboratory%20solutions%20for%20my%20clinic."
            target="_blank"
            rel="noopener noreferrer"
            className="metallic-button inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer shadow-lg"
          >
            <MessageCircle className="w-4 h-4 text-[#08090B]" />
            <span>WhatsApp Enquiry</span>
            <ArrowRight className="w-4 h-4 text-[#08090B]" />
          </a>

          <a
            href="tel:+917639664119"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/15 rounded-lg transition-all duration-200 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#C0C4CA]" />
            <span>Call Saravana Kumar: 7639664119</span>
          </a>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs font-mono text-[#8E95A2]">
          <span>Direct Coordinator Support</span>
          <span className="text-white/20">·</span>
          <span>Fast Turnaround Consultation</span>
          <span className="text-white/20">·</span>
          <span>Exclusively for Dentists & Clinics</span>
        </div>
      </div>
    </section>
  );
};
