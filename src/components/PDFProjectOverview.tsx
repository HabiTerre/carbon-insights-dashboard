import React from 'react';

const PDFProjectOverview = () => {
  const fieldsByState = [
    { state: 'Iowa', fields: 856, acreage: 89400 },
    { state: 'Illinois', fields: 742, acreage: 84200 },
    { state: 'Nebraska', fields: 634, acreage: 68100 },
    { state: 'Minnesota', fields: 432, acreage: 41800 },
    { state: 'Kansas', fields: 193, acreage: 16500 }
  ];

  const fieldsByCrop = [
    { crop: 'Corn', fields: 972, acreage: 102000, percentage: 34 },
    { crop: 'Soybean', fields: 914, acreage: 96000, percentage: 32 },
    { crop: 'Wheat', fields: 486, acreage: 51000, percentage: 17 },
    { crop: 'Wheat-Soybean (double crop)', fields: 314, acreage: 33000, percentage: 11 },
    { crop: 'Other', fields: 171, acreage: 18000, percentage: 6 }
  ];

  const emissionChanges = [
    { crop: 'Corn', baseline2018: 2.8, current2024: 1.9, change: -32.1 },
    { crop: 'Soybean', baseline2018: 2.1, current2024: 1.4, change: -33.3 },
    { crop: 'Wheat', baseline2018: 3.2, current2024: 2.3, change: -28.1 }
  ];

  return (
    <div className="pdf-optimize pdf-section-page mb-12">
      <h3 className="pdf-subtitle mb-6 text-center border-b-2 border-brand-primary pb-3 text-brand-text font-avenir-medium">1. Project Overview</h3>
      
      <div className="grid grid-cols-2 gap-6 mb-6 pdf-no-break">
        {/* Total Fields by State */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h4 className="font-avenir-medium mb-3 text-blue-800 border-b border-blue-300 pb-2">Total Fields by State</h4>
          <div className="space-y-2">
            {fieldsByState.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="font-avenir-book text-sm">{item.state}</span>
                <span className="font-avenir-medium text-sm">{item.fields.toLocaleString()} fields</span>
              </div>
            ))}
            <div className="pt-2 border-t border-blue-200 flex justify-between items-center font-avenir-medium">
              <span>Total</span>
              <span>2,857 fields</span>
            </div>
          </div>
        </div>

        {/* Total Acreage by State */}
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h4 className="font-avenir-medium mb-3 text-green-800 border-b border-green-300 pb-2">Total Acreage by State</h4>
          <div className="space-y-2">
            {fieldsByState.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="font-avenir-book text-sm">{item.state}</span>
                <span className="font-avenir-medium text-sm">{item.acreage.toLocaleString()} acres</span>
              </div>
            ))}
            <div className="pt-2 border-t border-green-200 flex justify-between items-center font-avenir-medium">
              <span>Total</span>
              <span>300,000 acres</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fields and Acreage by Crop */}
      <div className="mb-6 pdf-no-break">
        <h4 className="font-avenir-medium mb-3 text-brand-text border-b border-gray-300 pb-2">Distribution by Crop Type</h4>
        <div className="overflow-hidden rounded-lg border border-gray-300">
          <table className="pdf-table w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left font-avenir-medium py-2 px-3 border-b border-gray-300">Crop Type</th>
                <th className="text-center font-avenir-medium py-2 px-3 border-b border-gray-300">Fields</th>
                <th className="text-center font-avenir-medium py-2 px-3 border-b border-gray-300">Acreage</th>
                <th className="text-center font-avenir-medium py-2 px-3 border-b border-gray-300">% of Total</th>
              </tr>
            </thead>
            <tbody>
              {fieldsByCrop.map((crop, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="py-2 px-3 font-avenir-book border-b border-gray-200">{crop.crop}</td>
                  <td className="py-2 px-3 text-center font-avenir-book border-b border-gray-200">{crop.fields.toLocaleString()}</td>
                  <td className="py-2 px-3 text-center font-avenir-book border-b border-gray-200">{crop.acreage.toLocaleString()}</td>
                  <td className="py-2 px-3 text-center font-avenir-medium border-b border-gray-200">{crop.percentage}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Project Duration and Changes */}
      <div className="grid grid-cols-2 gap-6 pdf-no-break">
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h4 className="font-avenir-medium mb-3 text-orange-800 border-b border-orange-300 pb-2">Project Duration</h4>
          <div className="space-y-2 font-avenir-book text-sm">
            <p><strong>Baseline Year:</strong> 2018</p>
            <p><strong>Current Year:</strong> 2024</p>
            <p><strong>Total Duration:</strong> 6 years</p>
            <p><strong>Data Collection:</strong> Continuous monitoring throughout growing seasons</p>
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h4 className="font-avenir-medium mb-3 text-purple-800 border-b border-purple-300 pb-2">Net Emission Factor Changes</h4>
          <div className="space-y-2">
            {emissionChanges.map((crop, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="font-avenir-book text-sm">{crop.crop}</span>
                <span className={`font-avenir-medium text-sm ${crop.change < 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {crop.change > 0 ? '+' : ''}{crop.change.toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFProjectOverview;
