
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import FilterControls from "@/components/FilterControls";

interface FilterAndExportSectionProps {
  selectedState: string;
  selectedCounty: string;
  selectedYear: string;
  onStateChange: (value: string) => void;
  onCountyChange: (value: string) => void;
  onYearChange: (value: string) => void;
  onClearFilters: () => void;
}

const FilterAndExportSection = ({
  selectedState,
  selectedCounty,
  selectedYear,
  onStateChange,
  onCountyChange,
  onYearChange,
  onClearFilters
}: FilterAndExportSectionProps) => {
  return (
    <Card className="border-brand-grey shadow-lg hover:shadow-xl hover:bg-brand-grey/20 hover:border-brand-primary transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <FilterControls 
            selectedState={selectedState} 
            selectedCounty={selectedCounty} 
            selectedYear={selectedYear} 
            onStateChange={onStateChange} 
            onCountyChange={onCountyChange} 
            onYearChange={onYearChange} 
            onClearFilters={onClearFilters} 
          />
          <div className="flex space-x-3">
            <Button variant="outline" size="sm" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-avenir-medium">
              <Download className="h-4 w-4 mr-2" />
              EXPORT
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-avenir-medium"
              onClick={() => window.print()}
            >
              <FileText className="h-4 w-4 mr-2" />
              REPORT
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FilterAndExportSection;
