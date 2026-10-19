import React from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: 'home' | 'products', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent, view: 'home' | 'products', sectionId?: string) => {
    e.preventDefault();
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
        scrollToTop();
      }
    }
  };

  return (
    <footer className="bg-[#050607] text-[#8E95A2] py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Brand Info Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-white text-[#08090B] font-bold flex items-center justify-center text-xs font-['Outfit']">
                DLC
              </div>
              <span className="text-xl font-bold font-['Outfit'] text-white tracking-tight">
                Dental Lab Connect
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#8E95A2] leading-relaxed max-w-sm font-light">
              A comprehensive showcase of reliable dental laboratory solutions for dentists, dental clinics, and dental practitioners.
            </p>
            <div className="text-xs text-[#A0A5AE] space-y-1 font-mono">
              <p>
                <strong className="text-white">Contact Person:</strong> Saravana Kumar
              </p>
              <p>
                <strong className="text-white">Phone & WhatsApp:</strong> 7639664119
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button
                  type="button"
                  onClick={(e) => handleLinkClick(e, 'home', 'home')}
                  className="text-[#8E95A2] hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={(e) => handleLinkClick(e, 'home', 'about')}
                  className="text-[#8E95A2] hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={(e) => handleLinkClick(e, 'home', 'services')}
                  className="text-[#8E95A2] hover:text-white transition-colors cursor-pointer"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={(e) => handleLinkClick(e, 'home', 'quality')}
                  className="text-[#8E95A2] hover:text-white transition-colors cursor-pointer"
                >
                  Quality & Delivery
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={(e) => handleLinkClick(e, 'home', 'delivery')}
                  className="text-[#8E95A2] hover:text-white transition-colors cursor-pointer"
                >
                  On-Time Delivery
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={(e) => handleLinkClick(e, 'products')}
                  className="text-[#8E95A2] hover:text-white transition-colors cursor-pointer"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={(e) => handleLinkClick(e, 'home', 'contact')}
                  className="text-[#8E95A2] hover:text-white transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Communication Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Direct Inquiries
            </h4>
            <p className="text-xs text-[#8E95A2] leading-relaxed font-light">
              For case clarifications, technical product assistance, or custom appliance inquiries, connect directly with our coordinator.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="tel:+917639664119"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#C0C4CA] hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>+91 7639664119</span>
              </a>
              <a
                href="https://wa.me/917639664119?text=Hello%20Saravana%20Kumar%2C%20I%20would%20like%20to%20enquire%20about%20Dental%20Lab%20Connect."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#C0C4CA] hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WhatsApp: 7639664119</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright and back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#646A77]">
          <div>
            &copy; {new Date().getFullYear()} Dental Lab Connect. All rights reserved.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#8E95A2] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
