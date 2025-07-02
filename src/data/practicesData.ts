
import { MetricData } from './types';

export const practicesMetrics: MetricData[] = [{
  title: "Rotation Classification",
  baseline2018: 2.1,
  current2024: 3.4,
  unit: "avg crops",
  type: 'classification',
  change: 61.9,
  distribution: {
    "2-crop": 35,
    "3-crop": 40,
    "4+ crop": 25
  },
  description: "Average number of unique crop types in rotation cycles since 2018, with distribution percentages across all managed fields"
}, {
  title: "Days Under Vegetation Cover",
  baseline2018: 198,
  current2024: 267,
  unit: "days",
  type: 'days',
  change: 34.8,
  distribution: {
    "<180 days": 15,
    "180-240": 25,
    ">240 days": 60
  },
  description: "Field-level duration of living vegetation cover throughout the growing season, with distribution showing percentage of fields maintaining greater than 240 days of vegetation cover"
}, {
  title: "Tillage Classification",
  baseline2018: 35,
  current2024: 68,
  unit: "% reduced/no-till",
  type: 'percentage',
  change: 94.3,
  distribution: {
    "No-Till": 42,
    "Reduced": 26,
    "Intensive": 32
  },
  description: "Field classification system categorizing tillage practices into reduced tillage, no-till, or intensive tillage methods"
}];
