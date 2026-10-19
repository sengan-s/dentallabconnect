import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { DentalVisual, DentalVisualType } from './DentalVisual';
import { CatalogueItem } from '../data/catalogueData';

interface CategoryShowcaseProps {
  onSelectCategory: (categoryName: string) => void;
  onEnquireProduct: (item: CatalogueItem) => void;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({
  onSelectCategory,
  onEnquireProduct,
}) => {
  const featuredModules: Array<{
    title: string;
    category: string;
    targetFilterCategory: string;
    visualType: DentalVisualType;
    description: string;
    sampleItem: CatalogueItem;
  }> = [
    {
      title: 'Zirconia Crown / Bridge',
      category: 'Crown and Bridge',
      targetFilterCategory: 'Crown and Bridge — Screw Retained',
      visualType: 'crown-bridge',
      description: 'Explore the zirconia crown and bridge options available in our showcase.',
      sampleItem: {
        id: 'sample-cb',
        name: 'CROWN/BRIDGE ZIRCONIA CLASSIC',
        category: 'Crown and Bridge — Screw Retained',
        subcategory: 'Screw-Retained Zirconia',
        pdfPage: 7,
        description: 'Explore the zirconia crown and bridge options available in our showcase.',
      },
    },
    {
      title: 'Acrylic Injection Denture',
      category: 'Dentures',
      targetFilterCategory: 'Acrylic Injection Dentures (Bredent Germany)',
      visualType: 'denture',
      description: 'Browse the acrylic injection denture options available in our showcase.',
      sampleItem: {
        id: 'sample-denture',
        name: 'COMPLETE DENTURE',
        category: 'Acrylic Injection Dentures (Bredent Germany)',
        subcategory: 'Complete Prosthesis',
        pdfPage: 2,
        description: 'Browse the acrylic injection denture options available in our showcase.',
      },
    },
    {
      title: 'Hyrax Expander',
      category: 'Orthodontic Appliances',
      targetFilterCategory: 'Hyrax Expanders',
      visualType: 'hyrax',
      description: 'Explore the Hyrax expander variations available in our showcase.',
      sampleItem: {
        id: 'sample-hyrax',
        name: 'HYRAX BANDED',
        category: 'Hyrax Expanders',
        subcategory: 'Rapid Palatal Expander',
        pdfPage: 9,
        description: 'Explore the Hyrax expander variations available in our showcase.',
      },
    },
    {
      title: 'Clear Aligners',
      category: 'Clear Aligners',
      targetFilterCategory: 'Clear Aligners',
      visualType: 'aligner',
      description: 'View the clear aligner options available in our showcase.',
      sampleItem: {
        id: 'sample-aligner',
        name: 'BASE PACK UPTO 10 SPLINTS PER SPLINT',
        category: 'Clear Aligners',
        subcategory: 'Aligner Sequences',
        pdfPage: 6,
        description: 'View the clear aligner options available in our showcase.',
      },
    },
  ];

  return (
    <section id="categories" className="py-20 md:py-28 bg-[#08090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#A0A5AE] mb-2">
              <span>Core Modules</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Outfit'] text-white tracking-tight">
              Featured Product Categories
            </h2>
            <p className="mt-2 text-sm text-[#8E95A2] max-w-xl">
              Representative showcases demonstrating our laboratory capabilities across precision prosthetics, high-impact dentures, and orthodontic expansion.
            </p>
          </div>

          <a
            href="#products"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#E5E7EB] hover:text-white transition-colors group self-start md:self-auto"
          >
            <span>Explore All 220+ Products</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 4 Example Product Modules Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredModules.map((module) => (
            <motion.div
              key={module.title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-[#111317] rounded-xl border border-white/10 p-5 flex flex-col justify-between group hover:border-white/25 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all"
            >
              <div className="space-y-4">
                {/* Visual Image / Render */}
                <div className="relative">
                  <DentalVisual
                    type={module.visualType}
                    className="h-44 w-full"
                    badge={module.category}
                  />
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-[#A0A5AE] uppercase">
                    {module.category}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-[#E5E7EB]">
                    {module.title}
                  </h3>
                  <p className="text-xs text-[#8E95A2] leading-relaxed pt-1">
                    {module.description}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => onSelectCategory(module.targetFilterCategory)}
                  className="text-xs font-medium text-[#C0C4CA] hover:text-white transition-colors cursor-pointer text-left"
                >
                  View Category &rarr;
                </button>

                <button
                  type="button"
                  onClick={() => onEnquireProduct(module.sampleItem)}
                  className="metallic-button inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold transition-all cursor-pointer whitespace-nowrap"
                >
                  <MessageCircle className="w-3 h-3 text-[#08090B]" />
                  <span>Enquire Now</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
