import React from 'react';
import { MetricCard, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";
import { Activity } from 'lucide-react';

export default function MetricCardPage() {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
      <Heading 
        title="Metric Card" 
        description="Card for displaying key health metrics." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Neutral Trend"
          description="Displays a metric with a stable or neutral trend."
          code={`<MetricCard 
  title="Heart Rate" 
  value="72" 
  unit="bpm" 
  trend="neutral" 
  trendValue="Stable" 
  icon={<Activity className="w-5 h-5" />} 
/>`}
        >
          <div className="w-full max-w-sm">
            <MetricCard 
              title="Heart Rate" 
              value="72" 
              unit="bpm" 
              trend="neutral" 
              trendValue="Stable" 
              icon={<Activity className="w-5 h-5" />} 
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Success Trend"
          description="Displays a metric with a positive or successful trend."
          code={`<MetricCard 
  title="Weight" 
  value="150" 
  unit="lbs" 
  trend="down" 
  trendValue="-2 lbs" 
  trendStatus="success"
/>`}
        >
          <div className="w-full max-w-sm">
            <MetricCard 
              title="Weight" 
              value="150" 
              unit="lbs" 
              trend="down" 
              trendValue="-2 lbs" 
              trendStatus="success"
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
