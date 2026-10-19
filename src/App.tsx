import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { LabWorkflowSection } from './components/LabWorkflowSection';
import { ServicesOverview } from './components/ServicesOverview';
import { QualityDeliverySection } from './components/QualityDeliverySection';
import { ContactSection } from './components/ContactSection';
import { ProductCatalogue } from './components/ProductCatalogue';
import { Footer } from './components/Footer';
import { ProductDetailsModal } from './components/ProductDetailsModal';
import { CATALOGUE_ITEMS, CATALOGUE_CATEGORIES, CatalogueItem } from './data/catalogueData';
import { MessageCircle, Phone } from 'lucide-react';
import { AppTheme } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'products'>('home');
  const [selectedProductForModal, setSelectedProductForModal] = useState<CatalogueItem | null>(null);
  const [prefilledProductForForm, setPrefilledProductForForm] = useState<CatalogueItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');

  // Load theme from localStorage, default to 'obsidian'
  const [theme, setTheme] = useState<AppTheme>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('dental_lab_theme');
        if (saved === 'pearl-white' || saved === 'obsidian') {
          return saved;
        }
      } catch (e) {
        console.error('Error reading theme from localStorage', e);
      }
    }
    return 'obsidian';
  });

  const handleSelectTheme = (newTheme: AppTheme) => {
    setTheme(newTheme);
    try {
      localStorage.setItem('dental_lab_theme', newTheme);
    } catch (e) {
      console.error('Error saving theme to localStorage', e);
    }
  };

  const isLight = theme === 'pearl-white';

  // Synchronize initial URL hash & browser navigation
  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#products' || hash === '#our-products') {
        setCurrentView('products');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#about' ||
        hash === '#services' ||
        hash === '#quality' ||
        hash === '#delivery' ||
        hash === '#workflow' ||
        hash === '#why-us' ||
        hash === '#contact' ||
        hash === '#home'
      ) {
        setCurrentView('home');
        const targetId = hash.replace('#', '');
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    };

    handleHashSync();
    window.addEventListener('hashchange', handleHashSync);
    return () => window.removeEventListener('hashchange', handleHashSync);
  }, []);

  // Universal Navigation Handler
  const handleNavigate = (view: 'home' | 'products', sectionId?: string) => {
    setCurrentView(view);

    if (view === 'products') {
      window.location.hash = 'products';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (sectionId && sectionId !== 'home') {
        window.location.hash = sectionId;
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 60);
      } else {
        window.location.hash = 'home';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // When a user selects a service overview card on the landing page
  const handleServiceOverviewClick = (targetCategory?: string) => {
    if (targetCategory) {
      setSelectedCategory(targetCategory);
    } else {
      setSelectedCategory('All Products');
    }
    setCurrentView('products');
    window.location.hash = 'products';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDetails = (item: CatalogueItem) => {
    setSelectedProductForModal(item);
  };

  const handleEnquireQuick = (item: CatalogueItem) => {
    setSelectedProductForModal(item);
  };

  const handleRequestInfoFromModal = (item: CatalogueItem) => {
    setPrefilledProductForForm(item);
    setCurrentView('home');
    window.location.hash = 'contact';
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-['Plus_Jakarta_Sans',sans-serif] transition-colors duration-300 ${
        isLight
          ? 'theme-pearl-white bg-[#FFFFFF] text-[#17191D]'
          : 'theme-obsidian bg-[#08090B] text-[#FFFFFF]'
      }`}
      data-theme={theme}
    >
      {/* 1. Header / Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        theme={theme}
        onSelectTheme={handleSelectTheme}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'home' ? (
          /* ========================================================
             LANDING PAGE: Clean, refined, important info only
             ======================================================== */
          <div className="space-y-0">
            {/* A. Hero Section with Owner Portrait & Docked Product Ribbon */}
            <Hero
              theme={theme}
              onExploreProducts={() => handleNavigate('products')}
              onContactClick={() => handleNavigate('home', 'contact')}
              onSelectCategory={handleServiceOverviewClick}
            />

            {/* B. About Us */}
            <AboutSection />

            {/* C. Our Services (6 Core Laboratory Disciplines) */}
            <ServicesOverview onNavigateToProducts={handleServiceOverviewClick} />

            {/* D. Quality, On-Time Completion & Reliable Delivery */}
            <QualityDeliverySection onEnquire={() => handleNavigate('home', 'contact')} />

            {/* F. How We Work (4-Step Laboratory Workflow) */}
            <LabWorkflowSection onEnquire={() => handleNavigate('home', 'contact')} />

            {/* G. Contact Information & Direct Enquiry Form */}
            <ContactSection
              prefilledProduct={prefilledProductForForm}
              onClearPrefill={() => setPrefilledProductForForm(null)}
            />
          </div>
        ) : (
          /* ========================================================
             PRODUCT BROWSING MODULE: 9 Main Categories & Dedicated Modules
             ======================================================== */
          <div className="pt-24 pb-16">
            <ProductCatalogue
              onEnquire={handleEnquireQuick}
              onViewDetails={handleOpenDetails}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              onBackToHome={() => handleNavigate('home')}
            />

            {/* Bottom Direct Coordinator Callout */}
            <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 mt-12">
              <div
                className={`p-8 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl ${
                  isLight
                    ? 'bg-[#F5F6F8] border-[#DDE0E5]'
                    : 'bg-gradient-to-r from-[#121419] to-[#181B22] border-white/10'
                }`}
              >
                <div className="space-y-2 text-center md:text-left">
                  <span
                    className={`text-[10px] font-mono uppercase tracking-widest ${
                      isLight ? 'text-[#7A8492]' : 'text-[#A0A5AE]'
                    }`}
                  >
                    Direct Technical Guidance
                  </span>
                  <h3
                    className={`text-xl font-bold font-['Outfit'] ${
                      isLight ? 'text-[#17191D]' : 'text-white'
                    }`}
                  >
                    Need Custom Appliance Advice or Shade Verification?
                  </h3>
                  <p
                    className={`text-xs sm:text-sm max-w-xl font-light ${
                      isLight ? 'text-[#5A6270]' : 'text-[#8E95A2]'
                    }`}
                  >
                    Contact Saravana Kumar directly to verify model preparation, prescription requirements, and delivery arrangements.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <a
                    href="tel:+917639664119"
                    className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg border text-xs font-mono font-semibold transition-colors ${
                      isLight
                        ? 'bg-white hover:bg-[#ECEEF2] border-[#DDE0E5] text-[#17191D]'
                        : 'bg-white/5 hover:bg-white/10 border-white/10 text-white'
                    }`}
                  >
                    <Phone className={`w-3.5 h-3.5 ${isLight ? 'text-[#17191D]' : 'text-[#C0C4CA]'}`} />
                    <span>7639664119</span>
                  </a>

                  <a
                    href="https://wa.me/917639664119?text=Hello%20Saravana%20Kumar%2C%20I%20would%20like%20to%20consult%20about%20a%20dental%20product%20case."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold cursor-pointer shadow-md ${
                      isLight
                        ? 'bg-[#17191D] hover:bg-[#2C313A] text-white'
                        : 'metallic-button text-[#08090B]'
                    }`}
                  >
                    <MessageCircle className={`w-3.5 h-3.5 ${isLight ? 'text-white' : 'text-[#08090B]'}`} />
                    <span>WhatsApp Saravana Kumar</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Product Details & Enquiry Modal */}
      {selectedProductForModal && (
        <ProductDetailsModal
          item={selectedProductForModal}
          onClose={() => setSelectedProductForModal(null)}
          onRequestInfo={handleRequestInfoFromModal}
        />
      )}

      {/* Floating WhatsApp Enquiry Button */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <a
          href="https://wa.me/917639664119?text=Hello%20Saravana%20Kumar%2C%20I%20would%20like%20to%20enquire%20about%20Dental%20Lab%20Connect%20services."
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2.5 px-4 py-3 rounded-full transition-all duration-200 group active:scale-95 cursor-pointer ${
            isLight
              ? 'bg-[#17191D] hover:bg-[#2C313A] text-white shadow-[0_8px_25px_rgba(23,25,29,0.25)]'
              : 'metallic-button text-[#08090B] shadow-[0_8px_25px_rgba(255,255,255,0.2)] hover:shadow-[0_12px_30px_rgba(255,255,255,0.35)]'
          }`}
          aria-label="Enquire via WhatsApp with Saravana Kumar"
        >
          <MessageCircle className={`w-5 h-5 ${isLight ? 'text-white' : 'text-[#08090B]'}`} />
          <span className="hidden sm:inline-block text-xs font-bold tracking-wide">
            Enquire on WhatsApp
          </span>
        </a>
      </aside>
    </div>
  );
}
