import jsPDF from 'jspdf';
import { CATALOGUE_ITEMS, CATEGORY_MODULES, CatalogueItem } from '../data/catalogueData';

/**
 * Generates the official Dental Lab Connect 15-Page Product List PDF.
 * Follows the visual layout and page-by-page structure of the reference document.
 * Includes all 224 laboratory items across 15 pristine A4 pages.
 * Displays no product prices.
 */
export async function generateProductBrochure(): Promise<void> {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 12;
  const contentWidth = pageWidth - margin * 2; // 186mm

  // Palette: Black and Silver Dental Laboratory Identity
  const darkBg = [8, 9, 11]; // #08090B
  const cardBg = [17, 19, 23]; // #111317
  const cardBorder = [38, 42, 51]; // #262A33
  const charcoal = [24, 27, 34]; // #181B22
  const silver = [192, 196, 202]; // #C0C4CA
  const lightSilver = [229, 231, 235]; // #E5E7EB
  const white = [255, 255, 255];
  const mutedText = [142, 149, 162]; // #8E95A2
  const accentBadgeBg = [30, 34, 42]; // #1E222A

  const setPageBackground = () => {
    doc.setFillColor(darkBg[0], darkBg[1], darkBg[2]);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');
  };

  const drawHeader = (pageNumber: number) => {
    // Top subtle boundary line
    doc.setDrawColor(charcoal[0], charcoal[1], charcoal[2]);
    doc.setLineWidth(0.3);
    doc.line(margin, 15, pageWidth - margin, 15);

    // Left: DLC Logo Box & Brand
    doc.setFillColor(white[0], white[1], white[2]);
    doc.roundedRect(margin, 7, 10, 6, 1, 1, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(darkBg[0], darkBg[1], darkBg[2]);
    doc.text('DLC', margin + 5, 11.2, { align: 'center' });

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(white[0], white[1], white[2]);
    doc.text('DENTAL LAB CONNECT', margin + 13, 11.2);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.8);
    doc.setTextColor(silver[0], silver[1], silver[2]);
    doc.text('· DENTAL LABORATORY SOLUTIONS', margin + 58, 11.2);

    // Right: Direct Coordinator Phone & WhatsApp
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(silver[0], silver[1], silver[2]);
    doc.text('DIRECT COORDINATION: 7639664119', pageWidth - margin, 11.2, { align: 'right' });
  };

  const drawFooter = (pageNumber: number) => {
    const yPos = pageHeight - 8;

    // Boundary line
    doc.setDrawColor(charcoal[0], charcoal[1], charcoal[2]);
    doc.setLineWidth(0.3);
    doc.line(margin, yPos - 3, pageWidth - margin, yPos - 3);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.8);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text('Dental Lab Connect · Custom Models, Prosthetics & Appliances · Saravana Kumar: 7639664119', margin, yPos + 1);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.2);
    doc.setTextColor(silver[0], silver[1], silver[2]);
    doc.text(`Page ${pageNumber} of 15`, pageWidth - margin, yPos + 1, { align: 'right' });
  };

  // Pre-index items by their designated reference PDF page (1 to 15)
  const itemsByPage: Record<number, CatalogueItem[]> = {};
  for (let p = 1; p <= 15; p++) {
    itemsByPage[p] = [];
  }
  CATALOGUE_ITEMS.forEach((item) => {
    if (itemsByPage[item.pdfPage]) {
      itemsByPage[item.pdfPage].push(item);
    }
  });

  // Page Metas for each of the 15 pages (preserving the uploaded 15-page structure)
  const pageMetadata: Record<
    number,
    {
      title: string;
      discipline: string;
      description: string;
      workbenchNote: string;
    }
  > = {
    1: {
      title: 'FUNCTIONAL APPLIANCES',
      discipline: 'INTERCEPTIVE ORTHODONTICS',
      description: 'Orthodontic anterior crossbite correction, bite planes, and neuromodulation deprogramming appliances.',
      workbenchNote: 'Articulated master casts · Custom wirework & cold-cure resin polymerization · Precise occlusal stops',
    },
    2: {
      title: 'ACRYLIC INJECTION DENTURES (BREDENT GERMANY)',
      discipline: 'INJECTION PROSTHETICS',
      description: 'German Bredent thermoplastic injection system providing shatter-resistant, ultra-dense mucosal fit.',
      workbenchNote: 'Thermoplastic vacuum injection · Zero monomer irritation · Superior mucosal replication & durability',
    },
    3: {
      title: 'FIXED APPLIANCES — PART 1',
      discipline: 'BANDED & BONDED ORTHODONTICS',
      description: 'Habit interceptors, space maintainers, bilateral holding arches, and active arch expansion devices.',
      workbenchNote: 'Laser-welded band attachments · High-tensile stainless steel wire · Anatomically formed loops',
    },
    4: {
      title: 'REMOVABLE APPLIANCES',
      discipline: 'RETENTION & ACTIVE WIREWORK',
      description: 'Precision Hawley retainers, Begg wrap-around arches, Schwarz expansion screws, and active wire springs.',
      workbenchNote: 'High-gloss acrylic polishing · Exact Adams clasp retention · Hand-formed stainless labial bows',
    },
    5: {
      title: 'FIXED APPLIANCES — PART 2',
      discipline: 'ARCH EXPANSION & SPACE REGAINERS',
      description: 'Comprehensive fixed space maintainers, palatal expanders, M-arch expanders, and habit correction guards.',
      workbenchNote: 'Precision band crimping · Passive seating verification · High mechanical fatigue resistance',
    },
    6: {
      title: 'PRECISION ATTACHMENTS & CLEAR ALIGNERS',
      discipline: 'PROSTHETICS & DIGITAL ALIGNERS',
      description: 'OT Strategy overdenture retention attachments, Rhein83 components, and thermoformed clear aligner series.',
      workbenchNote: 'Friction-fit retention caps · Multi-stage medical grade polymer aligners · Micro-accuracy tolerances',
    },
    7: {
      title: 'CROWN & BRIDGE — SCREW RETAINED & COPINGS',
      discipline: 'IMPLANT RESTORATIVE & TELESCOPIC',
      description: 'Screw-retained zirconia frameworks, Sintron milled restorations, primary & secondary telescopic copings.',
      workbenchNote: '5-Axis CAD/CAM precision milling · Passive screw-fit verification · Optical microscopic margin check',
    },
    8: {
      title: 'IMPLANT PROSTHESIS — CEMENT RETAINED',
      discipline: 'FIXED IMPLANT RESTORATIONS',
      description: 'Cementable implant-supported single crowns and multi-unit bridges in premium monolithic zirconia and metal.',
      workbenchNote: 'Subgingival emergence profile contouring · Anatomical occlusal anatomy · Micro-gap margin fit',
    },
    9: {
      title: 'HYRAX EXPANDERS',
      discipline: 'RAPID PALATAL EXPANSION',
      description: 'Banded, bonded, and hybrid rapid palatal expanders, fan-type mechanics, and mandibular expansion appliances.',
      workbenchNote: 'Heavy-duty laser-welded screw bodies · Anatomical contour bands · High transverse force transfer',
    },
    10: {
      title: 'LABORATORY PROTOCOLS & MODEL CRITERIA',
      discipline: 'QUALITY ASSURANCE & STANDARDS',
      description: 'Clinical working protocols, master cast preparation standards, and expansion activation guidelines.',
      workbenchNote: 'Vacuum-spatulated Type IV die stone · Calibrated facebow articulation · Multi-point QA inspection',
    },
    11: {
      title: 'DENTURE SOLUTIONS — HIGH IMPACT & NORMAL',
      discipline: 'REMOVABLE PROSTHODONTICS',
      description: 'Premium Bredent/Ivoclar high-impact shatter-resistant dentures and standard acrylic partials and complete dentures.',
      workbenchNote: 'Pressure-cured cross-linked polymers · Natural gingival festooning · Anatomical tooth arrangement',
    },
    12: {
      title: 'MYOFUNCTIONAL APPLIANCES & SUCTION SPLINTS',
      discipline: 'GROWTH GUIDANCE & THERMOFORMING',
      description: 'Twin Block appliances, reverse twin blocks, suction night guards, bleaching trays, and athletic guards.',
      workbenchNote: 'Interocclusal wax bite alignment · Multi-layer vacuum thermoforming · Smooth border finishing',
    },
    13: {
      title: 'MAXILLARY INTRUSION SPLINTS & TRACTION',
      discipline: 'SKELETAL ORTHOPEDIC MECHANICS',
      description: 'Tube splints, extra-oral protraction facebow systems, high-pull headgear mechanics, and tandem expansion kits.',
      workbenchNote: 'Rigid traction hook placement · Uniform acrylic bite block clearance · Heavy orthopedic stability',
    },
    14: {
      title: 'METAL CERAMIC & CAD/CAM CERAMIC',
      discipline: 'PROSTHETIC CROWNS & BRIDGES',
      description: 'DMLS laser-sintered CoCr frameworks, porcelain-fused-to-metal, Sintron soft-milled alloy, and full metal restorations.',
      workbenchNote: 'High-density laser sintering · Multi-layered porcelain firing · 3D digital contact verification',
    },
    15: {
      title: 'ORDER PRESCRIPTION & CASE COORDINATION',
      discipline: 'DIRECT LABORATORY PARTNERSHIP',
      description: 'Clinical prescription protocol, case dispatch instructions, and direct coordinator contact information.',
      workbenchNote: 'Direct phone & WhatsApp coordination: 7639664119 · Saravana Kumar · Rapid case turnaround',
    },
  };

  /* =========================================================================
     LOOP OVER ALL 15 PAGES
     ========================================================================= */
  for (let pageNum = 1; pageNum <= 15; pageNum++) {
    if (pageNum > 1) {
      doc.addPage();
    }
    setPageBackground();
    drawHeader(pageNum);
    drawFooter(pageNum);

    const meta = pageMetadata[pageNum];
    const pageItems = itemsByPage[pageNum] || [];

    // Top Banner Box
    const bannerY = 18;
    const bannerHeight = 24;
    doc.setFillColor(cardBg[0], cardBg[1], cardBg[2]);
    doc.roundedRect(margin, bannerY, contentWidth, bannerHeight, 2, 2, 'F');
    doc.setDrawColor(cardBorder[0], cardBorder[1], cardBorder[2]);
    doc.setLineWidth(0.4);
    doc.roundedRect(margin, bannerY, contentWidth, bannerHeight, 2, 2, 'D');

    // Page indicator badge (left)
    doc.setFillColor(accentBadgeBg[0], accentBadgeBg[1], accentBadgeBg[2]);
    doc.roundedRect(margin + 4, bannerY + 4, 18, 6, 1, 1, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(silver[0], silver[1], silver[2]);
    doc.text(`PAGE ${pageNum < 10 ? '0' + pageNum : pageNum}`, margin + 13, bannerY + 8.2, { align: 'center' });

    // Category Title (Main Heading)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(white[0], white[1], white[2]);
    doc.text(meta.title, margin + 25, bannerY + 8.5);

    // Discipline Tag (Right)
    doc.setFillColor(accentBadgeBg[0], accentBadgeBg[1], accentBadgeBg[2]);
    const discWidth = doc.getTextWidth(meta.discipline) + 8;
    doc.roundedRect(pageWidth - margin - discWidth - 4, bannerY + 4, discWidth, 6, 1, 1, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.5);
    doc.setTextColor(lightSilver[0], lightSilver[1], lightSilver[2]);
    doc.text(meta.discipline, pageWidth - margin - 4 - discWidth / 2, bannerY + 8.2, { align: 'center' });

    // Category Description & Workbench Note
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.2);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    const descLines = doc.splitTextToSize(meta.description, contentWidth - 8);
    doc.text(descLines[0] || meta.description, margin + 4, bannerY + 14.5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(silver[0], silver[1], silver[2]);
    doc.text(`Lab Benchmark: ${meta.workbenchNote}`, margin + 4, bannerY + 19.5);

    // Item count indicator if product page
    if (pageItems.length > 0) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6.8);
      doc.setTextColor(silver[0], silver[1], silver[2]);
      doc.text(`${pageItems.length} Laboratory Items Listed`, pageWidth - margin - 4, bannerY + 19.5, { align: 'right' });
    }

    /* -----------------------------------------------------------------------
       SPECIAL PAGE 10: LABORATORY CLINICAL PROTOCOLS & MODEL CRITERIA
       ----------------------------------------------------------------------- */
    if (pageNum === 10) {
      let curY = bannerY + bannerHeight + 5;

      const protocols = [
        {
          num: '01',
          title: 'GYPSUM MASTER CAST & MODEL CRITERIA',
          bullets: [
            'Pour all impressions using vacuum-mixed Type IV high-strength dental die stone.',
            'Ensure complete anatomical capture of vestibules, muscle attachments, and palatal vault.',
            'Inspect master casts for voids, bubbles, or chipped preparation margins before fabrication.',
          ],
        },
        {
          num: '02',
          title: 'ARTICULATION & INTEROCCLUSAL VERIFICATION',
          bullets: [
            'Mount casts in centric relation using stable interocclusal wax or elastomer registrations.',
            'Verify vertical dimension of occlusion (VDO) and dynamic eccentric clearance.',
            'Check lateral excursions to prevent canine and incisal guidance interferences.',
          ],
        },
        {
          num: '03',
          title: 'RAPID PALATAL EXPANDER ACTIVATION PROTOCOL',
          bullets: [
            'Each quarter-turn produces exactly 0.25 mm of skeletal transverse displacement.',
            'Follow prescribing doctor instructions (standard: 1 activation per 24 hours).',
            'Advise patients on daily appliance irrigation and palatal vault hygiene maintenance.',
          ],
        },
        {
          num: '04',
          title: 'GERMAN BREDENT ACRYLIC INJECTION STANDARDS',
          bullets: [
            'Strict adherence to calibrated temperature and pressurized polymer injection curing.',
            'Micro-gap free mucosal adaptation ensuring zero irritation and tissue tolerance.',
            'High-gloss clinical pumice and rouge polishing on all non-tissue contacting surfaces.',
          ],
        },
        {
          num: '05',
          title: 'FINAL LABORATORY QUALITY CHECKLIST (PRE-DISPATCH)',
          bullets: [
            'Marginal accuracy assessed under 10x high-magnification surgical loupes.',
            'Clasp and wirework passivity verified on pristine duplicated working models.',
            'Sealed protective clinical packaging with doctor case prescription identifier.',
          ],
        },
      ];

      const protoBoxHeight = 40;
      protocols.forEach((proto) => {
        doc.setFillColor(cardBg[0], cardBg[1], cardBg[2]);
        doc.roundedRect(margin, curY, contentWidth, protoBoxHeight, 2, 2, 'F');
        doc.setDrawColor(cardBorder[0], cardBorder[1], cardBorder[2]);
        doc.setLineWidth(0.3);
        doc.roundedRect(margin, curY, contentWidth, protoBoxHeight, 2, 2, 'D');

        // Protocol Number
        doc.setFillColor(accentBadgeBg[0], accentBadgeBg[1], accentBadgeBg[2]);
        doc.roundedRect(margin + 3, curY + 3.5, 9, 6.5, 1, 1, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7.5);
        doc.setTextColor(silver[0], silver[1], silver[2]);
        doc.text(proto.num, margin + 7.5, curY + 8, { align: 'center' });

        // Protocol Title
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(white[0], white[1], white[2]);
        doc.text(proto.title, margin + 15, curY + 8);

        // Bullets
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(6.8);
        doc.setTextColor(lightSilver[0], lightSilver[1], lightSilver[2]);
        proto.bullets.forEach((b, bIdx) => {
          doc.text(`•  ${b}`, margin + 6, curY + 16 + bIdx * 7.5);
        });

        curY += protoBoxHeight + 4;
      });
      continue;
    }

    /* -----------------------------------------------------------------------
       SPECIAL PAGE 15: ORDER PRESCRIPTION & DIRECT CASE COORDINATION
       ----------------------------------------------------------------------- */
    if (pageNum === 15) {
      let curY = bannerY + bannerHeight + 5;

      // Section 1: Prescription Protocol Form Block
      const formBoxHeight = 85;
      doc.setFillColor(cardBg[0], cardBg[1], cardBg[2]);
      doc.roundedRect(margin, curY, contentWidth, formBoxHeight, 2, 2, 'F');
      doc.setDrawColor(cardBorder[0], cardBorder[1], cardBorder[2]);
      doc.setLineWidth(0.3);
      doc.roundedRect(margin, curY, contentWidth, formBoxHeight, 2, 2, 'D');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(white[0], white[1], white[2]);
      doc.text('CLINICAL CASE PRESCRIPTION CHECKLIST', margin + 6, curY + 7);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
      doc.text('Please verify all details prior to dispatching master models or digital scans to Dental Lab Connect:', margin + 6, curY + 12);

      const checklistFields = [
        'Doctor / Dental Clinic Name & Contact Number',
        'Patient Full Name / Clinic Case ID',
        'Required Appliance / Restoration Category & Specific Product Name',
        'Tooth Numbers / Tooth Shade Specification (VITA Classical / 3D Master)',
        'Bite Registration Type (Centric Relation / Open Bite / Interocclusal)',
        'Specific Custom Wirework / Clasp / Screw Attachment Instructions',
        'Target Delivery Date & Clinic Appointment Schedule',
      ];

      checklistFields.forEach((field, fIdx) => {
        const fieldY = curY + 19 + fIdx * 8.5;
        doc.setFillColor(darkBg[0], darkBg[1], darkBg[2]);
        doc.roundedRect(margin + 6, fieldY, contentWidth - 12, 6.5, 1, 1, 'F');
        doc.setDrawColor(cardBorder[0], cardBorder[1], cardBorder[2]);
        doc.roundedRect(margin + 6, fieldY, contentWidth - 12, 6.5, 1, 1, 'D');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(6.8);
        doc.setTextColor(silver[0], silver[1], silver[2]);
        doc.text(`[   ]  ${field}:`, margin + 9, fieldY + 4.5);
      });

      curY += formBoxHeight + 6;

      // Section 2: 4-Step Order Workflow
      const flowBoxHeight = 42;
      doc.setFillColor(cardBg[0], cardBg[1], cardBg[2]);
      doc.roundedRect(margin, curY, contentWidth, flowBoxHeight, 2, 2, 'F');
      doc.setDrawColor(cardBorder[0], cardBorder[1], cardBorder[2]);
      doc.roundedRect(margin, curY, contentWidth, flowBoxHeight, 2, 2, 'D');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(white[0], white[1], white[2]);
      doc.text('FOUR-STEP LABORATORY SUBMISSION PROCESS', margin + 6, curY + 7);

      const orderSteps = [
        { step: 'STEP 1', title: 'Case Impression', desc: 'Accurate dental cast or digital scan with bite record' },
        { step: 'STEP 2', title: 'Prescription', desc: 'Prescription note with product name and tooth shade' },
        { step: 'STEP 3', title: 'WhatsApp Alert', desc: 'Message Saravana Kumar at 7639664119 for case intake' },
        { step: 'STEP 4', title: 'Lab Delivery', desc: 'Finished restoration packaged with verified QA inspection' },
      ];

      const sWidth = (contentWidth - 12 - 9) / 4;
      orderSteps.forEach((st, stIdx) => {
        const sX = margin + 6 + stIdx * (sWidth + 3);
        const sY = curY + 12;
        doc.setFillColor(darkBg[0], darkBg[1], darkBg[2]);
        doc.roundedRect(sX, sY, sWidth, 25, 1, 1, 'F');
        doc.setDrawColor(cardBorder[0], cardBorder[1], cardBorder[2]);
        doc.roundedRect(sX, sY, sWidth, 25, 1, 1, 'D');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(6.5);
        doc.setTextColor(silver[0], silver[1], silver[2]);
        doc.text(st.step, sX + 3, sY + 5.5);

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.setTextColor(white[0], white[1], white[2]);
        doc.text(st.title, sX + 3, sY + 11);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(5.8);
        doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
        const lines = doc.splitTextToSize(st.desc, sWidth - 6);
        doc.text(lines, sX + 3, sY + 16);
      });

      curY += flowBoxHeight + 6;

      // Section 3: Coordinator Direct Contact Card
      const contactBoxHeight = 58;
      doc.setFillColor(15, 17, 22);
      doc.roundedRect(margin, curY, contentWidth, contactBoxHeight, 2, 2, 'F');
      doc.setDrawColor(silver[0], silver[1], silver[2]);
      doc.setLineWidth(0.4);
      doc.roundedRect(margin, curY, contentWidth, contactBoxHeight, 2, 2, 'D');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(silver[0], silver[1], silver[2]);
      doc.text('DIRECT LABORATORY COORDINATOR', pageWidth / 2, curY + 8, { align: 'center' });

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(16);
      doc.setTextColor(white[0], white[1], white[2]);
      doc.text('Saravana Kumar', pageWidth / 2, curY + 18, { align: 'center' });

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(silver[0], silver[1], silver[2]);
      doc.text('Phone & WhatsApp: 7639664119', pageWidth / 2, curY + 26, { align: 'center' });

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(lightSilver[0], lightSilver[1], lightSilver[2]);
      doc.text('Dental Lab Connect · Dedicated Manufacturing Laboratory for Dental Clinics', pageWidth / 2, curY + 33, { align: 'center' });

      // Clickable Button inside PDF
      const btnW = 70;
      const btnH = 9;
      doc.setFillColor(white[0], white[1], white[2]);
      doc.roundedRect(pageWidth / 2 - btnW / 2, curY + 38, btnW, btnH, 1.5, 1.5, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(darkBg[0], darkBg[1], darkBg[2]);
      doc.text('Click to Enquire on WhatsApp', pageWidth / 2, curY + 44, { align: 'center' });

      doc.link(pageWidth / 2 - btnW / 2, curY + 38, btnW, btnH, {
        url: 'https://wa.me/917639664119?text=Hello%20Saravana%20Kumar%2C%20I%20am%20enquiring%20from%20the%20Dental%20Lab%20Connect%20Product%20List.',
      });

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.5);
      doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
      doc.text('Strictly for Registered Dental Professionals & Clinics · No Patient Direct Services', pageWidth / 2, curY + 53, { align: 'center' });

      continue;
    }

    /* -----------------------------------------------------------------------
       PRODUCT PAGES (PAGES 1-9, 11-14): LIST ALL 224 ITEMS IN 2 COLUMNS
       ----------------------------------------------------------------------- */
    let startY = bannerY + bannerHeight + 4;
    const colWidth = (contentWidth - 4) / 2; // ~91mm each column

    const numItems = pageItems.length;
    const numRows = Math.ceil(numItems / 2);

    // Compute dynamic row height based on number of items on this page
    const availableHeight = pageHeight - startY - 14; // margin before footer
    let rowHeight = Math.floor(availableHeight / numRows) - 1.5;
    if (rowHeight > 24) rowHeight = 24; // cap maximum box height
    if (rowHeight < 13.5) rowHeight = 13.5; // floor minimum box height

    for (let i = 0; i < pageItems.length; i++) {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = margin + col * (colWidth + 4);
      const y = startY + row * (rowHeight + 1.5);

      const item = pageItems[i];
      const itemNumber = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;

      // Card Background & Border
      doc.setFillColor(cardBg[0], cardBg[1], cardBg[2]);
      doc.roundedRect(x, y, colWidth, rowHeight, 1.2, 1.2, 'F');
      doc.setDrawColor(cardBorder[0], cardBorder[1], cardBorder[2]);
      doc.setLineWidth(0.25);
      doc.roundedRect(x, y, colWidth, rowHeight, 1.2, 1.2, 'D');

      // Left Accent Mini-Bar
      doc.setFillColor(silver[0], silver[1], silver[2]);
      doc.rect(x + 1, y + 2.5, 1, rowHeight - 5, 'F');

      // Item Number Indicator
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6.5);
      doc.setTextColor(silver[0], silver[1], silver[2]);
      doc.text(`#${itemNumber}`, x + 3.5, y + 4.8);

      // Product Name (Bold White)
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.2);
      doc.setTextColor(white[0], white[1], white[2]);
      const maxNameWidth = colWidth - 28;
      const splitName = doc.splitTextToSize(item.name, maxNameWidth);
      doc.text(splitName[0] || item.name, x + 10, y + 4.8);

      // Subcategory Tag (Right aligned)
      if (item.subcategory) {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(5.8);
        doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
        const subText = doc.splitTextToSize(item.subcategory, 32);
        doc.text(subText[0] || item.subcategory, x + colWidth - 2.5, y + 4.8, { align: 'right' });
      }

      // Product Description (NO PRICES)
      if (item.description) {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(6);
        doc.setTextColor(lightSilver[0], lightSilver[1], lightSilver[2]);
        const maxDescLines = rowHeight >= 18 ? 3 : 2;
        const splitDesc = doc.splitTextToSize(item.description, colWidth - 7);
        doc.text(splitDesc.slice(0, maxDescLines), x + 3.5, y + 9.5);
      }
    }
  }

  // Trigger browser download with official document name
  doc.save('Dental-Lab-Connect-Product-List.pdf');
}
