
import React from 'react';

const PDFMethodology = () => {
  return (
    <div className="pdf-optimize mb-8">
      <h3 className="pdf-subtitle mb-6 text-center border-b-2 border-gray-300 pb-3">Methodology & Data Sources</h3>
      
      <div className="pdf-body space-y-6">
        <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-bold mb-3 text-blue-800">Data Collection Period</h4>
          <p className="text-sm leading-relaxed">
            This report analyzes agricultural sustainability metrics over a six-year period from 
            2018 (baseline year) through 2024 (current reporting year). Data collection occurred 
            continuously throughout growing seasons with annual comprehensive assessments.
          </p>
        </div>

        <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
          <h4 className="font-bold mb-3 text-green-800">Calculation Methodologies</h4>
          <div className="grid grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm">
              <li><strong>Carbon Intensity:</strong> IPCC guidelines for agricultural emissions</li>
              <li><strong>Soil Carbon:</strong> COMET-Planner modeling with soil sampling</li>
            </ul>
            <ul className="space-y-2 text-sm">
              <li><strong>N2O Emissions:</strong> EPA emission factors with field-specific data</li>
              <li><strong>Nitrogen Efficiency:</strong> Uptake to application ratio</li>
            </ul>
          </div>
        </div>

        <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
          <h4 className="font-bold mb-3 text-orange-800">Data Quality Assurance</h4>
          <p className="text-sm leading-relaxed">
            All data underwent rigorous quality control processes including field verification, 
            cross-referencing with farm management records, and statistical validation. 
            Uncertainty ranges are within ±5% for emission factors and ±3% for practice adoption rates.
          </p>
        </div>

        <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
          <h4 className="font-bold mb-3 text-purple-800">Standards & Certifications</h4>
          <p className="text-sm leading-relaxed">
            Methodologies align with Verified Carbon Standard (VCS), Climate Action Reserve (CAR), 
            and USDA Natural Resources Conservation Service (NRCS) guidelines for agricultural 
            carbon accounting and sustainability measurement.
          </p>
        </div>
      </div>
      
      <div className="mt-8 pt-4 border-t-2 border-gray-300 bg-gray-50 p-4 rounded-lg">
        <p className="text-xs text-gray-600 text-center">
          Report generated on {new Date().toLocaleDateString()} | 
          For questions regarding methodology, contact sustainability@company.com
        </p>
      </div>
    </div>
  );
};

export default PDFMethodology;
