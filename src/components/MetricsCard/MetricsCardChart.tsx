
import { TrendingUp, BarChart3 } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis } from "recharts";

interface MetricsCardChartProps {
  title: string;
  baseline2018: number;
  current2024: number;
  breakdown?: {
    [key: string]: number;
  };
  distribution?: {
    [key: string]: number;
  };
}

const MetricsCardChart = ({ title, baseline2018, current2024, breakdown, distribution }: MetricsCardChartProps) => {
  const getColorForBreakdownItem = (key: string, index: number) => {
    const colors = ['bg-[#24923B]', 'bg-[#8CC699]', 'bg-[#37414F]', 'bg-[#F9B442]', 'bg-brand-grey', 'bg-[#24923B]/70'];
    return colors[index % colors.length];
  };

  const getColorForDistributionItem = (key: string, index: number) => {
    const colors = ['bg-[#24923B]', 'bg-[#8CC699]', 'bg-[#37414F]'];
    return colors[index % colors.length];
  };

  const generateTrendData = () => {
    const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024];
    const startValue = baseline2018;
    const endValue = current2024;
    const totalChange = endValue - startValue;
    
    return years.map((year, index) => {
      const progress = index / (years.length - 1);
      const value = startValue + (totalChange * progress);
      return {
        year: year.toString(),
        value: Math.round(value)
      };
    });
  };

  const chartConfig = {
    value: {
      label: "Tonnes",
      color: "#24923B",
    },
  };

  if (title === "Total Tonnes of Removal") {
    return (
      <div className="flex-1 pt-4 border-t border-brand-grey/50">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-4 w-4 text-[#24923B]" />
          <span className="text-xs text-brand-text font-avenir-medium">Removal Trend (2018-2024)</span>
        </div>
        
        <div className="h-48 mb-4">
          <ChartContainer config={chartConfig}>
            <LineChart data={generateTrendData()}>
              <XAxis 
                dataKey="year" 
                tick={{ fontSize: 8 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                tick={{ fontSize: 8 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `${(value/1000).toFixed(0)}K`}
              />
              <ChartTooltip 
                content={<ChartTooltipContent />}
                labelFormatter={(label) => `Year ${label}`}
                formatter={(value) => [`${value.toLocaleString()} tonnes`, "Removal"]}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#24923B" 
                strokeWidth={2}
                dot={{ fill: '#24923B', strokeWidth: 1, r: 3 }}
                activeDot={{ r: 4, stroke: '#24923B', strokeWidth: 2 }}
              />
            </LineChart>
          </ChartContainer>
        </div>

        {breakdown && (
          <div className="space-y-2 text-xs">
            {Object.entries(breakdown).map(([key, value], index) => (
              <div key={key} className="flex items-center py-1 px-2 rounded hover:bg-brand-grey/20 transition-colors group/item">
                <div className="flex items-center min-w-0 flex-1">
                  <div
                    className={`w-3 h-3 rounded-full mr-3 flex-shrink-0 ${getColorForBreakdownItem(key, index)} shadow-sm group-hover/item:scale-110 transition-transform`}
                  />
                  <span className="text-brand-text truncate font-avenir-medium text-xs">{key}</span>
                </div>
                <div className="ml-auto pl-2 flex-shrink-0">
                  <span className="text-brand-text font-avenir-black bg-brand-grey/60 group-hover/item:bg-brand-primary/10 px-2 py-0.5 rounded text-xs transition-colors">{value}%</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (breakdown || distribution) {
    return (
      <div className="flex-1 pt-4 border-t border-brand-grey/50">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="h-4 w-4 text-[#24923B]" />
          <span className="text-xs text-brand-text font-avenir-medium">
            {breakdown ? 'Breakdown by Source' : 'Distribution of Fields'}
          </span>
        </div>
        
        <div className="mb-4">
          <div className="flex h-4 bg-brand-grey/30 rounded-full overflow-hidden shadow-inner border border-brand-grey/20">
            {Object.entries(breakdown || distribution || {}).map(([key, value], index) => (
              <div
                key={key}
                className={`${breakdown ? getColorForBreakdownItem(key, index) : getColorForDistributionItem(key, index)} hover:brightness-110 transition-all duration-200 cursor-pointer relative group/bar`}
                style={{ width: `${value}%` }}
                title={`${key}: ${value}%`}
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/bar:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-2 text-xs max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-brand-grey">
          {Object.entries(breakdown || distribution || {}).map(([key, value], index) => (
            <div key={key} className="flex items-center py-1 px-2 rounded hover:bg-brand-grey/20 transition-colors group/item">
              <div className="flex items-center min-w-0 flex-1">
                <div
                  className={`w-3 h-3 rounded-full mr-3 flex-shrink-0 ${
                    breakdown ? getColorForBreakdownItem(key, index) : getColorForDistributionItem(key, index)
                  } shadow-sm group-hover/item:scale-110 transition-transform`}
                />
                <span className="text-brand-text truncate font-avenir-medium text-xs">{key}</span>
              </div>
              <div className="ml-auto pl-2 flex-shrink-0">
                <span className="text-brand-text font-avenir-black bg-brand-grey/60 group-hover/item:bg-brand-primary/10 px-2 py-0.5 rounded text-xs transition-colors">{value}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default MetricsCardChart;
