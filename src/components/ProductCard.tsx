import React from 'react';
import { MessageCircle, Eye } from 'lucide-react';
import { CatalogueItem } from '../data/catalogueData';
import { RealisticDentalImage } from './RealisticDentalImage';

interface ProductCardProps {
  item: CatalogueItem;
  onEnquire: (item: CatalogueItem) => void;
  onViewDetails: (item: CatalogueItem) => void;
  layout?: 'grid' | 'list';
}

export const ProductCard: React.FC<ProductCardProps> = ({
  item,
  onEnquire,
  onViewDetails,
  layout = 'grid',
}) => {
  const whatsappMessage = `Hello Saravana Kumar, I would like to enquire about ${item.name} (${item.category}${item.subcategory ? ' - ' + item.subcategory : ''}) from Dental Lab Connect.`;
  const whatsappUrl = `https://wa.me/917639664119?text=${encodeURIComponent(whatsappMessage)}`;

  if (layout === 'list') {
    return (
      <div
        onClick={() => onViewDetails(item)}
        className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#111317] rounded-xl border border-white/10 hover:border-white/30 hover:bg-[#16181F] hover:shadow-[0_8px_24px_rgba(0,0,0,0.7)] transition-all duration-200 p-4 cursor-pointer"
      >
        <div className="flex items-start sm:items-center gap-3.5 min-w-0">
          <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-white/10">
            <RealisticDentalImage
              category={item.category}
              subcategory={item.subcategory}
              className="w-full h-full"
              altText={`${item.name} clinical dental restoration`}
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#8E95A2]">
              <span className="text-[#C0C4CA] uppercase truncate font-semibold">{item.category}</span>
              {item.subcategory && (
                <>
                  <span className="text-white/20">/</span>
                  <span className="truncate">{item.subcategory}</span>
                </>
              )}
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-[#E5E7EB] transition-colors truncate">
              {item.name}
            </h4>
            {item.description && (
              <p className="text-xs text-[#8E95A2] line-clamp-1 font-light mt-0.5">
                {item.description}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5 w-full sm:w-auto justify-end">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(item);
            }}
            className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-all inline-flex items-center gap-1.5 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#C0C4CA]" />
            <span>Details</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="metallic-button px-3 py-1.5 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#08090B]" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  // Grid layout
  return (
    <div
      onClick={() => onViewDetails(item)}
      className="group relative flex flex-col justify-between bg-[#111317] rounded-xl border border-white/10 hover:border-white/30 hover:bg-[#15171D] hover:shadow-[0_12px_28px_rgba(0,0,0,0.8)] transition-all duration-200 p-4 sm:p-5 cursor-pointer"
    >
      <div className="space-y-3">
        {/* Realistic Photograph Thumbnail */}
        <div className="relative h-36 sm:h-40 w-full rounded-lg overflow-hidden border border-white/5 shadow-inner">
          <RealisticDentalImage
            category={item.category}
            subcategory={item.subcategory}
            className="w-full h-full"
            badge={item.subcategory || item.category}
            altText={`${item.name} - ${item.category} realistic dental photograph`}
          />
          <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[9px] font-mono text-[#A0A5AE] z-20">
            DLC-{item.id.toUpperCase()}
          </div>
        </div>

        {/* Metadata */}
        <div className="flex items-center justify-between text-xs text-[#8E95A2] font-mono">
          <span className="text-[#C0C4CA] uppercase text-[10px] font-semibold tracking-wider truncate">
            {item.category}
          </span>
          {item.subcategory && (
            <span className="text-[#646A77] text-[10px] truncate max-w-[140px]">
              {item.subcategory}
            </span>
          )}
        </div>

        {/* Title */}
        <div>
          <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#E5E7EB] transition-colors leading-snug">
            {item.name}
          </h4>
        </div>

        {/* Description */}
        {item.description && (
          <p className="text-xs text-[#8E95A2] leading-relaxed line-clamp-2 font-light">
            {item.description}
          </p>
        )}
      </div>

      {/* Card Action Buttons: View Details & Enquire on WhatsApp */}
      <div className="pt-4 mt-4 border-t border-white/5 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(item);
          }}
          className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-all cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5 text-[#C0C4CA]" />
          <span>Details</span>
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="metallic-button w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#08090B]" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
