import React from 'react';
import { AICard, Heading, Button } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function AICardPage() {
  return (
    <div className="space-y-12">
      <Heading 
        title="AI Assistant Card" 
        description="Important component for highlighting AI-driven insights and actions." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Variants"
          description="Different color variants for AI cards."
          code={`<div className="space-y-4">
  <AICard variant="brand" title="Brand AI" description="..." />
  <AICard variant="blue" title="Blue AI" description="..." />
  <AICard variant="green" title="Green AI" description="..." />
  <AICard variant="purple" title="Purple AI" description="..." />
</div>`}
        >
          <div className="w-full max-w-md space-y-4">
            <AICard 
              variant="brand"
              title="JIVI AI Analysis Ready" 
              description="Your latest lab results have been analyzed." 
              action={<Button variant="secondary" size="sm" className="text-brand">View</Button>}
            />
            <AICard 
              variant="blue"
              title="Health Summary" 
              description="Your weekly activity is looking great." 
              action={<Button variant="secondary" size="sm" className="text-blue-500">Details</Button>}
            />
            <AICard 
              variant="green"
              title="Nutrition Goal Met" 
              description="You hit your protein target today." 
            />
            <AICard 
              variant="purple"
              title="Sleep Insights" 
              description="New patterns detected in your sleep cycle." 
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Loading State"
          description="AI card in a loading state."
          code={`<AICard 
  loading
  title="Analyzing Results..." 
  description="JIVI is processing your data." 
/>`}
        >
          <div className="w-full max-w-md">
            <AICard 
              loading
              variant="brand"
              title="Analyzing Results..." 
              description="JIVI is processing your data." 
              action={<Button variant="secondary" size="sm" className="text-brand">View</Button>}
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
