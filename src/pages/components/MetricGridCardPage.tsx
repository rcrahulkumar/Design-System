import React from 'react';
import { MetricGridCard, MetricGraphCard, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function MetricGridCardPage() {
  return (
    <div className="space-y-12">
      <Heading 
        title="Metric Grid Card" 
        description="Container component for displaying multiple metrics in a grid." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="2-Column Grid"
          description="Default grid layout for metrics."
          code={`<MetricGridCard>
  <MetricGraphCard title="Heart Rate" value={72} unit="bpm" />
  <MetricGraphCard title="Weight" value={68} unit="kg" />
</MetricGridCard>`}
        >
          <div className="w-full max-w-2xl">
            <MetricGridCard>
              <MetricGraphCard title="Heart Rate" value={72} unit="bpm" />
              <MetricGraphCard title="Weight" value={68} unit="kg" />
            </MetricGridCard>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="3-Column Grid"
          description="Grid layout with 3 columns."
          code={`<MetricGridCard columns={3}>
  <MetricGraphCard title="Heart Rate" value={72} unit="bpm" />
  <MetricGraphCard title="Weight" value={68} unit="kg" />
  <MetricGraphCard title="Sleep" value="7h" />
</MetricGridCard>`}
        >
          <div className="w-full max-w-4xl">
            <MetricGridCard columns={3}>
              <MetricGraphCard title="Heart Rate" value={72} unit="bpm" />
              <MetricGraphCard title="Weight" value={68} unit="kg" />
              <MetricGraphCard title="Sleep" value="7h" />
            </MetricGridCard>
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
