
export interface MetricData {
  title: string;
  baseline2018: number;
  current2024: number;
  unit: string;
  type: 'factor' | 'tonnes' | 'classification' | 'days' | 'percentage' | 'ratio';
  change: number;
  breakdown?: Record<string, number>;
  distribution?: Record<string, number>;
  description: string;
}

export interface CategoryDefinition {
  title: string;
  description: string;
}
