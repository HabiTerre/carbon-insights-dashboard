
import React from 'react';

interface GHGOutcome {
  crop: string;
  netEmissionFactor2018: number;
  netEmissionFactor2024: number;
  emissionFactor2018: number;
  emissionFactor2024: number;
  totalRemoval2018: number;
  totalRemoval2024: number;
  sourceBreakdown: {
    [key: string]: number;
  };
}

const PDFGHGOutcomes = () => {
  const ghgOutcomes: GHGOutcome[] = [
    {
      crop: 'Corn',
      netEmissionFactor2018: 2.8,
      netEmissionFactor2024: 1.9,
      emissionFactor2018: 3.4,
      emissionFactor2024: 2.7,
      totalRemoval2018: 14500,
      totalRemoval2024: 23800,
      sourceBreakdown: {
        'Fertilizer': 35, 'Chemical': 18, 'Energy': 15, 'N2O': 12, 'CH4': 8, 'SOC': 12
      }
    },
    {
      crop: 'Soybean',
      netEmissionFactor2018: 2.1,
      netEmissionFactor2024: 1.4,
      emissionFactor2018: 2.6,
      emissionFactor2024: 2.0,
      totalRemoval2018: 8900,
      totalRemoval2024: 14200,
      sourceBreakdown: {
        'Fertilizer': 28, 'Chemical': 22, 'Energy': 18, 'N2O': 15, 'CH4': 10, 'SOC': 7
      }
    },
    {
      crop: 'Wheat',
      netEmissionFactor2018: 3.2,
      netEmissionFactor2024: 2.3,
      emissionFactor2018: 3.8,
      emissionFactor2024: 3.1,
      totalRemoval2018: 6200,
      totalRemoval2024: 9800,
      sourceBreakdown: {
        'Fertilizer': 42, 'Chemical': 20, 'Energy': 16, 'N2O': 10, 'CH4': 7, 'SOC': 5
      }
    }
  ];

  return (
    <div className="mb-8 pdf-section-spacing">
      <h4 className="font-avenir-medium text-lg mb-4 text-brand-primary border-b border-brand-primary pb-2">GHG Outcomes</h4>
      
      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 mb-4 pdf-no-break">
        <p className="text-sm font-avenir-book mb-2">
          <strong className="text-brand-primary">Net Emission Factor Definition:</strong> Greenhouse gas net emission factor accounting for both emissions and removals, 
          expressed as kg CO2 equivalent per kg of crop yield. This represents the net climate impact of agricultural production.
        </p>
      </div>

      {ghgOutcomes.map((crop, index) => (
        <div key={index} className="crop-metrics-card border border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-gray-100 px-4 py-2 border-b border-gray-300">
            <h5 className="font-avenir-medium text-brand-text">{crop.crop} - GHG Metrics</h5>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-3 gap-4 mb-3">
              <div className="text-center">
                <div className="font-avenir-medium text-xl text-brand-primary mb-1">
                  {crop.netEmissionFactor2024.toFixed(1)}
                </div>
                <div className="text-xs font-avenir-book text-gray-600 mb-1">kg CO2eq/kg (2024)</div>
                <div className="text-xs font-avenir-book text-gray-500">
                  2018: {crop.netEmissionFactor2018.toFixed(1)} kg CO2eq/kg
                </div>
                <div className="text-xs font-avenir-medium text-green-600 mt-1">
                  {((crop.netEmissionFactor2024 - crop.netEmissionFactor2018) / crop.netEmissionFactor2018 * 100).toFixed(1)}% change
                </div>
                <div className="text-xs font-avenir-book text-gray-600 mt-1">Net Emission Factor</div>
              </div>

              <div className="text-center">
                <div className="font-avenir-medium text-xl text-orange-600 mb-1">
                  {crop.emissionFactor2024.toFixed(1)}
                </div>
                <div className="text-xs font-avenir-book text-gray-600 mb-1">kg CO2eq/kg (2024)</div>
                <div className="text-xs font-avenir-book text-gray-500">
                  2018: {crop.emissionFactor2018.toFixed(1)} kg CO2eq/kg
                </div>
                <div className="text-xs font-avenir-medium text-green-600 mt-1">
                  {((crop.emissionFactor2024 - crop.emissionFactor2018) / crop.emissionFactor2018 * 100).toFixed(1)}% change
                </div>
                <div className="text-xs font-avenir-book text-gray-600 mt-1">Gross Emission Factor</div>
              </div>

              <div className="text-center">
                <div className="font-avenir-medium text-xl text-green-600 mb-1">
                  {crop.totalRemoval2024.toLocaleString()}
                </div>
                <div className="text-xs font-avenir-book text-gray-600 mb-1">tonnes (2024)</div>
                <div className="text-xs font-avenir-book text-gray-500">
                  2018: {crop.totalRemoval2018.toLocaleString()} tonnes
                </div>
                <div className="text-xs font-avenir-medium text-green-600 mt-1">
                  +{((crop.totalRemoval2024 - crop.totalRemoval2018) / crop.totalRemoval2018 * 100).toFixed(1)}% change
                </div>
                <div className="text-xs font-avenir-book text-gray-600 mt-1">Total CO2 Removal</div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-2">
              <h6 className="font-avenir-medium text-xs mb-2 text-gray-700">Source Breakdown (% of total emissions)</h6>
              <div className="grid grid-cols-6 gap-1 text-xs">
                {Object.entries(crop.sourceBreakdown).map(([source, percentage]) => (
                  <div key={source} className="text-center">
                    <div className="font-avenir-medium text-brand-primary">{percentage}%</div>
                    <div className="font-avenir-book text-gray-600">{source}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PDFGHGOutcomes;
