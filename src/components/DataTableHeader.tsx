
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, FileText, Eye, EyeOff } from "lucide-react";

interface DataTableHeaderProps {
  showMobileView: boolean;
  onToggleView: () => void;
}

const DataTableHeader = ({ showMobileView, onToggleView }: DataTableHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl border border-[rgb(230,230,230)] shadow-sm">
      <h3 className="text-xl font-bold text-[rgb(55,65,79)]">Field-Level Results</h3>
      <div className="flex flex-wrap gap-2">
        {/* Mobile View Toggle - Always visible */}
        <Button
          variant="outline"
          size="sm"
          onClick={onToggleView}
          className="border-[rgb(140,198,153)] text-[rgb(140,198,153)] hover:bg-[rgb(140,198,153)] hover:text-white transition-colors"
        >
          {showMobileView ? <Eye className="h-4 w-4 mr-2" /> : <EyeOff className="h-4 w-4 mr-2" />}
          {showMobileView ? 'Table View' : 'Card View'}
        </Button>
        
        <Button variant="outline" size="sm" className="border-[rgb(36,146,59)] text-[rgb(36,146,59)] hover:bg-[rgb(36,146,59)] hover:text-white transition-colors">
          <Download className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">Export </span>CSV
        </Button>
        <Button variant="outline" size="sm" className="border-[rgb(249,180,66)] text-[rgb(249,180,66)] hover:bg-[rgb(249,180,66)] hover:text-white transition-colors">
          <FileText className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">PDF </span>Report
        </Button>
      </div>
    </div>
  );
};

export default DataTableHeader;
