import React, { useEffect } from 'react';
import { X, MessageCircle, FileText, Phone, Sparkles, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { CatalogueItem } from '../data/catalogueData';
import { DentalVisual, DentalVisualType } from './DentalVisual';
import { RealisticDentalImage } from './RealisticDentalImage';

interface ProductDetailsModalProps {
  item: CatalogueItem | null;
  onClose: () => void;
  onRequestInfo: (item: CatalogueItem) => void;
}

export const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  item,
  onClose,
  onRequestInfo,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  // Determine appropriate dental visual type based on category
  const getVisualType = (cat: string): DentalVisualType => {
    if (cat.includes('Crown') || cat.includes('Ceramic')) return 'crown-bridge';
    if (cat.includes('Denture') || cat.includes('Acrylic')) return 'denture';
    if (cat.includes('Hyrax')) return 'hyrax';
    if (cat.includes('Aligner')) return 'aligner';
    if (cat.includes('Splint')) return 'splint';
    if (cat.includes('Attachment')) return 'attachment';
    if (cat.includes('Coping')) return 'coping';
    return 'crown-bridge';
  };

  const whatsappMessage = `Hello Saravana Kumar, I would like to enquire about ${item.name} (${item.category}) from Dental Lab Connect.`;
  const whatsappUrl = `https://wa.me/917639664119?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#111317] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] border border-white/15 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="px-6 py-5 bg-[#15171B] border-b border-white/10 flex items-start justify-between">
          <div className="space-y-1 pr-6">
            <span className="text-[10px] font-mono tracking-widest text-[#C0C4CA] uppercase">
              Product Specification · {item.category}
            </span>
            <h3 className="text-xl font-bold font-['Outfit'] text-white">
              {item.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#8E95A2] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close product details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {/* Product Photo / High-Fidelity Realistic Dental Visual */}
          <div className="relative h-56 sm:h-64 w-full rounded-xl overflow-hidden shadow-lg">
            <RealisticDentalImage
              category={item.category}
              className="w-full h-full"
              badge={item.category}
              altText={`${item.name} - ${item.category} realistic dental laboratory product`}
            />
          </div>

          {/* Structured Metadata Module */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2.5 text-xs">
            <div className="flex justify-between items-center py-1 border-b border-white/5">
              <span className="text-[#8E95A2] font-mono">Category</span>
              <span className="text-white font-semibold">{item.category}</span>
            </div>
            {item.subcategory && (
              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-[#8E95A2] font-mono">Subcategory</span>
                <span className="text-[#E5E7EB] font-medium">{item.subcategory}</span>
              </div>
            )}
            <div className="flex justify-between items-center py-1 border-b border-white/5">
              <span className="text-[#8E95A2] font-mono">Directory Reference</span>
              <span className="text-[#C0C4CA] font-mono">DLC-PRD-{item.id.toUpperCase()}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-[#8E95A2] font-mono">Availability</span>
              <span className="text-[#E5E7EB] font-medium">Available on Direct Enquiry</span>
            </div>
          </div>

          {/* Short Explanation Based on Source */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A0A5AE]">
              Product Overview
            </h4>
            <p className="text-xs sm:text-sm text-[#C0C4CA] leading-relaxed font-light">
              {item.description ||
                `Browse the ${item.name} option listed under ${item.category} in our official dental laboratory showcase.`}
            </p>
          </div>

          {/* Note Regarding Prices & Inquiries */}
          <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-[11px] text-[#8E95A2] leading-relaxed">
            <strong className="text-white">Direct Lab Coordination:</strong> For case-specific prescriptions, model preparation criteria, turnaround times, and technical consultations, contact Saravana Kumar directly.
          </div>

          {/* Action CTAs: 1. Request Product Information, 2. Enquire on WhatsApp */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => {
                onRequestInfo(item);
                onClose();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/10 transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#C0C4CA]" />
              <span>Request Product Information</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="metallic-button flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold text-xs transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#08090B]" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>

          {/* Direct Phone Assistance */}
          <div className="pt-1 text-center">
            <a
              href="tel:+917639664119"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#8E95A2] hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Direct Phone Consultation: 7639664119 (Saravana Kumar)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
