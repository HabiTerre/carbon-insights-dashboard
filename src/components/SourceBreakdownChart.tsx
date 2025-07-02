import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from 'react';

interface SourceBreakdownChartProps {
  selectedCrop?: string;
  onCropChange?: (crop: string) => void;
}

const SourceBreakdownChart = ({ selectedCrop = "all", onCropChange }: SourceBreakdownChartProps) => {
  console.log('SourceBreakdownChart rendering');
  
  const [localSelectedCrop, setLocalSelectedCrop] = useState(selectedCrop);

  const handleCropChange = (value: string) => {
    setLocalSelectedCrop(value);
    onCropChange?.(value);
  };

  const cropOptions = [
    { value: "all", label: "All Crops" },
    { value: "corn", label: "Corn" },
    { value: "soybean", label: "Soybean" },
    { value: "wheat", label: "Wheat" },
    { value: "cotton", label: "Cotton" }
  ];

  const emissionsData = [
    {
      year: '2018',
      Fertilizer: 2.8,
      Chemical: 1.4,
      'Energy Consumption': 1.2,
      N2O: 0.9,
      CH4: 0.6,
      SOC: 0.8
    },
    {
      year: '2019',
      Fertilizer: 2.6,
      Chemical: 1.3,
      'Energy Consumption': 1.1,
      N2O: 0.85,
      CH4: 0.55,
      SOC: 0.75
    },
    {
      year: '2020',
      Fertilizer: 2.4,
      Chemical: 1.2,
      'Energy Consumption': 1.0,
      N2O: 0.8,
      CH4: 0.5,
      SOC: 0.7
    },
    {
      year: '2021',
      Fertilizer: 2.2,
      Chemical: 1.1,
      'Energy Consumption': 0.95,
      N2O: 0.75,
      CH4: 0.45,
      SOC: 0.65
    },
    {
      year: '2022',
      Fertilizer: 2.0,
      Chemical: 1.0,
      'Energy Consumption': 0.9,
      N2O: 0.7,
      CH4: 0.42,
      SOC: 0.6
    },
    {
      year: '2023',
      Fertilizer: 1.95,
      Chemical: 0.95,
      'Energy Consumption': 0.85,
      N2O: 0.68,
      CH4: 0.4,
      SOC: 0.58
    },
    {
      year: '2024',
      Fertilizer: 1.9,
      Chemical: 0.9,
      'Energy Consumption': 0.8,
      N2O: 0.65,
      CH4: 0.38,
      SOC: 0.55
    }
  ];

  const sourceColors = {
    Fertilizer: '#24923B',
    Chemical: '#8CC699',
    'Energy Consumption': '#F9B442',
    N2O: '#37414F',
    CH4: '#E6E6E6',
    SOC: '#24923B'
  };

  const customTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-brand-grey rounded-lg shadow-md">
          <p className="font-avenir-medium text-brand-text mb-2">{`Year: ${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm font-avenir-book">
              {`${entry.dataKey}: ${entry.value.toFixed(2)} kg CO2eq/kg`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="border-brand-grey shadow-lg hover:shadow-xl hover:bg-brand-grey/20 hover:border-brand-primary transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-white to-brand-grey/30">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-brand-text text-xl font-avenir-medium">Emissions by Source Over Time</CardTitle>
            <p className="text-sm text-brand-text/70 font-avenir-book">
              Stacked bar chart showing emission source contributions over time
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-brand-text font-avenir-medium">Filter by crop type:</span>
            <Select value={localSelectedCrop} onValueChange={handleCropChange}>
              <SelectTrigger className="w-32 border-brand-grey hover:border-brand-primary font-avenir-book">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white border border-brand-grey shadow-lg">
                {cropOptions.map((crop) => (
                  <SelectItem key={crop.value} value={crop.value} className="font-avenir-book hover:bg-brand-grey/30">
                    {crop.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={emissionsData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E6E6E6" />
              <XAxis 
                dataKey="year" 
                stroke="#37414F"
                fontSize={12}
              />
              <YAxis 
                stroke="#37414F"
                fontSize={12}
                label={{ value: 'kg CO2eq/kg', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip content={customTooltip} />
              <Legend />
              {Object.entries(sourceColors).map(([source, color]) => (
                <Bar
                  key={source}
                  dataKey={source}
                  stackId="emissions"
                  fill={color}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="text-sm text-brand-text/70 font-avenir-book mt-4">
          <p>
            Stacked bar chart showing the contribution of each emission source over time.
            {localSelectedCrop !== "all" && ` Filtered for ${cropOptions.find(c => c.value === localSelectedCrop)?.label}.`}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SourceBreakdownChart;
