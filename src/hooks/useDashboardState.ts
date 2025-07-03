
import { useState } from 'react';

export const useDashboardState = () => {
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

  return {
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
  };
};
