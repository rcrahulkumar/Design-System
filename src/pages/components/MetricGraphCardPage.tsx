import React from 'react';
import { MetricGraphCard, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";
import { Activity } from "lucide-react";

export default function MetricGraphCardPage() {
  return (
    <div className="space-y-12">
      <Heading 
        title="Metric Graph Card" 
        description="Core system component for displaying metrics with trends and graphs." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Default Variant"
          description="Standard metric card with trend."
          code={`<MetricGraphCard 
  title="Heart Rate" 
  value={72} 
  unit="bpm" 
  trend="+2 bpm" 
  interactive 
/>`}
        >
          <div className="w-full max-w-sm">
            <MetricGraphCard 
              title="Heart Rate" 
              value={72} 
              unit="bpm" 
              trend="+2 bpm" 
              interactive 
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="With Graph"
          description="Card displaying a custom graph element."
          code={`<MetricGraphCard 
  title="Activity" 
  value="2,450" 
  unit="kcal" 
  graph={<div className="h-12 bg-primary/10 rounded-lg flex items-end p-1 gap-1">...</div>}
/>`}
        >
          <div className="w-full max-w-sm">
            <MetricGraphCard 
              title="Activity" 
              value="2,450" 
              unit="kcal" 
              graph={
                <div className="h-12 bg-primary/10 rounded-lg flex items-end p-1 gap-1">
                  {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                    <div key={i} className="flex-1 bg-primary rounded-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              }
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
