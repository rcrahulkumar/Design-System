import React from 'react';
import { Heading, Button } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function TextPage() {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
      <Heading 
        title="Text & Heading System" 
        description="The text system manages content hierarchy, alignment, and layout patterns."
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Heading Sizes"
          description="Different sizes for various levels of content hierarchy."
          code={`<Heading size="lg" title="Large Heading (24px)" description="Used for primary page titles and hero sections." />
<Heading size="md" title="Medium Heading (20px)" description="Used for section headers and large card titles." />
<Heading size="sm" title="Small Heading (16px)" description="Used for sub-sections and standard card titles." />`}
        >
          <div className="w-full space-y-8">
            <Heading size="lg" title="Large Heading (24px)" description="Used for primary page titles and hero sections." />
            <Heading size="md" title="Medium Heading (20px)" description="Used for section headers and large card titles." />
            <Heading size="sm" title="Small Heading (16px)" description="Used for sub-sections and standard card titles." />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Alignment Patterns"
          description="Standard alignment for most UI layouts and content blocks."
          code={`<Heading 
  title="Left Aligned Content" 
  description="Standard alignment for most UI layouts and content blocks." 
/>
<Heading 
  align="center"
  title="Center Aligned Content" 
  description="Used for hero sections, empty states, and marketing banners." 
/>`}
        >
          <div className="w-full space-y-12">
            <div className="p-6 border border-gray-100 rounded-2xl">
              <span className="text-[10px] text-gray-400 uppercase font-bold mb-4 block">Left Aligned (Default)</span>
              <Heading 
                title="Left Aligned Content" 
                description="Standard alignment for most UI layouts and content blocks." 
              />
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl">
              <span className="text-[10px] text-gray-400 uppercase font-bold mb-4 block">Center Aligned</span>
              <Heading 
                align="center"
                title="Center Aligned Content" 
                description="Used for hero sections, empty states, and marketing banners." 
              />
            </div>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="With Actions"
          description="Headings can include call-to-action buttons."
          code={`<Heading 
  title="Recent Activity" 
  description="Track your health progress over the last 7 days."
  cta={<Button variant="tertiary" size="sm">View All</Button>}
/>`}
        >
          <div className="w-full p-6 border border-gray-100 rounded-2xl">
            <Heading 
              title="Recent Activity" 
              description="Track your health progress over the last 7 days."
              cta={<Button variant="tertiary" size="sm">View All</Button>}
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
