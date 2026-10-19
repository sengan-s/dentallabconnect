import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileDown, 
  CheckCircle2, 
  Loader2, 
  ArrowLeft, 
  Sparkles, 
  FileText, 
  ShieldCheck, 
  Layers, 
  MessageCircle, 
  Phone,
  BookOpen
} from 'lucide-react';
import { generateProductBrochure } from '../utils/brochureGenerator';

interface DownloadModuleProps {
  onBackToHome: () => void;
  onNavigateToProducts: () => void;
}

export const DownloadModule: React.FC<DownloadModuleProps> = ({
  onBackToHome,
  onNavigateToProducts,
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = async () => {
    if (isDownloading) return;
    try {
      setIsDownloading(true);
      await generateProductBrochure();
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 5000);
    } catch (err) {
      console.error('Failed to generate product document:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  const documentPages = [
    { page: '01', title: 'Functional Appliances', count: '13 Items', desc: "Catlan's, anterior & posterior bite planes, deprogrammers" },
    { page: '02', title: 'Acrylic Injection Dentures (Bredent Germany)', count: '11 Items', desc: 'Precision thermoplastic injection polymers, single tooth to complete' },
    { page: '03', title: 'Fixed Appliances — Part 1', count: '24 Items', desc: 'Blue grass, Groper, band & loop space maintainers, quad helix' },
    { page: '04', title: 'Removable Appliances', count: '26 Items', desc: "Hawley's, Begg's, Schwarz plates, Z-springs, active retainers" },
    { page: '05', title: 'Fixed Appliances — Part 2', count: '25 Items', desc: 'Space maintainers, palatal expanders, M-arch, habit breakers' },
    { page: '06', title: 'Precision Attachments & Clear Aligners', count: '13 Items', desc: 'Rhein83 OT Strategy attachments & sequential clear aligner series' },
    { page: '07', title: 'Crown & Bridge — Screw Retained & Copings', count: '15 Items', desc: 'Screw retained zirconia, Sintron, DMLS primary/secondary copings' },
    { page: '08', title: 'Implant Prosthesis — Cement Retained', count: '6 Items', desc: 'Premium monolithic zirconia, Sintron & DMLS cementable restorations' },
    { page: '09', title: 'Hyrax Expanders', count: '13 Items', desc: 'Banded, bonded, fan-type & hybrid rapid palatal expanders' },
    { page: '10', title: 'Laboratory Clinical Protocols & Cast Criteria', count: 'QA Protocol', desc: 'Master model pouring, articulation, expander activation guide' },
    { page: '11', title: 'Denture Solutions — High Impact & Normal', count: '18 Items', desc: 'Shatter-resistant Bredent/Ivoclar resin & standard acrylic prosthetics' },
    { page: '12', title: 'Myofunctional Appliances & Suction Splints', count: '27 Items', desc: 'Clark Twin Blocks, night guards 1mm-4mm, bleaching & sports splints' },
    { page: '13', title: 'Maxillary Intrusion Splints & Orthopedics', count: '16 Items', desc: 'Tube splints, protraction facebow systems & high-pull headgear' },
    { page: '14', title: 'Metal Ceramic & CAD/CAM Ceramic', count: '17 Items', desc: 'DMLS laser-sintered PFM, Sintron milled CoCr & ceramic inlays' },
    { page: '15', title: 'Order Prescription & Case Coordination', count: 'Contact Guide', desc: 'Doctor prescription checklist, workflow & direct WhatsApp line' },
  ];

  return (
    <div className="py-24 sm:py-28 bg-[#08090B] min-h-[calc(100vh-80px)] text-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Breadcrumb & Back Button */}
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
            <span className="text-white font-semibold">Download Product List</span>
          </div>
        </div>

        {/* Hero Banner with Download CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#111317] via-[#161820] to-[#111317] border border-white/15 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#C0C4CA]">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>Official Clinical Laboratory Specification</span>
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-['Outfit'] text-white tracking-tight leading-tight">
                Download Complete{' '}
                <span className="metallic-text-gradient">Product List</span>
              </h1>

              <p className="text-sm sm:text-base text-[#C0C4CA] leading-relaxed max-w-2xl font-light">
                Download the complete, professionally formatted 15-page Dental Lab Connect product document. Features all 20 clinical categories and 224 precision-manufactured items across restorative, prosthetic, and orthodontic disciplines.
              </p>

              {/* Specifications Pills */}
              <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-[#8E95A2]">
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[#C0C4CA]">
                  Standard A4 Layout
                </span>
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[#C0C4CA]">
                  15 Complete Pages
                </span>
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[#C0C4CA]">
                  224 Precision Items
                </span>
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-emerald-400">
                  Strictly No Prices
                </span>
              </div>
            </div>

            {/* Download Button Action Card */}
            <div className="lg:col-span-4 flex flex-col items-stretch sm:items-start lg:items-end gap-3">
              <button
                type="button"
                onClick={handleDownload}
                disabled={isDownloading}
                className="metallic-button w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold cursor-pointer shadow-xl hover:shadow-white/20 transition-all disabled:opacity-50"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-5 h-5 text-[#08090B] animate-spin" />
                    <span>Preparing Product List...</span>
                  </>
                ) : downloadSuccess ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-800" />
                    <span>Product List Downloaded!</span>
                  </>
                ) : (
                  <>
                    <FileDown className="w-5 h-5 text-[#08090B]" />
                    <span>Download Product List</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onNavigateToProducts}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-[#C0C4CA] hover:text-white transition-colors cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Or Browse Online Module</span>
              </button>
            </div>
          </div>
        </div>

        {/* 15-Page Document Directory Overview */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white">
                Document Contents (15 Pages)
              </h2>
              <p className="text-xs sm:text-sm text-[#8E95A2] mt-0.5 font-light">
                Every listed laboratory item is organized across its dedicated page in the downloadable document.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#C0C4CA]">
              <BookOpen className="w-4 h-4 text-white" />
              <span>Full Portfolio Reference</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {documentPages.map((p) => (
              <div
                key={p.page}
                className="p-5 rounded-xl bg-[#111317] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white font-bold">
                      PAGE {p.page}
                    </span>
                    <span className="text-[#C0C4CA] text-[11px]">
                      {p.count}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold font-['Outfit'] text-white group-hover:text-[#E5E7EB] transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs text-[#8E95A2] font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#646A77]">
                  <span>Dental Lab Connect</span>
                  <span>7639664119</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coordinator Direct Contact Callout */}
        <div className="p-8 rounded-2xl bg-[#121419] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#A0A5AE]">
              Case Prescriptions & Guidance
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-['Outfit'] text-white">
              Questions Regarding Product Specifications or Model Prep?
            </h3>
            <p className="text-xs sm:text-sm text-[#8E95A2] max-w-xl font-light">
              Connect directly with Saravana Kumar for technical laboratory guidance, turnaround time verification, and case intake.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+917639664119"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-semibold text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C0C4CA]" />
              <span>7639664119</span>
            </a>

            <a
              href="https://wa.me/917639664119?text=Hello%20Saravana%20Kumar%2C%20I%20am%20enquiring%20about%20the%20Dental%20Lab%20Connect%20product%20list."
              target="_blank"
              rel="noopener noreferrer"
              className="metallic-button inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#08090B]" />
              <span>WhatsApp Saravana Kumar</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
