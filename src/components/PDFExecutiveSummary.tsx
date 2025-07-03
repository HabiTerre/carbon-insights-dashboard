
import React from 'react';

const PDFExecutiveSummary = () => {
  return (
    <div className="pdf-optimize mb-8">
      <h3 className="pdf-subtitle mb-4">Executive Summary</h3>
      
      <div className="pdf-body space-y-4">
        <p>
          This comprehensive agricultural sustainability report analyzes the environmental performance 
          of farming operations across 300,000 acres and 2,857 fields from 2018 to 2024. The project 
          demonstrates significant progress in sustainable agricultural practices with measurable 
          improvements in carbon intensity, soil health, and resource efficiency.
        </p>
        
        <div className="grid grid-cols-2 gap-4 my-6">
          <div className="border border-gray-300 p-3 text-center">
            <div className="text-lg font-bold">32% Reduction</div>
            <div className="text-sm">Net GHG Emissions</div>
          </div>
          <div className="border border-gray-300 p-3 text-center">
            <div className="text-lg font-bold">64% Increase</div>
            <div className="text-sm">Carbon Removal</div>
          </div>
          <div className="border border-gray-300 p-3 text-center">
            <div className="text-lg font-bold">94% Improvement</div>
            <div className="text-sm">Reduced Tillage Adoption</div>
          </div>
          <div className="border border-gray-300 p-3 text-center">
            <div className="text-lg font-bold">33% Increase</div>
            <div className="text-sm">Nitrogen Use Efficiency</div>
          </div>
        </div>

        <p>
          Key achievements include substantial adoption of conservation practices, with 68% of fields 
          now utilizing reduced or no-till methods, and significant improvements in crop rotation 
          diversity from 2.1 to 3.4 average crops per rotation cycle.
        </p>
      </div>
    </div>
  );
};

export default PDFExecutiveSummary;
