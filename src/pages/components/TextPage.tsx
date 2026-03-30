import React from 'react';
import { Heading, Button } from "@/src/components/ui";

export default function TextPage() {
  return (
    <div className="p-10 max-w-4xl">
      <Heading 
        title="Text & Heading System" 
        description="The text system manages content hierarchy, alignment, and layout patterns."
        className="mb-10"
      />

      <div className="space-y-16">
        {/* Sizes */}
        <section>
          <Heading size="md" title="Heading Sizes" className="mb-6" />
          <div className="space-y-8">
            <Heading size="lg" title="Large Heading (24px)" description="Used for primary page titles and hero sections." />
            <Heading size="md" title="Medium Heading (20px)" description="Used for section headers and large card titles." />
            <Heading size="sm" title="Small Heading (16px)" description="Used for sub-sections and standard card titles." />
          </div>
        </section>

        {/* Alignment */}
        <section>
          <Heading size="md" title="Alignment Patterns" className="mb-6" />
          <div className="space-y-12">
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
        </section>

        {/* With Actions */}
        <section>
          <Heading size="md" title="With Actions" className="mb-6" />
          <div className="p-6 border border-gray-100 rounded-2xl">
            <Heading 
              title="Recent Activity" 
              description="Track your health progress over the last 7 days."
              cta={<Button variant="tertiary" size="sm">View All</Button>}
            />
          </div>
        </section>

        {/* Implementation */}
        <section>
          <Heading size="md" title="Implementation" className="mb-6" />
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl text-sm font-mono overflow-x-auto">
{`import { Heading } from "@/src/components/ui";

// Basic usage
<Heading 
  title="Section Title" 
  description="Supporting description text" 
/>

// Centered with CTA
<Heading 
  align="center"
  title="Welcome"
  cta={<Button>Get Started</Button>}
/>

// Small variant
<Heading size="sm" title="Card Header" />`}
          </pre>
        </section>
      </div>
    </div>
  );
}
