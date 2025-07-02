
import { MetricData } from './types';

export const carbonIntensityMetrics: MetricData[] = [{
  title: "Net Emission Factor",
  baseline2018: 2.8,
  current2024: 1.9,
  unit: "kg CO2eq/kg",
  type: 'factor',
  change: -32.1,
  breakdown: {
    "Fertilizer": 35,
    "Chemical": 18,
    "Energy Consumption": 15,
    "N2O": 12,
    "CH4": 8,
    "SOC": 12
  },
  description: "Greenhouse gas net emission factor with detailed breakdown by source, comparing baseline year (2018) with current reporting year (2024)"
}, {
  title: "Emission Factor",
  baseline2018: 3.4,
  current2024: 2.7,
  unit: "kg CO2eq/kg",
  type: 'factor',
  change: -20.6,
  breakdown: {
    "Fertilizer": 38,
    "Chemical": 22,
    "Energy Consumption": 18,
    "N2O": 10,
    "CH4": 7,
    "SOC": 5
  },
  description: "Total greenhouse gas emission factor with comprehensive breakdown by emission source"
}, {
  title: "Total Tonnes of Removal",
  baseline2018: 14500,
  current2024: 23800,
  unit: "tonnes",
  type: 'tonnes',
  change: 64.1,
  description: "Total carbon dioxide equivalent removals measured for baseline year (2018) and current year (2024)"
}];
