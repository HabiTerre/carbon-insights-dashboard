
import React from 'react';
import { TableCell, TableRow } from "@/components/ui/table";
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

interface FieldTableRowProps {
  field: FieldData;
  index: number;
}

const FieldTableRow = ({ field, index }: FieldTableRowProps) => {
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
    <TableRow 
      className={`hover:bg-[rgb(230,230,230)]/30 transition-colors ${
        index % 2 === 0 ? 'bg-white' : 'bg-[rgb(230,230,230)]/10'
      }`}
    >
      <TableCell className="font-mono text-sm text-[rgb(55,65,79)] py-4">{field.id}</TableCell>
      <TableCell className="font-medium text-[rgb(55,65,79)]">{field.field}</TableCell>
      <TableCell>
        <Badge variant="secondary" className={getCropBadgeColor(field.crop)}>
          {field.crop}
        </Badge>
      </TableCell>
      <TableCell className="text-right text-[rgb(55,65,79)] font-semibold">{field.acreage.toLocaleString()}</TableCell>
      <TableCell className="text-right font-mono text-[rgb(55,65,79)] text-sm">
        {field.netEmissionFactor} kg CO2eq/kg
      </TableCell>
      <TableCell>
        <Badge variant="outline" className="text-[rgb(55,65,79)] border-[rgb(140,198,153)]">
          {field.rotationClass}
        </Badge>
      </TableCell>
      <TableCell className="text-right font-mono text-[rgb(55,65,79)] font-semibold">
        {field.vegCoverDays}
      </TableCell>
      <TableCell>
        <Badge variant="outline" className={getTillageBadgeColor(field.tillageType)}>
          {field.tillageType}
        </Badge>
      </TableCell>
      <TableCell className="text-right font-mono text-[rgb(55,65,79)] font-semibold">
        {field.nitrogenEfficiency.toFixed(2)}
      </TableCell>
      <TableCell>
        <Badge variant="outline" className={getYesNoBadgeColor(field.splitApplication)}>
          {field.splitApplication}
        </Badge>
      </TableCell>
      <TableCell>
        <Badge variant="outline" className={getYesNoBadgeColor(field.stabilizerUse)}>
          {field.stabilizerUse}
        </Badge>
      </TableCell>
    </TableRow>
  );
};

export default FieldTableRow;
