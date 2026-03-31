import React from 'react';
import { StatCard, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function StatCardPage() {
  return (
    <div className="space-y-12">
      <Heading 
        title="Stat Card" 
        description="Core dashboard component for displaying health metrics like heart rate, steps, and oxygen." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Basic Stat Card"
          description="A simple stat card showing a value and unit."
          code={`<StatCard 
  title="Heart Rate" 
  value="72" 
  unit="bpm" 
  trend="↑ 2 bpm from yesterday" 
/>`}
        >
          <div className="w-full max-w-xs">
            <StatCard 
              title="Heart Rate" 
              value="72" 
              unit="bpm" 
              trend="↑ 2 bpm from yesterday" 
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Without Trend"
          description="Stat card without a trend indicator."
          code={`<StatCard 
  title="Water Intake" 
  value="1.2" 
  unit="L" 
/>`}
        >
          <div className="w-full max-w-xs">
            <StatCard 
              title="Water Intake" 
              value="1.2" 
              unit="L" 
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
