
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricsCardHeaderProps {
  title: string;
  isGoodChange: boolean;
}

const MetricsCardHeader = ({ title, isGoodChange }: MetricsCardHeaderProps) => {
  return (
    <div className="flex items-start justify-between mb-3 sm:mb-4">
      <h3 className="text-xs sm:text-sm font-avenir-medium text-brand-text leading-tight max-w-[75%] pr-2">{title}</h3>
      <div className={`p-1.5 sm:p-2 rounded-full transition-all duration-200 flex-shrink-0 ${isGoodChange ? 'bg-[#24923B]/10 group-hover:bg-[#24923B]/20' : 'bg-brand-grey/50'}`}>
        {isGoodChange ? (
          <TrendingDown className="h-3 w-3 sm:h-4 sm:w-4 text-[#24923B]" />
        ) : (
          <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-brand-text" />
        )}
      </div>
    </div>
  );
};

export default MetricsCardHeader;
