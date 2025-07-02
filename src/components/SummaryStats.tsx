
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

interface SummaryStatsProps {
  data: FieldData[];
}

const SummaryStats = ({ data }: SummaryStatsProps) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-gradient-to-br from-[rgb(140,198,153)]/20 to-[rgb(140,198,153)]/10 p-4 rounded-xl border border-[rgb(140,198,153)]/30 hover:shadow-md transition-shadow">
        <div className="text-2xl lg:text-3xl font-bold text-[rgb(36,146,59)]">{data.length}</div>
        <div className="text-sm text-[rgb(55,65,79)]/80 font-medium">Total Fields</div>
      </div>
      <div className="bg-gradient-to-br from-[rgb(252,217,156)]/20 to-[rgb(252,217,156)]/10 p-4 rounded-xl border border-[rgb(252,217,156)]/30 hover:shadow-md transition-shadow">
        <div className="text-2xl lg:text-3xl font-bold text-[rgb(249,180,66)]">
          {data.reduce((acc, field) => acc + field.acreage, 0).toLocaleString()}
        </div>
        <div className="text-sm text-[rgb(55,65,79)]/80 font-medium">Total Acres</div>
      </div>
      <div className="bg-gradient-to-br from-[rgb(140,198,153)]/20 to-[rgb(140,198,153)]/10 p-4 rounded-xl border border-[rgb(140,198,153)]/30 hover:shadow-md transition-shadow">
        <div className="text-2xl lg:text-3xl font-bold text-[rgb(36,146,59)]">
          {Math.round(data.reduce((acc, field) => acc + field.vegCoverDays, 0) / data.length)}
        </div>
        <div className="text-sm text-[rgb(55,65,79)]/80 font-medium">Avg Veg Cover Days</div>
      </div>
      <div className="bg-gradient-to-br from-[rgb(252,217,156)]/20 to-[rgb(252,217,156)]/10 p-4 rounded-xl border border-[rgb(252,217,156)]/30 hover:shadow-md transition-shadow">
        <div className="text-2xl lg:text-3xl font-bold text-[rgb(249,180,66)]">
          {Math.round(data.filter(f => f.splitApplication === 'Yes').length / data.length * 100)}%
        </div>
        <div className="text-sm text-[rgb(55,65,79)]/80 font-medium">Split N Application</div>
      </div>
    </div>
  );
};

export default SummaryStats;
