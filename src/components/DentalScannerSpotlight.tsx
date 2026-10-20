import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ScanLine, ArrowRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { AppTheme } from '../types';

interface DentalScannerSpotlightProps {
  onNavigateToProducts?: (category?: string) => void;
  theme?: AppTheme;
}

export const DentalScannerSpotlight: React.FC<DentalScannerSpotlightProps> = ({
  onNavigateToProducts,
  theme = 'obsidian',
}) => {
  const isLight = theme === 'pearl-white';
  const whatsappUrl =
    'https://wa.me/917639664119?text=' +
    encodeURIComponent(
      'Hello Saravana Kumar, I would like to enquire about Dental Scanner Solutions at Dental Lab Connect.'
    );

  return (
    <section
      id="scanner"
      className="relative py-12 sm:py-16 overflow-hidden border-t border-b transition-colors duration-300"
      style={{
        backgroundColor: isLight ? '#F7F8FA' : '#0B0D11',
        borderColor: isLight ? '#E5E7EB' : 'rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[120px] opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, rgba(192, 196, 202, 0.15) 50%, transparent 80%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`rounded-3xl border p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl ${
            isLight
              ? 'bg-white border-[#DDE0E5] shadow-[0_20px_50px_rgba(0,0,0,0.06)]'
              : 'bg-gradient-to-br from-[#12141A] via-[#0E1015] to-[#12141A] border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.85)]'
          }`}
        >
          {/* Subtle top edge glow */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div
                className={`relative rounded-2xl overflow-hidden border shadow-xl group aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center ${
                  isLight
                    ? 'bg-[#F0F2F5] border-[#DDE0E5]'
                    : 'bg-[#08090B] border-white/10'
                }`}
              >
                <img
                  src="/images/categories/dental-scanner.jpg"
                  alt="Advanced intraoral dental scanner wand on metallic stand in modern laboratory"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/categories/dental-scanner-alt.jpg';
                  }}
                />

                {/* Vignette & ambient depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090B]/75 via-transparent to-black/20 pointer-events-none" />

                {/* Overlaid Badges */}
                <div className="absolute top-3 left-3 z-10 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-black/80 text-white border border-white/20 backdrop-blur-md shadow-md">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    Digital Scanning
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[9px] font-mono font-bold uppercase tracking-wider bg-white text-black shadow-md">
                    New Solution
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-[11px] font-mono text-white/90 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="truncate">Intraoral Scanning Device</span>
                  <span className="text-white font-semibold shrink-0">Available on Enquiry</span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5 order-1 lg:order-2 text-left">
              {/* Header Tags */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                  isLight
                    ? 'bg-[#F0F2F5] border border-[#CCD1DA] text-[#17191D]'
                    : 'bg-white/10 border border-white/20 text-white'
                }`}>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Featured Innovation</span>
                </span>
                <span
                  className={`text-xs font-mono uppercase tracking-widest ${
                    isLight ? 'text-[#5A6270]' : 'text-[#8E95A2]'
                  }`}
                >
                  Digital Impression Workflow
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2.5">
                <h2
                  className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Outfit'] tracking-tight ${
                    isLight ? 'text-[#17191D]' : 'text-white'
                  }`}
                >
                  Dental Scanner Solutions
                </h2>
                <p
                  className={`text-sm sm:text-base leading-relaxed font-light max-w-2xl ${
                    isLight ? 'text-[#525866]' : 'text-[#9AA2B0]'
                  }`}
                >
                  Advanced dental scanning solutions for accurate digital impressions and streamlined dental laboratory workflows.
                </p>
              </div>

              {/* 3 Core Value Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {[
                  {
                    title: 'Accurate Digital Data',
                    desc: 'High precision digital impressions reduce chairside retakes.',
                  },
                  {
                    title: 'Direct Lab Sync',
                    desc: 'Immediate CAD/CAM data transfer into our manufacturing pipeline.',
                  },
                  {
                    title: 'Hands-on Guidance',
                    desc: 'Direct coordinator assistance for smooth clinical onboarding.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className={`p-3 rounded-xl border transition-colors ${
                      isLight
                        ? 'bg-[#F9FAFB] border-[#E5E7EB]'
                        : 'bg-white/[0.03] border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-1">
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isLight ? 'text-[#17191D]' : 'text-white'}`} />
                      <span className={isLight ? 'text-[#17191D]' : 'text-white'}>{item.title}</span>
                    </div>
                    <p className={`text-[11px] leading-snug ${isLight ? 'text-[#6B7280]' : 'text-[#8E95A2]'}`}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Action Row */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-lg active:scale-[0.98] ${
                    isLight
                      ? 'bg-[#17191D] hover:bg-[#2C313A] text-white shadow-[0_4px_16px_rgba(23,25,29,0.2)]'
                      : 'metallic-button text-[#08090B]'
                  }`}
                  aria-label="Enquire about Dental Scanner Solutions on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>

                {onNavigateToProducts && (
                  <button
                    type="button"
                    onClick={() => onNavigateToProducts('Dental Scanner Solutions')}
                    className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border active:scale-[0.98] ${
                      isLight
                        ? 'bg-white hover:bg-[#F5F6F8] text-[#17191D] border-[#DDE0E5]'
                        : 'bg-white/5 hover:bg-white/10 text-white border-white/15'
                    }`}
                  >
                    <Layers className="w-4 h-4 text-white" />
                    <span>View Scanner Products</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
