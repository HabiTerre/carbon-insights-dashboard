
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cropTypeData } from '@/data/metricsData';

const CropStatistics = () => {
  const totalFields = cropTypeData.reduce((sum, crop) => sum + crop.fields, 0);

  return (
    <Card className="h-full border-brand-grey shadow-lg flex flex-col hover:shadow-xl hover:bg-brand-grey/20 hover:border-brand-primary transition-all duration-300">
      <CardHeader className="pb-2 flex-shrink-0">
        <CardTitle className="text-brand-text text-xl font-avenir-medium">Area by crop type</CardTitle>
        <div className="text-xs text-brand-text/70 font-avenir-book">Acres</div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-4 min-h-0">
        <div className="text-3xl font-avenir-black text-brand-text">300K</div>
        <div className="text-xs text-brand-text/60 mt-1 font-avenir-book">{totalFields.toLocaleString()} fields</div>
        <div className="mt-4 space-y-3 flex-1 overflow-y-auto min-h-0">
          {cropTypeData.map((crop, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${crop.color}`}></div>
                <span className="text-sm text-brand-text font-avenir-book">{crop.crop}</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-avenir-medium text-brand-text">{crop.acres}K</div>
                <div className="text-xs text-brand-text/60 font-avenir-book">{crop.percentage}% • {crop.fields.toLocaleString()} fields</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CropStatistics;
