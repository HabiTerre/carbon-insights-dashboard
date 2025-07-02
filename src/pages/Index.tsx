
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import EmissionsMap from "@/components/EmissionsMap";
import FilterControls from "@/components/FilterControls";
import DashboardHeader from "@/components/DashboardHeader";
import CropStatistics from "@/components/CropStatistics";
import MetricsSection from "@/components/MetricsSection";
import DashboardTabs from "@/components/DashboardTabs";
import ProjectSummaryCard from "@/components/ProjectSummaryCard";

const Index = () => {
  const [selectedState, setSelectedState] = useState("all");
  const [selectedCounty, setSelectedCounty] = useState("All Counties");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedCrop, setSelectedCrop] = useState("all");
  const [selectedMetricCategory, setSelectedMetricCategory] = useState("carbon-intensity");

  const handleClearFilters = () => {
    setSelectedState("all");
    setSelectedCounty("All Counties");
    setSelectedYear("2024");
  };

  const handleStateChange = (value: string) => {
    setSelectedState(value);
    setSelectedCounty("All Counties");
  };

  return (
    <div className="min-h-screen bg-white">
      <DashboardHeader />

      <div className="max-w-7xl mx-auto p-8 space-y-8">
        {/* Project Summary - moved to first position */}
        <ProjectSummaryCard />

        {/* Filter Controls - positioned above map */}
        <Card className="border-brand-grey shadow-lg hover:shadow-xl hover:bg-brand-grey/20 hover:border-brand-primary transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <FilterControls 
                selectedState={selectedState} 
                selectedCounty={selectedCounty} 
                selectedYear={selectedYear} 
                onStateChange={handleStateChange} 
                onCountyChange={setSelectedCounty} 
                onYearChange={setSelectedYear} 
                onClearFilters={handleClearFilters} 
              />
              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-avenir-medium">
                  <Download className="h-4 w-4 mr-2" />
                  EXPORT
                </Button>
                <Button variant="outline" size="sm" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-avenir-medium">
                  <FileText className="h-4 w-4 mr-2" />
                  REPORT
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-96">
          {/* Map Section */}
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

          {/* Crop Statistics */}
          <div className="h-full">
            <CropStatistics />
          </div>
        </div>

        {/* Metrics Section */}
        <MetricsSection 
          selectedMetricCategory={selectedMetricCategory}
          onCategoryChange={setSelectedMetricCategory}
        />

        {/* Dashboard Tabs */}
        <DashboardTabs 
          selectedCrop={selectedCrop}
          onCropChange={setSelectedCrop}
        />
      </div>
    </div>
  );
};

export default Index;
