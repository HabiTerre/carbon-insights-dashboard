
interface MetricsCardDescriptionProps {
  description: string;
}

const MetricsCardDescription = ({ description }: MetricsCardDescriptionProps) => {
  return (
    <div className="text-[10px] sm:text-xs text-brand-text/70 mb-3 sm:mb-4 leading-relaxed h-[5rem] sm:h-[6rem] flex items-center bg-gradient-to-br from-brand-grey/20 to-brand-grey/10 p-2 sm:p-3 rounded-md font-avenir-book border-l-2 border-brand-primary/30">
      {description}
    </div>
  );
};

export default MetricsCardDescription;
