import React, { useState } from 'react';
import { getProductRealisticImage, HERO_IMAGE, ABOUT_IMAGE, DentalImageMeta } from '../data/dentalImages';
import { Microscope } from 'lucide-react';

interface RealisticDentalImageProps {
  category?: string;
  subcategory?: string;
  type?: 'hero' | 'about' | string;
  className?: string;
  badge?: string;
  altText?: string;
  priority?: boolean;
}

export const RealisticDentalImage: React.FC<RealisticDentalImageProps> = ({
  category,
  subcategory,
  type,
  className = 'w-full h-full',
  badge,
  altText,
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [usingFallback, setUsingFallback] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Select appropriate realistic image metadata
  let imgMeta: DentalImageMeta;
  if (type === 'hero') {
    imgMeta = HERO_IMAGE;
  } else if (type === 'about') {
    imgMeta = ABOUT_IMAGE;
  } else {
    imgMeta = getProductRealisticImage(category || type || 'Reliance Zirconia', subcategory);
  }

  const currentSrc = usingFallback ? imgMeta.fallbackSrc : imgMeta.src;
  const currentAlt = altText || imgMeta.alt;
  const displayBadge = badge || imgMeta.badge;

  const handleError = () => {
    if (!usingFallback) {
      setUsingFallback(true);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-xl bg-[#0B0D11] border border-white/10 group ${className}`}>
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#111317] via-[#1A1D24] to-[#111317] animate-pulse z-10" />
      )}

      {/* Main Photorealistic Image */}
      {!hasError ? (
        <img
          src={currentSrc}
          alt={currentAlt}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setIsLoading(false)}
          onError={handleError}
          className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
            isLoading ? 'opacity-0 scale-98' : 'opacity-100 scale-100'
          }`}
        />
      ) : (
        /* Graceful styled metallic fallback */
        <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#12141A] to-[#0A0B0E] text-center">
          <Microscope className="w-8 h-8 text-[#C0C4CA] mb-2 opacity-60" />
          <span className="text-xs font-mono font-semibold text-white">{displayBadge}</span>
          <span className="text-[10px] text-[#8E95A2] mt-1">Dental Lab Connect · Precision Fabrication</span>
        </div>
      )}

      {/* Luxury Cinematic Vignette & Metallic Highlights */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08090B]/90 via-[#08090B]/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none group-hover:ring-white/25 transition-all" />

      {/* Clinical Badge Tag */}
      {displayBadge && (
        <div className="absolute top-2.5 left-2.5 z-20">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold uppercase tracking-wider bg-[#08090B]/85 text-[#E5E7EB] border border-white/15 backdrop-blur-md shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C0C4CA]" />
            <span>{displayBadge}</span>
          </span>
        </div>
      )}

      {/* Ambient Corner Glare */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none group-hover:bg-white/10 transition-all" />
    </div>
  );
};
