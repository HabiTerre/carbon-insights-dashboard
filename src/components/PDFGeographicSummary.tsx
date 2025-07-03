
import React from 'react';

interface PDFGeographicSummaryProps {
  selectedState: string;
  selectedCounty: string;
  selectedYear: string;
}

const PDFGeographicSummary = ({ selectedState, selectedCounty, selectedYear }: PDFGeographicSummaryProps) => {
  return (
    <div className="pdf-optimize mb-8">
      <h3 className="pdf-subtitle mb-4">Geographic Summary</h3>
      
      <div className="pdf-body space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold mb-2">Report Parameters</h4>
            <p><strong>Selected State:</strong> {selectedState === "all" ? "All States" : selectedState}</p>
            <p><strong>Selected County:</strong> {selectedCounty}</p>
            <p><strong>Report Year:</strong> {selectedYear}</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Coverage Area</h4>
            <p><strong>Total Acreage:</strong> 300,000 acres</p>
            <p><strong>Total Fields:</strong> 2,857 fields</p>
            <p><strong>Primary Crops:</strong> Corn, Soybean, Wheat</p>
          </div>
        </div>

        <div className="pdf-chart-placeholder">
          <div className="text-center text-gray-500">
            <p className="font-semibold">Regional Emissions Distribution Map</p>
            <p className="text-sm">Geographic visualization of emission factors by county and state</p>
            <p className="text-xs mt-2">Interactive map available in digital version</p>
          </div>
        </div>

        <div className="text-sm">
          <h4 className="font-bold mb-2">Regional Performance Highlights</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Midwest regions show strongest adoption of no-till practices (72% average)</li>
            <li>Great Plains areas demonstrate highest nitrogen use efficiency improvements</li>
            <li>Southern regions lead in cover crop implementation and vegetation cover days</li>
            <li>Corn Belt territories show most significant carbon sequestration gains</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PDFGeographicSummary;
