import React from 'react';
import { HowWeWorkSection } from './HowWeWorkSection';
import { AppTheme } from '../types';

interface LabWorkflowSectionProps {
  onEnquire?: () => void;
  onExploreProducts?: () => void;
  theme?: AppTheme;
}

export const LabWorkflowSection: React.FC<LabWorkflowSectionProps> = (props) => {
  return <HowWeWorkSection {...props} />;
};

export { HowWeWorkSection };
