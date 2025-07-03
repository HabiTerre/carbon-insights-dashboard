
import React from 'react';

const PDFPracticesAnalysis = () => {
  const practicesData = [
    {
      practice: "Rotation Classification",
      baseline: "2.1 avg crops",
      current: "3.4 avg crops",
      improvement: "+61.9%"
    },
    {
      practice: "Vegetation Cover Days",
      baseline: "198 days",
      current: "267 days", 
      improvement: "+34.8%"
    },
    {
      practice: "Reduced/No-Till Adoption",
      baseline: "35% of fields",
      current: "68% of fields",
      improvement: "+94.3%"
    },
    {
      practice: "Nitrogen Use Efficiency",
      baseline: "0.48 ratio",
      current: "0.64 ratio",
      improvement: "+33.3%"
    },
    {
      practice: "Split N Application",
      baseline: "23% of fields",
      current: "47% of fields",
      improvement: "+104.3%"
    },
    {
      practice: "Stabilizer Use",
      baseline: "12% of fields",
      current: "34% of fields",
      improvement: "+183.3%"
    }
  ];

  return (
    <div className="pdf-optimize mb-8">
      <h3 className="pdf-subtitle mb-4">Management Practices Analysis</h3>
      
      <div className="pdf-body mb-4">
        <p>
          Comprehensive analysis of agricultural management practice adoption rates and effectiveness 
          over the six-year project period, demonstrating significant improvements across all 
          measured sustainability indicators.
        </p>
      </div>

      <table className="pdf-table">
        <thead>
          <tr>
            <th>Practice</th>
            <th>2018 Baseline</th>
            <th>2024 Current</th>
            <th>Improvement</th>
          </tr>
        </thead>
        <tbody>
          {practicesData.map((practice, index) => (
            <tr key={index}>
              <td>{practice.practice}</td>
              <td>{practice.baseline}</td>
              <td>{practice.current}</td>
              <td className="font-bold text-green-600">{practice.improvement}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pdf-body mt-4 text-sm">
        <p>
          <strong>Key Findings:</strong> The most significant improvements were observed in nitrogen 
          stabilizer use (+183.3%) and split application practices (+104.3%), indicating strong 
          farmer adoption of precision nutrient management strategies.
        </p>
      </div>
    </div>
  );
};

export default PDFPracticesAnalysis;
