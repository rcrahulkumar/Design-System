import React from 'react';
import { ConditionCard, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function ConditionCardPage() {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
      <Heading 
        title="Condition Card" 
        description="Card for tracking chronic conditions or symptoms." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Stable Condition"
          description="Displays a condition that is currently stable."
          code={`<ConditionCard 
  condition="Hypertension" 
  status="stable" 
  lastChecked="Oct 20, 2026" 
  notes="Blood pressure is well-controlled with current medication." 
/>`}
        >
          <div className="w-full max-w-md">
            <ConditionCard 
              condition="Hypertension" 
              status="stable" 
              lastChecked="Oct 20, 2026" 
              notes="Blood pressure is well-controlled with current medication." 
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Monitoring Condition"
          description="Displays a condition that requires active monitoring."
          code={`<ConditionCard 
  condition="Type 2 Diabetes" 
  status="monitoring" 
  lastChecked="Oct 15, 2026" 
  notes="HbA1c slightly elevated. Recommend dietary review." 
/>`}
        >
          <div className="w-full max-w-md">
            <ConditionCard 
              condition="Type 2 Diabetes" 
              status="monitoring" 
              lastChecked="Oct 15, 2026" 
              notes="HbA1c slightly elevated. Recommend dietary review." 
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
