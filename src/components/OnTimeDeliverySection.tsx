import React from 'react';
import { motion } from 'motion/react';
import { Clock, MessageCircle, CalendarClock, Send, PhoneCall, Sparkles, CheckCircle } from 'lucide-react';

export const OnTimeDeliverySection: React.FC = () => {
  const deliveryPoints = [
    {
      icon: <Clock className="w-5 h-5 text-white stroke-[1.5]" />,
      title: 'Clear Communication',
      description: 'Clear communication about order status and expected completion.',
    },
    {
      icon: <CalendarClock className="w-5 h-5 text-white stroke-[1.5]" />,
      title: 'Careful Planning',
      description: 'Careful planning of orders and delivery schedules.',
    },
    {
      icon: <Send className="w-5 h-5 text-white stroke-[1.5]" />,
      title: 'Timely Dispatch',
      description: 'Timely dispatch based on the agreed turnaround time.',
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-white stroke-[1.5]" />,
      title: 'Direct WhatsApp Updates',
      description: 'Direct WhatsApp communication for enquiries and order updates.',
    },
  ];

  return (
    <section id="delivery" className="py-20 md:py-28 bg-[#08090B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Header & Narrative + 4 Delivery Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Suggested Website Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#C0C4CA]">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Dependable Turnaround</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Outfit'] text-white tracking-tight leading-tight">
              Reliable Service.{' '}
              <span className="metallic-text-gradient">On-Time Delivery.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#C0C4CA] leading-relaxed font-light">
              We understand how important timely dental laboratory work is to your practice. Dental Lab Connect focuses on clear communication, efficient order handling, and dependable turnaround times to help dental professionals plan their work with confidence.
            </p>

            <div className="p-4 rounded-xl bg-[#111317] border border-white/10 text-xs text-[#8E95A2] space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#A0A5AE] block">
                Scheduling Policy
              </span>
              <p>
                Turnaround schedules are tailored to case complexity and confirmed directly upon model evaluation and clinical prescription review.
              </p>
            </div>
          </motion.div>

          {/* Right Column: 4 Delivery Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deliveryPoints.map((point, idx) => (
                <div
                  key={point.title}
                  className="p-5 sm:p-6 rounded-2xl bg-[#121419] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group hover:shadow-[0_8px_24px_rgba(0,0,0,0.7)]"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C0C4CA] group-hover:scale-105 transition-transform">
                      {point.icon}
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8E95A2] leading-relaxed font-light">
                      {point.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-[#8E95A2]">
                    <CheckCircle className="w-3 h-3 text-[#C0C4CA]" />
                    <span>Point 0{idx + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 5. Contact and Enquiry Call-To-Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 sm:mt-20 rounded-3xl bg-gradient-to-r from-[#14171E] via-[#1A1D26] to-[#14171E] border border-white/15 p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-3 text-center md:text-left max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C0C4CA] px-3 py-1 rounded-full bg-white/5 border border-white/10 inline-block">
              Dental Laboratory Partnership
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white tracking-tight">
              Looking for Quality Dental Laboratory Support?
            </h3>
            <p className="text-sm sm:text-base text-[#C0C4CA] leading-relaxed font-light">
              Contact Dental Lab Connect to discuss your requirements, product options, and expected delivery schedule.
            </p>
            <div className="text-xs font-mono text-[#8E95A2] pt-1">
              Direct Coordinator: <span className="text-white font-semibold">Saravana Kumar</span> · Phone & WhatsApp: <span className="text-white font-semibold">7639664119</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0">
            <a
              href="https://wa.me/917639664119?text=Hello%20Dental%20Lab%20Connect%2C%20I%20am%20contacting%20you%20to%20discuss%20my%20practice%20requirements%2C%20product%20options%2C%20and%20expected%20delivery%20schedule."
              target="_blank"
              rel="noopener noreferrer"
              className="metallic-button inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold cursor-pointer shadow-lg w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 text-[#08090B]" />
              <span>Enquire on WhatsApp</span>
            </a>

            <a
              href="tel:+917639664119"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono font-semibold text-white transition-colors w-full sm:w-auto"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C0C4CA]" />
              <span>7639664119</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
