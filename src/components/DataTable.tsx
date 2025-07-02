import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";
import SummaryStats from "./SummaryStats";
import MobileFieldCard from "./MobileFieldCard";
import DataTableHeader from "./DataTableHeader";
import FieldTableRow from "./FieldTableRow";
import PDFDataTable from "./PDFDataTable";

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

interface DataTableProps {
  data: FieldData[];
}

const DataTable = ({ data }: DataTableProps) => {
  const [showMobileView, setShowMobileView] = useState(window.innerWidth < 768);

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <SummaryStats data={data} />

      {/* PDF Version - Hidden on screen, shown on print */}
      <div className="hidden print:block">
        <PDFDataTable data={data} />
      </div>

      {/* Web Version - Hidden on print */}
      <div className="print:hidden">
        {/* Header with Export Options and View Toggle */}
        <DataTableHeader 
          showMobileView={showMobileView}
          onToggleView={() => setShowMobileView(!showMobileView)}
        />

        {/* Mobile Card View */}
        {showMobileView && (
          <div className="space-y-4">
            {data.map(field => (
              <MobileFieldCard key={field.id} field={field} />
            ))}
          </div>
        )}

        {/* Desktop Table View */}
        {!showMobileView && (
          <div className="bg-white rounded-xl border border-[rgb(230,230,230)] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow className="bg-[rgb(230,230,230)]/40 hover:bg-[rgb(230,230,230)]/40">
                    <TableHead className="text-[rgb(55,65,79)] font-semibold min-w-[100px] h-12">Field ID</TableHead>
                    <TableHead className="text-[rgb(55,65,79)] font-semibold min-w-[140px]">Field Name</TableHead>
                    <TableHead className="text-[rgb(55,65,79)] font-semibold min-w-[90px]">Crop</TableHead>
                    <TableHead className="text-right text-[rgb(55,65,79)] font-semibold min-w-[90px]">Acreage</TableHead>
                    <TableHead className="text-right text-[rgb(55,65,79)] font-semibold min-w-[160px]">Net Emission</TableHead>
                    <TableHead className="text-[rgb(55,65,79)] font-semibold min-w-[110px]">Rotation</TableHead>
                    <TableHead className="text-right text-[rgb(55,65,79)] font-semibold min-w-[120px]">Veg Cover</TableHead>
                    <TableHead className="text-[rgb(55,65,79)] font-semibold min-w-[90px]">Tillage</TableHead>
                    <TableHead className="text-right text-[rgb(55,65,79)] font-semibold min-w-[110px]">N Efficiency</TableHead>
                    <TableHead className="text-[rgb(55,65,79)] font-semibold min-w-[90px]">Split N</TableHead>
                    <TableHead className="text-[rgb(55,65,79)] font-semibold min-w-[90px]">Stabilizer</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((field, index) => (
                    <FieldTableRow key={field.id} field={field} index={index} />
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataTable;
