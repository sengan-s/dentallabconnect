/**
 * Dental Lab Connect - Official Product Dataset
 * Source: Dental-Lab-Connect-Product-Brochure.pdf
 * Strictly NO PRICES displayed anywhere.
 * 9 Main Sections and authentic product names.
 */

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  pdfPage: number;
  description?: string;
  features?: string[];
}

// Type alias for backwards compatibility
export type CatalogueItem = ProductItem;

export const MAIN_CATEGORIES = [
  "Reliance Zirconia",
  "Metal Ceramic",
  "CAD/CAM Ceramic",
  "Implant Prosthesis",
  "Removable Prosthesis & Flexible Dentures",
  "Acrylic Injection Denture",
  "Precision Attachment",
  "Clear Aligners",
  "Appliances",
  "Dental Scanner Solutions",
] as const;

export type MainCategoryType = (typeof MAIN_CATEGORIES)[number];

export const APPLIANCE_SUB_DISCIPLINES = [
  "Removable Appliances",
  "Functional Appliances",
  "Fixed Appliances",
  "Maxillary Intrusion Splints",
  "Hyrax Expanders",
  "Myo-Functional Appliances",
  "Suction Splints",
] as const;

export interface CategoryModuleDefinition {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  subcategoriesCount?: number;
}

export const CATEGORY_MODULES: CategoryModuleDefinition[] = [
  {
    id: "reliance-zirconia",
    name: "Reliance Zirconia",
    subtitle: "High Translucency & Multilayer Zirconia",
    description: "Bio-compatible, high compressive strength zirconia crowns, bridges, and monolithic restorations with 16 layering shades and CAD verification.",
    image: "/images/categories/reliance-zirconia.jpg",
    badge: "10 Products",
  },
  {
    id: "metal-ceramic",
    name: "Metal Ceramic",
    subtitle: "Premium DMLS & Conventional P.F.M",
    description: "Direct metal laser sintered copings and conventional porcelain-fused-to-metal crowns, bridges, facings, onlays, inlays, and Maryland bridges.",
    image: "/images/categories/metal-ceramic.jpg",
    badge: "11 Products",
  },
  {
    id: "cad-cam-ceramic",
    name: "CAD/CAM Ceramic",
    subtitle: "Precision Sintron & Milled Restorations",
    description: "Sintron crowns and bridges, ceramic facings, full metal milled units, and precision metal inlays & onlays.",
    image: "/images/categories/cad-cam-ceramic.jpg",
    badge: "6 Products",
  },
  {
    id: "implant-prosthesis",
    name: "Implant Prosthesis",
    subtitle: "Cement & Screw Retained Prosthetics",
    description: "Zirconia and metal ceramic implant restorations, hybrid DMLS dentures, primary & secondary copings, and implant-supported acrylic dentures.",
    image: "/images/categories/implant-prosthesis.jpg",
    badge: "20 Products",
  },
  {
    id: "removable-prosthesis",
    name: "Removable Prosthesis & Flexible Dentures",
    subtitle: "German Bredent Injection Moulding",
    description: "UltraFlex semi-rigid and Flexpro full-flexible dentures, Biodentaplast tooth-shade plates, and DMLS cast partial dentures.",
    image: "/images/categories/removable-prosthesis.jpg",
    badge: "28 Products",
  },
  {
    id: "acrylic-injection",
    name: "Acrylic Injection Denture",
    subtitle: "Superior & High-Impact Polymers",
    description: "Bredent Germany precision injection dentures, high-impact polymers, standard heat-cure acrylics, relines, repairs, and bite blocks.",
    image: "/images/categories/acrylic-injection.jpg",
    badge: "28 Products",
  },
  {
    id: "precision-attachment",
    name: "Precision Attachment",
    subtitle: "Interlocking Matrices & Overdenture Bars",
    description: "Unilateral attachments, O.T. strategy changing, female parts, and custom bar attachments for implant overdentures.",
    image: "/images/categories/precision-attachment.jpg",
    badge: "8 Products",
  },
  {
    id: "clear-aligners",
    name: "Clear Aligners",
    subtitle: "Thermoformed Sequential Splints",
    description: "Custom clear aligner series ranging from base packs up to 25+ splints for progressive tooth alignment.",
    image: "/images/categories/clear-aligners.jpg",
    badge: "5 Products",
  },
  {
    id: "appliances",
    name: "Appliances",
    subtitle: "7 Comprehensive Orthodontic Disciplines",
    description: "Customized removable, functional, fixed, maxillary intrusion, Hyrax expanders, myofunctional appliances, and suction splints.",
    image: "/images/categories/appliances-main.jpg",
    badge: "146 Products",
  },
  {
    id: "dental-scanner-solutions",
    name: "Dental Scanner Solutions",
    subtitle: "Digital Impressions & Scanning Workflows",
    description: "Advanced dental scanning solutions for accurate digital impressions and streamlined dental laboratory workflows. Available on direct enquiry.",
    image: "/images/categories/dental-scanner.jpg",
    badge: "Enquire for Availability",
  },
];

export const ALL_PRODUCTS: ProductItem[] = [
  {
    "id": "p-scanner-01",
    "name": "DENTAL SCANNER SOLUTIONS",
    "category": "Dental Scanner Solutions",
    "subcategory": "Dental Scanner",
    "pdfPage": 1,
    "description": "Advanced dental scanning solutions for accurate digital impressions and streamlined dental laboratory workflows. Contact us directly for availability and compatibility details.",
    "features": [
      "Digital impression workflows",
      "Streamlined laboratory integration",
      "Accurate intraoral scanning",
      "Compatible with CAD/CAM workflows",
      "Available on direct enquiry"
    ]
  },
  {
    "id": "p-001",
    "name": "RELIANCE ZIRCONIA LIFE HT",
    "category": "Reliance Zirconia",
    "subcategory": "Reliance Zirconia",
    "pdfPage": 3,
    "description": "RELIANCE ZIRCONIA LIFE HT precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": [
      "Bio-compatibility",
      "High compressive strength",
      "Cutback techniques",
      "Continuous pontic 4 unit for anterior",
      "PMMA temporary compliment with zirconia",
      "CAD image for design confirmation",
      "Multilayer zirconia available",
      "16 shades available on layering zirconia",
      "Continuous 14 unit bridges or joint crowns"
    ]
  },
  {
    "id": "p-002",
    "name": "RELIANCE ZIRCONIA FX",
    "category": "Reliance Zirconia",
    "subcategory": "Reliance Zirconia",
    "pdfPage": 3,
    "description": "RELIANCE ZIRCONIA FX precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": [
      "Bio-compatibility",
      "High compressive strength",
      "Cutback techniques",
      "Continuous pontic 4 unit for anterior",
      "PMMA temporary compliment with zirconia",
      "CAD image for design confirmation",
      "Multilayer zirconia available",
      "16 shades available on layering zirconia",
      "Continuous 14 unit bridges or joint crowns"
    ]
  },
  {
    "id": "p-003",
    "name": "RELIANCE ZIRCONIA HT PLUS",
    "category": "Reliance Zirconia",
    "subcategory": "Reliance Zirconia",
    "pdfPage": 3,
    "description": "RELIANCE ZIRCONIA HT PLUS precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": [
      "Bio-compatibility",
      "High compressive strength",
      "Cutback techniques",
      "Continuous pontic 4 unit for anterior",
      "PMMA temporary compliment with zirconia",
      "CAD image for design confirmation",
      "Multilayer zirconia available",
      "16 shades available on layering zirconia",
      "Continuous 14 unit bridges or joint crowns"
    ]
  },
  {
    "id": "p-004",
    "name": "RELIANCE CLASSIC",
    "category": "Reliance Zirconia",
    "subcategory": "Reliance Zirconia",
    "pdfPage": 3,
    "description": "RELIANCE CLASSIC precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": [
      "Bio-compatibility",
      "High compressive strength",
      "Cutback techniques",
      "Continuous pontic 4 unit for anterior",
      "PMMA temporary compliment with zirconia",
      "CAD image for design confirmation",
      "Multilayer zirconia available",
      "16 shades available on layering zirconia",
      "Continuous 14 unit bridges or joint crowns"
    ]
  },
  {
    "id": "p-005",
    "name": "RELIANCE ZIRCONIA MONOLITHIC",
    "category": "Reliance Zirconia",
    "subcategory": "Reliance Zirconia",
    "pdfPage": 3,
    "description": "RELIANCE ZIRCONIA MONOLITHIC precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": [
      "Bio-compatibility",
      "High compressive strength",
      "Cutback techniques",
      "Continuous pontic 4 unit for anterior",
      "PMMA temporary compliment with zirconia",
      "CAD image for design confirmation",
      "Multilayer zirconia available",
      "16 shades available on layering zirconia",
      "Continuous 14 unit bridges or joint crowns"
    ]
  },
  {
    "id": "p-006",
    "name": "RELIANCE ZIRBRUX",
    "category": "Reliance Zirconia",
    "subcategory": "Reliance Zirconia",
    "pdfPage": 3,
    "description": "RELIANCE ZIRBRUX precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": [
      "Bio-compatibility",
      "High compressive strength",
      "Cutback techniques",
      "Continuous pontic 4 unit for anterior",
      "PMMA temporary compliment with zirconia",
      "CAD image for design confirmation",
      "Multilayer zirconia available",
      "16 shades available on layering zirconia",
      "Continuous 14 unit bridges or joint crowns"
    ]
  },
  {
    "id": "p-007",
    "name": "ZOLID ZIRCON",
    "category": "Reliance Zirconia",
    "subcategory": "Reliance Zirconia",
    "pdfPage": 3,
    "description": "ZOLID ZIRCON precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": [
      "Bio-compatibility",
      "High compressive strength",
      "Cutback techniques",
      "Continuous pontic 4 unit for anterior",
      "PMMA temporary compliment with zirconia",
      "CAD image for design confirmation",
      "Multilayer zirconia available",
      "16 shades available on layering zirconia",
      "Continuous 14 unit bridges or joint crowns"
    ]
  },
  {
    "id": "p-008",
    "name": "EMAX ZIRCAD",
    "category": "Reliance Zirconia",
    "subcategory": "Reliance Zirconia",
    "pdfPage": 3,
    "description": "EMAX ZIRCAD precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": [
      "Bio-compatibility",
      "High compressive strength",
      "Cutback techniques",
      "Continuous pontic 4 unit for anterior",
      "PMMA temporary compliment with zirconia",
      "CAD image for design confirmation",
      "Multilayer zirconia available",
      "16 shades available on layering zirconia",
      "Continuous 14 unit bridges or joint crowns"
    ]
  },
  {
    "id": "p-009",
    "name": "EMAX IS EMAX RESS STAINED",
    "category": "Reliance Zirconia",
    "subcategory": "Reliance Zirconia",
    "pdfPage": 3,
    "description": "EMAX IS EMAX RESS STAINED precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": [
      "Bio-compatibility",
      "High compressive strength",
      "Cutback techniques",
      "Continuous pontic 4 unit for anterior",
      "PMMA temporary compliment with zirconia",
      "CAD image for design confirmation",
      "Multilayer zirconia available",
      "16 shades available on layering zirconia",
      "Continuous 14 unit bridges or joint crowns"
    ]
  },
  {
    "id": "p-010",
    "name": "EMAX VENEER",
    "category": "Reliance Zirconia",
    "subcategory": "Reliance Zirconia",
    "pdfPage": 3,
    "description": "EMAX VENEER precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": [
      "Bio-compatibility",
      "High compressive strength",
      "Cutback techniques",
      "Continuous pontic 4 unit for anterior",
      "PMMA temporary compliment with zirconia",
      "CAD image for design confirmation",
      "Multilayer zirconia available",
      "16 shades available on layering zirconia",
      "Continuous 14 unit bridges or joint crowns"
    ]
  },
  {
    "id": "p-011",
    "name": "DMLS CROWN / BRIDGE",
    "category": "Metal Ceramic",
    "subcategory": "Metal Ceramic (Premium Quality)",
    "pdfPage": 3,
    "description": "DMLS CROWN / BRIDGE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-012",
    "name": "DMLS CROWN / BRIDGE FACING",
    "category": "Metal Ceramic",
    "subcategory": "Metal Ceramic (Premium Quality)",
    "pdfPage": 3,
    "description": "DMLS CROWN / BRIDGE FACING precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-013",
    "name": "DMLS FULL METAL",
    "category": "Metal Ceramic",
    "subcategory": "Metal Ceramic (Premium Quality)",
    "pdfPage": 3,
    "description": "DMLS FULL METAL precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-014",
    "name": "CROWN / BRIDGE",
    "category": "Metal Ceramic",
    "subcategory": "Metal Ceramic (Conventional P.F.M)",
    "pdfPage": 3,
    "description": "CROWN / BRIDGE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-015",
    "name": "CROWN / BRIDGE FACING",
    "category": "Metal Ceramic",
    "subcategory": "Metal Ceramic (Conventional P.F.M)",
    "pdfPage": 3,
    "description": "CROWN / BRIDGE FACING precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-016",
    "name": "CERAMIC ONLAY",
    "category": "Metal Ceramic",
    "subcategory": "Metal Ceramic (Conventional P.F.M)",
    "pdfPage": 3,
    "description": "CERAMIC ONLAY precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-017",
    "name": "CERAMIC INLAY",
    "category": "Metal Ceramic",
    "subcategory": "Metal Ceramic (Conventional P.F.M)",
    "pdfPage": 3,
    "description": "CERAMIC INLAY precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-018",
    "name": "MARYLAND BRIDGE CROWNS",
    "category": "Metal Ceramic",
    "subcategory": "Metal Ceramic (Conventional P.F.M)",
    "pdfPage": 3,
    "description": "MARYLAND BRIDGE CROWNS precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-019",
    "name": "GUM CERAMIC",
    "category": "Metal Ceramic",
    "subcategory": "Metal Ceramic (Conventional P.F.M)",
    "pdfPage": 3,
    "description": "GUM CERAMIC precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-020",
    "name": "OCCLUSAL REST CERAMIC",
    "category": "Metal Ceramic",
    "subcategory": "Metal Ceramic (Conventional P.F.M)",
    "pdfPage": 3,
    "description": "OCCLUSAL REST CERAMIC precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-021",
    "name": "LOOP CONNECTOR CERAMIC",
    "category": "Metal Ceramic",
    "subcategory": "Metal Ceramic (Conventional P.F.M)",
    "pdfPage": 3,
    "description": "LOOP CONNECTOR CERAMIC precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-022",
    "name": "SINTRON CROWN /BRIDGE",
    "category": "CAD/CAM Ceramic",
    "subcategory": "CAD/CAM Ceramic Restorations",
    "pdfPage": 4,
    "description": "SINTRON CROWN /BRIDGE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-023",
    "name": "SINTRON FACING",
    "category": "CAD/CAM Ceramic",
    "subcategory": "CAD/CAM Ceramic Restorations",
    "pdfPage": 4,
    "description": "SINTRON FACING precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-024",
    "name": "CROWN / BRIDGE",
    "category": "CAD/CAM Ceramic",
    "subcategory": "CAD/CAM Ceramic Restorations",
    "pdfPage": 4,
    "description": "CROWN / BRIDGE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-025",
    "name": "CROWN / BRIDGE FACING",
    "category": "CAD/CAM Ceramic",
    "subcategory": "CAD/CAM Ceramic Restorations",
    "pdfPage": 4,
    "description": "CROWN / BRIDGE FACING precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-026",
    "name": "FULL METAL",
    "category": "CAD/CAM Ceramic",
    "subcategory": "CAD/CAM Metal Inlay & Onlay",
    "pdfPage": 4,
    "description": "FULL METAL precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-027",
    "name": "METAL INLAY & ONLAY",
    "category": "CAD/CAM Ceramic",
    "subcategory": "CAD/CAM Metal Inlay & Onlay",
    "pdfPage": 4,
    "description": "METAL INLAY & ONLAY precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-028",
    "name": "CROWN/BRIDGE ZIRCONIA PREMIUM",
    "category": "Implant Prosthesis",
    "subcategory": "Crown/Bridge (Cement Retained)",
    "pdfPage": 5,
    "description": "CROWN/BRIDGE ZIRCONIA PREMIUM precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-029",
    "name": "CROWN/BRIDGE ZIRCONIA CLASSIC",
    "category": "Implant Prosthesis",
    "subcategory": "Crown/Bridge (Cement Retained)",
    "pdfPage": 5,
    "description": "CROWN/BRIDGE ZIRCONIA CLASSIC precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-030",
    "name": "CROWN/BRIDGE ZIRCONIA MONOLITHIC",
    "category": "Implant Prosthesis",
    "subcategory": "Crown/Bridge (Cement Retained)",
    "pdfPage": 5,
    "description": "CROWN/BRIDGE ZIRCONIA MONOLITHIC precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-031",
    "name": "CROWN/BRIDGE METAL CERAMIC",
    "category": "Implant Prosthesis",
    "subcategory": "Crown/Bridge (Cement Retained)",
    "pdfPage": 5,
    "description": "CROWN/BRIDGE METAL CERAMIC precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-032",
    "name": "CROWN/BRIDGE FACING CERAMIC",
    "category": "Implant Prosthesis",
    "subcategory": "Crown/Bridge (Cement Retained)",
    "pdfPage": 5,
    "description": "CROWN/BRIDGE FACING CERAMIC precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-033",
    "name": "CROWN/BRIDGE FULL METAL",
    "category": "Implant Prosthesis",
    "subcategory": "Crown/Bridge (Cement Retained)",
    "pdfPage": 5,
    "description": "CROWN/BRIDGE FULL METAL precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-034",
    "name": "CROWN/BRIDGE ZIRCONIA CLASSIC",
    "category": "Implant Prosthesis",
    "subcategory": "Crown/Bridge (Screw Retained)",
    "pdfPage": 5,
    "description": "CROWN/BRIDGE ZIRCONIA CLASSIC precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-035",
    "name": "CROWN/BRIDGE ZIRCONIA MONOLITHIC",
    "category": "Implant Prosthesis",
    "subcategory": "Crown/Bridge (Screw Retained)",
    "pdfPage": 5,
    "description": "CROWN/BRIDGE ZIRCONIA MONOLITHIC precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-036",
    "name": "CROWN/BRIDGE SINTRON MILLED",
    "category": "Implant Prosthesis",
    "subcategory": "Crown/Bridge (Screw Retained)",
    "pdfPage": 5,
    "description": "CROWN/BRIDGE SINTRON MILLED precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-037",
    "name": "CROWN/BRIDGE",
    "category": "Implant Prosthesis",
    "subcategory": "Crown/Bridge (Screw Retained)",
    "pdfPage": 5,
    "description": "CROWN/BRIDGE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-038",
    "name": "FULL METAL CO.CR",
    "category": "Implant Prosthesis",
    "subcategory": "Crown/Bridge (Screw Retained)",
    "pdfPage": 5,
    "description": "FULL METAL CO.CR precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-039",
    "name": "POST CORE WITH BULL ATTACHMENT",
    "category": "Implant Prosthesis",
    "subcategory": "Implant Hybrid Denture (Frame Only)",
    "pdfPage": 5,
    "description": "POST CORE WITH BULL ATTACHMENT precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-040",
    "name": "HYBRID DMLS MILLED",
    "category": "Implant Prosthesis",
    "subcategory": "Implant Hybrid Denture (Frame Only)",
    "pdfPage": 5,
    "description": "HYBRID DMLS MILLED precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-041",
    "name": "HYBRID DENTURE CASTABLE",
    "category": "Implant Prosthesis",
    "subcategory": "Implant Hybrid Denture (Frame Only)",
    "pdfPage": 5,
    "description": "HYBRID DENTURE CASTABLE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-042",
    "name": "OVER DENTURE BAR ONLY",
    "category": "Implant Prosthesis",
    "subcategory": "Implant Hybrid Denture (Frame Only)",
    "pdfPage": 5,
    "description": "OVER DENTURE BAR ONLY precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-043",
    "name": "DMLS MILLED",
    "category": "Implant Prosthesis",
    "subcategory": "Primary Copings",
    "pdfPage": 5,
    "description": "DMLS MILLED precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-044",
    "name": "CO.CR.CASTABLE",
    "category": "Implant Prosthesis",
    "subcategory": "Primary Copings",
    "pdfPage": 5,
    "description": "CO.CR.CASTABLE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-045",
    "name": "DMLS MILLED",
    "category": "Implant Prosthesis",
    "subcategory": "Secondary Copings",
    "pdfPage": 5,
    "description": "DMLS MILLED precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-046",
    "name": "CO.CR. CASTABLE",
    "category": "Implant Prosthesis",
    "subcategory": "Secondary Copings",
    "pdfPage": 5,
    "description": "CO.CR. CASTABLE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-047",
    "name": "COMPLETE DENTURE PER JAW",
    "category": "Implant Prosthesis",
    "subcategory": "Implant Support Acrylic Denture",
    "pdfPage": 5,
    "description": "COMPLETE DENTURE PER JAW precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-048",
    "name": "SINGLE TOOTH",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "UltraFlex Semi Rigid (Bredent Germany)",
    "pdfPage": 6,
    "description": "SINGLE TOOTH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-049",
    "name": "2 TEETH",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "UltraFlex Semi Rigid (Bredent Germany)",
    "pdfPage": 6,
    "description": "2 TEETH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-050",
    "name": "3-5 TEETH",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "UltraFlex Semi Rigid (Bredent Germany)",
    "pdfPage": 6,
    "description": "3-5 TEETH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-051",
    "name": "6-8 TEETH",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "UltraFlex Semi Rigid (Bredent Germany)",
    "pdfPage": 6,
    "description": "6-8 TEETH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-052",
    "name": "ABOVE 8 TEETH",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "UltraFlex Semi Rigid (Bredent Germany)",
    "pdfPage": 6,
    "description": "ABOVE 8 TEETH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-053",
    "name": "COMPLETE DENTURE (PER JAW)",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "UltraFlex Semi Rigid (Bredent Germany)",
    "pdfPage": 6,
    "description": "COMPLETE DENTURE (PER JAW) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-054",
    "name": "COMPLETE DENTURE",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "UltraFlex Semi Rigid (Bredent Germany)",
    "pdfPage": 6,
    "description": "COMPLETE DENTURE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-055",
    "name": "COMPLETE DENTURE IVOCLAR TEETH SET",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "UltraFlex Semi Rigid (Bredent Germany)",
    "pdfPage": 6,
    "description": "COMPLETE DENTURE IVOCLAR TEETH SET precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-056",
    "name": "COMPLETE DENTURE RELINING(PER JAW)",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "UltraFlex Semi Rigid (Bredent Germany)",
    "pdfPage": 6,
    "description": "COMPLETE DENTURE RELINING(PER JAW) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-057",
    "name": "CD/RPD REPAIRING (PER JAW)",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "UltraFlex Semi Rigid (Bredent Germany)",
    "pdfPage": 6,
    "description": "CD/RPD REPAIRING (PER JAW) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-058",
    "name": "CD/RPD INJECTION AND POLISHING",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "UltraFlex Semi Rigid (Bredent Germany)",
    "pdfPage": 6,
    "description": "CD/RPD INJECTION AND POLISHING precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-059",
    "name": "TOOTH ADDING",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "UltraFlex Semi Rigid (Bredent Germany)",
    "pdfPage": 6,
    "description": "TOOTH ADDING precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-060",
    "name": "SINGLE TOOTH",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "Flexpro Full Flexible (Bredent Germany)",
    "pdfPage": 6,
    "description": "SINGLE TOOTH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-061",
    "name": "2 TEETH",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "Flexpro Full Flexible (Bredent Germany)",
    "pdfPage": 6,
    "description": "2 TEETH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-062",
    "name": "3-5 TEETH",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "Flexpro Full Flexible (Bredent Germany)",
    "pdfPage": 6,
    "description": "3-5 TEETH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-063",
    "name": "6-8 TEETH",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "Flexpro Full Flexible (Bredent Germany)",
    "pdfPage": 6,
    "description": "6-8 TEETH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-064",
    "name": "ABOVE 8 TEETH",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "Flexpro Full Flexible (Bredent Germany)",
    "pdfPage": 6,
    "description": "ABOVE 8 TEETH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-065",
    "name": "TOOTH SHADE PLATE",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "Biodentaplast",
    "pdfPage": 6,
    "description": "TOOTH SHADE PLATE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-066",
    "name": "2-3 TEETH",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "Biodentaplast",
    "pdfPage": 6,
    "description": "2-3 TEETH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-067",
    "name": "SINGLE TOOTH",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "Biodentaplast",
    "pdfPage": 6,
    "description": "SINGLE TOOTH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-068",
    "name": "4-5 TEETH",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "Biodentaplast",
    "pdfPage": 6,
    "description": "4-5 TEETH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-069",
    "name": "DMLS CPD FULL (FULL PER JAW) - UPPER",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "Cast Partial Denture",
    "pdfPage": 6,
    "description": "DMLS CPD FULL (FULL PER JAW) - UPPER precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-070",
    "name": "DMLS CPD FULL (FULL PER JAW) - LOWER",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "Cast Partial Denture",
    "pdfPage": 6,
    "description": "DMLS CPD FULL (FULL PER JAW) - LOWER precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-071",
    "name": "CROWN",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "Cast Partial Denture",
    "pdfPage": 6,
    "description": "CROWN precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-072",
    "name": "2 TO 3 TOOTH",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "Cast Partial Denture",
    "pdfPage": 6,
    "description": "2 TO 3 TOOTH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-073",
    "name": "4 TO 6 TOOTH",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "Cast Partial Denture",
    "pdfPage": 6,
    "description": "4 TO 6 TOOTH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-074",
    "name": "7 TO 10 TOOTH",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "Cast Partial Denture",
    "pdfPage": 6,
    "description": "7 TO 10 TOOTH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-075",
    "name": "MORE THAN 10",
    "category": "Removable Prosthesis & Flexible Dentures",
    "subcategory": "Cast Partial Denture",
    "pdfPage": 6,
    "description": "MORE THAN 10 precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-076",
    "name": "SINGLE TOOTH",
    "category": "Acrylic Injection Denture",
    "subcategory": "Superior Quality Acrylic (Bredent Germany)",
    "pdfPage": 7,
    "description": "SINGLE TOOTH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-077",
    "name": "2 TEETH",
    "category": "Acrylic Injection Denture",
    "subcategory": "Superior Quality Acrylic (Bredent Germany)",
    "pdfPage": 7,
    "description": "2 TEETH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-078",
    "name": "3-4 TEETH",
    "category": "Acrylic Injection Denture",
    "subcategory": "Superior Quality Acrylic (Bredent Germany)",
    "pdfPage": 7,
    "description": "3-4 TEETH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-079",
    "name": "5-6 TEETH",
    "category": "Acrylic Injection Denture",
    "subcategory": "Superior Quality Acrylic (Bredent Germany)",
    "pdfPage": 7,
    "description": "5-6 TEETH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-080",
    "name": "7-8 TEETH",
    "category": "Acrylic Injection Denture",
    "subcategory": "Superior Quality Acrylic (Bredent Germany)",
    "pdfPage": 7,
    "description": "7-8 TEETH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-081",
    "name": "ABOVE 8 TEETH",
    "category": "Acrylic Injection Denture",
    "subcategory": "Superior Quality Acrylic (Bredent Germany)",
    "pdfPage": 7,
    "description": "ABOVE 8 TEETH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-082",
    "name": "COMPLETE DENTURE",
    "category": "Acrylic Injection Denture",
    "subcategory": "Superior Quality Acrylic (Bredent Germany)",
    "pdfPage": 7,
    "description": "COMPLETE DENTURE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-083",
    "name": "DENTURE INJECTION AND POLISHING",
    "category": "Acrylic Injection Denture",
    "subcategory": "Superior Quality Acrylic (Bredent Germany)",
    "pdfPage": 7,
    "description": "DENTURE INJECTION AND POLISHING precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-084",
    "name": "DENTURE RELINING PER JAW",
    "category": "Acrylic Injection Denture",
    "subcategory": "Superior Quality Acrylic (Bredent Germany)",
    "pdfPage": 7,
    "description": "DENTURE RELINING PER JAW precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-085",
    "name": "DENTURE REPAIR",
    "category": "Acrylic Injection Denture",
    "subcategory": "Superior Quality Acrylic (Bredent Germany)",
    "pdfPage": 7,
    "description": "DENTURE REPAIR precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-086",
    "name": "TOOTH ADDING PD&CD PER TOOTH",
    "category": "Acrylic Injection Denture",
    "subcategory": "Superior Quality Acrylic (Bredent Germany)",
    "pdfPage": 7,
    "description": "TOOTH ADDING PD&CD PER TOOTH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-087",
    "name": "SINGLE TOOTH",
    "category": "Acrylic Injection Denture",
    "subcategory": "High Impact Dentures (Bredent or Ivoclar)",
    "pdfPage": 7,
    "description": "SINGLE TOOTH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-088",
    "name": "ADDITIONAL TOOTH",
    "category": "Acrylic Injection Denture",
    "subcategory": "High Impact Dentures (Bredent or Ivoclar)",
    "pdfPage": 7,
    "description": "ADDITIONAL TOOTH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-089",
    "name": "COMPLETE DENTURE PER JAW",
    "category": "Acrylic Injection Denture",
    "subcategory": "High Impact Dentures (Bredent or Ivoclar)",
    "pdfPage": 7,
    "description": "COMPLETE DENTURE PER JAW precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-090",
    "name": "COMPLETE DENTURE",
    "category": "Acrylic Injection Denture",
    "subcategory": "High Impact Dentures (Bredent or Ivoclar)",
    "pdfPage": 7,
    "description": "COMPLETE DENTURE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-091",
    "name": "TOOTH ADDING PD & CD PER TOOTH",
    "category": "Acrylic Injection Denture",
    "subcategory": "High Impact Acrylic (Medium Quality)",
    "pdfPage": 7,
    "description": "TOOTH ADDING PD & CD PER TOOTH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-092",
    "name": "DENTURE HIGH IMPACT",
    "category": "Acrylic Injection Denture",
    "subcategory": "High Impact Acrylic (Medium Quality)",
    "pdfPage": 7,
    "description": "DENTURE HIGH IMPACT precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-093",
    "name": "DENTURE HIGH IMPACT PER JAW",
    "category": "Acrylic Injection Denture",
    "subcategory": "High Impact Acrylic (Medium Quality)",
    "pdfPage": 7,
    "description": "DENTURE HIGH IMPACT PER JAW precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-094",
    "name": "RPD NORMAL SINGLE TOOTH",
    "category": "Acrylic Injection Denture",
    "subcategory": "Acrylic Dentures Normal",
    "pdfPage": 7,
    "description": "RPD NORMAL SINGLE TOOTH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-095",
    "name": "ADDITIONAL TOOTH",
    "category": "Acrylic Injection Denture",
    "subcategory": "Acrylic Dentures Normal",
    "pdfPage": 7,
    "description": "ADDITIONAL TOOTH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-096",
    "name": "COMPLETE DENTURE NORMAL",
    "category": "Acrylic Injection Denture",
    "subcategory": "Acrylic Dentures Normal",
    "pdfPage": 7,
    "description": "COMPLETE DENTURE NORMAL precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-097",
    "name": "COMPLETE DENTURE NORMAL(PER JAW)",
    "category": "Acrylic Injection Denture",
    "subcategory": "Acrylic Dentures Normal",
    "pdfPage": 7,
    "description": "COMPLETE DENTURE NORMAL(PER JAW) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-098",
    "name": "ACRYLIZATION AND POLISHING",
    "category": "Acrylic Injection Denture",
    "subcategory": "Acrylic Dentures Normal",
    "pdfPage": 7,
    "description": "ACRYLIZATION AND POLISHING precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-099",
    "name": "DENTURE RELINING",
    "category": "Acrylic Injection Denture",
    "subcategory": "Acrylic Dentures Normal",
    "pdfPage": 7,
    "description": "DENTURE RELINING precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-100",
    "name": "DENTURE REPAIR",
    "category": "Acrylic Injection Denture",
    "subcategory": "Acrylic Dentures Normal",
    "pdfPage": 7,
    "description": "DENTURE REPAIR precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-101",
    "name": "TOOTH ADDING PD & CD PER TOOTH",
    "category": "Acrylic Injection Denture",
    "subcategory": "Acrylic Dentures Normal",
    "pdfPage": 7,
    "description": "TOOTH ADDING PD & CD PER TOOTH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-102",
    "name": "BITE BLOCK U/L",
    "category": "Acrylic Injection Denture",
    "subcategory": "Acrylic Dentures Normal",
    "pdfPage": 7,
    "description": "BITE BLOCK U/L precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-103",
    "name": "SPECIAL TRAY U/L",
    "category": "Acrylic Injection Denture",
    "subcategory": "Acrylic Dentures Normal",
    "pdfPage": 7,
    "description": "SPECIAL TRAY U/L precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-104",
    "name": "SINGLE ATTACHMENT FOR ABOVE 2 TEETH",
    "category": "Precision Attachment",
    "subcategory": "Precision Attachment",
    "pdfPage": 8,
    "description": "SINGLE ATTACHMENT FOR ABOVE 2 TEETH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-105",
    "name": "O.T. STRATEGY CHANGING",
    "category": "Precision Attachment",
    "subcategory": "Precision Attachment",
    "pdfPage": 8,
    "description": "O.T. STRATEGY CHANGING precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-106",
    "name": "ADDITIONAL ATTACHMENT",
    "category": "Precision Attachment",
    "subcategory": "Precision Attachment",
    "pdfPage": 8,
    "description": "ADDITIONAL ATTACHMENT precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-107",
    "name": "O.T. CAP CHANGING",
    "category": "Precision Attachment",
    "subcategory": "Precision Attachment",
    "pdfPage": 8,
    "description": "O.T. CAP CHANGING precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-108",
    "name": "SINGLE TOOTH REPLACEMENT",
    "category": "Precision Attachment",
    "subcategory": "Precision Attachment",
    "pdfPage": 8,
    "description": "SINGLE TOOTH REPLACEMENT precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-109",
    "name": "FEMALE PART",
    "category": "Precision Attachment",
    "subcategory": "Precision Attachment",
    "pdfPage": 8,
    "description": "FEMALE PART precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-110",
    "name": "UNILATERAL ATTACHMENT",
    "category": "Precision Attachment",
    "subcategory": "Precision Attachment",
    "pdfPage": 8,
    "description": "UNILATERAL ATTACHMENT precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-111",
    "name": "BAR ATTACHMENT FOR OVERDENTURE",
    "category": "Precision Attachment",
    "subcategory": "Precision Attachment",
    "pdfPage": 8,
    "description": "BAR ATTACHMENT FOR OVERDENTURE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-112",
    "name": "BASE PACK UPTO 10 SPLINTS PER SPLINT",
    "category": "Clear Aligners",
    "subcategory": "Clear Aligners",
    "pdfPage": 8,
    "description": "BASE PACK UPTO 10 SPLINTS PER SPLINT precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-113",
    "name": "ALIGNER UPTO 16 SPLINTS PER SPLINT",
    "category": "Clear Aligners",
    "subcategory": "Clear Aligners",
    "pdfPage": 8,
    "description": "ALIGNER UPTO 16 SPLINTS PER SPLINT precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-114",
    "name": "ALIGNER UPTO 20 SPLINTS PER SPLINT",
    "category": "Clear Aligners",
    "subcategory": "Clear Aligners",
    "pdfPage": 8,
    "description": "ALIGNER UPTO 20 SPLINTS PER SPLINT precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-115",
    "name": "ALIGNER UPTO 25 SPLINTS PER SPLINT",
    "category": "Clear Aligners",
    "subcategory": "Clear Aligners",
    "pdfPage": 8,
    "description": "ALIGNER UPTO 25 SPLINTS PER SPLINT precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-116",
    "name": "ALIGNER ABOVE 25 SPLINTS PER SPLINT",
    "category": "Clear Aligners",
    "subcategory": "Clear Aligners",
    "pdfPage": 8,
    "description": "ALIGNER ABOVE 25 SPLINTS PER SPLINT precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-117",
    "name": "HAWLEYS APPLIANCE",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "HAWLEYS APPLIANCE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-118",
    "name": "HAWLEYS APPLIANCE WITH TONGUE CRIB",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "HAWLEYS APPLIANCE WITH TONGUE CRIB precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-119",
    "name": "HAWLEYS APPLIANCE WITH FITTED LABIAL BOW",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "HAWLEYS APPLIANCE WITH FITTED LABIAL BOW precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-120",
    "name": "HAWLEYS APPLIANCE WITH SPLIT LABIAL BOW",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "HAWLEYS APPLIANCE WITH SPLIT LABIAL BOW precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-121",
    "name": "HAWLEYS APPLIANCE WITH REVERSE LOOP BOW",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "HAWLEYS APPLIANCE WITH REVERSE LOOP BOW precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-122",
    "name": "HAWLEYS APPLIANCE WITH ROBERTS RETRACTOR",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "HAWLEYS APPLIANCE WITH ROBERTS RETRACTOR precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-123",
    "name": "HAWLEYS APPLIANCE WITH SOLDERED ADAMS",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "HAWLEYS APPLIANCE WITH SOLDERED ADAMS precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-124",
    "name": "HAWLEYS APPLIANCE WITH HIGH LABIAL BOW",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "HAWLEYS APPLIANCE WITH HIGH LABIAL BOW precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-125",
    "name": "HAWLEYS APPLIANCE WITH MILLS RETRACTOR",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "HAWLEYS APPLIANCE WITH MILLS RETRACTOR precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-126",
    "name": "HAWLEYS APPLIANCE WITH ABP",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "HAWLEYS APPLIANCE WITH ABP precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-127",
    "name": "HAWLEYS APPLIANCE WITH PBP",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "HAWLEYS APPLIANCE WITH PBP precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-128",
    "name": "HAWLEYS APPLIANCE WITH AIBP",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "HAWLEYS APPLIANCE WITH AIBP precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-129",
    "name": "HAWLEYS APPLIANCE WITH BLUE GRASS",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "HAWLEYS APPLIANCE WITH BLUE GRASS precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-130",
    "name": "APPLIANCE WITH ( SPRINGS)",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "APPLIANCE WITH ( SPRINGS) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-131",
    "name": "APPLIANCE WITH ( ABP -PBP -AIBP)",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "APPLIANCE WITH ( ABP -PBP -AIBP) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-132",
    "name": "APPLIANCE WITH ( RETRACTOR'S )",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "APPLIANCE WITH ( RETRACTOR'S ) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-133",
    "name": "APPLIANCE WITH ( JACK'S SCREW )",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "APPLIANCE WITH ( JACK'S SCREW ) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-134",
    "name": "APPLIANCE WITH ( THREE WAY SCREW)",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "APPLIANCE WITH ( THREE WAY SCREW) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-135",
    "name": "APPLIANCE WITH ( TOOTH ADDING)",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "APPLIANCE WITH ( TOOTH ADDING) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-136",
    "name": "BEGGS RETAINER ( WRAPAROUND)",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "BEGGS RETAINER ( WRAPAROUND) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-137",
    "name": "BEGGS RETAINER WITH SNAP FITTED",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "BEGGS RETAINER WITH SNAP FITTED precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-138",
    "name": "BEGGS RETAINER WITH ABP",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "BEGGS RETAINER WITH ABP precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-139",
    "name": "BEGGS RETAINER WITH AIBP",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "BEGGS RETAINER WITH AIBP precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-140",
    "name": "BEGGS RETAINER WITH ( TOOTH ADDING)",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "BEGGS RETAINER WITH ( TOOTH ADDING) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-141",
    "name": "LINGUAL RETAINER",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "LINGUAL RETAINER precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-142",
    "name": "CLIP RETAINER",
    "category": "Appliances",
    "subcategory": "Removable Appliances",
    "pdfPage": 9,
    "description": "CLIP RETAINER precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-143",
    "name": "CATLAN'S APPLIANCE",
    "category": "Appliances",
    "subcategory": "Functional Appliances",
    "pdfPage": 9,
    "description": "CATLAN'S APPLIANCE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-144",
    "name": "ABP WITH BALL END CLASP",
    "category": "Appliances",
    "subcategory": "Functional Appliances",
    "pdfPage": 9,
    "description": "ABP WITH BALL END CLASP precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-145",
    "name": "BPB WITH BALL END CLASP",
    "category": "Appliances",
    "subcategory": "Functional Appliances",
    "pdfPage": 9,
    "description": "BPB WITH BALL END CLASP precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-146",
    "name": "AIBP WITH BALL END CLASP",
    "category": "Appliances",
    "subcategory": "Functional Appliances",
    "pdfPage": 9,
    "description": "AIBP WITH BALL END CLASP precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-147",
    "name": "ACRYLIC HARD SPLINT",
    "category": "Appliances",
    "subcategory": "Functional Appliances",
    "pdfPage": 9,
    "description": "ACRYLIC HARD SPLINT precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-148",
    "name": "REMOVABLE TONGUE CRIP",
    "category": "Appliances",
    "subcategory": "Functional Appliances",
    "pdfPage": 9,
    "description": "REMOVABLE TONGUE CRIP precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-149",
    "name": "REMOVABLE SPACE MAINTAINER ( INCLUDING SINGLE TOOTH )",
    "category": "Appliances",
    "subcategory": "Functional Appliances",
    "pdfPage": 9,
    "description": "REMOVABLE SPACE MAINTAINER ( INCLUDING SINGLE TOOTH ) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-150",
    "name": "PBP BONDABLE OR FIXED PBP",
    "category": "Appliances",
    "subcategory": "Functional Appliances",
    "pdfPage": 9,
    "description": "PBP BONDABLE OR FIXED PBP precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-151",
    "name": "KOIS DEPROGRAMER",
    "category": "Appliances",
    "subcategory": "Functional Appliances",
    "pdfPage": 9,
    "description": "KOIS DEPROGRAMER precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-152",
    "name": "SPACE CLOSING APPLIANCE",
    "category": "Appliances",
    "subcategory": "Functional Appliances",
    "pdfPage": 9,
    "description": "SPACE CLOSING APPLIANCE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-153",
    "name": "OBTURATOR",
    "category": "Appliances",
    "subcategory": "Functional Appliances",
    "pdfPage": 9,
    "description": "OBTURATOR precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-154",
    "name": "SVED APPLIANCES",
    "category": "Appliances",
    "subcategory": "Functional Appliances",
    "pdfPage": 9,
    "description": "SVED APPLIANCES precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-155",
    "name": "COFFIN SPRING APPLIANCE",
    "category": "Appliances",
    "subcategory": "Functional Appliances",
    "pdfPage": 9,
    "description": "COFFIN SPRING APPLIANCE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-156",
    "name": "MAXILLARY SPLINT WITH TUBE",
    "category": "Appliances",
    "subcategory": "Maxillary Intrusion Splints",
    "pdfPage": 9,
    "description": "MAXILLARY SPLINT WITH TUBE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-157",
    "name": "MAXILLARY SPLINT WITH TUBE (JACK'S SCREW)",
    "category": "Appliances",
    "subcategory": "Maxillary Intrusion Splints",
    "pdfPage": 9,
    "description": "MAXILLARY SPLINT WITH TUBE (JACK'S SCREW) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-158",
    "name": "MAXILLARY SPLINT WITH TUBE (JACK'S SCREW WITH FULL KIT)",
    "category": "Appliances",
    "subcategory": "Maxillary Intrusion Splints",
    "pdfPage": 9,
    "description": "MAXILLARY SPLINT WITH TUBE (JACK'S SCREW WITH FULL KIT) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-159",
    "name": "MAXILLARY SPLINT WITH TUBE (FULL KIT)",
    "category": "Appliances",
    "subcategory": "Maxillary Intrusion Splints",
    "pdfPage": 9,
    "description": "MAXILLARY SPLINT WITH TUBE (FULL KIT) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-160",
    "name": "MAXILLARY SPLINT WITH TUBE - MODIFIED THREE WAY EXPANSION",
    "category": "Appliances",
    "subcategory": "Maxillary Intrusion Splints",
    "pdfPage": 9,
    "description": "MAXILLARY SPLINT WITH TUBE - MODIFIED THREE WAY EXPANSION precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-161",
    "name": "MAXILLARY SPLINT WITH TUBE (THREE WAY EXPANSION SCREW WITH FULL KIT)",
    "category": "Appliances",
    "subcategory": "Maxillary Intrusion Splints",
    "pdfPage": 9,
    "description": "MAXILLARY SPLINT WITH TUBE (THREE WAY EXPANSION SCREW WITH FULL KIT) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-162",
    "name": "PROTRACTION SPLINT BONDABLE (INCLUDING KIT)",
    "category": "Appliances",
    "subcategory": "Maxillary Intrusion Splints",
    "pdfPage": 9,
    "description": "PROTRACTION SPLINT BONDABLE (INCLUDING KIT) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-163",
    "name": "HIGHPULL HEAD GEAR FIXED HYRAX (INCLUDING KIT)",
    "category": "Appliances",
    "subcategory": "Maxillary Intrusion Splints",
    "pdfPage": 9,
    "description": "HIGHPULL HEAD GEAR FIXED HYRAX (INCLUDING KIT) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-164",
    "name": "CERVICAL TYPE HEAD GEAR (WITH FULL KIT INCLUDING EXPANSION SCREW)",
    "category": "Appliances",
    "subcategory": "Maxillary Intrusion Splints",
    "pdfPage": 9,
    "description": "CERVICAL TYPE HEAD GEAR (WITH FULL KIT INCLUDING EXPANSION SCREW) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-165",
    "name": "CERVICAL TYPE HEAD GEAR FIXED HYRAX (INCLUDING KIT)",
    "category": "Appliances",
    "subcategory": "Maxillary Intrusion Splints",
    "pdfPage": 9,
    "description": "CERVICAL TYPE HEAD GEAR FIXED HYRAX (INCLUDING KIT) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-166",
    "name": "PROTRACTION SPLINT WITH FIXED HYRAX (INCLUDING KIT)",
    "category": "Appliances",
    "subcategory": "Maxillary Intrusion Splints",
    "pdfPage": 9,
    "description": "PROTRACTION SPLINT WITH FIXED HYRAX (INCLUDING KIT) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-167",
    "name": "PROTRACTION SPLINT WITH BONDABLE HYRAX (INCLUDING KIT)",
    "category": "Appliances",
    "subcategory": "Maxillary Intrusion Splints",
    "pdfPage": 9,
    "description": "PROTRACTION SPLINT WITH BONDABLE HYRAX (INCLUDING KIT) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-168",
    "name": "TENDEM APPLIANCE BONDABLE",
    "category": "Appliances",
    "subcategory": "Maxillary Intrusion Splints",
    "pdfPage": 9,
    "description": "TENDEM APPLIANCE BONDABLE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-169",
    "name": "TENDEM APPLIANCE (WITH JACK'S SCREW)",
    "category": "Appliances",
    "subcategory": "Maxillary Intrusion Splints",
    "pdfPage": 9,
    "description": "TENDEM APPLIANCE (WITH JACK'S SCREW) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-170",
    "name": "PROTRACTION SPLINT BONDABLE (WITH JACK'S SCREW)",
    "category": "Appliances",
    "subcategory": "Maxillary Intrusion Splints",
    "pdfPage": 9,
    "description": "PROTRACTION SPLINT BONDABLE (WITH JACK'S SCREW) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-171",
    "name": "PROTRACTION SPLINT BONDABLE ( THREE WAY EXPANSION SCREW INCLUDING KIT)",
    "category": "Appliances",
    "subcategory": "Maxillary Intrusion Splints",
    "pdfPage": 9,
    "description": "PROTRACTION SPLINT BONDABLE ( THREE WAY EXPANSION SCREW INCLUDING KIT) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-172",
    "name": "TENDEM APPLIANCE FIXED HYRAX",
    "category": "Appliances",
    "subcategory": "Maxillary Intrusion Splints",
    "pdfPage": 9,
    "description": "TENDEM APPLIANCE FIXED HYRAX precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-173",
    "name": "SPACE MAINTAINER OR BAND AND LOOP",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "SPACE MAINTAINER OR BAND AND LOOP precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-174",
    "name": "CROWN AND LOOP (ONE SIDE)",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "CROWN AND LOOP (ONE SIDE) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-175",
    "name": "FIXED AIBP",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "FIXED AIBP precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-176",
    "name": "REMOVABLE ABP",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "REMOVABLE ABP precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-177",
    "name": "REMOVABLE AIBP",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "REMOVABLE AIBP precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-178",
    "name": "FIXED TONGUE CRIP",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "FIXED TONGUE CRIP precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-179",
    "name": "FIXED THUMB SUCKING GUARD MESH TYPE",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "FIXED THUMB SUCKING GUARD MESH TYPE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-180",
    "name": "FIXED HABIT BREAKER",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "FIXED HABIT BREAKER precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-181",
    "name": "REMOVABLE TONGUE CRIP",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "REMOVABLE TONGUE CRIP precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-182",
    "name": "REMOVABLE HABIT BREAKER",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "REMOVABLE HABIT BREAKER precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-183",
    "name": "REMOVABLE THUMB SUCKING GUARD MESH TYPE",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "REMOVABLE THUMB SUCKING GUARD MESH TYPE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-184",
    "name": "FIXED TPA",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "FIXED TPA precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-185",
    "name": "TPA WITH EXTENDED ARM",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "TPA WITH EXTENDED ARM precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-186",
    "name": "REMOVABLE TPA",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "REMOVABLE TPA precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-187",
    "name": "LINGUAL HOLDING ARCH",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "LINGUAL HOLDING ARCH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-188",
    "name": "LINGUAL HOLDING ARCH - REMOVABLE",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "LINGUAL HOLDING ARCH - REMOVABLE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-189",
    "name": "LINGUAL HOLDING ARCH WITH (SINGLE TOOTH)",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "LINGUAL HOLDING ARCH WITH (SINGLE TOOTH) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-190",
    "name": "LIP BUMPER FIXED",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "LIP BUMPER FIXED precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-191",
    "name": "LIP BUMPER - REMOVABLE",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "LIP BUMPER - REMOVABLE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-192",
    "name": "NANCE HOLDING ARCH FIXED",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "NANCE HOLDING ARCH FIXED precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-193",
    "name": "NANCE HOLDING ARCH - REMOVABLE",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "NANCE HOLDING ARCH - REMOVABLE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-194",
    "name": "W - ARCH FIXED",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "W - ARCH FIXED precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-195",
    "name": "W - ARCH - REMOVABLE",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "W - ARCH - REMOVABLE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-196",
    "name": "QUARD HELIX FIXED",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "QUARD HELIX FIXED precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-197",
    "name": "QUARD HELIX - REMOVABLE",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "QUARD HELIX - REMOVABLE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-198",
    "name": "BLUE GRASS FIXED",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "BLUE GRASS FIXED precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-199",
    "name": "BLUE GRASS REMOVABLE",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "BLUE GRASS REMOVABLE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-200",
    "name": "GROPER FIXED (TOOTH ADDING SINGLE TOOTH)",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "GROPER FIXED (TOOTH ADDING SINGLE TOOTH) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-201",
    "name": "GROPER REMOVABLE (TOOTH ADDING SINGLE TOOTH)",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "GROPER REMOVABLE (TOOTH ADDING SINGLE TOOTH) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-202",
    "name": "NANCE WITH U LOOP FIXED",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "NANCE WITH U LOOP FIXED precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-203",
    "name": "NANCE WITH U LOOP REMOVABLE",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "NANCE WITH U LOOP REMOVABLE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-204",
    "name": "DISTAL SHOE ( ONE SIDE)",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "DISTAL SHOE ( ONE SIDE) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-205",
    "name": "QUARD HELIX BONDABLE",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "QUARD HELIX BONDABLE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-206",
    "name": "BONDED LIP BUMPER",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "BONDED LIP BUMPER precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-207",
    "name": "QUARD HELIX WITH TONGUE CRIP BONDABLE",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "QUARD HELIX WITH TONGUE CRIP BONDABLE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-208",
    "name": "BI HELIX LOWER FIXED",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "BI HELIX LOWER FIXED precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-209",
    "name": "BI HELIX LOWER REMOVABLE",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "BI HELIX LOWER REMOVABLE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-210",
    "name": "HAAS EXPENDER",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "HAAS EXPENDER precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-211",
    "name": "PENDULUM APPLIANCES ( BANDED WITH EXPANSION )",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "PENDULUM APPLIANCES ( BANDED WITH EXPANSION ) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-212",
    "name": "PENDULUM APPLIANCES (REMOVABLE WITH EXPANSION )",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "PENDULUM APPLIANCES (REMOVABLE WITH EXPANSION ) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-213",
    "name": "PENDEX APPLIANCE ( BANDED WITH EXPANSION )",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "PENDEX APPLIANCE ( BANDED WITH EXPANSION ) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-214",
    "name": "PENDEX APPLIANCE ( REMOVABLE WITH EXPANSION)",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "PENDEX APPLIANCE ( REMOVABLE WITH EXPANSION) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-215",
    "name": "MAYNES SPACE MAINTAINER",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "MAYNES SPACE MAINTAINER precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-216",
    "name": "ABP OR AIBP WITH TPA",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "ABP OR AIBP WITH TPA precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-217",
    "name": "TONGUE CRIP WITH TPA",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "TONGUE CRIP WITH TPA precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-218",
    "name": "NANCE WITH TPA",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "NANCE WITH TPA precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-219",
    "name": "NANCE WITH TONGUE CRIP",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "NANCE WITH TONGUE CRIP precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-220",
    "name": "NANCE WITH ABP OR AIBP",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "NANCE WITH ABP OR AIBP precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-221",
    "name": "QUARD HELIX WITH TONGUE CRIP FIXED",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "QUARD HELIX WITH TONGUE CRIP FIXED precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-222",
    "name": "QUARD HELIX WITH TONGUE CRIP REMOVABLE",
    "category": "Appliances",
    "subcategory": "Fixed Appliances",
    "pdfPage": 10,
    "description": "QUARD HELIX WITH TONGUE CRIP REMOVABLE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-223",
    "name": "HYRAX BANDED",
    "category": "Appliances",
    "subcategory": "Hyrax Expanders",
    "pdfPage": 10,
    "description": "HYRAX BANDED precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-224",
    "name": "HYRAXBANDED (ADDITIONAL ATTACHED )",
    "category": "Appliances",
    "subcategory": "Hyrax Expanders",
    "pdfPage": 10,
    "description": "HYRAXBANDED (ADDITIONAL ATTACHED ) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-225",
    "name": "HYRAX WITH TONGUE CRIP",
    "category": "Appliances",
    "subcategory": "Hyrax Expanders",
    "pdfPage": 10,
    "description": "HYRAX WITH TONGUE CRIP precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-226",
    "name": "HYRAX WITH ABP",
    "category": "Appliances",
    "subcategory": "Hyrax Expanders",
    "pdfPage": 10,
    "description": "HYRAX WITH ABP precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-227",
    "name": "HYRAX BONDED",
    "category": "Appliances",
    "subcategory": "Hyrax Expanders",
    "pdfPage": 10,
    "description": "HYRAX BONDED precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-228",
    "name": "FAN TYPE HYRAX BANDED",
    "category": "Appliances",
    "subcategory": "Hyrax Expanders",
    "pdfPage": 10,
    "description": "FAN TYPE HYRAX BANDED precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-229",
    "name": "FAN TYPE HYRAX (ADDITIONAL ATTACHED)",
    "category": "Appliances",
    "subcategory": "Hyrax Expanders",
    "pdfPage": 10,
    "description": "FAN TYPE HYRAX (ADDITIONAL ATTACHED) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-230",
    "name": "FAN TYPE HYRAX BONDED",
    "category": "Appliances",
    "subcategory": "Hyrax Expanders",
    "pdfPage": 10,
    "description": "FAN TYPE HYRAX BONDED precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-231",
    "name": "FAN TYPE HYRAX WITH ABP",
    "category": "Appliances",
    "subcategory": "Hyrax Expanders",
    "pdfPage": 10,
    "description": "FAN TYPE HYRAX WITH ABP precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-232",
    "name": "FAN TYPE HYRAX WITH TONGUE CRIP",
    "category": "Appliances",
    "subcategory": "Hyrax Expanders",
    "pdfPage": 10,
    "description": "FAN TYPE HYRAX WITH TONGUE CRIP precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-233",
    "name": "LOWER HYRAX BANDED",
    "category": "Appliances",
    "subcategory": "Hyrax Expanders",
    "pdfPage": 10,
    "description": "LOWER HYRAX BANDED precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-234",
    "name": "LOWER HYRAX BONDED",
    "category": "Appliances",
    "subcategory": "Hyrax Expanders",
    "pdfPage": 10,
    "description": "LOWER HYRAX BONDED precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-235",
    "name": "POWER ARM ADDING",
    "category": "Appliances",
    "subcategory": "Hyrax Expanders",
    "pdfPage": 10,
    "description": "POWER ARM ADDING precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-236",
    "name": "TWIN BLOCK",
    "category": "Appliances",
    "subcategory": "Myo-Functional Appliances",
    "pdfPage": 11,
    "description": "TWIN BLOCK precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-237",
    "name": "TWIN BLOCK - BONDABLE",
    "category": "Appliances",
    "subcategory": "Myo-Functional Appliances",
    "pdfPage": 11,
    "description": "TWIN BLOCK - BONDABLE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-238",
    "name": "TWIN BLOCK WITH ABP OR AIBP",
    "category": "Appliances",
    "subcategory": "Myo-Functional Appliances",
    "pdfPage": 11,
    "description": "TWIN BLOCK WITH ABP OR AIBP precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-239",
    "name": "TWIN BLOCK JACKS SCREW",
    "category": "Appliances",
    "subcategory": "Myo-Functional Appliances",
    "pdfPage": 11,
    "description": "TWIN BLOCK JACKS SCREW precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-240",
    "name": "TWIN BLOCK WITH THREE WAY EXPANSION SCREW",
    "category": "Appliances",
    "subcategory": "Myo-Functional Appliances",
    "pdfPage": 11,
    "description": "TWIN BLOCK WITH THREE WAY EXPANSION SCREW precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-241",
    "name": "REVERSE TWIN BLOCK",
    "category": "Appliances",
    "subcategory": "Myo-Functional Appliances",
    "pdfPage": 11,
    "description": "REVERSE TWIN BLOCK precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-242",
    "name": "FIXED TWIN BLOCK",
    "category": "Appliances",
    "subcategory": "Myo-Functional Appliances",
    "pdfPage": 11,
    "description": "FIXED TWIN BLOCK precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-243",
    "name": "TWIN BLOCK WITH LIP BUMPER",
    "category": "Appliances",
    "subcategory": "Myo-Functional Appliances",
    "pdfPage": 11,
    "description": "TWIN BLOCK WITH LIP BUMPER precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-244",
    "name": "TWIN BLOCK WITH HYRAX",
    "category": "Appliances",
    "subcategory": "Myo-Functional Appliances",
    "pdfPage": 11,
    "description": "TWIN BLOCK WITH HYRAX precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-245",
    "name": "TWIN BLOCK WITH FAN TYPE HYRAX",
    "category": "Appliances",
    "subcategory": "Myo-Functional Appliances",
    "pdfPage": 11,
    "description": "TWIN BLOCK WITH FAN TYPE HYRAX precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-246",
    "name": "FIXED TWIN BLOCK WITH LIP BUMPER",
    "category": "Appliances",
    "subcategory": "Myo-Functional Appliances",
    "pdfPage": 11,
    "description": "FIXED TWIN BLOCK WITH LIP BUMPER precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-247",
    "name": "FIXED TWIN BLOCK WITH EXPANSION SCREW",
    "category": "Appliances",
    "subcategory": "Myo-Functional Appliances",
    "pdfPage": 11,
    "description": "FIXED TWIN BLOCK WITH EXPANSION SCREW precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-248",
    "name": "TWIN BLOCK WITH HEAD GEAR TUBE",
    "category": "Appliances",
    "subcategory": "Myo-Functional Appliances",
    "pdfPage": 11,
    "description": "TWIN BLOCK WITH HEAD GEAR TUBE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-249",
    "name": "TWIN BLOCK WITH HEAD GEAR WITH ( FULL KIT)",
    "category": "Appliances",
    "subcategory": "Myo-Functional Appliances",
    "pdfPage": 11,
    "description": "TWIN BLOCK WITH HEAD GEAR WITH ( FULL KIT) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-250",
    "name": "TWIN BLOCK WITH HYRAX AND LIP BUMPER",
    "category": "Appliances",
    "subcategory": "Myo-Functional Appliances",
    "pdfPage": 11,
    "description": "TWIN BLOCK WITH HYRAX AND LIP BUMPER precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-251",
    "name": "ORAL SCREEN",
    "category": "Appliances",
    "subcategory": "Myo-Functional Appliances",
    "pdfPage": 11,
    "description": "ORAL SCREEN precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-252",
    "name": "DOUBLE ORAL SCREEN",
    "category": "Appliances",
    "subcategory": "Myo-Functional Appliances",
    "pdfPage": 11,
    "description": "DOUBLE ORAL SCREEN precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-253",
    "name": "BLEACHING TRAY",
    "category": "Appliances",
    "subcategory": "Suction Splints",
    "pdfPage": 11,
    "description": "BLEACHING TRAY precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-254",
    "name": "NIGHT GUARD 1MM (UPPER AND LOWER)",
    "category": "Appliances",
    "subcategory": "Suction Splints",
    "pdfPage": 11,
    "description": "NIGHT GUARD 1MM (UPPER AND LOWER) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-255",
    "name": "NIGHT GUARD 2MM (UPPER AND LOWER)",
    "category": "Appliances",
    "subcategory": "Suction Splints",
    "pdfPage": 11,
    "description": "NIGHT GUARD 2MM (UPPER AND LOWER) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-256",
    "name": "NIGHT GUARD 3MM (UPPER AND LOWER)",
    "category": "Appliances",
    "subcategory": "Suction Splints",
    "pdfPage": 11,
    "description": "NIGHT GUARD 3MM (UPPER AND LOWER) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-257",
    "name": "NIGHT GUARD 4MM (UPPER AND LOWER)",
    "category": "Appliances",
    "subcategory": "Suction Splints",
    "pdfPage": 11,
    "description": "NIGHT GUARD 4MM (UPPER AND LOWER) precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-258",
    "name": "SNAP ON SPLINT WHITE COLOUR",
    "category": "Appliances",
    "subcategory": "Suction Splints",
    "pdfPage": 11,
    "description": "SNAP ON SPLINT WHITE COLOUR precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-259",
    "name": "SNAP ON SPLINT TOOTH SHADE",
    "category": "Appliances",
    "subcategory": "Suction Splints",
    "pdfPage": 11,
    "description": "SNAP ON SPLINT TOOTH SHADE precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-260",
    "name": "ESSIX RETAINER WITH SINGLE TOOTH",
    "category": "Appliances",
    "subcategory": "Suction Splints",
    "pdfPage": 11,
    "description": "ESSIX RETAINER WITH SINGLE TOOTH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-261",
    "name": "FOR ADDITIONAL TOOTH",
    "category": "Appliances",
    "subcategory": "Suction Splints",
    "pdfPage": 11,
    "description": "FOR ADDITIONAL TOOTH precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  },
  {
    "id": "p-262",
    "name": "SPORTS GUARD",
    "category": "Appliances",
    "subcategory": "Suction Splints",
    "pdfPage": 11,
    "description": "SPORTS GUARD precision manufactured by Dental Lab Connect according to clinical prescription.",
    "features": []
  }
];

// Alias constants for compatibility across project
export const CATALOGUE_ITEMS = ALL_PRODUCTS;
export const CATALOGUE_CATEGORIES = [
  "All Products",
  ...MAIN_CATEGORIES
];
