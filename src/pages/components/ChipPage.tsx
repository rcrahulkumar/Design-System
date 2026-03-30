import React from 'react';
import { Chip } from "@/src/components/ui";

export default function ChipPage() {
  const [selectedChips, setSelectedChips] = React.useState<string[]>(['Health']);

  const toggleChip = (label: string) => {
    setSelectedChips((prev) =>
      prev.includes(label) ? prev.filter((c) => c !== label) : [...prev, label]
    );
  };

  return (
    <div className="p-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">Chip System</h1>
      <p className="text-gray-500 mb-10">Chips are used for selection, filtering, and categorization.</p>

      <div className="space-y-16">
        {/* Selection Chips */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Selection Chips (Interactive)</h2>
          <div className="flex flex-wrap gap-3">
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
        </section>

        {/* Tag Chips */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Tag Chips (Informational)</h2>
          <div className="flex flex-wrap gap-3">
            <Chip label="Primary" type="tag" color="orange" />
            <Chip label="Secondary" type="tag" color="blue" />
            <Chip label="Success" type="tag" color="green" />
            <Chip label="Error" type="tag" color="red" />
            <Chip label="Neutral" type="tag" color="gray" />
          </div>
        </section>

        {/* Sizes */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Sizes</h2>
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-gray-400 uppercase">Small</span>
              <Chip label="Small Chip" size="sm" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs text-gray-400 uppercase">Medium (Default)</span>
              <Chip label="Medium Chip" size="md" />
            </div>
          </div>
        </section>

        {/* Removable */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Removable Chips</h2>
          <div className="flex flex-wrap gap-3">
            <Chip label="Removable" onRemove={() => alert('Removed!')} />
            <Chip label="Tag with Remove" type="tag" color="blue" onRemove={() => alert('Removed!')} />
          </div>
        </section>

        {/* Code Example */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Implementation</h2>
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl text-sm font-mono overflow-x-auto">
{`import { Chip } from "@/src/components/ui";

// Selection Chip
<Chip 
  label="Health" 
  selected={isSelected} 
  onSelect={() => setIsSelected(!isSelected)} 
/>

// Tag Chip
<Chip 
  label="Success" 
  type="tag" 
  color="green" 
/>

// Removable Chip
<Chip 
  label="Tag" 
  onRemove={() => handleRemove()} 
/>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
