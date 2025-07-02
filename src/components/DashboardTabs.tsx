import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, BarChart3, FileText } from "lucide-react";
import EmissionsChart from "@/components/EmissionsChart";
import SourceBreakdownChart from "@/components/SourceBreakdownChart";
import DataTable from "@/components/DataTable";
import { fieldLevelData } from '@/data/metricsData';
interface DashboardTabsProps {
  selectedCrop: string;
  onCropChange: (value: string) => void;
}
const DashboardTabs: React.FC<DashboardTabsProps> = ({
  selectedCrop,
  onCropChange
}) => {
  return (
    <Tabs defaultValue="chart" className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-brand-grey">
        <TabsTrigger value="chart" className="flex items-center space-x-2 data-[state=active]:bg-brand-primary data-[state=active]:text-white font-avenir-medium">
          <TrendingUp className="h-4 w-4" />
          <span>TREND ANALYSIS</span>
        </TabsTrigger>
        <TabsTrigger value="breakdown" className="flex items-center space-x-2 data-[state=active]:bg-brand-primary data-[state=active]:text-white font-avenir-medium">
          <BarChart3 className="h-4 w-4" />
          <span>SOURCE BREAKDOWN</span>
        </TabsTrigger>
        <TabsTrigger value="data" className="flex items-center space-x-2 data-[state=active]:bg-brand-primary data-[state=active]:text-white font-avenir-medium">
          <FileText className="h-4 w-4" />
          <span>FIELD-LEVEL DATA</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="chart">
        <Card className="border-brand-grey shadow-lg hover:shadow-xl hover:bg-brand-grey/20 hover:border-brand-primary transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-brand-text font-avenir-medium">Greenhouse Gas Emissions & Yield Performance Trend</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <EmissionsChart selectedCrop={selectedCrop} onCropChange={onCropChange} />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="breakdown">
        <Card className="border-brand-grey shadow-lg hover:shadow-xl hover:bg-brand-grey/20 hover:border-brand-primary transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-brand-text font-avenir-medium">Historical Source Breakdown Analysis</CardTitle>
            <p className="text-sm text-brand-text/70 font-avenir-book">Track emission sources over time and filter by crop type</p>
          </CardHeader>
          <CardContent className="p-6">
            <SourceBreakdownChart selectedCrop={selectedCrop} onCropChange={onCropChange} />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="data">
        <Card className="border-brand-grey shadow-lg hover:shadow-xl hover:bg-brand-grey/20 hover:border-brand-primary transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-brand-text font-avenir-medium">Field-Level Data</CardTitle>
            <p className="text-sm text-brand-text/70 font-avenir-book">Detailed field-level metrics and classifications</p>
          </CardHeader>
          <CardContent className="p-4">
            <DataTable data={fieldLevelData} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
export default DashboardTabs;
