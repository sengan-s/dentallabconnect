import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight, Check, ChevronDown } from 'lucide-react';
import { AppTheme } from '../types';

interface NavbarProps {
  currentView?: 'home' | 'products';
  onNavigate?: (view: 'home' | 'products', sectionId?: string) => void;
  theme?: AppTheme;
  onSelectTheme?: (theme: AppTheme) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView = 'home',
  onNavigate,
  theme = 'obsidian',
  onSelectTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isLight = theme === 'pearl-white';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setThemeDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setThemeDropdownOpen(false);
      }
    };

    if (themeDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [themeDropdownOpen]);

  const handleLinkClick = (e: React.MouseEvent, view: 'home' | 'products', sectionId?: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setThemeDropdownOpen(false);
    if (onNavigate) {
      onNavigate(view, sectionId);
    } else {
      if (view === 'products') {
        const el = document.getElementById('products');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleThemeOptionClick = (newTheme: AppTheme) => {
    if (onSelectTheme) {
      onSelectTheme(newTheme);
    }
    setThemeDropdownOpen(false);
  };

  const navLinks = [
    { label: 'Home', view: 'home' as const, sectionId: 'home' },
    { label: 'About Us', view: 'home' as const, sectionId: 'about' },
    { label: 'Dental Scanner', view: 'home' as const, sectionId: 'scanner', isNew: true },
    { label: 'Our Services', view: 'home' as const, sectionId: 'services' },
    { label: 'Our Products', view: 'products' as const, sectionId: undefined },
    { label: 'How We Work', view: 'home' as const, sectionId: 'workflow' },
    { label: 'Quality & Delivery', view: 'home' as const, sectionId: 'quality' },
    { label: 'Contact Us', view: 'home' as const, sectionId: 'contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 border-b ${
        isLight
          ? 'bg-white/95 backdrop-blur-md border-[#DDE0E5] shadow-xs'
          : 'bg-[#08090B]/95 backdrop-blur-md border-white/10 shadow-lg'
      }`}
    >
      {/* Top Dental Scanner Highlight Ribbon */}
      <div
        className={`w-full py-1.5 px-3 sm:px-6 text-center text-[11px] sm:text-xs font-medium border-b flex items-center justify-center gap-2 sm:gap-3 transition-colors ${
          isLight
            ? 'bg-[#F4F5F7] border-[#E5E7EB] text-[#17191D]'
            : 'bg-[#101217] border-white/10 text-white'
        }`}
      >
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[9.5px] font-mono font-bold uppercase tracking-wider bg-emerald-400 text-black shrink-0 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
          NEW
        </span>
        <span className="truncate">
          <strong className="font-semibold text-white">Dental Scanner Solutions</strong>
          <span className="hidden md:inline text-inherit opacity-80"> — Advanced intraoral digital impressions &amp; streamlined lab workflow.</span>
        </span>
        <a
          href="https://wa.me/917639664119?text=Hello%20Saravana%20Kumar%2C%20I%20would%20like%20to%20enquire%20about%20Dental%20Scanner%20Solutions%20at%20Dental%20Lab%20Connect."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-2 shrink-0 ml-1"
        >
          <span>Enquire on WhatsApp</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-12 h-16 sm:h-[70px] flex items-center justify-between gap-6">
        {/* Brand Logo & Name */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, 'home', 'home')}
          className="flex items-center gap-3.5 group whitespace-nowrap shrink-0 cursor-pointer"
        >
          <div
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg p-[1px] shadow-md group-hover:scale-105 transition-transform duration-200 shrink-0 ${
              isLight
                ? 'bg-gradient-to-br from-[#17191D] via-[#4B5563] to-[#9CA3AF]'
                : 'bg-gradient-to-br from-white via-[#C0C4CA] to-[#4A4E58]'
            }`}
          >
            <div
              className={`w-full h-full rounded-[7px] flex items-center justify-center ${
                isLight ? 'bg-white' : 'bg-[#08090B]'
              }`}
            >
              <span
                className={`font-['Outfit'] font-black text-sm tracking-wider ${
                  isLight
                    ? 'bg-gradient-to-r from-[#17191D] to-[#4B5563] bg-clip-text text-transparent'
                    : 'bg-gradient-to-r from-white via-[#E5E7EB] to-[#A0A5AE] bg-clip-text text-transparent'
                }`}
              >
                DLC
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center min-w-0">
            <span
              className={`font-['Outfit'] font-bold text-base sm:text-lg tracking-tight leading-none transition-colors ${
                isLight
                  ? 'text-[#17191D] group-hover:text-black'
                  : 'text-white group-hover:text-[#E5E7EB]'
              }`}
            >
              Dental Lab Connect
            </span>
            <span
              className={`text-[9.5px] sm:text-[10px] font-mono tracking-widest uppercase mt-1 leading-none ${
                isLight ? 'text-[#5A6270]' : 'text-[#A0A5AE]'
              }`}
            >
              Dental Laboratory Solutions
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav
          className={`hidden xl:flex items-center gap-6 text-sm font-medium ${
            isLight ? 'text-[#525866]' : 'text-[#C0C4CA]'
          }`}
        >
            {navLinks.map((link) => {
              const isActive =
                link.view === 'products'
                  ? currentView === 'products'
                  : currentView === 'home' && link.sectionId === 'home';

              return (
                <button
                  key={link.label}
                  type="button"
                  onClick={(e) => handleLinkClick(e, link.view, link.sectionId)}
                  className={`inline-flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 py-1 relative cursor-pointer ${
                    isLight
                      ? isActive
                        ? 'text-[#17191D] font-semibold after:w-full'
                        : 'hover:text-[#17191D] after:w-0'
                      : isActive
                      ? 'text-white font-semibold after:w-full'
                      : 'hover:text-white after:w-0'
                  } after:absolute after:bottom-0 after:left-0 after:h-[1.5px] ${
                    isLight ? 'after:bg-[#17191D]' : 'after:bg-white'
                  } hover:after:w-full after:transition-all after:duration-200`}
                >
                  <span>{link.label}</span>
                  {link.isNew && (
                    <span className="px-1.5 py-0.2 rounded text-[8.5px] font-mono font-bold uppercase tracking-wider bg-emerald-400 text-black shadow-xs">
                      NEW
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Header Actions: Theme Dropdown, Phone, WhatsApp */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Interactive Theme Selector with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                id="theme-dropdown-button"
                onClick={() => setThemeDropdownOpen((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={themeDropdownOpen}
                aria-label={`Current theme: ${isLight ? 'Pearl White' : 'Obsidian'}. Click to switch theme.`}
                className={`inline-flex items-center gap-2 px-3 py-2 text-xs font-mono rounded-lg border transition-all cursor-pointer shadow-xs select-none ${
                  isLight
                    ? 'text-[#17191D] bg-[#F5F6F8] hover:bg-[#ECEEF2] border-[#DDE0E5]'
                    : 'text-[#C0C4CA] hover:text-white bg-white/5 hover:bg-white/10 border-white/10'
                }`}
              >
                {/* Theme Color Preview Dot */}
                <span
                  className="w-3 h-3 rounded-full border shrink-0 transition-transform duration-200"
                  style={{
                    backgroundColor: isLight ? '#FFFFFF' : '#08090B',
                    borderColor: isLight ? '#B0B5C0' : 'rgba(255,255,255,0.4)',
                    boxShadow: isLight ? '0 1px 3px rgba(0,0,0,0.1)' : '0 0 6px rgba(255,255,255,0.2)',
                  }}
                />
                <span className="font-semibold">
                  {isLight ? 'Pearl White' : 'Obsidian'}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    themeDropdownOpen ? 'rotate-180' : ''
                  } ${isLight ? 'text-[#5A6270]' : 'text-[#8E95A2]'}`}
                />
              </button>

              {/* Theme Dropdown Menu */}
              {themeDropdownOpen && (
                <div
                  id="theme-dropdown-menu"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="theme-dropdown-button"
                  className={`absolute right-0 top-full mt-2 w-60 rounded-xl border p-1.5 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150 ${
                    isLight
                      ? 'bg-white border-[#DDE0E5] shadow-[0_12px_36px_rgba(0,0,0,0.12)]'
                      : 'bg-[#17191D] border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.9)]'
                  }`}
                >
                  <div className={`px-2.5 py-1.5 text-[10px] font-mono uppercase tracking-wider ${isLight ? 'text-[#7A8492]' : 'text-[#8E95A2]'}`}>
                    Select Theme
                  </div>

                  {/* Option 1: Obsidian — Dark Theme */}
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => handleThemeOptionClick('obsidian')}
                    className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                      theme === 'obsidian'
                        ? isLight
                          ? 'bg-[#F0F2F5] text-[#17191D] font-medium'
                          : 'bg-white/10 text-white font-medium'
                        : isLight
                        ? 'text-[#525866] hover:bg-[#F5F6F8] hover:text-[#17191D]'
                        : 'text-[#C0C4CA] hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-4 h-4 rounded-full border border-white/30 shrink-0 shadow-sm"
                        style={{ backgroundColor: '#08090B' }}
                      />
                      <div className="flex flex-col">
                        <span className="font-semibold leading-tight">Obsidian</span>
                        <span className={`text-[10px] leading-tight ${isLight ? 'text-[#7A8492]' : 'text-[#8E95A2]'}`}>
                          Dark Theme
                        </span>
                      </div>
                    </div>
                    {theme === 'obsidian' && (
                      <Check className={`w-4 h-4 shrink-0 ${isLight ? 'text-[#17191D]' : 'text-white'}`} />
                    )}
                  </button>

                  {/* Option 2: Pearl White — Light Theme */}
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => handleThemeOptionClick('pearl-white')}
                    className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-left text-xs transition-colors cursor-pointer mt-0.5 ${
                      theme === 'pearl-white'
                        ? isLight
                          ? 'bg-[#F0F2F5] text-[#17191D] font-medium'
                          : 'bg-white/10 text-white font-medium'
                        : isLight
                        ? 'text-[#525866] hover:bg-[#F5F6F8] hover:text-[#17191D]'
                        : 'text-[#C0C4CA] hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-4 h-4 rounded-full border border-[#B0B5C0] shrink-0 shadow-sm"
                        style={{ backgroundColor: '#FFFFFF' }}
                      />
                      <div className="flex flex-col">
                        <span className="font-semibold leading-tight">Pearl White</span>
                        <span className={`text-[10px] leading-tight ${isLight ? 'text-[#7A8492]' : 'text-[#8E95A2]'}`}>
                          Light Theme
                        </span>
                      </div>
                    </div>
                    {theme === 'pearl-white' && (
                      <Check className={`w-4 h-4 shrink-0 ${isLight ? 'text-[#17191D]' : 'text-white'}`} />
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Direct Phone Call Button */}
            <a
              href="tel:+917639664119"
              className={`inline-flex items-center gap-2 px-3 py-2 text-xs font-mono font-medium rounded-lg border transition-all whitespace-nowrap shrink-0 ${
                isLight
                  ? 'text-[#17191D] hover:bg-[#F5F6F8] border-transparent hover:border-[#DDE0E5]'
                  : 'text-[#C0C4CA] hover:text-white hover:bg-white/5 border-transparent hover:border-white/10'
              }`}
              title="Call Saravana Kumar: 7639664119"
            >
              <Phone className={`w-3.5 h-3.5 ${isLight ? 'text-[#17191D]' : 'text-[#C0C4CA]'}`} />
              <span>7639664119</span>
            </a>

            {/* WhatsApp Enquiry Button */}
            <a
              href="https://wa.me/917639664119?text=Hello%20Saravana%20Kumar%2C%20I%20would%20like%20to%20enquire%20about%20Dental%20Lab%20Connect%20products."
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer shadow-md active:scale-95 ${
                isLight
                  ? 'bg-[#17191D] text-white hover:bg-[#2C313A]'
                  : 'bg-white text-[#08090B] hover:bg-[#E8EAED]'
              }`}
            >
              <MessageCircle className={`w-3.5 h-3.5 ${isLight ? 'text-white' : 'text-[#08090B]'}`} />
              <span>WhatsApp Enquiry</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isLight ? 'text-white/70' : 'text-[#08090B]/70'}`} />
            </a>
          </div>

          {/* Mobile Actions: Theme button + Hamburger */}
          <div className="flex xl:hidden items-center gap-2">
            {/* Quick theme toggle for mobile header */}
            <button
              type="button"
              onClick={() => handleThemeOptionClick(isLight ? 'obsidian' : 'pearl-white')}
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                isLight
                  ? 'text-[#17191D] bg-[#F5F6F8] border-[#DDE0E5]'
                  : 'text-white bg-white/5 border-white/10'
              }`}
              title={`Switch to ${isLight ? 'Obsidian' : 'Pearl White'}`}
              aria-label="Toggle theme"
            >
              <span
                className="block w-4 h-4 rounded-full border"
                style={{
                  backgroundColor: isLight ? '#08090B' : '#FFFFFF',
                  borderColor: isLight ? 'rgba(255,255,255,0.4)' : '#B0B5C0',
                }}
              />
            </button>

            <a
              href="https://wa.me/917639664119"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                isLight ? 'text-[#17191D] bg-[#F5F6F8]' : 'text-white bg-white/10 hover:bg-white/20'
              }`}
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-hidden cursor-pointer ${
                isLight
                  ? 'text-[#17191D] hover:bg-[#F5F6F8]'
                  : 'text-[#C0C4CA] hover:text-white hover:bg-white/5'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`xl:hidden border-b px-4 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-150 ${
            isLight
              ? 'bg-white border-[#DDE0E5] text-[#17191D]'
              : 'bg-[#0F1115] border-white/10 text-white'
          }`}
        >
          {/* Mobile Theme Selector Strip */}
          <div className="mb-3 pb-3 border-b border-inherit flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-inherit opacity-75">Theme</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleThemeOptionClick('obsidian')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border cursor-pointer ${
                  theme === 'obsidian'
                    ? 'bg-[#17191D] text-white border-white/30'
                    : 'bg-transparent text-inherit opacity-70 border-transparent hover:opacity-100'
                }`}
              >
                <span className="w-3 h-3 rounded-full bg-[#08090B] border border-white/40" />
                <span>Obsidian</span>
              </button>
              <button
                type="button"
                onClick={() => handleThemeOptionClick('pearl-white')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border cursor-pointer ${
                  theme === 'pearl-white'
                    ? 'bg-white text-[#17191D] border-[#B0B5C0] shadow-xs'
                    : 'bg-transparent text-inherit opacity-70 border-transparent hover:opacity-100'
                }`}
              >
                <span className="w-3 h-3 rounded-full bg-white border border-[#B0B5C0]" />
                <span>Pearl White</span>
              </button>
            </div>
          </div>

          <nav className="flex flex-col space-y-1 pt-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={(e) => handleLinkClick(e, link.view, link.sectionId)}
                className={`flex items-center justify-between text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  isLight
                    ? 'text-[#333742] hover:text-[#17191D] hover:bg-[#F5F6F8]'
                    : 'text-[#C0C4CA] hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                {link.isNew && (
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-extrabold uppercase bg-emerald-400 text-black">
                    NEW
                  </span>
                )}
              </button>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-inherit flex flex-col gap-2.5">
            <a
              href="tel:+917639664119"
              className={`flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border text-xs font-mono font-semibold transition-colors ${
                isLight
                  ? 'border-[#DDE0E5] text-[#17191D] hover:bg-[#F5F6F8]'
                  : 'border-white/10 text-[#E5E7EB] hover:bg-white/5'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>Call Saravana Kumar: 7639664119</span>
            </a>

            <a
              href="https://wa.me/917639664119?text=Hello%20Saravana%20Kumar%2C%20I%20would%20like%20to%20enquire%20about%20Dental%20Lab%20Connect%20products."
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-xs font-semibold shadow-md ${
                isLight
                  ? 'bg-[#17191D] text-white hover:bg-[#2C313A]'
                  : 'metallic-button text-[#08090B]'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct Enquiry</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
