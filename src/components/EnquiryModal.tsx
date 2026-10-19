import React, { useEffect } from 'react';
import { X, MessageCircle, Phone, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { CatalogueItem } from '../data/catalogueData';

interface EnquiryModalProps {
  item: CatalogueItem | null;
  onClose: () => void;
  onSelectForForm: (item: CatalogueItem) => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  item,
  onClose,
  onSelectForForm,
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

  const whatsappMessage = `Hello Saravana Kumar, I would like to enquire about ${item.name} (${item.category}) for my dental practice.`;
  const whatsappUrl = `https://wa.me/917639664119?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-slate-900 text-white flex items-start justify-between">
          <div>
            <span className="text-[11px] font-semibold tracking-wider text-teal-400 uppercase">
              Product Enquiry
            </span>
            <h3 className="text-lg font-bold font-['Outfit'] text-white mt-0.5">
              {item.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Metadata details */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-200/60">
              <span className="text-slate-500 font-medium">Category</span>
              <span className="text-slate-900 font-semibold">{item.category}</span>
            </div>
            {item.subcategory && (
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">Subcategory</span>
                <span className="text-slate-900 font-semibold">{item.subcategory}</span>
              </div>
            )}
            <div className="flex justify-between py-1">
              <span className="text-slate-500 font-medium">Product Reference</span>
              <span className="text-teal-700 font-mono font-semibold">
                DLC-{item.id.toUpperCase()}
              </span>
            </div>
          </div>

          {item.description && (
            <p className="text-xs text-slate-600 leading-relaxed">
              {item.description}
            </p>
          )}

          <div className="pt-2 text-xs text-slate-500">
            <p className="font-semibold text-slate-800 mb-1">
              How would you like to proceed?
            </p>
            <p>
              Connect directly via WhatsApp with the message prefilled, or use the online enquiry form to add specific clinic notes.
            </p>
          </div>

          {/* Action options */}
          <div className="pt-3 space-y-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold text-xs shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Launch WhatsApp with Prefilled Message</span>
            </a>

            <button
              type="button"
              onClick={() => {
                onSelectForForm(item);
                onClose();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-800 font-semibold text-xs transition-colors"
            >
              <FileText className="w-4 h-4 text-teal-600" />
              <span>Fill Clinic Details in Contact Form</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>

            <a
              href="tel:+917639664119"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              <span>Or Call Coordinator Directly (7639664119)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
