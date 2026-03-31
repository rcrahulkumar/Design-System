import React from 'react';
import { InsightCard, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function InsightCardPage() {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
      <Heading 
        title="Insight Card" 
        description="AI-generated health insights with trends and actionable CTAs." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Insight Cards"
          description="Cards displaying health insights, trends, and actions."
          code={`<InsightCard 
  title="Sleep Quality"
  description="Your deep sleep was 15% higher than usual. This correlates with your lower caffeine intake."
  trend="up"
  trendValue="+15%"
  metric="7h 42m"
  cta={{ label: 'View Sleep Analysis', onClick: () => {} }}
/>`}
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <InsightCard 
              title="Sleep Quality"
              description="Your deep sleep was 15% higher than usual. This correlates with your lower caffeine intake."
              trend="up"
              trendValue="+15%"
              metric="7h 42m"
              cta={{ label: 'View Sleep Analysis', onClick: () => {} }}
            />
            <InsightCard 
              title="Calorie Deficit"
              description="You are slightly below your target calorie intake for weight loss goals."
              trend="down"
              trendValue="-200 kcal"
              metric="1,850"
              cta={{ label: 'Log Nutrition', onClick: () => {} }}
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
