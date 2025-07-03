
import React from 'react';

const PDFExecutiveSummary = () => {
  return (
    <div className="pdf-optimize mb-12">
      <h3 className="pdf-subtitle mb-6 text-center border-b-2 border-gray-300 pb-3">Executive Summary</h3>
      
      <div className="pdf-body space-y-6">
        <p className="text-justify leading-relaxed">
          This comprehensive agricultural sustainability report analyzes the environmental performance 
          of farming operations across <strong>300,000 acres</strong> and <strong>2,857 fields</strong> from 2018 to 2024. 
          The project demonstrates significant progress in sustainable agricultural practices with measurable 
          improvements in carbon intensity, soil health, and resource efficiency.
        </p>
        
        <div className="grid grid-cols-2 gap-6 my-8 p-4 bg-gray-50 rounded-lg">
          <div className="bg-white border-2 border-green-500 p-4 text-center rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-green-600 mb-1">32%</div>
            <div className="text-sm font-semibold text-gray-700">Net GHG Emissions Reduction</div>
          </div>
          <div className="bg-white border-2 border-blue-500 p-4 text-center rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-1">64%</div>
            <div className="text-sm font-semibold text-gray-700">Carbon Removal Increase</div>
          </div>
          <div className="bg-white border-2 border-orange-500 p-4 text-center rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-orange-600 mb-1">94%</div>
            <div className="text-sm font-semibold text-gray-700">Reduced Tillage Adoption</div>
          </div>
          <div className="bg-white border-2 border-purple-500 p-4 text-center rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-purple-600 mb-1">33%</div>
            <div className="text-sm font-semibold text-gray-700">Nitrogen Use Efficiency</div>
          </div>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
          <p className="text-justify leading-relaxed">
            <strong>Key Achievement:</strong> Substantial adoption of conservation practices, with 68% of fields 
            now utilizing reduced or no-till methods, and significant improvements in crop rotation 
            diversity from 2.1 to 3.4 average crops per rotation cycle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PDFExecutiveSummary;
