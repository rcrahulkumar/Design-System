import React, { useState } from 'react';
import { WeeklyBarChart, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function WeeklyBarChartPage() {
  const [highlight, setHighlight] = useState(3);

  return (
    <div className="space-y-12">
      <Heading 
        title="Weekly Bar Chart" 
        description="Reusable chart component for weekly data visualization." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Interactive Chart"
          description="Bar chart with highlighted index."
          code={`<WeeklyBarChart 
  data={[40, 70, 45, 90, 65, 80, 50]} 
  highlightIndex={3} 
/>`}
        >
          <div className="w-full max-w-sm p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <WeeklyBarChart 
              data={[40, 70, 45, 90, 65, 80, 50]} 
              highlightIndex={highlight} 
            />
            <div className="mt-6 flex justify-center gap-2">
              {[0, 1, 2, 3, 4, 5, 6].map(i => (
                <button 
                  key={i} 
                  onClick={() => setHighlight(i)}
                  className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded"
                >
                  {i}
                </button>
              ))}
            </div>
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
