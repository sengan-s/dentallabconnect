import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Gem, Truck, Users } from 'lucide-react';
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
      className="relative overflow-hidden w-full flex flex-col justify-between pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8"
      style={{
        background: isLight ? '#FFFFFF' : '#08090B',
        transition: 'background-color 0.3s ease',
      }}
    >
      {/* 1. CINEMATIC BACKGROUND: DENTAL LAB GLOVED HANDS & RESTORATION */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Clean Dental Lab Hands working on teeth cast (NO human face in background) */}
        <img
          src="/images/dental-lab-hands-clean.png"
          alt=""
          aria-hidden="true"
          className="absolute left-[36%] lg:left-[38%] top-[8%] h-[82%] object-contain object-center hidden md:block"
          style={{
            opacity: isLight ? 0.16 : 0.42,
            filter: 'contrast(1.06) brightness(0.96)',
          }}
          loading="eager"
        />

        {/* Directional blend gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: isLight
              ? 'linear-gradient(90deg, #FFFFFF 36%, rgba(255,255,255,0.92) 50%, rgba(255,255,255,0.4) 75%, transparent 100%)'
              : 'linear-gradient(90deg, #08090B 36%, rgba(8,9,11,0.9) 50%, rgba(8,9,11,0.3) 75%, transparent 100%)',
          }}
        />

        {/* Top & bottom gentle gradient fades */}
        <div
          className="absolute top-0 inset-x-0 h-20 pointer-events-none"
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
      <div className="relative z-20 w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* LEFT COLUMN: HERO TEXT & ACTIONS (7 COLS) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-5 text-left"
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

            {/* 2. Main Heading: Single line on desktop */}
            <h1
              className="font-bold font-['Outfit'] tracking-tight leading-tight whitespace-normal lg:whitespace-nowrap"
              style={{
                fontSize: 'clamp(2.5rem, 4.2vw, 4.6rem)',
                color: isLight ? '#17191D' : '#FFFFFF',
              }}
            >
              Dental Lab{' '}
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
            <div className="flex flex-wrap items-center gap-3 pt-1">
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
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 whitespace-nowrap cursor-pointer shadow-md active:scale-[0.98] ${
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
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 whitespace-nowrap cursor-pointer backdrop-blur-sm active:scale-[0.98] ${
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
              className={`flex flex-wrap items-center gap-6 sm:gap-8 pt-4 border-t w-full ${
                isLight ? 'border-[#DDE0E5]' : 'border-white/[0.08]'
              }`}
            >
              {[
                { icon: <Gem className="w-4 h-4" />, line1: 'Quality-Focused', line2: 'Workmanship' },
                { icon: <Truck className="w-4 h-4" />, line1: 'Reliable Delivery', line2: 'Coordination' },
                { icon: <Users className="w-4 h-4" />, line1: 'Direct Case', line2: 'Assistance' },
              ].map((h) => (
                <div key={h.line1} className="flex items-center gap-2.5">
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 shadow-xs ${
                      isLight
                        ? 'border-[#DDE0E5] bg-[#F5F6F8] text-[#17191D]'
                        : 'border-white/[0.22] bg-white/[0.06] text-white'
                    }`}
                  >
                    {h.icon}
                  </div>
                  <div>
                    <div
                      className={`text-[11px] font-semibold leading-tight ${
                        isLight ? 'text-[#17191D]' : 'text-white'
                      }`}
                    >
                      {h.line1}
                    </div>
                    <div
                      className={`text-[10px] leading-tight ${
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

          {/* RIGHT COLUMN: PROMINENT OWNER PORTRAIT (25-30% LARGER, INTEGRATED) */}
          <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end justify-center w-full">
            {/* Top Right Words: PRECISION / QUALITY / RELIABILITY */}
            <div className="w-full flex justify-end gap-4 mb-2 pr-2 hidden xl:flex">
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

            {/* Portrait Image Container — Clean, no box boundary, 25% larger */}
            <div className="relative w-full flex flex-col items-center lg:items-end justify-end">
              <img
                src="/images/saravana-kumar.png"
                alt="Saravana Kumar — Dental Lab Connect"
                className="w-auto object-contain object-bottom mx-auto lg:mr-0 transition-transform duration-300"
                style={{
                  maxHeight: 'min(88vh, 520px)',
                  maxWidth: '100%',
                  aspectRatio: '382/653',
                  filter: isLight
                    ? 'drop-shadow(0 18px 36px rgba(0,0,0,0.12)) brightness(1.01)'
                    : 'drop-shadow(0 24px 50px rgba(0,0,0,0.75)) brightness(1.03)',
                }}
                loading="eager"
              />

              {/* Bottom subtle edge fade */}
              <div
                className="absolute bottom-0 inset-x-0 h-16 pointer-events-none z-10"
                style={{
                  background: isLight
                    ? 'linear-gradient(to top, #FFFFFF 0%, transparent 100%)'
                    : 'linear-gradient(to top, #08090B 0%, transparent 100%)',
                }}
              />

              {/* Owner's Name & Branding positioned neatly without covering portrait */}
              <div className="w-full text-center lg:text-right pt-2 pr-1 relative z-20">
                <div
                  style={{
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: isLight ? '#17191D' : '#FFFFFF',
                    lineHeight: 1.1,
                    textShadow: isLight ? 'none' : '0 2px 12px rgba(0,0,0,0.85)',
                  }}
                >
                  Saravana Kumar
                </div>
                <div
                  className="font-mono uppercase text-[9px] tracking-[0.25em] mt-0.5"
                  style={{ color: isLight ? '#5A6270' : 'rgba(255,255,255,0.6)' }}
                >
                  SARAVANA KUMAR
                </div>
                <div
                  className="text-[9.5px] mt-0.5"
                  style={{ color: isLight ? '#7A8492' : 'rgba(255,255,255,0.4)' }}
                >
                  Dental Lab Connect
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. PRODUCT PREVIEW RIBBON BELOW HERO CONTENT IN NATURAL FLOW */}
      <div className="relative z-30 w-full mt-6 sm:mt-8 lg:mt-10">
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
