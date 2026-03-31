import React from 'react';
import { ActivityCard, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";
import { Footprints } from 'lucide-react';

export default function ActivityCardPage() {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
      <Heading 
        title="Activity Card" 
        description="Card for tracking fitness and wellness goals." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Daily Steps"
          description="Displays progress towards a daily step goal."
          code={`<ActivityCard 
  title="Daily Steps" 
  value="8,432" 
  target="10,000" 
  unit="steps" 
  icon={<Footprints className="w-5 h-5" />} 
/>`}
        >
          <div className="w-full max-w-md">
            <ActivityCard 
              title="Daily Steps" 
              value="8,432" 
              target="10,000" 
              unit="steps" 
              icon={<Footprints className="w-5 h-5" />} 
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
