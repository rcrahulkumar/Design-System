import React from 'react';
import { Chip, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function ChipPage() {
  const [selectedChips, setSelectedChips] = React.useState<string[]>(['Health']);

  const toggleChip = (label: string) => {
    setSelectedChips((prev) =>
      prev.includes(label) ? prev.filter((c) => c !== label) : [...prev, label]
    );
  };

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
      <Heading 
        title="Chip System" 
        description="Chips are used for selection, filtering, and categorization." 
      />

      <div className="space-y-12">
        <ComponentPreview 
          title="Selection Chips (Interactive)" 
          description="Used for filtering or selecting multiple options."
          code={`<Chip label="Health" selected={isSelected} onSelect={() => toggle()} />`}
        >
        <div className="flex flex-wrap gap-3 w-full">
          {['Health', 'Fitness', 'Nutrition', 'Sleep', 'Mindfulness'].map((label) => (
            <Chip
              key={label}
              label={label}
              selected={selectedChips.includes(label)}
              onSelect={() => toggleChip(label)}
            />
          ))}
          <Chip label="Disabled" disabled />
        </div>
      </ComponentPreview>

      <ComponentPreview 
        title="Tag Chips (Informational)" 
        description="Used to display categories or status."
        code={`<Chip label="Success" type="tag" color="green" />`}
      >
        <div className="flex flex-wrap gap-3 w-full">
          <Chip label="Primary" type="tag" color="orange" />
          <Chip label="Secondary" type="tag" color="blue" />
          <Chip label="Success" type="tag" color="green" />
          <Chip label="Error" type="tag" color="red" />
          <Chip label="Neutral" type="tag" color="gray" />
        </div>
      </ComponentPreview>

      <ComponentPreview 
        title="Sizes" 
        description="Chips come in two sizes."
        code={`<Chip label="Small" size="sm" />\n<Chip label="Medium" size="md" />`}
      >
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-gray-400 uppercase font-semibold">Small Selection</span>
              <Chip label="Small Chip" size="sm" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs text-gray-400 uppercase font-semibold">Medium Selection</span>
              <Chip label="Medium Chip" size="md" />
            </div>
          </div>
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-gray-400 uppercase font-semibold">Small Tag</span>
              <Chip label="Small Tag" size="sm" type="tag" color="blue" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs text-gray-400 uppercase font-semibold">Medium Tag</span>
              <Chip label="Medium Tag" size="md" type="tag" color="blue" />
            </div>
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview 
        title="Removable Chips" 
        description="Chips that can be dismissed."
        code={`<Chip label="Removable" onRemove={() => handleRemove()} />`}
      >
        <div className="flex flex-wrap gap-3 w-full">
          <Chip label="Removable" onRemove={() => alert('Removed!')} />
          <Chip label="Tag with Remove" type="tag" color="blue" onRemove={() => alert('Removed!')} />
        </div>
      </ComponentPreview>
      </div>
    </div>
  );
}
