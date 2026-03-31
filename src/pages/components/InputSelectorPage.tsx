import React, { useState } from 'react';
import { InputSelector, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function InputSelectorPage() {
  const [selectedPills, setSelectedPills] = useState<string[]>(["Cardiology"]);
  const [selectedChips, setSelectedChips] = useState<string[]>(["Morning"]);

  const handlePillChange = (option: string) => {
    setSelectedPills(prev => 
      prev.includes(option) ? prev.filter(p => p !== option) : [...prev, option]
    );
  };

  const handleChipChange = (option: string) => {
    setSelectedChips(prev => 
      prev.includes(option) ? prev.filter(p => p !== option) : [...prev, option]
    );
  };

  return (
    <div className="space-y-12">
      <Heading 
        title="Input Selector" 
        description="Component for selecting multiple options using chips or pills." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Pill Variant"
          description="Rounded pill-shaped selectors."
          code={`<InputSelector 
  options={["Cardiology", "Dermatology", "Neurology", "Pediatrics"]} 
  selected={selected} 
  onChange={handleChange} 
  variant="pill" 
/>`}
        >
          <div className="w-full max-w-lg p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <InputSelector 
              options={["Cardiology", "Dermatology", "Neurology", "Pediatrics"]} 
              selected={selectedPills} 
              onChange={handlePillChange} 
              variant="pill" 
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Chip Variant"
          description="Rounded rectangular chip selectors."
          code={`<InputSelector 
  options={["Morning", "Afternoon", "Evening"]} 
  selected={selected} 
  onChange={handleChange} 
  variant="chip" 
/>`}
        >
          <div className="w-full max-w-lg p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <InputSelector 
              options={["Morning", "Afternoon", "Evening"]} 
              selected={selectedChips} 
              onChange={handleChipChange} 
              variant="chip" 
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
