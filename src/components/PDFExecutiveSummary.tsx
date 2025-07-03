
import React from 'react';

const PDFExecutiveSummary = () => {
  return (
    <div className="pdf-optimize mb-12">
      <h3 className="pdf-subtitle mb-6 text-center border-b-2 border-brand-primary pb-3 text-brand-text font-avenir-medium">Executive Summary</h3>
      
      <div className="pdf-body space-y-6 font-avenir-book">
        <p className="text-justify leading-relaxed text-brand-text">
          This comprehensive agricultural sustainability report analyzes the environmental performance 
          of farming operations across <strong className="text-brand-primary">300,000 acres</strong> and <strong className="text-brand-primary">2,857 fields</strong> from 2018 to 2024. 
          The project demonstrates significant progress in sustainable agricultural practices with measurable 
          improvements in carbon intensity, soil health, and resource efficiency.
        </p>
        
        <div className="grid grid-cols-2 gap-6 my-8 p-4 bg-gray-50 rounded-lg border border-brand-grey">
          <div className="bg-white border-2 border-brand-primary p-4 text-center rounded-lg shadow-sm">
            <div className="text-2xl font-avenir-medium text-brand-primary mb-1">32%</div>
            <div className="text-sm font-avenir-medium text-brand-text">Net GHG Emissions Reduction</div>
          </div>
          <div className="bg-white border-2 border-brand-secondary p-4 text-center rounded-lg shadow-sm">
            <div className="text-2xl font-avenir-medium text-brand-secondary mb-1">64%</div>
            <div className="text-sm font-avenir-medium text-brand-text">Carbon Removal Increase</div>
          </div>
          <div className="bg-white border-2 border-brand-orange p-4 text-center rounded-lg shadow-sm">
            <div className="text-2xl font-avenir-medium text-brand-orange mb-1">94%</div>
            <div className="text-sm font-avenir-medium text-brand-text">Reduced Tillage Adoption</div>
          </div>
          <div className="bg-white border-2 border-purple-500 p-4 text-center rounded-lg shadow-sm">
            <div className="text-2xl font-avenir-medium text-purple-600 mb-1">33%</div>
            <div className="text-sm font-avenir-medium text-brand-text">Nitrogen Use Efficiency</div>
          </div>
        </div>

        <div className="bg-brand-primary/10 p-5 rounded-lg border-l-4 border-brand-primary">
          <p className="text-justify leading-relaxed text-brand-text font-avenir-book">
            <strong className="text-brand-primary font-avenir-medium">Key Achievement:</strong> Substantial adoption of conservation practices, with 68% of fields 
            now utilizing reduced or no-till methods, and significant improvements in crop rotation 
            diversity from 2.1 to 3.4 average crops per rotation cycle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PDFExecutiveSummary;
