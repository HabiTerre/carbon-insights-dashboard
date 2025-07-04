
import React from 'react';
import PDFGHGOutcomes from './PDFGHGOutcomes';
import PDFPlantingPractices from './PDFPlantingPractices';
import PDFFertilizerManagement from './PDFFertilizerManagement';

const PDFProjectMetrics = () => {
  return (
    <div className="pdf-optimize pdf-section-page mb-12">
      <h3 className="pdf-subtitle text-center border-b-2 border-brand-primary pb-3 text-brand-text font-avenir-medium mb-6">2. Project-Level Metrics</h3>
      
      <PDFGHGOutcomes />
      <PDFPlantingPractices />
      <PDFFertilizerManagement />
    </div>
  );
};

export default PDFProjectMetrics;
