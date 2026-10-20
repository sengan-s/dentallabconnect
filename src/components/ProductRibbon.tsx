import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Grid3X3, ArrowRight } from 'lucide-react';

interface RibbonCat {
  id: string;
  name: string;
  label: string;
  imageSrc: string;
  fallback: string;
  category: string;
}

interface ProductRibbonProps {
  onSelectCategory: (category: string) => void;
  onViewAll: () => void;
  theme?: 'obsidian' | 'pearl-white';
}

const RIBBON_CATS: RibbonCat[] = [
  { id: 'rz', name: 'Reliance\nZirconia', label: 'Reliance Zirconia', imageSrc: '/images/categories/reliance-zirconia.jpg', fallback: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=200&q=75', category: 'Reliance Zirconia' },
  { id: 'mc', name: 'Metal\nCeramic', label: 'Metal Ceramic', imageSrc: '/images/categories/metal-ceramic.jpg', fallback: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=200&q=75', category: 'Metal Ceramic' },
  { id: 'cc', name: 'CAD/CAM\nCeramic', label: 'CAD/CAM Ceramic', imageSrc: '/images/categories/cad-cam-ceramic.jpg', fallback: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=200&q=75', category: 'CAD/CAM Ceramic' },
  { id: 'ip', name: 'Implant\nProsthesis', label: 'Implant Prosthesis', imageSrc: '/images/categories/implant-prosthesis.jpg', fallback: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=200&q=75', category: 'Implant Prosthesis' },
  { id: 'rp', name: 'Removable\nProsthesis', label: 'Removable Prosthesis', imageSrc: '/images/categories/removable-prosthesis.jpg', fallback: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=200&q=75', category: 'Removable Prosthesis & Flexible Dentures' },
  { id: 'ca', name: 'Clear\nAligners', label: 'Clear Aligners', imageSrc: '/images/categories/clear-aligners.jpg', fallback: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=200&q=75', category: 'Clear Aligners' },
  { id: 'ap', name: 'Appliances', label: 'Appliances', imageSrc: '/images/categories/appliances-main.jpg', fallback: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=200&q=75', category: 'Appliances' },
  { id: 'pa', name: 'Precision\nAttachment', label: 'Precision Attachment', imageSrc: '/images/categories/precision-attachment.jpg', fallback: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=200&q=75', category: 'Precision Attachment' },
  { id: 'ds', name: 'Dental\nScanner', label: 'Dental Scanner Solutions', imageSrc: '/images/categories/dental-scanner.jpg', fallback: '/images/categories/dental-scanner-alt.jpg', category: 'Dental Scanner Solutions' },
];

export const ProductRibbon: React.FC<ProductRibbonProps> = ({ onSelectCategory, onViewAll, theme = 'obsidian' }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isLight = theme === 'pearl-white';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="w-full max-w-[1520px] mx-auto px-3 sm:px-6 pb-3 pt-1"
    >
      {/* Floating rounded panel matching reference image */}
      <div
        className={`w-full rounded-2xl border shadow-2xl backdrop-blur-md overflow-hidden ${
          isLight
            ? 'bg-white/95 border-[#DDE0E5] shadow-[0_12px_36px_rgba(0,0,0,0.08)]'
            : 'bg-[#0B0D11]/90 border-white/[0.12] shadow-[0_16px_40px_rgba(0,0,0,0.85)]'
        }`}
      >
        <div
          ref={scrollRef}
          className="flex items-stretch overflow-x-auto scrollbar-none divide-x divide-inherit"
          style={{
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            borderColor: isLight ? '#E5E7EB' : 'rgba(255,255,255,0.08)',
          }}
        >
          {RIBBON_CATS.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.category)}
              aria-label={`Browse ${cat.label}`}
              className={`flex-1 min-w-[120px] sm:min-w-[140px] max-w-[175px] flex flex-col items-center justify-between py-2.5 sm:py-3 px-2 sm:px-3 transition-all duration-200 group cursor-pointer focus:outline-none focus-visible:ring-1 ${
                isLight
                  ? 'hover:bg-[#F5F6F8] focus-visible:ring-black/20'
                  : 'hover:bg-white/[0.05] focus-visible:ring-white/20'
              }`}
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Product Thumbnail image — enlarged for clear recognition */}
              <div
                className="w-full flex items-center justify-center p-0.5 overflow-hidden rounded-lg"
                style={{ height: '72px' }}
              >
                <img
                  src={cat.imageSrc}
                  alt={cat.label}
                  className="max-h-full max-w-full object-contain group-hover:scale-108 transition-transform duration-300 drop-shadow-md"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = cat.fallback;
                  }}
                />
              </div>

              {/* Centered label below image */}
              <span
                className={`text-[10.5px] sm:text-[11.5px] leading-tight text-center font-medium mt-1.5 whitespace-pre-line transition-colors ${
                  isLight
                    ? 'text-[#525866] group-hover:text-[#17191D]'
                    : 'text-[#A0A5AE] group-hover:text-white'
                }`}
              >
                {cat.name}
              </span>
            </button>
          ))}

          {/* View All Products Card */}
          <button
            type="button"
            onClick={onViewAll}
            aria-label="View all products"
            id="ribbon-view-all"
            className={`flex-1 min-w-[120px] sm:min-w-[140px] max-w-[175px] flex flex-col items-center justify-center py-2.5 sm:py-3 px-2 sm:px-3 transition-all duration-200 group cursor-pointer focus:outline-none focus-visible:ring-1 ${
              isLight
                ? 'hover:bg-[#F5F6F8] focus-visible:ring-black/20'
                : 'hover:bg-white/[0.05] focus-visible:ring-white/20'
            }`}
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className="flex flex-col items-center justify-center gap-1.5 h-[72px]">
              <div className="grid grid-cols-2 gap-1.5 p-1.5 rounded-lg border border-dashed border-white/20 group-hover:border-white/40 transition-colors">
                <span className={`w-2.5 h-2.5 rounded-[3px] ${isLight ? 'bg-[#17191D]' : 'bg-[#C0C4CA]'}`} />
                <span className={`w-2.5 h-2.5 rounded-[3px] ${isLight ? 'bg-[#17191D]' : 'bg-[#C0C4CA]'}`} />
                <span className={`w-2.5 h-2.5 rounded-[3px] ${isLight ? 'bg-[#17191D]' : 'bg-[#C0C4CA]'}`} />
                <span className={`w-2.5 h-2.5 rounded-[3px] border ${isLight ? 'border-[#17191D]' : 'border-[#C0C4CA]'}`} />
              </div>
            </div>

            <div className="flex items-center justify-center gap-1 mt-1.5 text-center">
              <span
                className={`text-[10.5px] sm:text-[11.5px] font-semibold leading-tight transition-colors ${
                  isLight ? 'text-[#17191D] group-hover:text-black' : 'text-[#C0C4CA] group-hover:text-white'
                }`}
              >
                View All<br />Products
              </span>
              <ArrowRight className={`w-3.5 h-3.5 flex-shrink-0 ml-0.5 group-hover:translate-x-0.5 transition-transform ${isLight ? 'text-[#17191D]' : 'text-[#C0C4CA]'}`} />
            </div>
          </button>
        </div>
      </div>

      <style>{`.scrollbar-none::-webkit-scrollbar{display:none}`}</style>
    </motion.div>
  );
};
