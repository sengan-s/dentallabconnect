import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  Clock, 
  FileDown, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  Info,
  Wrench
} from 'lucide-react';
import { Hero } from './Hero';
import { ActiveModule } from '../types';

interface HomeModuleProps {
  totalItemsCount: number;
  totalCategoriesCount: number;
  onNavigate: (module: ActiveModule) => void;
}

export const HomeModule: React.FC<HomeModuleProps> = ({
  totalItemsCount,
  totalCategoriesCount,
  onNavigate,
}) => {
  const modules = [
    {
      id: 'about' as const,
      title: 'About Us',
      subtitle: 'Dental Manufacturing Laboratory',
      description: 'Dedicated dental laboratory fabricating custom dental models, crowns, bridges, dentures, and appliances for dentists and clinics.',
      icon: <Info className="w-5 h-5 text-white" />,
      badge: 'Laboratory Profile',
      actionText: 'View About Us',
    },
    {
      id: 'services' as const,
      title: 'Our Services',
      subtitle: '7 Laboratory Disciplines',
      description: 'Fixed and removable prosthetics, acrylic dentures, orthodontic expanders, clear aligners, and dental models.',
      icon: <Wrench className="w-5 h-5 text-white" />,
      badge: 'Core Services',
      actionText: 'Explore Services',
    },
    {
      id: 'products' as const,
      title: 'Our Products',
      subtitle: '20 Categories · 224 Items',
      description: 'Complete range of manufactured products organized by Main Categories, Subcategories, and Product Details.',
      icon: <Layers className="w-5 h-5 text-white" />,
      badge: '224 Items',
      actionText: 'Browse Products',
    },
    {
      id: 'quality' as const,
      title: 'Quality & Precision',
      subtitle: 'Quality You Can Trust',
      description: 'Precision-focused craftsmanship, microscopic quality checks, attention to detail, and consistent standards across orders.',
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      badge: 'Quality Checks',
      actionText: 'Inspect Quality',
    },
    {
      id: 'delivery' as const,
      title: 'On-Time Delivery',
      subtitle: 'Reliable Service & Turnaround',
      description: 'Clear communication about order status, careful planning, timely dispatch, and direct WhatsApp case coordination.',
      icon: <Clock className="w-5 h-5 text-white" />,
      badge: 'Reliable Dispatch',
      actionText: 'Delivery Details',
    },
    {
      id: 'download' as const,
      title: 'Download Product List',
      subtitle: '15-Page Clinical Document',
      description: 'Download the complete, professionally formatted A4 product document with all 20 categories and 224 items. No prices.',
      icon: <FileDown className="w-5 h-5 text-white" />,
      badge: 'A4 Document',
      actionText: 'Download File',
    },
    {
      id: 'contact' as const,
      title: 'Contact Us',
      subtitle: 'Direct Coordination: 7639664119',
      description: 'Connect directly with Saravana Kumar for case prescriptions, model criteria, shade guidance, and dispatch scheduling.',
      icon: <Phone className="w-5 h-5 text-white" />,
      badge: 'Direct Coordination',
      actionText: 'Contact Lab',
    },
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* 1. Compact Hero Section */}
      <Hero
        totalItemsCount={totalItemsCount}
        totalCategoriesCount={totalCategoriesCount}
        onExploreProducts={() => onNavigate('products')}
        onContactClick={() => onNavigate('contact')}
      />

      {/* 2. Compact Module Gateway Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#A0A5AE] mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Independent Laboratory Modules</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white tracking-tight">
              Explore Dental Lab Connect
            </h2>
            <p className="text-xs sm:text-sm text-[#8E95A2] mt-1 font-light">
              Access each dedicated module directly to review services, browse products, or coordinate cases.
            </p>
          </div>

          <span className="text-xs font-mono text-[#C0C4CA] self-start sm:self-auto px-3 py-1 rounded-full bg-white/5 border border-white/10">
            7 Dedicated Modules
          </span>
        </div>

        {/* Modular Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod, idx) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              whileHover={{ y: -3 }}
              className={`p-6 rounded-2xl bg-[#111317] border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between group shadow-lg ${
                mod.id === 'contact' ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C0C4CA] group-hover:scale-105 transition-transform">
                    {mod.icon}
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#C0C4CA] uppercase">
                    {mod.badge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold font-['Outfit'] text-white group-hover:text-[#E5E7EB] transition-colors">
                    {mod.title}
                  </h3>
                  <span className="text-xs font-medium text-[#C0C4CA] block">
                    {mod.subtitle}
                  </span>
                  <p className="text-xs text-[#8E95A2] font-light leading-relaxed pt-1">
                    {mod.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-white/5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onNavigate(mod.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#C0C4CA] transition-colors cursor-pointer"
                >
                  <span>{mod.actionText}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <span className="text-[10px] font-mono text-[#646A77]">
                  Module 0{idx + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Direct Coordinator Quick Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-[#121419] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#A0A5AE]">
              Direct Dental Laboratory Line
            </span>
            <h3 className="text-xl font-bold font-['Outfit'] text-white">
              Direct Coordination with Saravana Kumar
            </h3>
            <p className="text-xs sm:text-sm text-[#8E95A2] max-w-xl font-light">
              Connect directly for case prescriptions, impression pouring criteria, shade matching, and custom appliance turnaround.
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
              href="https://wa.me/917639664119?text=Hello%20Saravana%20Kumar%2C%20I%20would%20like%20to%20enquire%20about%20Dental%20Lab%20Connect%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="metallic-button inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#08090B]" />
              <span>WhatsApp Saravana Kumar</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
