import React from 'react';
import { motion } from 'motion/react';
import { 
  Layers, 
  Send, 
  MessageSquare, 
  ClipboardCheck, 
  MessageCircle, 
  Phone,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { AppTheme } from '../types';

interface HowWeWorkSectionProps {
  onEnquire?: () => void;
  onExploreProducts?: () => void;
  theme?: AppTheme;
}

interface StepItem {
  step: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
}

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({ 
  onExploreProducts, 
  theme = 'obsidian' 
}) => {
  const isLight = theme === 'pearl-white';

  const steps: StepItem[] = [
    {
      step: '01',
      number: 'Step 01',
      title: 'Explore Products',
      description: 'Browse our dental laboratory products and solutions.',
      tag: 'Browse Catalogue',
      icon: <Layers className="w-5 h-5 text-[#C0C4CA]" />,
    },
    {
      step: '02',
      number: 'Step 02',
      title: 'Send Your Enquiry',
      description: 'Contact us directly through WhatsApp or phone.',
      tag: 'Direct Contact',
      icon: <Send className="w-5 h-5 text-[#C0C4CA]" />,
    },
    {
      step: '03',
      number: 'Step 03',
      title: 'Discuss Your Requirements',
      description: 'Share your needs and confirm product details with us.',
      tag: 'Case Discussion',
      icon: <MessageSquare className="w-5 h-5 text-[#C0C4CA]" />,
    },
    {
      step: '04',
      number: 'Step 04',
      title: 'Order Coordination',
      description: 'Coordinate availability, pricing, and order details directly.',
      tag: 'Order & Delivery',
      icon: <ClipboardCheck className="w-5 h-5 text-[#C0C4CA]" />,
    },
  ];

  const whatsappUrl =
    'https://wa.me/917639664119?text=' +
    encodeURIComponent(
      'Hello Saravana Kumar, I would like to enquire about ordering and workflow coordination at Dental Lab Connect.'
    );

  return (
    <section 
      id="workflow" 
      className={`py-16 sm:py-24 border-t border-b relative overflow-hidden transition-colors duration-300 ${
        isLight 
          ? 'bg-[#F9FAFB] border-[#E5E7EB]' 
          : 'bg-[#0A0C0F] border-white/10'
      }`}
    >
      {/* Background Studio Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[420px] rounded-full blur-[140px] opacity-20 pointer-events-none"
          style={{
            background: isLight 
              ? 'radial-gradient(circle, rgba(23, 25, 29, 0.08) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(192, 196, 202, 0.15) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3.5">
          <div 
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono border backdrop-blur-sm shadow-xs ${
              isLight 
                ? 'bg-white border-[#DDE0E5] text-[#333742]' 
                : 'bg-white/5 border-white/10 text-[#C0C4CA]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Dedicated Process Module</span>
          </div>

          <h2 
            className={`text-2xl sm:text-3xl md:text-4xl font-extrabold font-['Outfit'] tracking-tight ${
              isLight ? 'text-[#17191D]' : 'text-white'
            }`}
          >
            How We Work
          </h2>

          <p 
            className={`text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto ${
              isLight ? 'text-[#525866]' : 'text-[#8E95A2]'
            }`}
          >
            A streamlined 4-step partnership workflow designed to connect dental practices directly with our laboratory coordinators from initial browsing to final delivery.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-200 border group shadow-lg ${
                isLight
                  ? 'bg-white border-[#DDE0E5] hover:border-[#B0B5C0] hover:shadow-xl'
                  : 'bg-[#111317] border-white/10 hover:border-white/25 hover:bg-[#14161C] shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
              }`}
            >
              {/* Top Accent Strip */}
              <div className="flex items-center justify-between mb-6">
                <div 
                  className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border tracking-wider ${
                    isLight 
                      ? 'bg-[#F3F4F6] border-[#E5E7EB] text-[#17191D]' 
                      : 'bg-white/5 border-white/10 text-white'
                  }`}
                >
                  {item.number}
                </div>

                <div 
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs ${
                    isLight 
                      ? 'bg-[#F9FAFB] border-[#E5E7EB] text-[#17191D]' 
                      : 'bg-white/[0.06] border-white/15 text-[#C0C4CA] group-hover:border-white/30'
                  }`}
                >
                  {item.icon}
                </div>
              </div>

              {/* Step Content */}
              <div className="space-y-2.5 flex-1 mb-6">
                <div className={`text-[10px] font-mono uppercase tracking-widest font-semibold ${isLight ? 'text-[#5A6270]' : 'text-neutral-300'}`}>
                  {item.tag}
                </div>
                <h3 
                  className={`text-lg sm:text-xl font-bold font-['Outfit'] leading-snug tracking-tight ${
                    isLight ? 'text-[#17191D]' : 'text-white'
                  }`}
                >
                  {item.title}
                </h3>
                <p 
                  className={`text-xs sm:text-sm font-light leading-relaxed ${
                    isLight ? 'text-[#525866]' : 'text-[#8E95A2]'
                  }`}
                >
                  {item.description}
                </p>
              </div>

              {/* Card Footer Indicator */}
              <div 
                className={`pt-3 border-t flex items-center justify-between text-[11px] font-mono ${
                  isLight ? 'border-[#E5E7EB] text-[#8E95A2]' : 'border-white/5 text-[#5A6270]'
                }`}
              >
                <span>Step {item.step} of 04</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-semibold">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp & Case Coordination Action Banner */}
        <div 
          className={`mt-10 sm:mt-14 p-6 sm:p-8 rounded-3xl border flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden backdrop-blur-md ${
            isLight
              ? 'bg-white border-[#DDE0E5] shadow-[0_12px_40px_rgba(0,0,0,0.06)]'
              : 'bg-gradient-to-r from-[#12141A] via-[#161821] to-[#12141A] border-white/15 shadow-[0_16px_50px_rgba(0,0,0,0.85)]'
          }`}
        >
          <div className="space-y-1.5 text-center md:text-left max-w-xl">
            <div className={`inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest font-semibold ${isLight ? 'text-[#5A6270]' : 'text-neutral-300'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>Direct Laboratory Coordination</span>
            </div>
            <h4 
              className={`text-lg sm:text-xl font-bold font-['Outfit'] ${
                isLight ? 'text-[#17191D]' : 'text-white'
              }`}
            >
              Ready to Discuss a Dental Case or Order?
            </h4>
            <p 
              className={`text-xs sm:text-sm font-light leading-relaxed ${
                isLight ? 'text-[#525866]' : 'text-[#9AA2B0]'
              }`}
            >
              Reach out directly to Saravana Kumar on WhatsApp or telephone to coordinate specifications, scanner files, and production timelines.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            {/* Clear WhatsApp Enquiry Button with metallic styling */}
            <a
              id="how-we-work-whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-lg active:scale-[0.98] ${
                isLight
                  ? 'bg-[#17191D] hover:bg-[#2C313A] text-white shadow-[0_4px_16px_rgba(23,25,29,0.2)]'
                  : 'metallic-button text-[#08090B]'
              }`}
              aria-label="Enquire about How We Work on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Enquire on WhatsApp</span>
            </a>

            {/* Direct Phone Call */}
            <a
              href="tel:+917639664119"
              className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border active:scale-[0.98] ${
                isLight
                  ? 'bg-[#F9FAFB] hover:bg-[#F3F4F6] text-[#17191D] border-[#DDE0E5]'
                  : 'bg-white/5 hover:bg-white/10 text-white border-white/15'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C0C4CA]" />
              <span>+91 76396 64119</span>
            </a>

            {onExploreProducts && (
              <button
                type="button"
                onClick={onExploreProducts}
                className={`inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer opacity-80 hover:opacity-100 ${
                  isLight ? 'text-[#17191D]' : 'text-white'
                }`}
              >
                <span>Browse Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
