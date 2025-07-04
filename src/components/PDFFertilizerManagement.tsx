
import React from 'react';

const PDFFertilizerManagement = () => {
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
    <div className="pdf-section-spacing mt-6">
      <h4 className="font-avenir-medium text-lg mb-4 text-brand-primary border-b border-brand-primary pb-2">Fertilizer Management (2024)</h4>
      
      <div className="practices-grid grid-cols-3 gap-4">
        {/* Nitrogen Use Efficiency */}
        <div className="bg-purple-50 p-3 rounded-lg border border-purple-200 pdf-no-break">
          <h5 className="font-avenir-medium mb-2 text-purple-800">Nitrogen Use Efficiency</h5>
          <div className="text-center mb-2">
            <div className="font-avenir-medium text-xl text-purple-600">{fertilizerMgmt.nitrogenEfficiency.average}</div>
            <div className="text-xs font-avenir-book text-gray-600">average ratio</div>
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
        <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-200 pdf-no-break">
          <h5 className="font-avenir-medium mb-2 text-indigo-800">Split Nitrogen Application</h5>
          <div className="text-center mb-2">
            <div className="font-avenir-medium text-xl text-indigo-600">47%</div>
            <div className="text-xs font-avenir-book text-gray-600">of fields</div>
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
        <div className="bg-teal-50 p-3 rounded-lg border border-teal-200 pdf-no-break">
          <h5 className="font-avenir-medium mb-2 text-teal-800">Nitrogen Stabilizers</h5>
          <div className="text-center mb-2">
            <div className="font-avenir-medium text-xl text-teal-600">34%</div>
            <div className="text-xs font-avenir-book text-gray-600">of fields</div>
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
  );
};

export default PDFFertilizerManagement;
