import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Microscope, Layers, Clock, Sparkles, ArrowLeft } from 'lucide-react';

interface QualitySectionProps {
  onBackToHome?: () => void;
}

export const QualitySection: React.FC<QualitySectionProps> = ({ onBackToHome }) => {
  const practices = [
    {
      num: '01',
      title: 'Precision-focused fabrication',
      description: 'Each restoration or appliance is fabricated to the case details provided, with careful attention to fit and accuracy.',
      icon: <Layers className="w-5 h-5 text-white stroke-[1.5]" />,
      tag: 'Fit & Accuracy',
    },
    {
      num: '02',
      title: 'Careful finishing',
      description: 'Work is finished and polished with care so that it is ready for clinical use.',
      icon: <Microscope className="w-5 h-5 text-white stroke-[1.5]" />,
      tag: 'Clinical Polish',
    },
    {
      num: '03',
      title: 'Quality inspection',
      description: 'Completed work is inspected before it leaves the laboratory.',
      icon: <ShieldCheck className="w-5 h-5 text-white stroke-[1.5]" />,
      tag: 'Bench Verification',
    },
    {
      num: '04',
      title: 'Coordinated delivery',
      description: 'Delivery is coordinated with you so that cases are dispatched within agreed timelines.',
      icon: <Clock className="w-5 h-5 text-white stroke-[1.5]" />,
      tag: 'On-Time Dispatch',
    },
  ];

  return (
    <section id="quality" className="py-20 sm:py-24 bg-[#0D0F13] border-t border-b border-white/10 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,rgba(13,15,19,0)_70%)] blur-2xl" />
      </div>

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
              <span className="text-white font-semibold">Quality & Delivery</span>
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#C0C4CA]">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Our Approach to Laboratory Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Outfit'] text-white tracking-tight">
            Quality & Delivery
          </h2>
          <p className="text-sm sm:text-base text-[#8E95A2] leading-relaxed font-light">
            Every case is handled with attention to detail from the first step to the final dispatch. Our approach to laboratory work is built around four core practices:
          </p>
        </div>

        {/* 4 Practices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {practices.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-[#14171D] p-6 rounded-2xl border border-white/10 hover:border-white/25 transition-all duration-200 flex flex-col justify-between group hover:shadow-[0_12px_28px_rgba(0,0,0,0.7)]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold font-['Outfit'] text-white/40 group-hover:text-white transition-colors">
                    {item.num}
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-[#8E95A2] uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/5">
                    {item.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold font-['Outfit'] text-white group-hover:text-[#E5E7EB] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#8E95A2] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#646A77]">
                <span>Standard Practice</span>
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-[#C0C4CA]">
                  {item.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
