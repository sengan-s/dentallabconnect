import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, Layers, ClipboardList, UserCheck, ShieldCheck, ArrowLeft } from 'lucide-react';
import { DentalVisual } from './DentalVisual';
import { RealisticDentalImage } from './RealisticDentalImage';

interface AboutSectionProps {
  onBackToHome?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBackToHome }) => {
  return (
    <section id="about" className="py-24 sm:py-28 bg-[#0D0F13] border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {onBackToHome && (
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
            <button
              type="button"
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-[#E5E7EB] hover:text-white transition-all cursor-pointer group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#8E95A2]">
              <button
                type="button"
                onClick={onBackToHome}
                className="text-[#C0C4CA] hover:text-white hover:underline cursor-pointer"
              >
                Home
              </button>
              <span>/</span>
              <span className="text-white font-semibold">About Us</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Laboratory Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-[#15171B] border border-white/10 p-6 shadow-2xl">
              <div className="mb-4 flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#A0A5AE] tracking-widest">
                  Dental Laboratory Manufacturing
                </span>
                <span className="text-xs text-[#C0C4CA] font-mono">B2B Dental Laboratory</span>
              </div>

              {/* Lab Visual representation */}
              <div className="h-64 sm:h-72 w-full rounded-xl overflow-hidden shadow-inner">
                <RealisticDentalImage type="about" className="w-full h-full" badge="Dental Lab Workbench" />
              </div>

              <div className="mt-4 p-3.5 rounded-lg bg-black/50 border border-white/5 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#8E95A2] text-[10px] block uppercase font-mono">
                    Laboratory Lead
                  </span>
                  <span className="text-sm font-bold text-white">Saravana Kumar</span>
                </div>
                <div className="text-right">
                  <span className="text-[#8E95A2] text-[10px] block uppercase font-mono">
                    Direct Coordination
                  </span>
                  <span className="text-sm font-mono text-[#C0C4CA]">7639664119</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Concise Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#A0A5AE] mb-3">
                <span>About Dental Lab Connect</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Outfit'] text-white tracking-tight leading-tight">
                Dedicated Dental Laboratory Manufacturing
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#C0C4CA] leading-relaxed font-light">
              Dental Lab Connect is a specialized dental laboratory that manufactures high-precision dental models, crowns, bridges, dentures, and custom dental appliances for dentists and dental clinics. Led by dental laboratory specialist Saravana Kumar, we focus on meticulous bench craftsmanship, accurate margins, lifelike aesthetics, and reliable turnaround.
            </p>

            {/* Structured Capability Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#15171B] border border-white/5 space-y-2">
                <div className="w-8 h-8 rounded-md bg-white/5 text-[#E5E7EB] flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white">
                  For Dentists & Clinics
                </h3>
                <p className="text-xs text-[#8E95A2] leading-relaxed">
                  Direct B2B dental laboratory partnership for general dentists, prosthodontists, and orthodontists.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#15171B] border border-white/5 space-y-2">
                <div className="w-8 h-8 rounded-md bg-white/5 text-[#E5E7EB] flex items-center justify-center">
                  <ClipboardList className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white">
                  Full Laboratory Scope
                </h3>
                <p className="text-xs text-[#8E95A2] leading-relaxed">
                  Custom plaster casts, articulated stone models, fixed crowns, zirconia bridges, dentures, and wirework.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#15171B] border border-white/5 space-y-2">
                <div className="w-8 h-8 rounded-md bg-white/5 text-[#E5E7EB] flex items-center justify-center">
                  <UserCheck className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white">
                  Direct Lab Case Discussion
                </h3>
                <p className="text-xs text-[#8E95A2] leading-relaxed">
                  Speak directly with Saravana Kumar to verify model specifications, tooth setup, and case requirements.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#15171B] border border-white/5 space-y-2">
                <div className="w-8 h-8 rounded-md bg-white/5 text-[#E5E7EB] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white">
                  Quality & Passive Fit
                </h3>
                <p className="text-xs text-[#8E95A2] leading-relaxed">
                  Each appliance is checked under magnification against master articulated casts before delivery.
                </p>
              </div>
            </div>

            {/* Quick Contact Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="tel:+917639664119"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-mono font-semibold text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C0C4CA]" />
                <span>Call: 7639664119</span>
              </a>

              <a
                href="https://wa.me/917639664119?text=Hello%20Saravana%20Kumar%2C%20I%20am%20contacting%20you%20regarding%20Dental%20Lab%20Connect."
                target="_blank"
                rel="noopener noreferrer"
                className="metallic-button inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#08090B]" />
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
