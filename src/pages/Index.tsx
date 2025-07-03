
import React from 'react';
import DashboardHeader from "@/components/DashboardHeader";
import MetricsSection from "@/components/MetricsSection";
import DashboardTabs from "@/components/DashboardTabs";
import ProjectSummaryCard from "@/components/ProjectSummaryCard";
import LogosSection from "@/components/LogosSection";
import FilterAndExportSection from "@/components/FilterAndExportSection";
import MapAndStatsSection from "@/components/MapAndStatsSection";
import PDFVersion from "@/components/PDFVersion";
import { useDashboardState } from "@/hooks/useDashboardState";
import { useImageHandlers } from "@/hooks/useImageHandlers";

const Index = () => {
  const {
    selectedState,
    selectedCounty,
    selectedYear,
    selectedCrop,
    selectedMetricCategory,
    setSelectedCounty,
    setSelectedYear,
    setSelectedCrop,
    setSelectedMetricCategory,
    handleClearFilters,
    handleStateChange
  } = useDashboardState();

  const { handleImageError, handleImageLoad } = useImageHandlers();

  // Updated logo paths to use the correct uploaded files
  const tysonLogo = "/lovable-uploads/e27bcd22-cb8b-4faa-996d-45e3ea71f61f.png";
  const habitarreLogo = "/lovable-uploads/27678809-5c44-4b89-abbd-16c81a9158d7.png";

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
      <PDFVersion 
        tysonLogo={tysonLogo}
        habitarreLogo={habitarreLogo}
        selectedState={selectedState}
        selectedCounty={selectedCounty}
        selectedYear={selectedYear}
        sampleMetrics={sampleMetrics}
      />

      <div className="print:hidden min-h-screen bg-white">
        <DashboardHeader />

        <div className="max-w-7xl mx-auto p-8 space-y-8">
          <LogosSection 
            tysonLogo={tysonLogo}
            habitarreLogo={habitarreLogo}
            onImageLoad={handleImageLoad}
            onImageError={handleImageError}
          />

          <ProjectSummaryCard />

          <FilterAndExportSection 
            selectedState={selectedState}
            selectedCounty={selectedCounty}
            selectedYear={selectedYear}
            onStateChange={handleStateChange}
            onCountyChange={setSelectedCounty}
            onYearChange={setSelectedYear}
            onClearFilters={handleClearFilters}
          />

          <MapAndStatsSection 
            selectedState={selectedState}
            selectedCounty={selectedCounty}
            selectedYear={selectedYear}
          />

          <MetricsSection 
            selectedMetricCategory={selectedMetricCategory}
            onCategoryChange={setSelectedMetricCategory}
          />

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
