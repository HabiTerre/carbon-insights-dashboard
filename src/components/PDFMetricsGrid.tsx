
import React from 'react';

interface MetricData {
  title: string;
  current: number;
  baseline: number;
  unit: string;
  change: number;
}

interface PDFMetricsGridProps {
  metrics: MetricData[];
  title?: string;
}

const PDFMetricsGrid = ({ metrics, title = "Key Metrics" }: PDFMetricsGridProps) => {
  return (
    <div className="pdf-optimize mb-8">
      <h3 className="pdf-subtitle mb-4">{title}</h3>
      
      <div className="pdf-metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="pdf-metric-card">
            <div className="font-bold text-sm mb-2">{metric.title}</div>
            <div className="text-2xl font-bold mb-1">
              {metric.current.toFixed(2)} {metric.unit}
            </div>
            <div className="text-xs text-gray-600 mb-2">
              Baseline: {metric.baseline.toFixed(2)} {metric.unit}
            </div>
            <div className={`text-xs font-semibold ${
              metric.change >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {metric.change >= 0 ? '↗' : '↘'} {Math.abs(metric.change).toFixed(1)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PDFMetricsGrid;
