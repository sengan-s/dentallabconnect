import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  CalendarCheck2,
  Truck,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { RealisticDentalImage } from './RealisticDentalImage';

interface QualityDeliverySectionProps {
  onEnquire?: () => void;
}

export const QualityDeliverySection: React.FC<QualityDeliverySectionProps> = ({ onEnquire }) => {
  /* ── Three highlight cards ─────────────────────────────────────────── */
  const highlights = [
    {
      id: 'quality',
      icon: <ShieldCheck className="w-6 h-6 text-white stroke-[1.5]" />,
      label: 'Craftsmanship',
      title: 'Quality You Can Trust',
      description:
        'We focus on precision, attention to detail, careful finishing, and quality checks for every completed dental laboratory product.',
      checks: ['Precision fabrication', 'Careful finishing', 'Pre-dispatch quality check'],
      image: 'Reliance Zirconia',
      badge: 'Quality Craftsmanship',
    },
    {
      id: 'completion',
      icon: <CalendarCheck2 className="w-6 h-6 text-white stroke-[1.5]" />,
      label: 'Scheduling',
      title: 'On-Time Completion',
      description:
        'We plan and coordinate each order carefully to complete work within the agreed timeframe and keep customers informed about progress.',
      checks: ['Agreed turnaround planning', 'Progress communication', 'Schedule-based dispatch'],
      image: 'CAD/CAM Ceramic',
      badge: 'On-Time Completion',
    },
    {
      id: 'delivery',
      icon: <Truck className="w-6 h-6 text-white stroke-[1.5]" />,
      label: 'Logistics',
      title: 'Reliable Delivery Service',
      description:
        'We coordinate delivery of completed dental laboratory products and communicate expected delivery schedules clearly.',
      checks: ['Delivery coordination', 'Clear schedule updates', 'Direct WhatsApp tracking'],
      image: 'Removable Prosthesis & Flexible Dentures',
      badge: 'Delivery Service',
    },
  ];

  return (
    <>
      {/* ================================================================
          SECTION A — Main Commitment Statement + Three Cards
          ================================================================ */}
      <section
        id="quality"
        className="py-20 sm:py-28 bg-[#0D0F13] border-t border-white/[0.08] relative overflow-hidden"
      >
        {/* Background ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(192,196,202,0.04)_0%,transparent_70%)] blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* ── Section Header ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-[11px] font-mono text-[#B8BDC6]">
              <Sparkles className="w-3 h-3 text-[#C0C4CA]" />
              <span>Our Commitment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-bold font-['Outfit'] text-white tracking-tight leading-tight">
              Quality Work.{' '}
              <span className="metallic-text-gradient">On-Time Delivery.</span>{' '}
              Reliable Service.
            </h2>

            <p className="text-sm sm:text-base text-[#8E95A2] leading-relaxed font-light max-w-2xl">
              At Dental Lab Connect, we understand the importance of quality and timing in dental
              laboratory work. We focus on precision craftsmanship, careful finishing, and efficient
              order coordination to complete your dental laboratory requirements within the agreed
              timeframe. We also coordinate delivery to help ensure completed work reaches you as
              scheduled.
            </p>
          </motion.div>

          {/* ── Three Highlight Cards ───────────────────────────────────── */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {highlights.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl bg-[#111317] border border-white/[0.09] hover:border-white/[0.22] overflow-hidden flex flex-col transition-all duration-200 hover:shadow-[0_16px_40px_rgba(0,0,0,0.8)]"
              >
                {/* Card image */}
                <div className="h-44 sm:h-48 relative flex-shrink-0">
                  <RealisticDentalImage
                    category={card.image}
                    className="w-full h-full"
                    badge={card.badge}
                  />
                  {/* Gradient overlay from image into card body */}
                  <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#111317] to-transparent pointer-events-none" />
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6 space-y-4">
                  {/* Icon + Label */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.10] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.10] transition-colors">
                      {card.icon}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8E95A2]">
                      {card.label}
                    </span>
                  </div>

                  {/* Title + Description */}
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold font-['Outfit'] text-white leading-snug group-hover:text-[#E5E7EB] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#8E95A2] font-light leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Check list */}
                  <ul className="space-y-1.5 pt-2 border-t border-white/[0.06]">
                    {card.checks.map((check) => (
                      <li key={check} className="flex items-center gap-2 text-[11px] text-[#A0A5AE]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C0C4CA] flex-shrink-0" />
                        <span>{check}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION B — Delivery Details (existing content, refined)
          ================================================================ */}
      <section
        id="delivery"
        className="py-20 sm:py-28 bg-[#08090B] border-t border-white/[0.07] relative overflow-hidden"
      >
        {/* Background texture */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-0 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_20%_50%,rgba(192,196,202,0.035)_0%,transparent_70%)] blur-3xl" />
          <div className="absolute top-1/3 right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_80%_50%,rgba(192,196,202,0.025)_0%,transparent_70%)] blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Main 2-col layout: image left, content right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.8)]">
                <div className="h-72 sm:h-80">
                  <RealisticDentalImage
                    category="Implant Prosthesis"
                    className="w-full h-full"
                    badge="Lab Precision · Quality Control"
                  />
                </div>
                {/* Scheduling policy note card */}
                <div className="absolute bottom-4 left-4 right-4 z-20 p-3.5 rounded-xl bg-[#08090B]/88 backdrop-blur-md border border-white/[0.13] shadow-xl">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#8E95A2] block mb-1">
                    Scheduling Policy
                  </span>
                  <p className="text-xs text-[#C0C4CA] leading-relaxed">
                    Turnaround schedules are tailored to case complexity and confirmed directly upon
                    model evaluation and clinical prescription review.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-[11px] font-mono text-[#B8BDC6]">
                  <Sparkles className="w-3 h-3 text-[#C0C4CA]" />
                  <span>Dependable Turnaround</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Outfit'] text-white tracking-tight leading-tight">
                  Reliable Service.{' '}
                  <span className="metallic-text-gradient">On-Time Delivery.</span>
                </h2>
                <p className="text-sm sm:text-base text-[#8E95A2] leading-relaxed font-light">
                  We understand how important timely dental laboratory work is to your practice.
                  Dental Lab Connect focuses on clear communication, efficient order handling, and
                  dependable turnaround times to help dental professionals plan their work with
                  confidence.
                </p>
              </div>

              {/* 4 delivery points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: <ShieldCheck className="w-4 h-4 text-[#C0C4CA]" />,
                    title: 'Clear Communication',
                    desc: 'Clear communication about order status and expected completion timelines.',
                  },
                  {
                    icon: <CalendarCheck2 className="w-4 h-4 text-[#C0C4CA]" />,
                    title: 'Careful Planning',
                    desc: 'Careful planning of orders and delivery schedules for each case.',
                  },
                  {
                    icon: <Truck className="w-4 h-4 text-[#C0C4CA]" />,
                    title: 'Timely Dispatch',
                    desc: 'Timely dispatch based on the agreed turnaround time per case.',
                  },
                  {
                    icon: <MessageCircle className="w-4 h-4 text-[#C0C4CA]" />,
                    title: 'WhatsApp Updates',
                    desc: 'Direct WhatsApp communication for enquiries and order updates.',
                  },
                ].map((point, i) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.07 }}
                    className="p-4 rounded-xl bg-[#111317] border border-white/[0.08] hover:border-white/[0.18] transition-all flex items-start gap-3 group hover:shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.09] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.1] transition-colors">
                      {point.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white font-['Outfit']">{point.title}</h4>
                      <p className="text-[11px] text-[#8E95A2] leading-relaxed">{point.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── CTA Banner ───────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden border border-white/[0.12] shadow-2xl"
          >
            {/* Banner background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#111419] via-[#181C25] to-[#111419]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(192,196,202,0.07)_0%,transparent_60%)]" />
            {/* Top silver line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div className="relative z-10 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3 text-center md:text-left max-w-2xl">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8BDC6] px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.10] inline-block">
                  Dental Laboratory Partnership
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-[1.9rem] font-bold font-['Outfit'] text-white tracking-tight leading-tight">
                  Your Dental Lab Partner for Quality and Timely Delivery
                </h3>
                <p className="text-sm sm:text-base text-[#A0A5AE] leading-relaxed font-light">
                  From dental appliances and dentures to crowns, bridges, and implant prosthetics,
                  we aim to provide quality-focused workmanship with dependable turnaround and
                  delivery coordination.
                </p>
                <div className="text-xs font-mono text-[#8E95A2] pt-1">
                  Direct Coordinator:{' '}
                  <span className="text-white font-semibold">Saravana Kumar</span> · Phone &amp;
                  WhatsApp:{' '}
                  <span className="text-white font-semibold">7639664119</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0">
                <a
                  id="quality-delivery-discuss-btn"
                  href="https://wa.me/917639664119?text=Hello%20Saravana%20Kumar%2C%20I%20would%20like%20to%20discuss%20my%20dental%20laboratory%20requirements%20and%20delivery%20schedule."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="metallic-button inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold cursor-pointer shadow-lg w-full sm:w-auto hover:scale-[1.02] active:scale-[0.98] transition-all duration-150"
                  onClick={onEnquire}
                >
                  <MessageCircle className="w-4 h-4 text-[#08090B]" />
                  <span>Discuss Your Requirements</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#08090B]" />
                </a>

                <a
                  href="tel:+917639664119"
                  id="quality-delivery-call-btn"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.11] border border-white/[0.14] text-xs font-mono font-semibold text-white transition-all w-full sm:w-auto hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>📞</span>
                  <span>7639664119</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
