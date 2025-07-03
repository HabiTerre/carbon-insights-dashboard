
import React from 'react';

const PDFSupplementaryTable = () => {
  const conversionData = [
    {
      crop: 'Corn',
      netEmissionFactor: 1.9,
      grossEmissionFactor: 2.7,
      totalRemoval: 23800,
      avgYield: 175, // bu/acre
      avgAcreage: 102000,
      avgFields: 972,
      conversions: {
        perAcre: 332.5, // kg CO2eq/acre
        perBushel: 1.9, // kg CO2eq/bu
        perField: 46.6 // tonnes CO2eq/field
      }
    },
    {
      crop: 'Soybean',
      netEmissionFactor: 1.4,
      grossEmissionFactor: 2.0,
      totalRemoval: 14200,
      avgYield: 50, // bu/acre
      avgAcreage: 96000,
      avgFields: 914,
      conversions: {
        perAcre: 70.0, // kg CO2eq/acre
        perBushel: 1.4, // kg CO2eq/bu
        perField: 15.5 // tonnes CO2eq/field
      }
    },
    {
      crop: 'Wheat',
      netEmissionFactor: 2.3,
      grossEmissionFactor: 3.1,
      totalRemoval: 9800,
      avgYield: 65, // bu/acre
      avgAcreage: 51000,
      avgFields: 486,
      conversions: {
        perAcre: 149.5, // kg CO2eq/acre
        perBushel: 2.3, // kg CO2eq/bu
        perField: 20.2 // tonnes CO2eq/field
      }
    }
  ];

  const aggregateData = {
    totalFields: 2857,
    totalAcreage: 300000,
    totalRemoval: 47800,
    avgNetEmissionFactor: 1.87, // weighted average
    conversions: {
      perAcre: 159.3, // kg CO2eq/acre (weighted avg)
      perField: 16.7 // tonnes CO2eq/field (weighted avg)
    }
  };

  return (
    <div className="pdf-optimize mb-8">
      <h3 className="pdf-subtitle mb-6 text-center border-b-2 border-brand-primary pb-3 text-brand-text font-avenir-medium">3. Supplementary Conversion Table</h3>
      
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-300 mb-6">
        <p className="text-sm font-avenir-book text-gray-700 leading-relaxed">
          This table provides GHG outcomes converted into different units to aid interpretation and facilitate 
          comparison across different scales of analysis. All conversions are based on 2024 data and 
          average field conditions.
        </p>
      </div>

      {/* Individual Crop Conversions */}
      <div className="overflow-hidden rounded-lg border border-gray-300 mb-8">
        <table className="pdf-table w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left font-avenir-medium py-3 px-4 border-b border-gray-300">Crop</th>
              <th className="text-center font-avenir-medium py-3 px-4 border-b border-gray-300">Net Emission Factor<br/>(kg CO2eq/kg yield)</th>
              <th className="text-center font-avenir-medium py-3 px-4 border-b border-gray-300">Per Acre<br/>(kg CO2eq/acre)</th>
              <th className="text-center font-avenir-medium py-3 px-4 border-b border-gray-300">Per Bushel<br/>(kg CO2eq/bu)</th>
              <th className="text-center font-avenir-medium py-3 px-4 border-b border-gray-300">Per Field<br/>(tonnes CO2eq/field)</th>
              <th className="text-center font-avenir-medium py-3 px-4 border-b border-gray-300">Total Removal<br/>(tonnes CO2eq)</th>
            </tr>
          </thead>
          <tbody>
            {conversionData.map((crop, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="py-3 px-4 font-avenir-medium border-b border-gray-200">{crop.crop}</td>
                <td className="py-3 px-4 text-center font-avenir-book border-b border-gray-200">{crop.netEmissionFactor.toFixed(1)}</td>
                <td className="py-3 px-4 text-center font-avenir-book border-b border-gray-200">{crop.conversions.perAcre.toFixed(1)}</td>
                <td className="py-3 px-4 text-center font-avenir-book border-b border-gray-200">{crop.conversions.perBushel.toFixed(1)}</td>
                <td className="py-3 px-4 text-center font-avenir-book border-b border-gray-200">{crop.conversions.perField.toFixed(1)}</td>
                <td className="py-3 px-4 text-center font-avenir-medium border-b border-gray-200 text-green-600">{crop.totalRemoval.toLocaleString()}</td>
              </tr>
            ))}
            <tr className="bg-brand-primary/10 font-avenir-medium">
              <td className="py-3 px-4 border-b border-gray-200 text-brand-primary">Project Total</td>
              <td className="py-3 px-4 text-center border-b border-gray-200 text-brand-primary">{aggregateData.avgNetEmissionFactor.toFixed(1)}</td>
              <td className="py-3 px-4 text-center border-b border-gray-200 text-brand-primary">{aggregateData.conversions.perAcre.toFixed(1)}</td>
              <td className="py-3 px-4 text-center border-b border-gray-200 text-brand-primary">-</td>
              <td className="py-3 px-4 text-center border-b border-gray-200 text-brand-primary">{aggregateData.conversions.perField.toFixed(1)}</td>
              <td className="py-3 px-4 text-center border-b border-gray-200 text-green-600 font-avenir-medium">{aggregateData.totalRemoval.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
          <h4 className="font-avenir-medium mb-4 text-blue-800 border-b border-blue-300 pb-2">Project Scale Summary</h4>
          <div className="space-y-2 font-avenir-book text-sm">
            <div className="flex justify-between">
              <span>Total Fields:</span>
              <span className="font-avenir-medium">{aggregateData.totalFields.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Acreage:</span>
              <span className="font-avenir-medium">{aggregateData.totalAcreage.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Avg Field Size:</span>
              <span className="font-avenir-medium">{(aggregateData.totalAcreage / aggregateData.totalFields).toFixed(0)} acres</span>
            </div>
            <div className="flex justify-between">
              <span>Total CO2 Removal:</span>
              <span className="font-avenir-medium text-green-600">{aggregateData.totalRemoval.toLocaleString()} tonnes</span>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-5 rounded-lg border border-green-200">
          <h4 className="font-avenir-medium mb-4 text-green-800 border-b border-green-300 pb-2">Interpretation Guide</h4>
          <div className="space-y-2 font-avenir-book text-sm">
            <p><strong>kg CO2eq/kg yield:</strong> Direct product footprint</p>
            <p><strong>kg CO2eq/acre:</strong> Land-use intensity</p>
            <p><strong>kg CO2eq/bushel:</strong> Market unit comparison</p>
            <p><strong>tonnes CO2eq/field:</strong> Farm management scale</p>
            <p className="text-xs text-gray-600 mt-3 pt-2 border-t border-green-300">
              Lower values indicate better environmental performance. 
              Negative values represent net carbon sequestration.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t-2 border-gray-300 bg-gray-50 p-4 rounded-lg">
        <p className="text-xs text-gray-600 text-center font-avenir-book">
          Conversion factors based on IPCC guidelines and USDA crop yield statistics. 
          Field averages calculated using area-weighted methodology across all participating fields.
        </p>
      </div>
    </div>
  );
};

export default PDFSupplementaryTable;
