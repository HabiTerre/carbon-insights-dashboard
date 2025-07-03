
import React from 'react';

interface PDFGeographicSummaryProps {
  selectedState: string;
  selectedCounty: string;
  selectedYear: string;
}

const PDFGeographicSummary = ({ selectedState, selectedCounty, selectedYear }: PDFGeographicSummaryProps) => {
  return (
    <div className="pdf-optimize mb-12">
      <h3 className="pdf-subtitle mb-6 text-center border-b-2 border-gray-300 pb-3">Geographic Summary</h3>
      
      <div className="pdf-body space-y-6">
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
            <h4 className="font-bold mb-4 text-blue-800 border-b border-blue-300 pb-2">Report Parameters</h4>
            <div className="space-y-2">
              <p><strong>Selected State:</strong> {selectedState === "all" ? "All States" : selectedState}</p>
              <p><strong>Selected County:</strong> {selectedCounty}</p>
              <p><strong>Report Year:</strong> {selectedYear}</p>
            </div>
          </div>
          <div className="bg-green-50 p-5 rounded-lg border border-green-200">
            <h4 className="font-bold mb-4 text-green-800 border-b border-green-300 pb-2">Coverage Area</h4>
            <div className="space-y-2">
              <p><strong>Total Acreage:</strong> 300,000 acres</p>
              <p><strong>Total Fields:</strong> 2,857 fields</p>
              <p><strong>Primary Crops:</strong> Corn, Soybean, Wheat</p>
            </div>
          </div>
        </div>

        <div className="pdf-chart-placeholder bg-gradient-to-r from-blue-50 to-green-50 border-2 border-dashed border-gray-400 rounded-lg">
          <div className="text-center text-gray-700 p-8">
            <div className="mb-3">
              <div className="inline-block p-3 bg-white rounded-full shadow-sm mb-2">
                🗺️
              </div>
            </div>
            <p className="font-semibold text-lg mb-2">Regional Emissions Distribution Map</p>
            <p className="text-sm mb-1">Geographic visualization of emission factors by county and state</p>
            <p className="text-xs text-gray-500">Interactive map available in digital version</p>
          </div>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h4 className="font-bold mb-4 text-gray-800 border-b border-gray-300 pb-2">Regional Performance Highlights</h4>
          <div className="grid grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Midwest regions show strongest adoption of no-till practices (72% average)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Great Plains areas demonstrate highest nitrogen use efficiency improvements</span>
              </li>
            </ul>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Southern regions lead in cover crop implementation and vegetation cover days</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Corn Belt territories show most significant carbon sequestration gains</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFGeographicSummary;
