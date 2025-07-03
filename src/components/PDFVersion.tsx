
import React from 'react';
import PDFLayout from "@/components/PDFLayout";
import PDFProjectOverview from "@/components/PDFProjectOverview";
import PDFProjectMetrics from "@/components/PDFProjectMetrics";
import PDFSupplementaryTable from "@/components/PDFSupplementaryTable";

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
        title="Agricultural Sustainability Report - Tyson Project" 
        subtitle="Comprehensive GHG Analysis and Sustainable Practices Assessment (2018-2024)"
        clientLogo={tysonLogo}
        companyLogo={habitarreLogo}
      >
        <PDFProjectOverview />
        <PDFProjectMetrics />
        <PDFSupplementaryTable />
      </PDFLayout>
    </div>
  );
};

export default PDFVersion;
