import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  X,
  Layers,
  Grid,
  List,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  FileDown,
  CheckCircle2,
  ChevronDown,
  SlidersHorizontal,
  Check,
  Phone,
  MessageCircle
} from 'lucide-react';
import {
  CATALOGUE_ITEMS,
  MAIN_CATEGORIES,
  CATEGORY_MODULES,
  APPLIANCE_SUB_DISCIPLINES,
  CatalogueItem,
  CategoryModuleDefinition,
} from '../data/catalogueData';
import { ProductCard } from './ProductCard';
import { RealisticDentalImage } from './RealisticDentalImage';

interface ProductCatalogueProps {
  onEnquire: (item: CatalogueItem) => void;
  onViewDetails: (item: CatalogueItem) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onBackToHome?: () => void;
}

export const ProductCatalogue: React.FC<ProductCatalogueProps> = ({
  onEnquire,
  onViewDetails,
  selectedCategory,
  onSelectCategory,
  onBackToHome,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [layoutMode, setLayoutMode] = useState<'grid' | 'list'>('grid');
  const [selectedApplianceSub, setSelectedApplianceSub] = useState<string>('All');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Scroll to top of product module when switching category
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedApplianceSub('All');
  }, [selectedCategory]);

  const handleDownloadBrochure = () => {
    // Download the authentic uploaded brochure PDF directly
    const link = document.createElement('a');
    link.href = '/Dental-Lab-Connect-Product-Brochure.pdf';
    link.download = 'Dental-Lab-Connect-Product-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  // Compute product count per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    CATALOGUE_ITEMS.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Compute product counts for appliance sub-disciplines
  const applianceCounts = useMemo(() => {
    const counts: Record<string, number> = { All: 0 };
    CATALOGUE_ITEMS.filter((i) => i.category === 'Appliances').forEach((item) => {
      counts.All = (counts.All || 0) + 1;
      if (item.subcategory) {
        counts[item.subcategory] = (counts[item.subcategory] || 0) + 1;
      }
    });
    return counts;
  }, []);

  // Search filtering
  const isSearchActive = searchQuery.trim().length > 0;

  const filteredItems = useMemo(() => {
    let items = CATALOGUE_ITEMS;

    // Filter by category if not "All Products"
    if (selectedCategory !== 'All Products') {
      items = items.filter((item) => item.category === selectedCategory);
    }

    // If inside Appliances and a specific subcategory is selected
    if (selectedCategory === 'Appliances' && selectedApplianceSub !== 'All') {
      items = items.filter((item) => item.subcategory === selectedApplianceSub);
    }

    // Search query filter
    if (isSearchActive) {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter((item) => {
        const matchName = item.name.toLowerCase().includes(q);
        const matchCat = item.category.toLowerCase().includes(q);
        const matchSub = item.subcategory?.toLowerCase().includes(q) ?? false;
        return matchName || matchCat || matchSub;
      });
    }

    return items;
  }, [selectedCategory, selectedApplianceSub, searchQuery, isSearchActive]);

  // Group items by subcategory within the active view
  const subcategoryGroups = useMemo(() => {
    const groups: Record<string, CatalogueItem[]> = {};
    filteredItems.forEach((item) => {
      const sub = item.subcategory || item.category;
      if (!groups[sub]) {
        groups[sub] = [];
      }
      groups[sub].push(item);
    });
    return groups;
  }, [filteredItems]);

  const currentCategoryMeta = useMemo(() => {
    return CATEGORY_MODULES.find((m) => m.name === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="products" className="py-12 md:py-16 bg-[#08090B] relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumbs & Back Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            {selectedCategory !== 'All Products' ? (
              <button
                type="button"
                onClick={() => {
                  onSelectCategory('All Products');
                  setSearchQuery('');
                }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-[#E5E7EB] hover:text-white transition-all cursor-pointer group"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>All Product Categories</span>
              </button>
            ) : onBackToHome ? (
              <button
                type="button"
                onClick={onBackToHome}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-[#E5E7EB] hover:text-white transition-all cursor-pointer group"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Home</span>
              </button>
            ) : null}
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#8E95A2]">
            <button
              type="button"
              onClick={onBackToHome}
              className="text-[#C0C4CA] hover:text-white hover:underline cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <button
              type="button"
              onClick={() => onSelectCategory('All Products')}
              className={`${
                selectedCategory === 'All Products' ? 'text-white font-semibold' : 'text-[#C0C4CA] hover:text-white hover:underline cursor-pointer'
              }`}
            >
              Products
            </button>
            {selectedCategory !== 'All Products' && (
              <>
                <span>/</span>
                <span className="text-white font-semibold truncate max-w-[200px] sm:max-w-none">
                  {selectedCategory}
                </span>
              </>
            )}
          </div>
        </div>

        {/* ========================================================
            VIEW 1: CATEGORY SELECTION GATEWAY (When 'All Products')
            Compact Category Cards with realistic laboratory product images
            ======================================================== */}
        {selectedCategory === 'All Products' && !isSearchActive && (
          <div className="space-y-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
              <div className="max-w-2xl space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#A0A5AE]">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  <span>Product Directory · 9 Main Categories</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit'] text-white tracking-tight">
                  Explore Our Products
                </h2>
                <p className="text-sm sm:text-base text-[#8E95A2] font-light leading-relaxed">
                  Select a product category below to view all items, specifications, and laboratory manufacturing options.
                </p>
              </div>

              {/* Download Brochure Action */}
              <button
                type="button"
                onClick={handleDownloadBrochure}
                className="metallic-button inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold cursor-pointer shadow-lg hover:shadow-white/10 transition-all shrink-0 self-start md:self-auto"
                title="Download official product brochure PDF"
              >
                {downloadSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                    <span>Brochure Downloaded!</span>
                  </>
                ) : (
                  <>
                    <FileDown className="w-4 h-4 text-[#08090B]" />
                    <span>Download Product Brochure</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Search across all products */}
            <div className="relative max-w-xl">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E95A2] pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across all 262 products (e.g. Zirconia, Hawleys, Hyrax, DMLS)..."
                className="w-full pl-10 pr-10 py-3 bg-[#111317] border border-white/10 rounded-xl text-sm text-white placeholder:text-[#646A77] focus:outline-hidden focus:border-[#C0C4CA] focus:ring-1 focus:ring-[#C0C4CA] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#8E95A2] hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Compact Category Cards Grid (9 Main Categories) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {CATEGORY_MODULES.map((cat, idx) => {
                const count = categoryCounts[cat.name] || 0;
                return (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    whileHover={{ y: -4 }}
                    onClick={() => onSelectCategory(cat.name)}
                    className="group relative flex flex-col justify-between bg-[#111317] rounded-2xl border border-white/10 hover:border-white/30 hover:bg-[#15171D] hover:shadow-[0_16px_36px_rgba(0,0,0,0.85)] transition-all duration-200 overflow-hidden cursor-pointer"
                  >
                    <div>
                      {/* Compact Image Container with Realistic Laboratory Image */}
                      <div className="relative h-44 sm:h-48 w-full overflow-hidden border-b border-white/10">
                        <img
                          src={cat.image}
                          alt={`${cat.name} dental laboratory product`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-black/30 pointer-events-none" />
                        
                        {/* Item Count Badge */}
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono font-semibold text-white">
                          {count} Products
                        </div>

                        {/* Category Index */}
                        <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs text-[10px] font-mono text-[#A0A5AE]">
                          Section 0{idx + 1}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 space-y-2">
                        <h3 className="text-lg font-bold font-['Outfit'] text-white group-hover:text-[#E5E7EB] transition-colors leading-snug">
                          {cat.name}
                        </h3>
                        <p className="text-xs font-medium text-[#C0C4CA]">
                          {cat.subtitle}
                        </p>
                        <p className="text-xs text-[#8E95A2] font-light leading-relaxed line-clamp-2 pt-1">
                          {cat.description}
                        </p>
                      </div>
                    </div>

                    {/* Footer Button */}
                    <div className="px-5 pb-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                      <span className="font-semibold text-white group-hover:text-[#C0C4CA] transition-colors inline-flex items-center gap-1.5">
                        <span>View Category Products</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="text-[10px] font-mono text-[#646A77]">
                        {cat.badge}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================
            VIEW 2: DEDICATED CATEGORY MODULE (When category clicked)
            Displays ONLY products belonging to the selected category
            ======================================================== */}
        {(selectedCategory !== 'All Products' || isSearchActive) && (
          <div className="space-y-8">
            {/* Category Module Header */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111317] border border-white/10 shadow-xl space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#A0A5AE]">
                    <span>Category Module</span>
                    <span className="text-white/20">·</span>
                    <span className="text-white font-semibold">
                      {isSearchActive ? `Search: "${searchQuery}"` : selectedCategory}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Outfit'] text-white tracking-tight">
                    {isSearchActive ? `Search Results` : selectedCategory}
                  </h2>
                  {currentCategoryMeta && !isSearchActive && (
                    <p className="text-sm text-[#C0C4CA] max-w-3xl font-light leading-relaxed">
                      {currentCategoryMeta.description}
                    </p>
                  )}
                </div>

                {/* Right Header Buttons */}
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={handleDownloadBrochure}
                    className="metallic-button inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold cursor-pointer shadow-md"
                    title="Download brochure PDF"
                  >
                    <FileDown className="w-3.5 h-3.5 text-[#08090B]" />
                    <span>Download Brochure</span>
                  </button>

                  <a
                    href={`https://wa.me/917639664119?text=Hello%20Saravana%20Kumar%2C%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(selectedCategory)}%20products.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold text-white transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#C0C4CA]" />
                    <span>WhatsApp Saravana Kumar</span>
                  </a>
                </div>
              </div>

              {/* Reliance Zirconia Features & Benefits Callout (Exact from Brochure Page 3) */}
              {selectedCategory === 'Reliance Zirconia' && !isSearchActive && (
                <div className="p-4 sm:p-5 rounded-xl bg-black/40 border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C0C4CA]">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                    <span>Features & Benefits (Official Laboratory Standard)</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs text-[#A0A5AE]">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>Bio-compatibility</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>High compressive strength</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>Cutback techniques</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>Continuous pontic 4 unit for anterior</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>PMMA temporary compliment with zirconia</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>CAD image for design confirmation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>Multilayer zirconia available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>16 shades available on layering zirconia</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>Continuous 14 unit bridges or joint crowns</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Sub-discipline Pills for Appliances (7 Sections) */}
              {selectedCategory === 'Appliances' && !isSearchActive && (
                <div className="space-y-3 pt-2 border-t border-white/5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E95A2] block">
                    Filter by Appliance Discipline:
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedApplianceSub('All')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        selectedApplianceSub === 'All'
                          ? 'metallic-button'
                          : 'bg-white/5 hover:bg-white/10 text-[#C0C4CA] border border-white/10'
                      }`}
                    >
                      All Appliances ({applianceCounts.All || 146})
                    </button>
                    {APPLIANCE_SUB_DISCIPLINES.map((subName) => (
                      <button
                        key={subName}
                        type="button"
                        onClick={() => setSelectedApplianceSub(subName)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          selectedApplianceSub === subName
                            ? 'metallic-button'
                            : 'bg-white/5 hover:bg-white/10 text-[#C0C4CA] border border-white/10'
                        }`}
                      >
                        {subName} ({applianceCounts[subName] || 0})
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Dental Scanner Solutions – Premium Featured Panel ── */}
              {selectedCategory === 'Dental Scanner Solutions' && !isSearchActive && (
                <div className="pt-2 border-t border-white/5 space-y-5">
                  {/* Large scanner image */}
                  <div className="relative w-full rounded-2xl overflow-hidden border border-[#C0C4CA]/20 shadow-2xl" style={{ height: '340px' }}>
                    <img
                      src="/images/categories/dental-scanner.jpg"
                      alt="Advanced intraoral dental scanner wand and dental stone cast in modern laboratory"
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/categories/dental-scanner-alt.jpg';
                      }}
                    />
                    {/* Bottom vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-[#111317]/30 to-transparent pointer-events-none" />
                    {/* Availability badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider bg-[#08090B]/90 text-[#E5E7EB] border border-white/20 backdrop-blur-md shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-[#C0C4CA] animate-pulse" />
                        Available on Direct Enquiry
                      </span>
                    </div>
                    {/* Bottom overlay text */}
                    <div className="absolute bottom-5 left-5 right-5 z-10">
                      <p className="text-xs text-[#A0A5AE] font-light leading-relaxed max-w-xl">
                        Advanced dental scanning solutions for accurate digital impressions and streamlined dental laboratory workflows.
                      </p>
                    </div>
                  </div>

                  {/* Feature highlights grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      { title: 'Digital Impressions', desc: 'Accurate intraoral scanning for digital workflow integration.' },
                      { title: 'Laboratory Integration', desc: 'Seamlessly connects with CAD/CAM and digital fabrication workflows.' },
                      { title: 'Available on Enquiry', desc: 'Contact Saravana Kumar directly to discuss compatibility and availability.' },
                    ].map((feat) => (
                      <div key={feat.title} className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1.5">
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#C0C4CA] shrink-0" />
                          <span className="text-xs font-semibold text-white">{feat.title}</span>
                        </div>
                        <p className="text-xs text-[#8E95A2] font-light leading-relaxed pl-5">{feat.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp CTA */}
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="https://wa.me/917639664119?text=Hello%20Saravana%20Kumar%2C%20I%20would%20like%20to%20enquire%20about%20Dental%20Scanner%20Solutions%20at%20Dental%20Lab%20Connect."
                      target="_blank"
                      rel="noopener noreferrer"
                      id="scanner-whatsapp-enquiry"
                      className="metallic-button inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold cursor-pointer shadow-lg transition-all"
                      aria-label="Enquire about Dental Scanner Solutions on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 text-[#08090B]" />
                      <span className="text-[#08090B]">Enquire on WhatsApp</span>
                    </a>
                    <a
                      href="tel:+917639664119"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-semibold text-white transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C0C4CA]" />
                      <span>Call: 7639664119</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Search & Layout Control Bar */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                {/* Search within this category */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8E95A2] pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={`Search within ${selectedCategory === 'All Products' ? 'products' : selectedCategory}...`}
                    className="w-full pl-9 pr-9 py-2 bg-[#15171B] border border-white/10 rounded-lg text-xs text-white placeholder:text-[#646A77] focus:outline-hidden focus:border-[#C0C4CA]"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-[#8E95A2] hover:text-white"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Status Count & Layout Switcher */}
                <div className="flex items-center justify-between sm:justify-end gap-3">
                  <span className="text-xs font-mono text-[#8E95A2]">
                    Showing <strong className="text-white">{filteredItems.length}</strong> items
                  </span>

                  <div className="flex items-center gap-1 p-1 bg-[#15171B] border border-white/10 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setLayoutMode('grid')}
                      className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                        layoutMode === 'grid'
                          ? 'bg-white text-[#08090B]'
                          : 'text-[#8E95A2] hover:text-white'
                      }`}
                      title="Grid Layout"
                    >
                      <Grid className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setLayoutMode('list')}
                      className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                        layoutMode === 'list'
                          ? 'bg-white text-[#08090B]'
                          : 'text-[#8E95A2] hover:text-white'
                      }`}
                      title="List Layout"
                    >
                      <List className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Display by Subcategory Groupings */}
            {filteredItems.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-[#111317] border border-white/10 space-y-3">
                <Search className="w-8 h-8 text-[#646A77] mx-auto" />
                <h3 className="text-base font-bold text-white">No products found</h3>
                <p className="text-xs text-[#8E95A2] max-w-sm mx-auto">
                  No products matched &ldquo;{searchQuery}&rdquo;. Try another term or reset your search.
                </p>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="mt-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold cursor-pointer"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                {Object.entries(subcategoryGroups).map(([groupTitle, items]) => (
                  <div key={groupTitle} className="space-y-4">
                    {/* Subcategory Section Title */}
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-white/60" />
                        <h3 className="text-base sm:text-lg font-bold font-['Outfit'] text-white">
                          {groupTitle}
                        </h3>
                      </div>
                      <span className="text-xs font-mono text-[#8E95A2]">
                        {items.length} {items.length === 1 ? 'item' : 'items'}
                      </span>
                    </div>

                    {/* Products Grid or List */}
                    <div
                      className={
                        layoutMode === 'grid'
                          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
                          : 'space-y-3'
                      }
                    >
                      {items.map((item) => (
                        <ProductCard
                          key={item.id}
                          item={item}
                          layout={layoutMode}
                          onEnquire={onEnquire}
                          onViewDetails={onViewDetails}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
