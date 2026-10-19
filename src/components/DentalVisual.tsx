import React from 'react';
import { RealisticDentalImage } from './RealisticDentalImage';

export type DentalVisualType =
  | 'hero'
  | 'crown-bridge'
  | 'denture'
  | 'aligner'
  | 'hyrax'
  | 'splint'
  | 'attachment'
  | 'coping'
  | 'lab-tech'
  | 'ceramic';

interface DentalVisualProps {
  type: DentalVisualType;
  className?: string;
  badge?: string;
}

export const DentalVisual: React.FC<DentalVisualProps> = ({ type, className = '', badge }) => {
  // Map legacy visual type to specific realistic dental category or image type
  const typeMapping: Record<DentalVisualType, { category?: string; imgType?: 'hero' | 'about' }> = {
    hero: { imgType: 'hero' },
    'crown-bridge': { category: 'Crown and Bridge — Screw Retained' },
    denture: { category: 'Acrylic Injection Dentures (Bredent Germany)' },
    aligner: { category: 'Clear Aligners' },
    hyrax: { category: 'Hyrax Expanders' },
    splint: { category: 'Suction Splints' },
    attachment: { category: 'Precision Attachments' },
    coping: { category: 'Primary Copings' },
    'lab-tech': { imgType: 'about' },
    ceramic: { category: 'CAD/CAM Ceramic' },
  };

  const config = typeMapping[type] || { category: 'CAD/CAM Ceramic' };

  return (
    <RealisticDentalImage
      category={config.category}
      type={config.imgType}
      className={className}
      badge={badge}
    />
  );
};
