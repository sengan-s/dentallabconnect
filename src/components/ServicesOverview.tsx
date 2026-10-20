import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Sparkles, Layers, ArrowLeft } from 'lucide-react';
import { RealisticDentalImage } from './RealisticDentalImage';

interface ServicesOverviewProps {
  onNavigateToProducts: (targetCategory?: string) => void;
  onBackToHome?: () => void;
}

interface ServiceItem {
  id: string;
  title: string;
  targetCategory: string;
  description: string;
  badge: string;
  imageCategory: string;
  whatsappMessage: string;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onNavigateToProducts, onBackToHome }) => {
  const services: ServiceItem[] = [
    {
      id: 'dental-scanner-solutions',
      title: 'Dental Scanner Solutions',
      targetCategory: 'Dental Scanner Solutions',
      description: 'Advanced dental scanning solutions for accurate digital impressions and streamlined dental laboratory workflows.',
      badge: 'Digital Scanning',
      imageCategory: 'Dental Scanner Solutions',
      whatsappMessage: 'Hello Saravana Kumar, I would like to enquire about Dental Scanner Solutions at Dental Lab Connect.',
    },
    {
      id: 'functional-fixed-appliances',
      title: 'Functional & Fixed Dental Appliances',
      targetCategory: 'Appliances',
      description: 'Customised orthodontic work including functional appliances, myo-functional appliances, fixed appliances, Hyrax expanders and maxillary splints.',
      badge: 'Orthodontic Appliances',
      imageCategory: 'Fixed Appliances',
      whatsappMessage: 'Hello Saravana Kumar, I would like to enquire about Functional & Fixed Dental Appliances at Dental Lab Connect.',
    },
    {
      id: 'removable-appliances-dentures',
      title: 'Removable Appliances & Dentures',
      targetCategory: 'Removable Prosthesis & Flexible Dentures',
      description: 'Removable orthodontic appliances and retainers, along with acrylic, high impact and flexible dentures made with injection moulding techniques.',
      badge: 'Flexible & Removable',
      imageCategory: 'Removable Prosthesis & Flexible Dentures',
      whatsappMessage: 'Hello Saravana Kumar, I would like to enquire about Removable Appliances & Dentures at Dental Lab Connect.',
    },
    {
      id: 'dental-crowns-bridges',
      title: 'Dental Crowns & Bridges',
      targetCategory: 'Reliance Zirconia',
      description: 'Zirconia, metal-ceramic and full metal crowns and bridges, with Reliance Zirconia and other ceramic options.',
      badge: 'Reliance Zirconia',
      imageCategory: 'Reliance Zirconia',
      whatsappMessage: 'Hello Saravana Kumar, I would like to enquire about Dental Crowns & Bridges at Dental Lab Connect.',
    },
    {
      id: 'implant-precision',
      title: 'Implant Prosthetics & Precision Attachments',
      targetCategory: 'Implant Prosthesis',
      description: 'Cement and screw retained implant crowns and bridges, hybrid dentures, copings, bar work and precision attachments.',
      badge: 'Implants & Attachments',
      imageCategory: 'Implant Prosthesis',
      whatsappMessage: 'Hello Saravana Kumar, I would like to enquire about Implant Prosthetics & Precision Attachments at Dental Lab Connect.',
    },
    {
      id: 'clear-aligners-splints',
      title: 'Clear Aligners & Dental Splints',
      targetCategory: 'Clear Aligners',
      description: 'Clear aligner packs and a range of splints, including night guards, snap-on splints, bleaching trays and sports guards.',
      badge: 'Aligners & Splints',
      imageCategory: 'Clear Aligners',
      whatsappMessage: 'Hello Saravana Kumar, I would like to enquire about Clear Aligners & Dental Splints at Dental Lab Connect.',
    },
    {
      id: 'metal-cadcam-ceramic',
      title: 'Metal-Ceramic & CAD/CAM Ceramic Restorations',
      targetCategory: 'CAD/CAM Ceramic',
      description: 'Premium DMLS and conventional P.F.M. metal-ceramic work, Sintron and other CAD/CAM ceramic restorations, inlays and onlays.',
      badge: 'DMLS & CAD/CAM',
      imageCategory: 'Metal Ceramic',
      whatsappMessage: 'Hello Saravana Kumar, I would like to enquire about Metal-Ceramic & CAD/CAM Ceramic Restorations at Dental Lab Connect.',
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-[#08090B] relative">
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
              <span className="text-white font-semibold">Our Services</span>
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#A0A5AE]">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>7 Laboratory Disciplines &amp; Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Outfit'] text-white tracking-tight">
            Our Laboratory Services
          </h2>
          <p className="text-sm sm:text-base text-[#8E95A2] leading-relaxed font-light">
            Dental Lab Connect works with dental professionals on a broad range of laboratory work — from orthodontic appliances and dentures to crowns, bridges, implant prosthetics, and dental scanner solutions.
          </p>
        </div>

        {/* 7 Specialized Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {services.map((service, idx) => {
            const isScanner = service.id === 'dental-scanner-solutions';
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-2xl bg-[#111317] border hover:bg-[#14161C] p-4 sm:p-6 flex flex-col justify-between group transition-all duration-200 shadow-xl ${
                  isScanner
                    ? 'col-span-2 md:col-span-1 border-[#C0C4CA]/30 hover:border-[#C0C4CA]/60 ring-1 ring-inset ring-white/5'
                    : 'border-white/10 hover:border-white/25'
                }`}
              >
                <div className="space-y-4">
                  {/* Realistic Laboratory Photo */}
                  <div className="relative h-44 w-full rounded-xl overflow-hidden border border-white/5 shadow-inner">
                    {isScanner ? (
                      /* Scanner: use a native <img> with object-contain so the full device is visible */
                      <>
                        <img
                          src="/images/categories/dental-scanner.jpg"
                          alt="Advanced intraoral dental scanner wand on metallic stand in modern laboratory"
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/categories/dental-scanner-alt.jpg';
                          }}
                        />
                        {/* Luxury vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#08090B]/80 via-[#08090B]/10 to-transparent pointer-events-none" />
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none group-hover:ring-white/25 transition-all" />
                        {/* Badge */}
                        <div className="absolute top-2.5 left-2.5 z-20">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold uppercase tracking-wider bg-[#08090B]/85 text-[#E5E7EB] border border-white/15 backdrop-blur-md shadow-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C0C4CA]" />
                            Digital Scanning
                          </span>
                        </div>
                        {/* Ambient corner glare */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none group-hover:bg-white/10 transition-all" />
                      </>
                    ) : (
                      <RealisticDentalImage
                        category={service.imageCategory}
                        className="w-full h-full"
                        badge={service.badge}
                        altText={`${service.title} realistic laboratory product`}
                      />
                    )}
                  </div>

                  <div className="space-y-2">
                    {isScanner && (
                      <span className="inline-block text-[10px] font-mono tracking-widest uppercase text-[#C0C4CA] mb-0.5">
                        New · Available on Enquiry
                      </span>
                    )}
                    <h3 className="text-lg font-bold font-['Outfit'] text-white group-hover:text-[#E5E7EB] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#8E95A2] font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 mt-5 border-t border-white/5 flex items-center justify-between gap-2">
                  {isScanner ? (
                    /* Scanner: full-width WhatsApp enquiry button */
                    <a
                      href={`https://wa.me/917639664119?text=${encodeURIComponent(service.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="metallic-button w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-md"
                      aria-label="Enquire about Dental Scanner Solutions on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 text-[#08090B]" />
                      <span className="text-[#08090B]">Enquire on WhatsApp</span>
                    </a>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => onNavigateToProducts(service.targetCategory)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#C0C4CA] transition-colors cursor-pointer"
                      >
                        <Layers className="w-3.5 h-3.5 text-[#C0C4CA]" />
                        <span>Browse Products</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <a
                        href={`https://wa.me/917639664119?text=${encodeURIComponent(service.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
                        title="Enquire on WhatsApp"
                        aria-label={`Enquire about ${service.title} on WhatsApp`}
                      >
                        <MessageCircle className="w-4 h-4 text-[#C0C4CA]" />
                      </a>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
