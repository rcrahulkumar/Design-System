import React from 'react';
import { HealthSummaryCard, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";
import { Activity, Heart, Droplets, Moon } from "lucide-react";

export default function HealthSummaryCardPage() {
  return (
    <div className="space-y-12">
      <Heading 
        title="Health Summary Card" 
        description="Top dashboard cards for quick health overviews." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Variants"
          description="Different color variants for health summaries."
          code={`<div className="grid grid-cols-2 gap-4">
  <HealthSummaryCard icon={<Heart />} title="Heart" subtitle="Resting HR" value="68 bpm" color="red" />
  <HealthSummaryCard icon={<Activity />} title="Activity" subtitle="Steps today" value="8,432" color="blue" />
  <HealthSummaryCard icon={<Droplets />} title="Hydration" subtitle="Water intake" value="1.2 L" color="brand" />
  <HealthSummaryCard icon={<Moon />} title="Sleep" subtitle="Last night" value="7h 20m" color="purple" />
</div>`}
        >
          <div className="w-full max-w-2xl grid grid-cols-2 gap-4">
            <HealthSummaryCard 
              icon={<Heart className="w-5 h-5" />} 
              title="Heart" 
              subtitle="Resting HR" 
              value="68 bpm" 
              color="red" 
            />
            <HealthSummaryCard 
              icon={<Activity className="w-5 h-5" />} 
              title="Activity" 
              subtitle="Steps today" 
              value="8,432" 
              color="blue" 
            />
            <HealthSummaryCard 
              icon={<Droplets className="w-5 h-5" />} 
              title="Hydration" 
              subtitle="Water intake" 
              value="1.2 L" 
              color="brand" 
            />
            <HealthSummaryCard 
              icon={<Moon className="w-5 h-5" />} 
              title="Sleep" 
              subtitle="Last night" 
              value="7h 20m" 
              color="purple" 
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
