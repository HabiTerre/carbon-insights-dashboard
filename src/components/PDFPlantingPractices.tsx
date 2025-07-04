
import React from 'react';

const PDFPlantingPractices = () => {
  const rotationData = {
    avgCrops2018: 2.1,
    avgCrops2024: 3.4,
    distribution: {
      '2-crop': 35,
      '3-crop': 40,
      '4+ crop': 25
    },
    fallowCounted: false
  };

  const vegetationCover = {
    distribution: {
      '<180 days': 15,
      '180-240 days': 25,
      '>240 days': 60
    },
    average: 267
  };

  const tillageData = {
    'No-Till': 42,
    'Reduced': 26,
    'Intensive': 32
  };

  return (
    <div className="pdf-page-break">
      <h4 className="font-avenir-medium text-lg mb-4 text-brand-primary border-b border-brand-primary pb-2">Planting & Tillage Practices</h4>
      
      <div className="practices-grid grid-cols-3 gap-4">
        {/* Rotation Classification */}
        <div className="bg-green-50 p-3 rounded-lg border border-green-200 pdf-no-break">
          <h5 className="font-avenir-medium mb-2 text-green-800">Rotation Classification</h5>
          <div className="text-center mb-2">
            <div className="font-avenir-medium text-xl text-green-600">{rotationData.avgCrops2024}</div>
            <div className="text-xs font-avenir-book text-gray-600">avg crops per field (2024)</div>
            <div className="text-xs font-avenir-book text-gray-500">2018: {rotationData.avgCrops2018} avg crops</div>
          </div>
          <div className="space-y-1 text-xs">
            {Object.entries(rotationData.distribution).map(([type, percentage]) => (
              <div key={type} className="flex justify-between">
                <span className="font-avenir-book">{type}</span>
                <span className="font-avenir-medium">{percentage}%</span>
              </div>
            ))}
          </div>
          <div className="mt-2 pt-1 border-t border-green-300 text-xs font-avenir-book text-gray-600">
            *Fallow not counted as crop type
          </div>
        </div>

        {/* Vegetation Cover */}
        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 pdf-no-break">
          <h5 className="font-avenir-medium mb-2 text-blue-800">Days Under Vegetation Cover (2024)</h5>
          <div className="text-center mb-2">
            <div className="font-avenir-medium text-xl text-blue-600">{vegetationCover.average}</div>
            <div className="text-xs font-avenir-book text-gray-600">average days</div>
          </div>
          <div className="space-y-1 text-xs">
            {Object.entries(vegetationCover.distribution).map(([range, percentage]) => (
              <div key={range} className="flex justify-between">
                <span className="font-avenir-book">{range}</span>
                <span className="font-avenir-medium">{percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tillage Classification */}
        <div className="bg-orange-50 p-3 rounded-lg border border-orange-200 pdf-no-break">
          <h5 className="font-avenir-medium mb-2 text-orange-800">Tillage Classification (2024)</h5>
          <div className="text-center mb-2">
            <div className="font-avenir-medium text-xl text-orange-600">68%</div>
            <div className="text-xs font-avenir-book text-gray-600">reduced/no-till</div>
          </div>
          <div className="space-y-1 text-xs">
            {Object.entries(tillageData).map(([type, percentage]) => (
              <div key={type} className="flex justify-between">
                <span className="font-avenir-book">{type}</span>
                <span className="font-avenir-medium">{percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFPlantingPractices;
