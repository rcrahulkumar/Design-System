import React from 'react';
import { ActivityTimelineCard, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function ActivityTimelineCardPage() {
  return (
    <div className="space-y-12">
      <Heading 
        title="Activity Timeline Card" 
        description="Card for displaying scheduled activities or tasks." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Activity States"
          description="Timeline cards with different statuses and actions."
          code={`<div className="space-y-3">
  <ActivityTimelineCard title="Morning Walk" value="30 mins" time="08:00 AM" status="completed" />
  <ActivityTimelineCard title="Take Medication" value="Vitamin D" time="09:00 AM" status="pending" onDelete={() => {}} />
  <ActivityTimelineCard title="Hydration" value="Drink Water" time="10:00 AM" status="missed" />
</div>`}
        >
          <div className="w-full max-w-md space-y-3">
            <ActivityTimelineCard 
              title="Morning Walk" 
              value="30 mins" 
              time="08:00 AM" 
              status="completed" 
            />
            <ActivityTimelineCard 
              title="Take Medication" 
              value="Vitamin D" 
              time="09:00 AM" 
              status="pending" 
              onDelete={() => alert('Delete activity')} 
            />
            <ActivityTimelineCard 
              title="Hydration" 
              value="Drink Water" 
              time="10:00 AM" 
              status="missed" 
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
