
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface MapMetricSelectorProps {
  selectedMetric: string;
  onMetricChange: (value: string) => void;
}

const MapMetricSelector = ({ selectedMetric, onMetricChange }: MapMetricSelectorProps) => {
  const metrics = [
    { value: "emissions", label: "Net Emission Factor" },
    { value: "totalEmissions", label: "Total Emissions" },
    { value: "carbonRemovals", label: "Carbon Removals" },
    { value: "nitrogenEfficiency", label: "Nitrogen Use Efficiency" },
    { value: "tillage", label: "Tillage Classification" },
    { value: "rotation", label: "Rotation Classification" },
    { value: "vegetationCover", label: "Days Under Vegetation Cover" }
  ];

  return (
    <div className="absolute top-4 left-4 z-10">
      <div className="bg-white rounded-lg p-2 shadow-lg border border-gray-200">
        <div className="text-xs font-semibold mb-2 text-slate-700">Map Metric</div>
        <Select value={selectedMetric} onValueChange={onMetricChange}>
          <SelectTrigger className="w-48 h-8 text-xs border-gray-200">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
            {metrics.map((metric) => (
              <SelectItem key={metric.value} value={metric.value} className="text-xs">
                {metric.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default MapMetricSelector;
