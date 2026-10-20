import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Gem, Truck, Users, ScanLine } from 'lucide-react';
import { ProductRibbon } from './ProductRibbon';
import { AppTheme } from '../types';

interface HeroProps {
  totalItemsCount?: number;
  totalCategoriesCount?: number;
  onExploreProducts?: () => void;
  onContactClick?: () => void;
  onSelectCategory?: (category: string) => void;
  theme?: AppTheme;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onSelectCategory,
  theme = 'obsidian',
}) => {
  const isLight = theme === 'pearl-white';

  return (
    <section
      id="home"
      className="relative w-full flex flex-col justify-between min-h-[calc(100vh-70px)] pt-4 sm:pt-6 lg:pt-4 pb-8 sm:pb-12"
      style={{
        background: isLight ? '#FFFFFF' : '#08090B',
        transition: 'background-color 0.3s ease',
      }}
    >
      {/* 1. CINEMATIC BACKGROUND: FULLY CENTERED DENTAL LAB WORKBENCH & RESTORATION */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Full-width cinematic dental lab background */}
        <img
          src="/images/dental-lab-hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-[52%_42%] pointer-events-none"
          style={{
            opacity: isLight ? 0.20 : 0.58,
            filter: 'contrast(1.10) brightness(0.98)',
          }}
          loading="eager"
        />

        {/* Directional blend gradient: protects left text and right portrait, center remains crystal clear */}
        <div
          className="absolute inset-0"
          style={{
            background: isLight
              ? 'linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,0.94) 28%, rgba(255,255,255,0.28) 46%, rgba(255,255,255,0.18) 56%, rgba(255,255,255,0.48) 68%, rgba(255,255,255,0.92) 84%, #FFFFFF 100%)'
              : 'linear-gradient(90deg, #08090B 0%, rgba(8,9,11,0.94) 28%, rgba(8,9,11,0.30) 46%, rgba(8,9,11,0.18) 56%, rgba(8,9,11,0.45) 68%, rgba(8,9,11,0.90) 84%, #08090B 100%)',
          }}
        />

        {/* Top & bottom subtle gradient blends */}
        <div
          className="absolute top-0 inset-x-0 h-16 pointer-events-none"
          style={{
            background: isLight
              ? 'linear-gradient(to bottom, #FFFFFF 0%, transparent 100%)'
              : 'linear-gradient(to bottom, #08090B 0%, transparent 100%)',
          }}
        />
        <div
          className="absolute bottom-0 inset-x-0 h-28 pointer-events-none"
          style={{
            background: isLight
              ? 'linear-gradient(to top, #FFFFFF 0%, transparent 100%)'
              : 'linear-gradient(to top, #08090B 0%, transparent 100%)',
          }}
        />
      </div>

      {/* 2. MAIN HERO CONTENT AREA (CSS GRID LAYOUT) */}
      <div className="relative z-20 w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-12 flex-1 flex flex-col justify-center my-auto pt-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* LEFT COLUMN: HERO TEXT & ACTIONS (7 COLS) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start space-y-2.5 sm:space-y-4 text-left"
          >
            {/* 1. Introductory Label */}
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[11px] font-mono backdrop-blur-sm shadow-xs ${
                isLight
                  ? 'bg-[#F5F6F8] border-[#DDE0E5] text-[#333742]'
                  : 'bg-white/[0.06] border-white/[0.15] text-[#D0D4DC]'
              }`}
            >
              <Users className="w-3.5 h-3.5 opacity-80" />
              <span>Dental Laboratory for Dental Professionals</span>
            </div>

            {/* 2. Main Heading: Bold two-line layout matching reference */}
            <h1
              className="font-extrabold font-['Outfit'] tracking-tight leading-[1.05] text-left"
              style={{
                fontSize: 'clamp(1.9rem, 9vw, 4.75rem)',
                color: isLight ? '#17191D' : '#FFFFFF',
              }}
            >
              Dental Lab<br />
              <span
                className={isLight ? '' : 'metallic-text-gradient'}
                style={
                  isLight
                    ? {
                        background: 'linear-gradient(135deg, #17191D 0%, #4B5563 50%, #17191D 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }
                    : undefined
                }
              >
                Connect
              </span>
            </h1>

            {/* 3. Subtitle */}
            <p
              className="font-semibold font-['Outfit'] text-base sm:text-lg lg:text-xl tracking-tight"
              style={{ color: isLight ? '#2B303A' : '#E0E3EA' }}
            >
              Laboratory Partners for Dental Professionals
            </p>

            {/* 4. Supporting Description */}
            <p
              className="text-xs sm:text-sm leading-relaxed font-light max-w-xl"
              style={{ color: isLight ? '#525866' : '#9AA2B0' }}
            >
              Precision-crafted dental products, quality-focused workmanship, and reliable delivery coordination.
            </p>

            {/* 5. Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-0.5">
              <button
                type="button"
                id="hero-explore-products"
                onClick={() => {
                  if (onExploreProducts) onExploreProducts();
                  else {
                    const el = document.getElementById('products');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 whitespace-nowrap cursor-pointer shadow-md active:scale-[0.98] ${
                  isLight
                    ? 'text-white bg-[#17191D] hover:bg-[#2C313A] shadow-[0_4px_16px_rgba(23,25,29,0.2)]'
                    : 'text-[#08090B] bg-white hover:bg-[#E8EAED] shadow-[0_4px_20px_rgba(255,255,255,0.18)]'
                }`}
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="hero-whatsapp-enquiry"
                href="https://wa.me/917639664119?text=Hello%20Saravana%20Kumar%2C%20I%20would%20like%20to%20enquire%20about%20Dental%20Lab%20Connect%20products."
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 whitespace-nowrap cursor-pointer backdrop-blur-sm active:scale-[0.98] ${
                  isLight
                    ? 'text-[#17191D] bg-[#F5F6F8] hover:bg-[#ECEEF2] border border-[#DDE0E5]'
                    : 'text-white bg-white/[0.07] hover:bg-white/[0.12] border border-white/[0.2]'
                }`}
              >
                <MessageCircle className={`w-4 h-4 ${isLight ? 'text-[#17191D]' : 'text-[#C0C4CA]'}`} />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            {/* 6. Three Feature Highlights */}
            <div
              className={`flex flex-wrap items-center gap-5 sm:gap-7 pt-3 border-t w-full ${
                isLight ? 'border-[#DDE0E5]' : 'border-white/[0.08]'
              }`}
            >
              {[
                { icon: <Gem className="w-4 h-4" />, line1: 'Quality-Focused', line2: 'Workmanship' },
                { icon: <Truck className="w-4 h-4" />, line1: 'Reliable Delivery', line2: 'Coordination' },
                { icon: <ScanLine className="w-4 h-4" />, line1: 'Dental Scanner', line2: 'Solutions' },
                { icon: <Users className="w-4 h-4" />, line1: 'Direct Case', line2: 'Assistance' },
              ].map((h) => (
                <div key={h.line1} className="flex items-center gap-2.5">
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center flex-shrink-0 shadow-xs ${
                      isLight
                        ? 'border-[#DDE0E5] bg-[#F5F6F8] text-[#17191D]'
                        : 'border-white/[0.22] bg-white/[0.06] text-white'
                    }`}
                  >
                    {h.icon}
                  </div>
                  <div>
                    <div
                      className={`text-[10.5px] sm:text-[11px] font-semibold leading-tight ${
                        isLight ? 'text-[#17191D]' : 'text-white'
                      }`}
                    >
                      {h.line1}
                    </div>
                    <div
                      className={`text-[9.5px] sm:text-[10px] leading-tight ${
                        isLight ? 'text-[#5A6270]' : 'text-[#9AA2B0]'
                      }`}
                    >
                      {h.line2}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: PROMINENT OWNER PORTRAIT & CENTERED NAME IN ONE UNIFIED CONTAINER */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center w-full">
            {/* Top Right Words: PRECISION / QUALITY / RELIABILITY */}
            <div className="w-full flex justify-center lg:justify-end gap-3.5 mb-2 pr-2 hidden xl:flex">
              {['PRECISION', 'QUALITY', 'RELIABILITY'].map((word) => (
                <span
                  key={word}
                  className={`font-mono font-semibold ${isLight ? 'text-[#17191D]/35' : 'text-white/35'}`}
                  style={{ fontSize: '9px', letterSpacing: '0.28em' }}
                >
                  {word}
                </span>
              ))}
            </div>

            {/* Single Unified Container: 35–45% Enlarged Portrait + Centered Signature & Brand */}
            <div className="w-full flex flex-col items-center justify-center text-center">
              <div className="relative w-full flex justify-center items-end">
                <img
                  src="/images/saravana-kumar.png"
                  alt="Saravana Kumar — Dental Lab Connect"
                  className="w-auto object-contain object-bottom mx-auto transition-all duration-300"
                  style={{
                    height: 'clamp(160px, 42vw, 670px)',
                    maxHeight: 'min(76vh, 670px)',
                    maxWidth: '100%',
                    aspectRatio: '778/1024',
                    filter: isLight
                      ? 'drop-shadow(0 20px 40px rgba(0,0,0,0.15)) brightness(1.01)'
                      : 'drop-shadow(0 26px 52px rgba(0,0,0,0.9)) brightness(1.02)',
                  }}
                  loading="eager"
                />
              </div>

              {/* Owner Name & Brand directly below image, horizontally centered */}
              <div className="w-full flex flex-col items-center justify-center text-center pt-2.5">
                <div
                  style={{
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: '2.35rem',
                    fontWeight: 700,
                    color: isLight ? '#17191D' : '#FFFFFF',
                    lineHeight: 1.15,
                    textShadow: isLight ? 'none' : '0 2px 12px rgba(0,0,0,0.85)',
                  }}
                >
                  Saravana Kumar
                </div>
                <div
                  className="font-mono uppercase text-[11px] sm:text-xs tracking-[0.28em] font-semibold mt-1"
                  style={{ color: isLight ? '#5A6270' : 'rgba(255,255,255,0.7)' }}
                >
                  DENTAL LAB CONNECT
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. PRODUCT PREVIEW RIBBON FULLY VISIBLE IN NATURAL FLOW */}
      <div className="relative z-30 w-full mt-8 sm:mt-12 mb-2">
        <ProductRibbon
          theme={theme}
          onSelectCategory={(cat) => {
            if (onSelectCategory) onSelectCategory(cat);
            else {
              const el = document.getElementById('products');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          onViewAll={() => {
            if (onExploreProducts) onExploreProducts();
            else {
              const el = document.getElementById('products');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
      </div>
    </section>
  );
};
