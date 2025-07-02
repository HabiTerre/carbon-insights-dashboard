
interface MetricsCardChangeIndicatorProps {
  change: number;
  isGoodChange: boolean;
}

const MetricsCardChangeIndicator = ({ change, isGoodChange }: MetricsCardChangeIndicatorProps) => {
  const isPositive = change > 0;

  return (
    <div className="flex items-center justify-between text-xs sm:text-sm mb-4 sm:mb-6 p-2 sm:p-3 rounded-lg bg-gradient-to-r from-brand-grey/20 via-brand-grey/10 to-transparent border border-brand-grey/30">
      <span className="text-brand-text font-avenir-medium">Change since 2018</span>
      <div className="flex items-center gap-2">
        <span className={`font-avenir-black text-sm sm:text-base lg:text-lg ${isGoodChange ? 'text-[#24923B]' : 'text-brand-text/70'}`}>
          {isPositive ? '+' : ''}{change.toFixed(1)}%
        </span>
        {isGoodChange && (
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-[#24923B] rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 bg-[#24923B]/60 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricsCardChangeIndicator;
