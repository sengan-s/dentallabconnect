/**
 * Verified Photorealistic Dental Laboratory Photography Repository
 * Authentic real-world dental manufacturing laboratory photography extracted from official brochure
 * Focus: Dental crowns, bridges, zirconia restorations, dentures, implant prosthetics, orthodontic appliances, and dental models.
 * NO dental clinic chairs, NO smiling patients, NO dentist treatments.
 */

export interface DentalImageMeta {
  src: string;
  fallbackSrc: string;
  alt: string;
  badge: string;
  description: string;
}

// 1. Homepage Hero Owner Portrait & Laboratory Technician
export const HERO_IMAGE: DentalImageMeta = {
  src: '/images/categories/reliance-zirconia.jpg',
  fallbackSrc: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85',
  alt: 'Dental laboratory precision crafted zirconia bridge restoration on textured rock cast',
  badge: 'Precision Restorations',
  description: 'Precision hand-sculpted restorations, articulated plaster dental casts, and CAD/CAM prosthetics fabricated in a modern dental laboratory.',
};

// 2. About Us Section Photograph
export const ABOUT_IMAGE: DentalImageMeta = {
  src: '/images/categories/metal-ceramic.jpg',
  fallbackSrc: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=85',
  alt: 'Dental laboratory precision metal-ceramic crowns and copings on master model',
  badge: 'Dental Lab Workbench',
  description: 'Precision bench craftsmanship: articulated plaster casts, porcelain build-up, and custom dental appliances crafted for dental clinics.',
};

// 3. Four-Step Dental Laboratory Workflow
export interface WorkflowStepMeta {
  step: number;
  title: string;
  description: string;
  src: string;
  fallbackSrc: string;
  alt: string;
  badge: string;
}

export const LAB_WORKFLOW_STEPS: WorkflowStepMeta[] = [
  {
    step: 1,
    title: 'Receive Requirements',
    description: "Receive the dentist's product requirements, impressions, or digital files as applicable.",
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    fallbackSrc: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    alt: 'Physical dental impression trays and digital scan records received for laboratory preparation',
    badge: 'Step 01 · Clinical Intake',
  },
  {
    step: 2,
    title: 'Fabricate with Precision',
    description: 'Prepare the requested dental product according to the supplied specifications.',
    src: '/images/categories/cad-cam-ceramic.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=800&q=80',
    alt: 'Dental laboratory technician carefully fabricating custom dental prosthetics and restorations at workbench',
    badge: 'Step 02 · Bench Fabrication',
  },
  {
    step: 3,
    title: 'Quality Inspection',
    description: 'Check the completed product for workmanship and relevant specifications.',
    src: '/images/categories/implant-prosthesis.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    alt: 'Quality inspection of completed dental restorations against master articulated stone casts',
    badge: 'Step 03 · Quality Inspection',
  },
  {
    step: 4,
    title: 'Dispatch on Schedule',
    description: 'Coordinate dispatch according to the agreed timeline.',
    src: '/images/categories/removable-prosthesis.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80',
    alt: 'Completed dental appliances and prosthetics carefully packaged for prompt delivery to dental practices',
    badge: 'Step 04 · Scheduled Dispatch',
  },
];

// 4. Photorealistic Laboratory Category Images for the 9 Main Categories and Subcategories
export const CATEGORY_REALISTIC_IMAGES: Record<string, DentalImageMeta> = {
  'Dental Scanner Solutions': {
    src: '/images/categories/dental-scanner.jpg',
    fallbackSrc: '/images/categories/dental-scanner-alt.jpg',
    alt: 'Advanced dental intraoral scanner wand resting on metallic stand in modern dental laboratory',
    badge: 'Dental Scanner Solutions',
    description: 'Advanced dental scanning solutions for accurate digital impressions and streamlined dental laboratory workflows.',
  },
  'Dental Scanner': {
    src: '/images/categories/dental-scanner.jpg',
    fallbackSrc: '/images/categories/dental-scanner-alt.jpg',
    alt: 'Advanced dental intraoral scanner wand resting on metallic stand in modern dental laboratory',
    badge: 'Dental Scanner Solutions',
    description: 'Advanced dental scanning solutions for accurate digital impressions and streamlined dental laboratory workflows.',
  },
  'Reliance Zirconia': {
    src: '/images/categories/reliance-zirconia.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    alt: 'Reliance Zirconia precision dental bridge restoration on stone cast',
    badge: 'Reliance Zirconia',
    description: 'High translucency, multi-layer monolithic and layered zirconia restorations with 16 VITA shades.',
  },
  'Metal Ceramic': {
    src: '/images/categories/metal-ceramic.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80',
    alt: 'Laser-sintered DMLS cobalt-chrome dental bridge coping and conventional PFM ceramic crowns',
    badge: 'Metal Ceramic (PFM & DMLS)',
    description: 'Laser-sintered DMLS copings and conventional PFM crowns, bridges, and facing ceramics.',
  },
  'CAD/CAM Ceramic': {
    src: '/images/categories/cad-cam-ceramic.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=800&q=80',
    alt: 'CAD/CAM milled Sintron ceramic restorations, crowns, bridges, and inlays',
    badge: 'CAD/CAM Ceramic',
    description: 'Sintron crowns and bridges, ceramic facings, full metal, and precision inlays & onlays.',
  },
  'Implant Prosthesis': {
    src: '/images/categories/implant-prosthesis.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    alt: 'Implant-supported crowns, screw-retained bridges, and hybrid denture frameworks on stone cast',
    badge: 'Implant Prosthetics',
    description: 'Cement & screw retained implant crowns, bridges, hybrid DMLS dentures, and primary/secondary copings.',
  },
  'Removable Prosthesis & Flexible Dentures': {
    src: '/images/categories/removable-prosthesis.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80',
    alt: 'German Bredent UltraFlex semi-rigid and Flexpro full-flexible dentures and cast partials',
    badge: 'Flexible Dentures',
    description: 'Bredent UltraFlex, Flexpro, Biodentaplast, and DMLS cast partial dentures fabricated with injection moulding.',
  },
  'Acrylic Injection Denture': {
    src: '/images/categories/acrylic-injection.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80',
    alt: 'Superior quality acrylic injection dentures, high-impact polymers, and standard acrylic dentures',
    badge: 'Bredent Acrylic Injection',
    description: 'High-density, low-shrinkage acrylic injection dentures processed with German Bredent polymers.',
  },
  'Precision Attachment': {
    src: '/images/categories/precision-attachment.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    alt: 'Precision dental attachments, male-female interlocking matrix and bar attachment for overdentures',
    badge: 'Precision Attachments',
    description: 'Unilateral attachments, O.T. strategy changing, female parts, and bar attachments for overdentures.',
  },
  'Clear Aligners': {
    src: '/images/categories/clear-aligners.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    alt: 'Transparent orthodontic aligners and vacuum thermoformed splints',
    badge: 'Clear Aligners',
    description: 'Sequential thermoformed clear aligners from base packs up to 25+ splints per case.',
  },
  'Appliances': {
    src: '/images/categories/appliances-main.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
    alt: 'Customized orthodontic appliances on dental plaster models',
    badge: 'Orthodontic Appliances',
    description: 'Comprehensive orthodontic devices: removable, functional, fixed, maxillary intrusion, Hyrax expanders, and suction splints.',
  },

  // Appliance Sub-disciplines
  'Removable Appliances': {
    src: '/images/categories/appliances-removable.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
    alt: 'Hawley removable appliance and Beggs retainer with springs and clasps on dental model',
    badge: 'Removable Appliances',
    description: 'Hawleys, Beggs retainers, expansion screws, split labial bows, and lingual retainers.',
  },
  'Functional Appliances': {
    src: '/images/categories/appliances-functional.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    alt: 'Orthodontic functional appliance with bite-blocks mounted on plaster dental study model',
    badge: 'Functional Orthodontics',
    description: 'Catlan’s, Kois deprogrammer, obturator, Sved appliance, and space closing devices.',
  },
  'Fixed Appliances': {
    src: '/images/categories/appliances-fixed.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    alt: 'Fixed orthodontic space maintainers, quad helix, and band and loop on stone model',
    badge: 'Fixed Orthodontics',
    description: 'Band and loop maintainers, quad helices, TPA, Nance holding arches, and lip bumpers.',
  },
  'Maxillary Intrusion Splints': {
    src: '/images/categories/appliances-maxillary.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    alt: 'Orthodontic maxillary intrusion bite splint with expansion screws and headgear kits',
    badge: 'Intrusion Splints',
    description: 'Maxillary splints with tubes, Jack’s screws, headgear kits, and protraction splints.',
  },
  'Hyrax Expanders': {
    src: '/images/categories/appliances-hyrax.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
    alt: 'Orthodontic rapid palatal expansion Hyrax expander on dental stone model',
    badge: 'Hyrax Expanders',
    description: 'Banded and bonded Hyrax expanders, fan-type rapid palatal expanders, and lower expanders.',
  },
  'Myo-Functional Appliances': {
    src: '/images/categories/appliances-myofunctional.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    alt: 'Twin block myofunctional appliance crafted on dental plaster cast',
    badge: 'Myofunctional',
    description: 'Twin blocks with expansion screws, Hyrax, headgear tubes, reverse twin blocks, and oral screens.',
  },
  'Suction Splints': {
    src: '/images/categories/appliances-suction.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80',
    alt: 'Precision vacuum-thermoformed suction splints, nocturnal occlusal guards, and bleaching trays',
    badge: 'Suction Splints',
    description: 'Night guards (1mm to 4mm), bleaching trays, snap-on splints, and sports guards.',
  },
};

/**
 * Returns a photorealistic image definition for any category, subcategory, or item.
 */
export function getProductRealisticImage(categoryName: string, subcategoryName?: string): DentalImageMeta {
  // Check subcategory match first
  if (subcategoryName && CATEGORY_REALISTIC_IMAGES[subcategoryName]) {
    return CATEGORY_REALISTIC_IMAGES[subcategoryName];
  }

  // Check category direct match
  if (CATEGORY_REALISTIC_IMAGES[categoryName]) {
    return CATEGORY_REALISTIC_IMAGES[categoryName];
  }

  // Smart heuristic match for subcategories or specific item keywords
  const term = (subcategoryName || categoryName).toLowerCase();
  if (term.includes('zirconia') || term.includes('reliance') || term.includes('emax')) {
    return CATEGORY_REALISTIC_IMAGES['Reliance Zirconia'];
  }
  if (term.includes('dmls') || term.includes('metal ceramic') || term.includes('p.f.m') || term.includes('pfm')) {
    return CATEGORY_REALISTIC_IMAGES['Metal Ceramic'];
  }
  if (term.includes('sintron') || term.includes('cad/cam') || term.includes('inlay')) {
    return CATEGORY_REALISTIC_IMAGES['CAD/CAM Ceramic'];
  }
  if (term.includes('implant') || term.includes('coping')) {
    return CATEGORY_REALISTIC_IMAGES['Implant Prosthesis'];
  }
  if (term.includes('flexible') || term.includes('ultraflex') || term.includes('flexpro') || term.includes('cast partial')) {
    return CATEGORY_REALISTIC_IMAGES['Removable Prosthesis & Flexible Dentures'];
  }
  if (term.includes('acrylic') || term.includes('injection') || term.includes('denture')) {
    return CATEGORY_REALISTIC_IMAGES['Acrylic Injection Denture'];
  }
  if (term.includes('attachment') || term.includes('overdenture')) {
    return CATEGORY_REALISTIC_IMAGES['Precision Attachment'];
  }
  if (term.includes('aligner')) {
    return CATEGORY_REALISTIC_IMAGES['Clear Aligners'];
  }
  if (term.includes('hyrax') || term.includes('expander')) {
    return CATEGORY_REALISTIC_IMAGES['Hyrax Expanders'];
  }
  if (term.includes('twin block') || term.includes('myo')) {
    return CATEGORY_REALISTIC_IMAGES['Myo-Functional Appliances'];
  }
  if (term.includes('night guard') || term.includes('bleaching') || term.includes('splint')) {
    return CATEGORY_REALISTIC_IMAGES['Suction Splints'];
  }
  if (term.includes('hawley') || term.includes('begg') || term.includes('retainer')) {
    return CATEGORY_REALISTIC_IMAGES['Removable Appliances'];
  }
  if (term.includes('catlan') || term.includes('functional')) {
    return CATEGORY_REALISTIC_IMAGES['Functional Appliances'];
  }
  if (term.includes('band and loop') || term.includes('fixed') || term.includes('tpa') || term.includes('nance')) {
    return CATEGORY_REALISTIC_IMAGES['Fixed Appliances'];
  }
  if (term.includes('maxillary') || term.includes('head gear')) {
    return CATEGORY_REALISTIC_IMAGES['Maxillary Intrusion Splints'];
  }
  if (term.includes('scanner') || term.includes('digital impression') || term.includes('intraoral')) {
    return CATEGORY_REALISTIC_IMAGES['Dental Scanner Solutions'];
  }

  return CATEGORY_REALISTIC_IMAGES['Reliance Zirconia'];
}
