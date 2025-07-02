
import { CategoryDefinition } from './types';

export const categoryDefinitions: Record<string, CategoryDefinition> = {
  "carbon-intensity": {
    title: "Carbon Intensity Metrics",
    description: "Core GHG emission factors and carbon removal measurements comparing baseline vs current performance"
  },
  "practices": {
    title: "Agricultural Practices", 
    description: "Sustainable farming practice adoption including crop rotation, vegetation cover, and tillage methods"
  },
  "efficiency": {
    title: "Input Efficiency",
    description: "Resource optimization metrics focusing on nitrogen use efficiency and application strategies"
  }
};
