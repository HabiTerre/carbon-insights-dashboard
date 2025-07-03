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
import PDFExecutiveSummary from "@/components/PDFExecutiveSummary";
import PDFPracticesAnalysis from "@/components/PDFPracticesAnalysis";
import PDFGeographicSummary from "@/components/PDFGeographicSummary";
import PDFDataTable from "@/components/PDFDataTable";
import PDFMethodology from "@/components/PDFMethodology";
import { fieldLevelData } from "@/data/fieldData";

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
      title: "Net Emission Factor",
      current: 1.9,
      baseline: 2.8,
      unit: "kg CO2eq/kg",
      change: -32.1
    },
    {
      title: "Total CO2 Removal",
      current: 23800,
      baseline: 14500,
      unit: "tonnes",
      change: 64.1
    },
    {
      title: "Nitrogen Efficiency",
      current: 0.64,
      baseline: 0.48,
      unit: "ratio",
      change: 33.3
    }
  ];

  return (
    <>
      {/* PDF Version - Hidden on screen, shown on print */}
      <div className="hidden print:block">
        <PDFLayout 
          title="Agricultural Sustainability Report" 
          subtitle="Comprehensive Analysis of Carbon Intensity and Sustainable Practices (2018-2024)"
          clientLogo="/lovable-uploads/07613b3b-5276-40e7-bd7d-04f26184407e.png"
          companyLogo="/placeholder.svg"
        >
          {/* Executive Summary */}
          <PDFExecutiveSummary />
          
          {/* Key Performance Metrics */}
          <PDFMetricsGrid metrics={sampleMetrics} title="Key Performance Indicators" />
          
          {/* Management Practices Analysis */}
          <PDFPracticesAnalysis />
          
          {/* Geographic Summary */}
          <PDFGeographicSummary 
            selectedState={selectedState}
            selectedCounty={selectedCounty}
            selectedYear={selectedYear}
          />
          
          {/* Methodology & Notes */}
          <PDFMethodology />
        </PDFLayout>
      </div>

      {/* Web Version - Hidden on print */}
      <div className="print:hidden min-h-screen bg-white">
        <DashboardHeader />

        <div className="max-w-7xl mx-auto p-8 space-y-8">
          {/* Project Summary with logos visible on web */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4 p-4 bg-gray-50 rounded-lg border border-brand-grey">
              <div className="flex items-center space-x-4">
                <img 
                  src="/lovable-uploads/07613b3b-5276-40e7-bd7d-04f26184407e.png" 
                  alt="Tyson Foods Logo" 
                  className="h-12 w-auto object-contain border border-brand-grey rounded-md p-2 bg-white"
                />
                <div>
                  <p className="text-sm font-avenir-medium text-brand-text">Client</p>
                  <p className="text-xs text-gray-600 font-avenir-book">Tyson Foods</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-xs text-gray-600 font-avenir-book">Powered by</p>
                  <p className="text-sm font-avenir-medium text-brand-primary">HabiTerre</p>
                </div>
                <img 
                  src="/placeholder.svg" 
                  alt="HabiTerre Logo" 
                  className="h-12 w-auto object-contain border border-brand-grey rounded-md p-2 bg-white"
                />
              </div>
            </div>
          </div>

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
