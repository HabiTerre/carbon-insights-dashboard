import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, Grid3X3, MapPin, Calendar, Wheat } from "lucide-react";

const ProjectSummaryCard = () => {
  const projectStats = [
    {
      title: "Total Acreage",
      value: "300K",
      description: "Acres under management",
      icon: MapPin,
      color: "text-brand-primary",
      bgColor: "bg-brand-primary/10"
    },
    {
      title: "Total Fields",
      value: "2,857",
      description: "Across all regions",
      icon: Grid3X3,
      color: "text-brand-secondary",
      bgColor: "bg-brand-secondary/20"
    },
    {
      title: "Crops Covered",
      value: "5+",
      description: "Different crop types",
      icon: Wheat,
      color: "text-brand-orange",
      bgColor: "bg-brand-orange/20"
    },
    {
      title: "Project Duration",
      value: "6 Years",
      description: "2018 - 2024",
      icon: Calendar,
      color: "text-brand-text",
      bgColor: "bg-brand-grey/50"
    },
    {
      title: "Net Reduction",
      value: "32%",
      description: "GHG emission factor",
      icon: TrendingDown,
      color: "text-brand-primary",
      bgColor: "bg-brand-primary/10"
    }
  ];

  console.log('ProjectSummaryCard rendering');
  console.log('New logo path:', '/lovable-uploads/07613b3b-5276-40e7-bd7d-04f26184407e.png');

  return (
    <Card className="border-brand-grey shadow-lg hover:shadow-xl hover:bg-brand-grey/20 hover:border-brand-primary transition-all duration-300 rounded-lg">
      <CardHeader className="rounded-t-lg p-4 sm:p-6" style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-brand-text text-lg sm:text-xl font-avenir-medium">Project Overview</CardTitle>
            <p className="text-xs sm:text-sm text-brand-text/70 font-avenir-book mt-1">
              Comprehensive summary of agricultural sustainability project achievements and scope
            </p>
          </div>
          
          {/* Enhanced Client Section */}
          <div className="flex items-center justify-center lg:justify-end gap-3 p-3 bg-white/60 rounded-lg border border-brand-grey/30">
            <div className="text-center lg:text-right">
              <p className="text-[10px] sm:text-xs text-brand-text/70 font-avenir-book uppercase tracking-wide">Client</p>
              <p className="text-sm sm:text-base font-avenir-medium text-brand-text">Tyson Foods</p>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/07613b3b-5276-40e7-bd7d-04f26184407e.png" 
                alt="Tyson Foods Logo" 
                className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 object-contain rounded-lg border border-gray-200 bg-white shadow-sm"
                onLoad={() => console.log('Tyson logo loaded successfully')}
                onError={(e) => console.error('Failed to load Tyson logo:', e)}
              />
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 sm:p-6 lg:p-8">
        {/* Enhanced Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {projectStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.title}
                className="group relative text-center p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl border border-brand-grey/40 hover:border-brand-secondary/50 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon Container */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <IconComponent className={`h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 ${stat.color}`} />
                </div>
                
                {/* Value */}
                <div className="text-lg sm:text-xl lg:text-2xl font-avenir-black text-brand-text mb-1 sm:mb-2 group-hover:text-brand-primary transition-colors">
                  {stat.value}
                </div>
                
                {/* Title */}
                <div className="text-xs sm:text-sm font-avenir-medium text-brand-text mb-1 leading-tight">
                  {stat.title}
                </div>
                
                {/* Description */}
                <div className="text-[10px] sm:text-xs text-brand-text/60 font-avenir-book leading-relaxed">
                  {stat.description}
                </div>
                
                {/* Hover Effect Indicator */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-brand-primary/0 group-hover:bg-brand-primary rounded-full transition-all duration-200"></div>
              </div>
            );
          })}
        </div>
        
        {/* Enhanced Impact Section */}
        <div className="mt-6 sm:mt-8 lg:mt-10 pt-4 sm:pt-6 lg:pt-8 border-t border-brand-grey">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-brand-primary"></div>
              <h3 className="text-base sm:text-lg font-avenir-medium text-brand-text">
                Sustainability Impact
              </h3>
              <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-brand-primary"></div>
            </div>
            <p className="text-xs sm:text-sm text-brand-text/70 max-w-2xl mx-auto font-avenir-book leading-relaxed px-2">
              This project demonstrates significant progress in agricultural sustainability through improved practices, 
              reduced emissions, and enhanced soil carbon sequestration across diverse farming operations.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectSummaryCard;
