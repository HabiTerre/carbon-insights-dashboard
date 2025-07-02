
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface EmissionsChartProps {
  selectedCrop: string;
  onCropChange: (value: string) => void;
}

const EmissionsChart: React.FC<EmissionsChartProps> = ({ selectedCrop, onCropChange }) => {
  console.log('EmissionsChart rendering');
  
  const data = [
    { year: 2018, ghgEmissions: 2.1, socSequestration: 1.4, netEmissions: 0.7, cropYield: 5.8 },
    { year: 2019, ghgEmissions: 2.0, socSequestration: 1.4, netEmissions: 0.6, cropYield: 5.9 },
    { year: 2020, ghgEmissions: 1.9, socSequestration: 1.5, netEmissions: 0.4, cropYield: 6.1 },
    { year: 2021, ghgEmissions: 1.8, socSequestration: 1.7, netEmissions: 0.1, cropYield: 6.3 },
    { year: 2022, ghgEmissions: 1.8, socSequestration: 1.8, netEmissions: 0.0, cropYield: 6.5 },
    { year: 2023, ghgEmissions: 1.7, socSequestration: 1.9, netEmissions: -0.2, cropYield: 6.6 },
    { year: 2024, ghgEmissions: 1.7, socSequestration: 2.0, netEmissions: -0.3, cropYield: 6.7 },
  ];

  const customTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-brand-grey rounded-lg shadow-md">
          <p className="font-avenir-medium text-brand-text mb-2">{`Year: ${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm font-avenir-book">
              {`${entry.name}: ${entry.value.toFixed(1)}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Emissions Trend */}
        <div className="bg-white p-4 rounded-lg border border-brand-grey hover:shadow-xl hover:bg-brand-grey/20 hover:border-brand-primary transition-all duration-300">
          <h3 className="text-lg font-avenir-medium mb-4 text-brand-text">Emissions vs Sequestration</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart 
                data={data} 
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E6E6E6" />
                <XAxis 
                  dataKey="year" 
                  stroke="#37414F"
                  fontSize={10}
                  textAnchor="middle"
                />
                <YAxis 
                  stroke="#37414F"
                  fontSize={10}
                  label={{ value: 'Million tonnes', angle: -90, position: 'insideLeft', style: { fontSize: '10px', textAnchor: 'middle' } }}
                />
                <Tooltip content={customTooltip} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="ghgEmissions" 
                  stroke="#F9B442" 
                  strokeWidth={2}
                  name="GHG Emissions"
                  dot={{ fill: '#F9B442', r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="socSequestration" 
                  stroke="#24923B" 
                  strokeWidth={2}
                  name="SOC Sequestration"
                  dot={{ fill: '#24923B', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Net Emissions */}
        <div className="bg-white p-4 rounded-lg border border-brand-grey hover:shadow-xl hover:bg-brand-grey/20 hover:border-brand-primary transition-all duration-300">
          <h3 className="text-lg font-avenir-medium mb-4 text-brand-text">Net Emissions Trend</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={data} 
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E6E6E6" />
                <XAxis 
                  dataKey="year" 
                  stroke="#37414F"
                  fontSize={10}
                  textAnchor="middle"
                />
                <YAxis 
                  stroke="#37414F"
                  fontSize={10}
                  label={{ value: 'Million tonnes', angle: -90, position: 'insideLeft', style: { fontSize: '10px', textAnchor: 'middle' } }}
                />
                <Tooltip content={customTooltip} />
                <Legend />
                <Bar 
                  dataKey="netEmissions" 
                  fill="#8CC699"
                  name="Net Emissions"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Crop Yield and Net Emission Performance */}
      <div className="bg-white p-4 rounded-lg border border-brand-grey hover:shadow-xl hover:bg-brand-grey/20 hover:border-brand-primary transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-avenir-medium text-brand-text">Crop Yield & Net Emission Performance</h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-brand-text/70 font-avenir-book">Filter by crop type:</span>
            <Select value={selectedCrop === "all" ? "corn" : selectedCrop} onValueChange={onCropChange}>
              <SelectTrigger className="w-48 border-brand-grey hover:border-brand-primary">
                <SelectValue placeholder="Select crop type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="corn">Corn</SelectItem>
                <SelectItem value="soybeans">Soybeans</SelectItem>
                <SelectItem value="wheat">Wheat</SelectItem>
                <SelectItem value="cotton">Cotton</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart 
              data={data} 
              margin={{ top: 5, right: 90, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E6E6E6" />
              <XAxis 
                dataKey="year" 
                stroke="#37414F"
                fontSize={10}
                textAnchor="middle"
              />
              <YAxis 
                yAxisId="left"
                stroke="#37414F"
                fontSize={10}
                label={{ value: 'Thousand bushels/acre', angle: -90, position: 'insideLeft', style: { fontSize: '10px', textAnchor: 'middle' } }}
              />
              <YAxis 
                yAxisId="right"
                orientation="right"
                stroke="#37414F"
                fontSize={10}
                label={{ value: 'Million tonnes CO2eq', angle: 90, position: 'insideRight', style: { fontSize: '10px', textAnchor: 'middle' } }}
              />
              <Tooltip content={customTooltip} />
              <Legend />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="cropYield" 
                stroke="#24923B" 
                strokeWidth={2}
                name="Crop Yield"
                dot={{ fill: '#24923B', r: 4 }}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="netEmissions" 
                stroke="#F9B442" 
                strokeWidth={2}
                name="Net Emissions"
                dot={{ fill: '#F9B442', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default EmissionsChart;
