import { MapPin } from "lucide-react";
import MapMetricSelector from "./MapMetricSelector";
import { useState } from "react";

interface RegionMetrics {
  emissions: number;
  totalEmissions: number;
  carbonRemovals: number;
  nitrogenEfficiency: number;
  tillage: number;
  rotation: number;
  vegetationCover: number;
}

interface Region {
  id: number;
  name: string;
  x: string;
  y: string;
  size: string;
  metrics: RegionMetrics;
  state: string;
  county: string;
}

interface Field {
  id: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  metrics: RegionMetrics;
  state: string;
  county: string;
}

interface EmissionsMapProps {
  selectedState?: string;
  selectedCounty?: string;
  selectedYear?: string;
}

const EmissionsMap = ({
  selectedState = "all",
  selectedCounty = "All Counties",
  selectedYear = "2024"
}: EmissionsMapProps) => {
  const [selectedMetric, setSelectedMetric] = useState("emissions");

  // Check if two rectangles overlap
  const isOverlapping = (field1: Field, field2: Field) => {
    return !(field1.x + field1.width < field2.x || field2.x + field2.width < field1.x || field1.y + field1.height < field2.y || field2.y + field2.height < field1.y);
  };

  // Generate field data with realistic agricultural boundaries (no overlaps)
  const generateFields = (): Field[] => {
    const fields: Field[] = [];
    const numFields = selectedState === "all" ? 25 : 35;
    const maxAttempts = 100; // Maximum attempts to place a field

    // Create a more diverse set of metrics for fields
    const metricVariations = [{
      emissions: 1.2,
      totalEmissions: 2.1,
      carbonRemovals: 2.8,
      nitrogenEfficiency: 0.82,
      tillage: 85,
      rotation: 4.2,
      vegetationCover: 285
    }, {
      emissions: 1.6,
      totalEmissions: 2.9,
      carbonRemovals: 2.3,
      nitrogenEfficiency: 0.75,
      tillage: 72,
      rotation: 3.8,
      vegetationCover: 267
    }, {
      emissions: 2.1,
      totalEmissions: 3.4,
      carbonRemovals: 1.9,
      nitrogenEfficiency: 0.68,
      tillage: 58,
      rotation: 3.2,
      vegetationCover: 198
    }, {
      emissions: 2.5,
      totalEmissions: 4.1,
      carbonRemovals: 1.4,
      nitrogenEfficiency: 0.52,
      tillage: 35,
      rotation: 2.4,
      vegetationCover: 156
    }, {
      emissions: 1.8,
      totalEmissions: 3.1,
      carbonRemovals: 2.1,
      nitrogenEfficiency: 0.71,
      tillage: 65,
      rotation: 3.5,
      vegetationCover: 241
    }, {
      emissions: 2.3,
      totalEmissions: 3.8,
      carbonRemovals: 1.7,
      nitrogenEfficiency: 0.59,
      tillage: 48,
      rotation: 2.8,
      vegetationCover: 189
    }];
    for (let i = 0; i < numFields; i++) {
      let field: Field;
      let attempts = 0;
      let validPosition = false;
      do {
        const x = 15 + Math.random() * 60;
        const y = 25 + Math.random() * 40;
        const width = 3 + Math.random() * 8;
        const height = 2 + Math.random() * 6;
        const metricIndex = Math.floor(Math.random() * metricVariations.length);
        field = {
          id: `field-${i}`,
          name: `Field ${i + 1}`,
          x,
          y,
          width,
          height,
          metrics: metricVariations[metricIndex],
          state: selectedState === "all" ? ["iowa", "illinois", "nebraska"][i % 3] : selectedState,
          county: selectedCounty === "All Counties" ? "Sample County" : selectedCounty
        };

        // Check if this field overlaps with any existing field
        validPosition = !fields.some(existingField => isOverlapping(field, existingField));
        attempts++;
      } while (!validPosition && attempts < maxAttempts);

      // Only add the field if we found a valid position
      if (validPosition) {
        fields.push(field);
      }
    }
    return fields;
  };
  const [fields] = useState(() => generateFields());

  // Filter fields based on selected filters
  const filteredFields = fields.filter(field => {
    if (selectedState !== "all" && field.state !== selectedState) return false;
    if (selectedCounty !== "All Counties" && field.county !== selectedCounty) return false;
    return true;
  });
  const getMetricValue = (field: Field) => {
    return field.metrics[selectedMetric as keyof RegionMetrics];
  };
  const getMetricUnit = () => {
    switch (selectedMetric) {
      case "emissions":
        return "kg CO2eq/kg";
      case "totalEmissions":
        return "M tonnes CO2eq";
      case "carbonRemovals":
        return "M tonnes removed";
      case "nitrogenEfficiency":
        return "efficiency ratio";
      case "tillage":
        return "% reduced/no-till";
      case "rotation":
        return "avg crops";
      case "vegetationCover":
        return "days";
      default:
        return "";
    }
  };
  const getColorForMetric = (value: number) => {
    // Color logic based on metric type and value ranges
    switch (selectedMetric) {
      case "emissions":
        if (value >= 2.2) return "#F9B442"; // Orange for high emissions
        if (value >= 1.8) return "#8CC699"; // Soft green for medium
        return "#24923B"; // Primary green for low emissions
      case "totalEmissions":
        if (value >= 4.0) return "#F9B442";
        if (value >= 3.5) return "#8CC699";
        return "#24923B";
      case "carbonRemovals":
        if (value >= 2.2) return "#24923B"; // Primary green for high removal
        if (value >= 1.8) return "#8CC699"; // Soft green for medium
        return "#37414F"; // Grey for low removal
      case "nitrogenEfficiency":
        if (value >= 0.7) return "#24923B";
        if (value >= 0.6) return "#8CC699";
        return "#37414F";
      case "tillage":
        if (value >= 65) return "#24923B";
        if (value >= 50) return "#8CC699";
        return "#37414F";
      case "rotation":
        if (value >= 3.2) return "#24923B";
        if (value >= 2.5) return "#8CC699";
        return "#37414F";
      case "vegetationCover":
        if (value >= 240) return "#24923B"; // Primary green for high cover days
        if (value >= 180) return "#8CC699"; // Soft green for medium
        return "#37414F"; // Grey for low cover days
      default:
        return "#24923B";
    }
  };

  // Generate realistic map boundaries based on selected state
  const getMapBoundaries = () => {
    if (selectedState === "all") {
      return "M15 25 L25 20 L75 20 L85 25 L85 30 L80 35 L85 45 L85 55 L80 60 L75 65 L70 70 L25 70 L20 65 L15 60 L10 55 L10 45 L15 35 L10 30 Z";
    }
    switch (selectedState) {
      case "iowa":
        return "M20 30 L80 30 L80 35 L75 40 L80 50 L80 60 L75 65 L20 65 L15 60 L15 50 L20 40 L15 35 Z";
      case "illinois":
        return "M25 25 L35 25 L40 30 L45 35 L50 40 L50 70 L45 75 L25 75 L20 70 L20 40 L25 35 Z";
      case "indiana":
        return "M30 30 L50 30 L55 35 L55 70 L50 75 L30 75 L25 70 L25 35 Z";
      case "nebraska":
        return "M15 35 L70 35 L70 40 L65 45 L70 55 L70 60 L65 65 L15 65 L10 60 L10 40 Z";
      case "kansas":
        return "M20 45 L75 45 L75 50 L70 55 L75 65 L75 70 L70 75 L20 75 L15 70 L15 50 Z";
      case "missouri":
        return "M25 45 L70 45 L75 50 L70 55 L75 60 L75 70 L70 75 L25 75 L20 70 L20 55 L25 50 Z";
      default:
        return "M20 30 L80 30 L80 70 L20 70 Z";
    }
  };

  // Create a legend for the color scale
  const getLegendItems = () => {
    switch (selectedMetric) {
      case "emissions":
      case "totalEmissions":
        return [{
          color: "#24923B",
          label: "Low",
          range: selectedMetric === "emissions" ? "< 1.8" : "< 3.5"
        }, {
          color: "#8CC699",
          label: "Medium",
          range: selectedMetric === "emissions" ? "1.8-2.2" : "3.5-4.0"
        }, {
          color: "#F9B442",
          label: "High",
          range: selectedMetric === "emissions" ? "> 2.2" : "> 4.0"
        }];
      case "vegetationCover":
        return [{
          color: "#37414F",
          label: "Low",
          range: "< 180 days"
        }, {
          color: "#8CC699",
          label: "Good",
          range: "180-240 days"
        }, {
          color: "#24923B",
          label: "Excellent",
          range: "> 240 days"
        }];
      case "carbonRemovals":
      case "nitrogenEfficiency":
      case "tillage":
      case "rotation":
        return [{
          color: "#37414F",
          label: "Low",
          range: "Lower performance"
        }, {
          color: "#8CC699",
          label: "Good",
          range: "Good performance"
        }, {
          color: "#24923B",
          label: "Excellent",
          range: "High performance"
        }];
      default:
        return [];
    }
  };
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-white via-brand-grey/20 to-[#8CC699]/10 rounded-lg overflow-hidden">
      {/* Map Metric Selector */}
      <MapMetricSelector selectedMetric={selectedMetric} onMetricChange={setSelectedMetric} />

      {/* Map Background with Field Boundaries */}
      <div className="absolute inset-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Map boundary */}
          <path d={getMapBoundaries()} fill="rgba(36, 146, 59, 0.05)" stroke="rgba(36, 146, 59, 0.2)" strokeWidth="0.5" className="drop-shadow-sm" />
          
          {/* Agricultural Field Boundaries with Metric Colors */}
          {filteredFields.map(field => {
            const metricValue = getMetricValue(field);
            const color = getColorForMetric(metricValue);
            return (
              <g key={field.id}>
                <rect x={field.x} y={field.y} width={field.width} height={field.height} fill={color} fillOpacity={0.7} stroke="white" strokeWidth="0.3" rx="0.5" className="cursor-pointer hover:fill-opacity-90 transition-all duration-200" />
                <rect x={field.x} y={field.y} width={field.width} height={field.height} fill="none" stroke={color} strokeWidth="0.2" strokeOpacity={0.8} rx="0.5" />
              </g>
            );
          })}
          
          {/* Roads/infrastructure */}
          <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(55, 65, 79, 0.3)" strokeWidth="0.5" />
          <line x1="50" y1="20" x2="50" y2="80" stroke="rgba(55, 65, 79, 0.3)" strokeWidth="0.5" />
          <line x1="30" y1="25" x2="30" y2="75" stroke="rgba(55, 65, 79, 0.2)" strokeWidth="0.3" />
          <line x1="70" y1="25" x2="70" y2="75" stroke="rgba(55, 65, 79, 0.2)" strokeWidth="0.3" />
          
          {/* County boundaries (if specific county selected) */}
          {selectedCounty !== "All Counties" && <rect x="25" y="35" width="50" height="30" fill="none" stroke="rgba(36, 146, 59, 0.4)" strokeWidth="1" strokeDasharray="2,2" rx="2" />}
        </svg>

        {/* Interactive Tooltips */}
        {filteredFields.map(field => {
          const metricValue = getMetricValue(field);
          return (
            <div key={`tooltip-${field.id}`} className="absolute group cursor-pointer" style={{
              left: `${field.x + field.width / 2}%`,
              top: `${field.y + field.height / 2}%`,
              transform: 'translate(-50%, -50%)'
            }}>
              <div className="w-2 h-2 opacity-0 group-hover:opacity-100"></div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                <div className="bg-brand-text text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                  <div className="font-avenir-medium">{field.name}</div>
                  <div className="font-avenir-book">{metricValue} {getMetricUnit()}</div>
                  <div className="text-xs opacity-75 font-avenir-book">{field.county} County</div>
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                  <div className="border-4 border-transparent border-t-brand-text"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-brand-grey text-xs max-w-48">
        <div className="font-avenir-medium text-brand-text mb-2">
          {selectedState === "all" ? "Midwest Region" : selectedState.charAt(0).toUpperCase() + selectedState.slice(1)}
        </div>
        <div className="space-y-1 mb-3">
          {getLegendItems().map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-3 h-2 rounded-sm border border-white" style={{backgroundColor: item.color}}></div>
              <span className="text-brand-text/70 text-xs font-avenir-book">
                {item.label} ({item.range})
              </span>
            </div>
          ))}
        </div>
        <div className="border-t border-brand-grey pt-2 space-y-1">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-0.5 bg-brand-text/60 rounded"></div>
            <span className="text-brand-text/70 font-avenir-book">Infrastructure</span>
          </div>
          {selectedCounty !== "All Counties" && (
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 border border-[#24923B] border-dashed"></div>
              <span className="text-brand-text/70 font-avenir-book">{selectedCounty} County</span>
            </div>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-brand-grey">
        <div className="text-lg font-avenir-black text-brand-text">300K</div>
        <div className="text-sm text-brand-text/70 font-avenir-medium">Total acres</div>
        <div className="text-xs text-brand-text/60 mt-1 font-avenir-book">{filteredFields.length} fields shown</div>
        {selectedState !== "all" && (
          <div className="text-xs text-[#24923B] mt-1 font-avenir-medium">
            {selectedState.charAt(0).toUpperCase() + selectedState.slice(1)} focus
          </div>
        )}
      </div>
    </div>
  );
};

export default EmissionsMap;
