
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
import PDFLayout from "@/components/PDFLayout";
import PDFMetricsGrid from "@/components/PDFMetricsGrid";

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

  // Sample metrics data for PDF
  const sampleMetrics = [
    {
      title: "Carbon Intensity",
      current: 2.45,
      baseline: 2.78,
      unit: "kg CO2eq/kg",
      change: -11.9
    },
    {
      title: "N2O Emissions",
      current: 1.23,
      baseline: 1.45,
      unit: "kg N2O/ha",
      change: -15.2
    },
    {
      title: "Soil Carbon",
      current: 45.6,
      baseline: 42.1,
      unit: "tonnes C/ha",
      change: 8.3
    }
  ];

  return (
    <>
      {/* PDF Version - Hidden on screen, shown on print */}
      <div className="hidden print:block">
        <PDFLayout 
          title="Agricultural Sustainability Report" 
          subtitle="Carbon Intensity and Emissions Analysis"
          clientLogo="/lovable-uploads/07613b3b-5276-40e7-bd7d-04f26184407e.png"
          companyLogo="/placeholder.svg"
        >
          <PDFMetricsGrid metrics={sampleMetrics} title="Key Performance Metrics" />
          
          <div className="pdf-optimize mb-8">
            <h3 className="pdf-subtitle mb-4">Project Summary</h3>
            <div className="pdf-body space-y-4">
              <p>This report presents the agricultural sustainability metrics for the selected regions and time period.</p>
              <p>Selected State: {selectedState === "all" ? "All States" : selectedState}</p>
              <p>Selected County: {selectedCounty}</p>
              <p>Report Year: {selectedYear}</p>
            </div>
          </div>
          
          <div className="pdf-chart-placeholder">
            <div className="text-center text-gray-500">
              <p className="font-semibold">Emissions Map Visualization</p>
              <p className="text-sm">Geographic distribution of emission factors</p>
            </div>
          </div>
        </PDFLayout>
      </div>

      {/* Web Version - Hidden on print */}
      <div className="print:hidden min-h-screen bg-white">
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
    </>
  );
};

export default Index;
