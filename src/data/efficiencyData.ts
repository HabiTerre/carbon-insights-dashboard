
import { MetricData } from './types';

export const efficiencyMetrics: MetricData[] = [{
  title: "Nitrogen Use Efficiency",
  baseline2018: 0.48,
  current2024: 0.64,
  unit: "ratio",
  type: 'ratio',
  change: 33.3,
  distribution: {
    "High Efficiency": 30,
    "Medium Efficiency": 45,
    "Low Efficiency": 25
  },
  description: "Ratio of nitrogen fertilizer applied to actual crop yield output, with field distribution categorized by efficiency performance levels"
}, {
  title: "Split Fertilizer Application",
  baseline2018: 23,
  current2024: 47,
  unit: "% of fields",
  type: 'percentage',
  change: 104.3,
  distribution: {
    "Split Application": 47,
    "Single Application": 53,
    "Not Applicable": 0
  },
  description: "Percentage of fields utilizing split nitrogen application methodology as a field-level management practice"
}, {
  title: "Use of Stabilizer",
  baseline2018: 12,
  current2024: 34,
  unit: "% of fields",
  type: 'percentage',
  change: 183.3,
  distribution: {
    "With Stabilizer": 34,
    "Without Stabilizer": 66,
    "Under Review": 0
  },
  description: "Percentage of fields implementing nitrogen stabilizers and inhibitors as a field-level management practice"
}];
