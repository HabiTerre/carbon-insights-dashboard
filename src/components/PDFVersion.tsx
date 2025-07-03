
import React from 'react';
import PDFLayout from "@/components/PDFLayout";
import PDFMetricsGrid from "@/components/PDFMetricsGrid";
import PDFExecutiveSummary from "@/components/PDFExecutiveSummary";
import PDFPracticesAnalysis from "@/components/PDFPracticesAnalysis";
import PDFGeographicSummary from "@/components/PDFGeographicSummary";
import PDFMethodology from "@/components/PDFMethodology";

interface PDFVersionProps {
  tysonLogo: string;
  habitarreLogo: string;
  selectedState: string;
  selectedCounty: string;
  selectedYear: string;
  sampleMetrics: Array<{
    title: string;
    current: number;
    baseline: number;
    unit: string;
    change: number;
  }>;
}

const PDFVersion = ({ 
  tysonLogo, 
  habitarreLogo, 
  selectedState, 
  selectedCounty, 
  selectedYear, 
  sampleMetrics 
}: PDFVersionProps) => {
  return (
    <div className="hidden print:block">
      <PDFLayout 
        title="Agricultural Sustainability Report" 
        subtitle="Comprehensive Analysis of Carbon Intensity and Sustainable Practices (2018-2024)"
        clientLogo={tysonLogo}
        companyLogo={habitarreLogo}
      >
        <PDFExecutiveSummary />
        <PDFMetricsGrid metrics={sampleMetrics} title="Key Performance Indicators" />
        <PDFPracticesAnalysis />
        <PDFGeographicSummary 
          selectedState={selectedState}
          selectedCounty={selectedCounty}
          selectedYear={selectedYear}
        />
        <PDFMethodology />
      </PDFLayout>
    </div>
  );
};

export default PDFVersion;
