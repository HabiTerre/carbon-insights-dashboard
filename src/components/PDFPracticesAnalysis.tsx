
import React from 'react';

const PDFPracticesAnalysis = () => {
  const practicesData = [
    {
      practice: "Rotation Classification",
      baseline: "2.1 avg crops",
      current: "3.4 avg crops",
      improvement: "+61.9%",
      color: "text-green-600"
    },
    {
      practice: "Vegetation Cover Days",
      baseline: "198 days",
      current: "267 days",
      improvement: "+34.8%",
      color: "text-blue-600"
    },
    {
      practice: "Reduced/No-Till Adoption",
      baseline: "35% of fields",
      current: "68% of fields",
      improvement: "+94.3%",
      color: "text-green-600"
    },
    {
      practice: "Nitrogen Use Efficiency",
      baseline: "0.48 ratio",
      current: "0.64 ratio",
      improvement: "+33.3%",
      color: "text-orange-600"
    },
    {
      practice: "Split N Application",
      baseline: "23% of fields",
      current: "47% of fields",
      improvement: "+104.3%",
      color: "text-purple-600"
    },
    {
      practice: "Stabilizer Use",
      baseline: "12% of fields",
      current: "34% of fields",
      improvement: "+183.3%",
      color: "text-red-600"
    }
  ];

  return (
    <div className="pdf-optimize mb-12">
      <h3 className="pdf-subtitle mb-6 text-center border-b-2 border-gray-300 pb-3">Management Practices Analysis</h3>
      
      <div className="pdf-body mb-6">
        <p className="text-justify leading-relaxed">
          Comprehensive analysis of agricultural management practice adoption rates and effectiveness 
          over the six-year project period, demonstrating significant improvements across all 
          measured sustainability indicators.
        </p>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-300">
        <table className="pdf-table w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left font-bold py-3 px-4 border-b border-gray-300">Practice</th>
              <th className="text-center font-bold py-3 px-4 border-b border-gray-300">2018 Baseline</th>
              <th className="text-center font-bold py-3 px-4 border-b border-gray-300">2024 Current</th>
              <th className="text-center font-bold py-3 px-4 border-b border-gray-300">Improvement</th>
            </tr>
          </thead>
          <tbody>
            {practicesData.map((practice, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="py-3 px-4 font-medium border-b border-gray-200">{practice.practice}</td>
                <td className="py-3 px-4 text-center border-b border-gray-200">{practice.baseline}</td>
                <td className="py-3 px-4 text-center border-b border-gray-200">{practice.current}</td>
                <td className={`py-3 px-4 text-center font-bold border-b border-gray-200 ${practice.color}`}>
                  {practice.improvement}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500 mt-6">
        <p className="text-sm leading-relaxed">
          <strong>Key Findings:</strong> The most significant improvements were observed in nitrogen 
          stabilizer use (+183.3%) and split application practices (+104.3%), indicating strong 
          farmer adoption of precision nutrient management strategies.
        </p>
      </div>
    </div>
  );
};

export default PDFPracticesAnalysis;
