import React from 'react';
import { ProgressBar, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function ProgressBarPage() {
  return (
    <div className="space-y-12">
      <Heading 
        title="Progress Bar" 
        description="Used for health scores, completion rates, and tracking metrics." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Standard Progress Bar"
          description="A simple progress bar showing completion percentage."
          code={`<ProgressBar value={75} />`}
        >
          <div className="w-full max-w-md">
            <ProgressBar value={75} />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="With Label"
          description="Progress bar with a descriptive label."
          code={`<ProgressBar value={82} label="Overall Health Score" />`}
        >
          <div className="w-full max-w-md">
            <ProgressBar value={82} label="Overall Health Score" />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
