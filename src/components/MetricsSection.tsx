import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MetricsCard from "@/components/MetricsCard";
import { categoryDefinitions, carbonIntensityMetrics, practicesMetrics, efficiencyMetrics, type MetricData } from '@/data/metricsData';
interface MetricsSectionProps {
  selectedMetricCategory: string;
  onCategoryChange: (value: string) => void;
}
const MetricsSection: React.FC<MetricsSectionProps> = ({
  selectedMetricCategory,
  onCategoryChange
}) => {
  const getCurrentMetrics = (): MetricData[] => {
    switch (selectedMetricCategory) {
      case "carbon-intensity":
        return carbonIntensityMetrics;
      case "practices":
        return practicesMetrics;
      case "efficiency":
        return efficiencyMetrics;
      default:
        return carbonIntensityMetrics;
    }
  };
  const currentMetrics = getCurrentMetrics();
  return <Card className="border-brand-grey shadow-lg hover:shadow-xl hover:bg-brand-grey/20 hover:border-brand-primary transition-all duration-300 rounded-lg">
      <CardHeader className="rounded-t-lg" style={{
      backgroundColor: 'rgb(245, 245, 245)'
    }}>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-brand-text text-xl font-avenir-medium">Project-Level Metrics</CardTitle>
            <p className="text-sm text-brand-text/70 font-avenir-book">
              Comprehensive LCA metrics comparing baseline (2018) with current year (2024) performance
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-avenir-medium text-brand-text">Category:</span>
              <Select value={selectedMetricCategory} onValueChange={onCategoryChange}>
                <SelectTrigger className="w-48 border-brand-grey hover:border-brand-primary transition-colors shadow-sm font-avenir-book">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white border border-brand-grey shadow-xl z-50">
                  <SelectItem value="carbon-intensity" className="hover:bg-brand-grey/30 font-avenir-book">
                    Carbon Intensity
                  </SelectItem>
                  <SelectItem value="practices" className="hover:bg-brand-grey/30 font-avenir-book">
                    Practices
                  </SelectItem>
                  <SelectItem value="efficiency" className="hover:bg-brand-grey/30 font-avenir-book">
                    Efficiency
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <div className="lg:hidden mt-4 p-3 bg-brand-grey/30 rounded-lg border border-brand-grey">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-sm font-avenir-medium text-brand-text">
              {categoryDefinitions[selectedMetricCategory].title}
            </span>
          </div>
          <p className="text-xs text-brand-text/70 font-avenir-book">
            {categoryDefinitions[selectedMetricCategory].description}
          </p>
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentMetrics.map((metric, index) => <div key={`${selectedMetricCategory}-${index}`} className="animate-fade-in h-full" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="h-full">
                <MetricsCard {...metric} />
              </div>
            </div>)}
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-slate-800">{currentMetrics.length}</div>
              <div className="text-xs text-slate-600 uppercase tracking-wide">Metrics Tracked</div>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-emerald-700">
                {currentMetrics.filter(m => m.type === 'factor' ? m.change < 0 : m.change > 0).length}
              </div>
              <div className="text-xs text-emerald-600 uppercase tracking-wide">Improving</div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-red-700">
                {currentMetrics.filter(m => m.type === 'factor' ? m.change >= 0 : m.change <= 0).length}
              </div>
              <div className="text-xs text-red-600 uppercase tracking-wide">Not Improving</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>;
};
export default MetricsSection;