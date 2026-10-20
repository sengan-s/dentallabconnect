import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileSpreadsheet, 
  Layers, 
  Microscope, 
  PackageCheck, 
  ArrowRight,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { LAB_WORKFLOW_STEPS, WorkflowStepMeta } from '../data/dentalImages';

interface LabWorkflowSectionProps {
  onEnquire?: () => void;
}

export const LabWorkflowSection: React.FC<LabWorkflowSectionProps> = ({ onEnquire }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const stepIcons = [
    <FileSpreadsheet key="1" className="w-4 h-4 text-[#C0C4CA]" />,
    <Layers key="2" className="w-4 h-4 text-[#C0C4CA]" />,
    <Microscope key="3" className="w-4 h-4 text-[#C0C4CA]" />,
    <PackageCheck key="4" className="w-4 h-4 text-[#C0C4CA]" />,
  ];

  return (
    <section id="workflow" className="py-20 md:py-28 bg-[#0A0C0F] border-t border-b border-white/10 relative overflow-hidden">
      {/* Background Studio Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(192,196,202,0.06)_0%,rgba(8,9,11,0)_70%)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#C0C4CA]">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Four-Step Laboratory Process</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Outfit'] text-white tracking-tight">
            How We Work
          </h2>

          <p className="text-sm sm:text-base text-[#8E95A2] font-light leading-relaxed">
            A transparent and reliable four-step laboratory workflow designed to support dentists and dental clinics from case intake to on-time delivery.
          </p>
        </div>

        {/* 4-Step Process Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {LAB_WORKFLOW_STEPS.map((stepMeta: WorkflowStepMeta, idx: number) => {
            const isSelected = activeStep === stepMeta.step;

            return (
              <motion.div
                key={stepMeta.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setActiveStep(stepMeta.step)}
                className={`relative flex flex-col justify-between rounded-2xl p-5 transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#171920] to-[#12141A] border-[#C0C4CA]/60 shadow-[0_12px_32px_rgba(0,0,0,0.8)]'
                    : 'bg-[#111317] border-white/10 hover:border-white/25 hover:bg-[#15171D]'
                }`}
              >
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#C0C4CA] px-2.5 py-1 rounded bg-white/5 border border-white/10">
                    Step 0{stepMeta.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    {stepIcons[idx]}
                  </div>
                </div>

                {/* Real-World Photographic Thumbnail */}
                <div className="relative h-40 w-full rounded-xl overflow-hidden mb-4 border border-white/10 bg-black/40">
                  <img
                    src={stepMeta.src}
                    alt={stepMeta.alt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== stepMeta.fallbackSrc) {
                        target.src = stepMeta.fallbackSrc;
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2 text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-black/80 text-[#E5E7EB] border border-white/10 backdrop-blur-sm">
                    {stepMeta.badge}
                  </span>
                </div>

                {/* Step Content */}
                <div className="space-y-2 flex-1">
                  <h3 className="text-base font-bold font-['Outfit'] text-white leading-snug">
                    {stepMeta.title}
                  </h3>
                  <p className="text-xs text-[#8E95A2] font-light leading-relaxed">
                    {stepMeta.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Coordinator Case Submission Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#111317] via-[#16181F] to-[#111317] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C0C4CA]">
              Dental Clinic Case Intake & Coordination
            </span>
            <h4 className="text-base sm:text-lg font-bold font-['Outfit'] text-white">
              Planning a Case or Custom Appliance Order?
            </h4>
            <p className="text-xs sm:text-sm text-[#8E95A2] max-w-xl font-light">
              Connect directly with Saravana Kumar to share case requirements, verify model details, and confirm the production schedule.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/917639664119?text=Hello%20Saravana%20Kumar%2C%20I%20would%20like%20to%20discuss%20a%20dental%20case%20workflow%20with%20Dental%20Lab%20Connect."
              target="_blank"
              rel="noopener noreferrer"
              className="metallic-button inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#08090B]" />
              <span>Discuss Case with Saravana Kumar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
