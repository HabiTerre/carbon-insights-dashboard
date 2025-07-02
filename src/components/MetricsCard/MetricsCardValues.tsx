
interface MetricsCardValuesProps {
  current2024: number;
  baseline2018: number;
  unit: string;
  type: 'factor' | 'percentage' | 'ratio' | 'classification' | 'days' | 'tonnes';
}

const MetricsCardValues = ({ current2024, baseline2018, unit, type }: MetricsCardValuesProps) => {
  const formatValue = (value: number) => {
    if (type === 'percentage') return `${value}`;
    if (type === 'ratio') return value.toFixed(2);
    if (type === 'days') return Math.round(value);
    if (type === 'tonnes') return value.toLocaleString();
    return value.toFixed(1);
  };

  return (
    <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
      <div className="flex items-center justify-between p-2 sm:p-3 bg-gradient-to-r from-brand-primary/5 to-transparent rounded-lg">
        <div className="flex items-center gap-2">
          <span className="text-[10px] sm:text-xs font-avenir-medium text-white bg-brand-primary px-2 py-0.5 rounded-full">2024</span>
          <div className="w-1 h-1 bg-brand-primary rounded-full animate-pulse"></div>
        </div>
        <span className="text-base sm:text-lg lg:text-xl font-avenir-black text-brand-text">
          {formatValue(current2024)} 
          <span className="text-xs sm:text-sm font-avenir-book text-brand-text/70 ml-1">{unit}</span>
        </span>
      </div>
      
      <div className="flex items-center justify-between p-2 sm:p-3 bg-brand-grey/20 rounded-lg">
        <span className="text-[10px] sm:text-xs font-avenir-medium text-brand-text/70 bg-brand-grey/70 px-2 py-0.5 rounded-full">2018</span>
        <span className="text-sm sm:text-base text-brand-text/70">
          {formatValue(baseline2018)} 
          <span className="text-xs text-brand-text/60 ml-1">{unit}</span>
        </span>
      </div>
    </div>
  );
};

export default MetricsCardValues;
