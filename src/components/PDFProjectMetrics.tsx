import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PDFProjectMetrics = () => {
  const [selectedCrop, setSelectedCrop] = useState("all");

  const ghgOutcomes = [
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

  // Filter data based on selected crop
  const filteredGhgOutcomes = selectedCrop === "all" 
    ? ghgOutcomes 
    : ghgOutcomes.filter(item => item.crop.toLowerCase() === selectedCrop.toLowerCase());

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

  const fertilizerMgmt = {
    nitrogenEfficiency: {
      'High Efficiency (>0.65)': 30,
      'Medium Efficiency (0.45-0.65)': 45,
      'Low Efficiency (<0.45)': 25,
      average: 0.64
    },
    splitApplication: {
      'Split Application': 47,
      'Single Application': 53
    },
    stabilizerUse: {
      'With Stabilizer': 34,
      'Without Stabilizer': 66
    }
  };

  return (
    <div className="pdf-optimize mb-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="pdf-subtitle text-center border-b-2 border-brand-primary pb-3 text-brand-text font-avenir-medium flex-1">2. Project-Level Metrics</h3>
        
        {/* Crop Filter - Now visible in web view */}
        <div className="flex items-center gap-2 ml-4">
          <span className="text-sm font-avenir-medium text-brand-text">Filter by Crop:</span>
          <Select value={selectedCrop} onValueChange={setSelectedCrop}>
            <SelectTrigger className="w-32 border-brand-grey hover:border-brand-primary font-avenir-book">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white border border-brand-grey shadow-lg z-50">
              <SelectItem value="all" className="font-avenir-book">All Crops</SelectItem>
              <SelectItem value="corn" className="font-avenir-book">Corn</SelectItem>
              <SelectItem value="soybean" className="font-avenir-book">Soybean</SelectItem>
              <SelectItem value="wheat" className="font-avenir-book">Wheat</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* GHG Outcomes */}
      <div className="mb-10">
        <h4 className="font-avenir-medium text-lg mb-4 text-brand-primary border-b border-brand-primary pb-2">GHG Outcomes</h4>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
          <p className="text-sm font-avenir-book mb-2">
            <strong className="text-brand-primary">Net Emission Factor Definition:</strong> Greenhouse gas net emission factor accounting for both emissions and removals, 
            expressed as kg CO2 equivalent per kg of crop yield. This represents the net climate impact of agricultural production.
          </p>
        </div>

        {filteredGhgOutcomes.map((crop, index) => (
          <div key={index} className="mb-8 border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-gray-100 px-4 py-3 border-b border-gray-300">
              <h5 className="font-avenir-medium text-brand-text">{crop.crop} - GHG Metrics</h5>
            </div>
            
            <div className="p-4">
              <div className="grid grid-cols-3 gap-6 mb-4">
                <div className="text-center">
                  <div className="font-avenir-medium text-2xl text-brand-primary mb-1">
                    {crop.netEmissionFactor2024.toFixed(1)}
                  </div>
                  <div className="text-sm font-avenir-book text-gray-600 mb-1">kg CO2eq/kg (2024)</div>
                  <div className="text-xs font-avenir-book text-gray-500">
                    2018: {crop.netEmissionFactor2018.toFixed(1)} kg CO2eq/kg
                  </div>
                  <div className="text-xs font-avenir-medium text-green-600 mt-1">
                    {((crop.netEmissionFactor2024 - crop.netEmissionFactor2018) / crop.netEmissionFactor2018 * 100).toFixed(1)}% change
                  </div>
                  <div className="text-xs font-avenir-book text-gray-600 mt-1">Net Emission Factor</div>
                </div>

                <div className="text-center">
                  <div className="font-avenir-medium text-2xl text-orange-600 mb-1">
                    {crop.emissionFactor2024.toFixed(1)}
                  </div>
                  <div className="text-sm font-avenir-book text-gray-600 mb-1">kg CO2eq/kg (2024)</div>
                  <div className="text-xs font-avenir-book text-gray-500">
                    2018: {crop.emissionFactor2018.toFixed(1)} kg CO2eq/kg
                  </div>
                  <div className="text-xs font-avenir-medium text-green-600 mt-1">
                    {((crop.emissionFactor2024 - crop.emissionFactor2018) / crop.emissionFactor2018 * 100).toFixed(1)}% change
                  </div>
                  <div className="text-xs font-avenir-book text-gray-600 mt-1">Gross Emission Factor</div>
                </div>

                <div className="text-center">
                  <div className="font-avenir-medium text-2xl text-green-600 mb-1">
                    {crop.totalRemoval2024.toLocaleString()}
                  </div>
                  <div className="text-sm font-avenir-book text-gray-600 mb-1">tonnes (2024)</div>
                  <div className="text-xs font-avenir-book text-gray-500">
                    2018: {crop.totalRemoval2018.toLocaleString()} tonnes
                  </div>
                  <div className="text-xs font-avenir-medium text-green-600 mt-1">
                    +{((crop.totalRemoval2024 - crop.totalRemoval2018) / crop.totalRemoval2018 * 100).toFixed(1)}% change
                  </div>
                  <div className="text-xs font-avenir-book text-gray-600 mt-1">Total CO2 Removal</div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-3">
                <h6 className="font-avenir-medium text-sm mb-2 text-gray-700">Source Breakdown (% of total emissions)</h6>
                <div className="grid grid-cols-6 gap-2 text-xs">
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

      {/* Planting & Tillage Practices */}
      <div className="mb-10">
        <h4 className="font-avenir-medium text-lg mb-4 text-brand-primary border-b border-brand-primary pb-2">Planting & Tillage Practices</h4>
        
        <div className="grid grid-cols-3 gap-6">
          {/* Rotation Classification */}
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h5 className="font-avenir-medium mb-3 text-green-800">Rotation Classification</h5>
            <div className="text-center mb-3">
              <div className="font-avenir-medium text-2xl text-green-600">{rotationData.avgCrops2024}</div>
              <div className="text-sm font-avenir-book text-gray-600">avg crops per field (2024)</div>
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
            <div className="mt-2 pt-2 border-t border-green-300 text-xs font-avenir-book text-gray-600">
              *Fallow not counted as crop type
            </div>
          </div>

          {/* Vegetation Cover */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h5 className="font-avenir-medium mb-3 text-blue-800">Days Under Vegetation Cover (2024)</h5>
            <div className="text-center mb-3">
              <div className="font-avenir-medium text-2xl text-blue-600">{vegetationCover.average}</div>
              <div className="text-sm font-avenir-book text-gray-600">average days</div>
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
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <h5 className="font-avenir-medium mb-3 text-orange-800">Tillage Classification (2024)</h5>
            <div className="text-center mb-3">
              <div className="font-avenir-medium text-2xl text-orange-600">68%</div>
              <div className="text-sm font-avenir-book text-gray-600">reduced/no-till</div>
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

      {/* Fertilizer Management */}
      <div className="mb-8">
        <h4 className="font-avenir-medium text-lg mb-4 text-brand-primary border-b border-brand-primary pb-2">Fertilizer Management (2024)</h4>
        
        <div className="grid grid-cols-3 gap-6">
          {/* Nitrogen Use Efficiency */}
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h5 className="font-avenir-medium mb-3 text-purple-800">Nitrogen Use Efficiency</h5>
            <div className="text-center mb-3">
              <div className="font-avenir-medium text-2xl text-purple-600">{fertilizerMgmt.nitrogenEfficiency.average}</div>
              <div className="text-sm font-avenir-book text-gray-600">average ratio</div>
            </div>
            <div className="space-y-1 text-xs">
              {Object.entries(fertilizerMgmt.nitrogenEfficiency).filter(([key]) => key !== 'average').map(([range, percentage]) => (
                <div key={range} className="flex justify-between">
                  <span className="font-avenir-book text-xs">{range}</span>
                  <span className="font-avenir-medium">{percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Split Application */}
          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
            <h5 className="font-avenir-medium mb-3 text-indigo-800">Split Nitrogen Application</h5>
            <div className="text-center mb-3">
              <div className="font-avenir-medium text-2xl text-indigo-600">47%</div>
              <div className="text-sm font-avenir-book text-gray-600">of fields</div>
            </div>
            <div className="space-y-1 text-xs">
              {Object.entries(fertilizerMgmt.splitApplication).map(([type, percentage]) => (
                <div key={type} className="flex justify-between">
                  <span className="font-avenir-book">{type}</span>
                  <span className="font-avenir-medium">{percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stabilizer Use */}
          <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
            <h5 className="font-avenir-medium mb-3 text-teal-800">Nitrogen Stabilizers</h5>
            <div className="text-center mb-3">
              <div className="font-avenir-medium text-2xl text-teal-600">34%</div>
              <div className="text-sm font-avenir-book text-gray-600">of fields</div>
            </div>
            <div className="space-y-1 text-xs">
              {Object.entries(fertilizerMgmt.stabilizerUse).map(([type, percentage]) => (
                <div key={type} className="flex justify-between">
                  <span className="font-avenir-book">{type}</span>
                  <span className="font-avenir-medium">{percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFProjectMetrics;
