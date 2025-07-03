
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import EmissionsMap from "@/components/EmissionsMap";
import CropStatistics from "@/components/CropStatistics";

interface MapAndStatsSectionProps {
  selectedState: string;
  selectedCounty: string;
  selectedYear: string;
}

const MapAndStatsSection = ({ selectedState, selectedCounty, selectedYear }: MapAndStatsSectionProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-96">
      <div className="lg:col-span-2 h-full">
        <Card className="h-full border-brand-grey shadow-lg hover:shadow-xl hover:bg-brand-grey/20 hover:border-brand-primary transition-all duration-300">
          <CardContent className="p-6 h-full">
            <EmissionsMap 
              selectedState={selectedState} 
              selectedCounty={selectedCounty} 
              selectedYear={selectedYear} 
            />
          </CardContent>
        </Card>
      </div>

      <div className="h-full">
        <CropStatistics />
      </div>
    </div>
  );
};

export default MapAndStatsSection;
