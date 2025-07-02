
import { Card, CardContent } from "@/components/ui/card";
import MetricsCardHeader from "./MetricsCardHeader";
import MetricsCardValues from "./MetricsCardValues";
import MetricsCardDescription from "./MetricsCardDescription";
import MetricsCardChangeIndicator from "./MetricsCardChangeIndicator";
import MetricsCardChart from "./MetricsCardChart";
import MetricsCardProgressBar from "./MetricsCardProgressBar";

interface MetricsCardProps {
  title: string;
  baseline2018: number;
  current2024: number;
  unit: string;
  type: 'factor' | 'percentage' | 'ratio' | 'classification' | 'days' | 'tonnes';
  change: number;
  breakdown?: {
    [key: string]: number;
  };
  distribution?: {
    [key: string]: number;
  };
  description: string;
}

const MetricsCard = ({
  title,
  baseline2018,
  current2024,
  unit,
  type,
  change,
  breakdown,
  distribution,
  description
}: MetricsCardProps) => {
  const isGoodChange = type === 'factor' ? change < 0 : change > 0;

  return (
    <Card className="relative overflow-hidden border-brand-grey hover:shadow-lg hover:border-brand-primary transition-all duration-300 h-full flex flex-col group">
      <CardContent className="p-3 sm:p-4 lg:p-6 flex-1 flex flex-col">
        <MetricsCardHeader title={title} isGoodChange={isGoodChange} />
        
        <MetricsCardValues 
          current2024={current2024}
          baseline2018={baseline2018}
          unit={unit}
          type={type}
        />
        
        <MetricsCardDescription description={description} />
        
        <MetricsCardChangeIndicator change={change} isGoodChange={isGoodChange} />
        
        <div className="flex-1 flex flex-col">
          <MetricsCardChart
            title={title}
            baseline2018={baseline2018}
            current2024={current2024}
            breakdown={breakdown}
            distribution={distribution}
          />
        </div>
        
        <MetricsCardProgressBar change={change} isGoodChange={isGoodChange} />
      </CardContent>
    </Card>
  );
};

export default MetricsCard;
