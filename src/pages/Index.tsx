
import React from 'react';
import MetricsSection from "@/components/MetricsSection";
import DashboardTabs from "@/components/DashboardTabs";
import ProjectSummaryCard from "@/components/ProjectSummaryCard";
import LogosSection from "@/components/LogosSection";
import CropStatistics from "@/components/CropStatistics";
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

  // Updated to use the new uploaded logos
  const tysonLogo = "/lovable-uploads/465f8949-e376-4c51-be65-f6c5fc5848a0.png";
  const habitarreLogo = "/lovable-uploads/45f07eea-dc05-4677-9da7-2dd0b00bdee4.png";

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
        <div className="max-w-7xl mx-auto p-8 space-y-8">
          <LogosSection 
            tysonLogo={tysonLogo}
            habitarreLogo={habitarreLogo}
            onImageLoad={handleImageLoad}
            onImageError={handleImageError}
          />

          <ProjectSummaryCard />

          <div className="space-y-8">
            <div className="max-w-md mx-auto">
              <CropStatistics />
            </div>
            
            <MetricsSection 
              selectedMetricCategory={selectedMetricCategory}
              selectedCrop={selectedCrop}
              onCategoryChange={setSelectedMetricCategory}
              onCropChange={setSelectedCrop}
            />
          </div>

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
