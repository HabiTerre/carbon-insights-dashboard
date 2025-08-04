
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cropTypeData } from '@/data/metricsData';

const CropStatistics = () => {
  const totalFields = cropTypeData.reduce((sum, crop) => sum + crop.fields, 0);

  return (
    <Card className="border-brand-grey shadow-lg hover:shadow-xl hover:bg-brand-grey/20 hover:border-brand-primary transition-all duration-300">
      <CardHeader className="pb-4 lg:pb-6">
        <CardTitle className="text-brand-text text-xl lg:text-2xl xl:text-3xl font-avenir-medium">Area by crop type</CardTitle>
        <div className="text-sm lg:text-base text-brand-text/70 font-avenir-book">Acres</div>
      </CardHeader>
      <CardContent className="p-4 lg:p-6">
        <div className="text-4xl lg:text-5xl xl:text-6xl font-avenir-black text-brand-text mb-2">300K</div>
        <div className="text-sm lg:text-base text-brand-text/60 mb-6 lg:mb-8 font-avenir-book">{totalFields.toLocaleString()} fields</div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
          {cropTypeData.map((crop, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 lg:p-6 rounded-lg bg-brand-grey/10 hover:bg-brand-grey/20 transition-colors">
              <div className={`w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 rounded-full ${crop.color} mb-3`}></div>
              <span className="text-sm lg:text-base xl:text-lg text-brand-text font-avenir-medium mb-2">{crop.crop}</span>
              <div className="text-lg lg:text-xl xl:text-2xl font-avenir-black text-brand-text mb-1">{crop.acres}K</div>
              <div className="text-xs lg:text-sm text-brand-text/60 font-avenir-book">
                {crop.percentage}% • {crop.fields.toLocaleString()} fields
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CropStatistics;
