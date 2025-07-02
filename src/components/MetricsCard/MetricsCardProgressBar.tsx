
interface MetricsCardProgressBarProps {
  change: number;
  isGoodChange: boolean;
}

const MetricsCardProgressBar = ({ change, isGoodChange }: MetricsCardProgressBarProps) => {
  return (
    <div className="mt-4 pt-2">
      <div className="h-1 bg-brand-grey/50 rounded-full overflow-hidden shadow-inner">
        <div 
          className={`h-full transition-all duration-1000 ease-out relative ${isGoodChange ? 'bg-gradient-to-r from-[#24923B] to-[#8CC699]' : 'bg-gradient-to-r from-brand-text/50 to-brand-text/30'}`}
          style={{ width: `${Math.min(Math.abs(change), 100)}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default MetricsCardProgressBar;
