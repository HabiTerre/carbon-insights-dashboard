
import React from 'react';
import { Badge } from "@/components/ui/badge";

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

interface MobileFieldCardProps {
  field: FieldData;
}

const MobileFieldCard = ({ field }: MobileFieldCardProps) => {
  const getCropBadgeColor = (crop: string) => {
    switch (crop.toLowerCase()) {
      case 'corn':
        return 'bg-[rgb(252,217,156)] text-[rgb(55,65,79)]';
      case 'soybean':
        return 'bg-[rgb(140,198,153)] text-[rgb(55,65,79)]';
      case 'wheat':
        return 'bg-[rgb(249,180,66)] text-white';
      default:
        return 'bg-[rgb(230,230,230)] text-[rgb(55,65,79)]';
    }
  };

  const getTillageBadgeColor = (tillage: string) => {
    switch (tillage.toLowerCase()) {
      case 'no-till':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'reduced':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'intensive':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getYesNoBadgeColor = (value: string) => {
    return value.toLowerCase() === 'yes' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' : 'bg-gray-100 text-gray-700 border-gray-200';
  };

  return (
    <div className="bg-white border border-[rgb(230,230,230)] rounded-xl p-5 mb-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-[rgb(55,65,79)] text-lg truncate">{field.field}</h4>
          <p className="text-sm text-[rgb(55,65,79)]/60 font-mono mt-1">{field.id}</p>
        </div>
        <Badge variant="secondary" className={`${getCropBadgeColor(field.crop)} ml-3 flex-shrink-0`}>
          {field.crop}
        </Badge>
      </div>
      
      <div className="space-y-4">
        {/* Key Metrics Row */}
        <div className="grid grid-cols-2 gap-4 p-3 bg-[rgb(230,230,230)]/20 rounded-lg">
          <div>
            <span className="text-xs text-[rgb(55,65,79)]/60 uppercase tracking-wide">Acreage</span>
            <p className="font-bold text-[rgb(55,65,79)] text-lg">{field.acreage.toLocaleString()}</p>
          </div>
          <div>
            <span className="text-xs text-[rgb(55,65,79)]/60 uppercase tracking-wide">Net Emission</span>
            <p className="font-bold text-[rgb(55,65,79)] font-mono text-sm">{field.netEmissionFactor} kg CO2eq/kg</p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 gap-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-[rgb(55,65,79)]/70">Rotation Class:</span>
            <Badge variant="outline" className="text-[rgb(55,65,79)] border-[rgb(140,198,153)]">
              {field.rotationClass}
            </Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-[rgb(55,65,79)]/70">Veg Cover Days:</span>
            <span className="font-semibold text-[rgb(55,65,79)]">{field.vegCoverDays}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-[rgb(55,65,79)]/70">Tillage Type:</span>
            <Badge variant="outline" className={getTillageBadgeColor(field.tillageType)}>
              {field.tillageType}
            </Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-[rgb(55,65,79)]/70">N Efficiency:</span>
            <span className="font-semibold text-[rgb(55,65,79)]">{field.nitrogenEfficiency.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-[rgb(55,65,79)]/70">Split N Application:</span>
            <Badge variant="outline" className={getYesNoBadgeColor(field.splitApplication)}>
              {field.splitApplication}
            </Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-[rgb(55,65,79)]/70">Stabilizer Use:</span>
            <Badge variant="outline" className={getYesNoBadgeColor(field.stabilizerUse)}>
              {field.stabilizerUse}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFieldCard;
