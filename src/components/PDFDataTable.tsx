
import React from 'react';

interface FieldData {
  id: string;
  field: string;
  crop: string;
  acreage: number;
  netEmissionFactor: number;
  rotationClass: string;
  vegCoverDays: number;
  tillageType: string;
  nitrogenEfficiency: number;
  splitApplication: string;
  stabilizerUse: string;
}

interface PDFDataTableProps {
  data: FieldData[];
  title?: string;
}

const PDFDataTable = ({ data, title = "Field-Level Results" }: PDFDataTableProps) => {
  return (
    <div className="pdf-optimize mb-8">
      <h3 className="pdf-subtitle mb-4">{title}</h3>
      
      {/* Static table - no interactive elements */}
      <table className="pdf-table">
        <thead>
          <tr>
            <th>Field ID</th>
            <th>Field Name</th>
            <th>Crop</th>
            <th>Acreage</th>
            <th>Net Emission</th>
            <th>Rotation</th>
            <th>Veg Cover</th>
            <th>Tillage</th>
            <th>N Efficiency</th>
            <th>Split N</th>
            <th>Stabilizer</th>
          </tr>
        </thead>
        <tbody>
          {data.map((field) => (
            <tr key={field.id}>
              <td>{field.id}</td>
              <td>{field.field}</td>
              <td>{field.crop}</td>
              <td>{field.acreage.toFixed(1)}</td>
              <td>{field.netEmissionFactor.toFixed(2)}</td>
              <td>{field.rotationClass}</td>
              <td>{field.vegCoverDays}</td>
              <td>{field.tillageType}</td>
              <td>{field.nitrogenEfficiency.toFixed(1)}%</td>
              <td>{field.splitApplication}</td>
              <td>{field.stabilizerUse}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Static summary - no dynamic calculations */}
      <div className="mt-4 text-sm text-gray-600">
        Total Fields: {data.length} | 
        Total Acreage: {data.reduce((sum, field) => sum + field.acreage, 0).toFixed(1)} acres
      </div>
    </div>
  );
};

export default PDFDataTable;
