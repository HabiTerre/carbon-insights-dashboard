
import React from 'react';

const PDFMethodology = () => {
  return (
    <div className="pdf-optimize mb-8">
      <h3 className="pdf-subtitle mb-4">Methodology & Data Sources</h3>
      
      <div className="pdf-body space-y-4">
        <div>
          <h4 className="font-bold mb-2">Data Collection Period</h4>
          <p>
            This report analyzes agricultural sustainability metrics over a six-year period from 
            2018 (baseline year) through 2024 (current reporting year). Data collection occurred 
            continuously throughout growing seasons with annual comprehensive assessments.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-2">Calculation Methodologies</h4>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>Carbon Intensity:</strong> Calculated using IPCC guidelines for agricultural emissions</li>
            <li><strong>Soil Carbon:</strong> Measured through soil sampling and modeling using COMET-Planner</li>
            <li><strong>N2O Emissions:</strong> Quantified using EPA emission factors and field-specific data</li>
            <li><strong>Nitrogen Efficiency:</strong> Ratio of nitrogen uptake to nitrogen applied</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Data Quality Assurance</h4>
          <p className="text-sm">
            All data underwent rigorous quality control processes including field verification, 
            cross-referencing with farm management records, and statistical validation. 
            Uncertainty ranges are within ±5% for emission factors and ±3% for practice adoption rates.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-2">Standards & Certifications</h4>
          <p className="text-sm">
            Methodologies align with Verified Carbon Standard (VCS), Climate Action Reserve (CAR), 
            and USDA Natural Resources Conservation Service (NRCS) guidelines for agricultural 
            carbon accounting and sustainability measurement.
          </p>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-300">
        <p className="text-xs text-gray-600 text-center">
          Report generated on {new Date().toLocaleDateString()} | 
          For questions regarding methodology, contact sustainability@company.com
        </p>
      </div>
    </div>
  );
};

export default PDFMethodology;
