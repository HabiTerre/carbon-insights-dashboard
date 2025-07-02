
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface FilterControlsProps {
  selectedState: string;
  selectedCounty: string;
  selectedYear: string;
  onStateChange: (value: string) => void;
  onCountyChange: (value: string) => void;
  onYearChange: (value: string) => void;
  onClearFilters: () => void;
}

const FilterControls = ({
  selectedState,
  selectedCounty,
  selectedYear,
  onStateChange,
  onCountyChange,
  onYearChange,
  onClearFilters
}: FilterControlsProps) => {
  const states = [
    { value: "all", label: "All States" },
    { value: "iowa", label: "Iowa" },
    { value: "illinois", label: "Illinois" },
    { value: "indiana", label: "Indiana" },
    { value: "nebraska", label: "Nebraska" },
    { value: "kansas", label: "Kansas" },
    { value: "missouri", label: "Missouri" }
  ];

  const getCountiesByState = (state: string) => {
    const counties = {
      iowa: ["All Counties", "Polk", "Linn", "Scott", "Johnson", "Black Hawk"],
      illinois: ["All Counties", "Cook", "DuPage", "Lake", "Will", "Kane"],
      indiana: ["All Counties", "Marion", "Lake", "Allen", "Hamilton", "St. Joseph"],
      nebraska: ["All Counties", "Douglas", "Lancaster", "Sarpy", "Hall", "Buffalo"],
      kansas: ["All Counties", "Johnson", "Sedgwick", "Shawnee", "Wyandotte", "Saline"],
      missouri: ["All Counties", "St. Louis", "Jackson", "St. Charles", "Jefferson", "Clay"]
    };
    return state === "all" ? ["All Counties"] : counties[state as keyof typeof counties] || ["All Counties"];
  };

  const cropYears = [
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
    { value: "2019", label: "2019" },
    { value: "2018", label: "2018" }
  ];

  const hasActiveFilters = selectedState !== "all" || selectedCounty !== "All Counties" || selectedYear !== "2024";

  return (
    <div className="flex flex-wrap gap-4 items-center">
      <div className="flex items-center space-x-3">
        <span className="text-sm font-avenir-medium text-brand-text">Filter by</span>
        <Select value={selectedState} onValueChange={onStateChange}>
          <SelectTrigger className="w-32 border-brand-grey hover:border-brand-primary font-avenir-book">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-white border border-brand-grey shadow-lg z-50">
            {states.map((state) => (
              <SelectItem key={state.value} value={state.value} className="font-avenir-book">
                {state.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <Select value={selectedCounty} onValueChange={onCountyChange}>
          <SelectTrigger className="w-36 border-brand-grey hover:border-brand-primary font-avenir-book">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-white border border-brand-grey shadow-lg z-50">
            {getCountiesByState(selectedState).map((county) => (
              <SelectItem key={county} value={county} className="font-avenir-book">
                {county}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <Select value={selectedYear} onValueChange={onYearChange}>
          <SelectTrigger className="w-24 border-brand-grey hover:border-brand-primary font-avenir-book">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-white border border-brand-grey shadow-lg z-50">
            {cropYears.map((year) => (
              <SelectItem key={year.value} value={year.value} className="font-avenir-book">
                {year.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {hasActiveFilters && (
        <Button
          variant="outline"
          size="sm"
          onClick={onClearFilters}
          className="border-brand-grey text-brand-text hover:bg-brand-grey/20 hover:border-brand-primary font-avenir-medium transition-all duration-300"
        >
          <X className="h-4 w-4 mr-1" />
          CLEAR FILTERS
        </Button>
      )}
    </div>
  );
};

export default FilterControls;
