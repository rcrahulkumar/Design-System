import React from 'react';
import { Checkbox, CheckboxGroup } from "@/src/components/ui";

export default function CheckboxPage() {
  const [selected, setSelected] = React.useState<string[]>(['fatigue']);

  const toggle = (val: string) => {
    setSelected(prev => 
      prev.includes(val) ? prev.filter(i => i !== val) : [...prev, val]
    );
  };

  return (
    <div className="p-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">Checkbox System</h1>
      <p className="text-gray-500 mb-10">Checkboxes allow users to select multiple options from a set.</p>

      <div className="space-y-16">
        {/* Basic Usage */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Basic Usage</h2>
          <CheckboxGroup label="Current Symptoms">
            <Checkbox 
              label="Fatigue" 
              checked={selected.includes('fatigue')} 
              onChange={() => toggle('fatigue')}
            />
            <Checkbox 
              label="Headache" 
              checked={selected.includes('headache')} 
              onChange={() => toggle('headache')}
            />
            <Checkbox 
              label="Muscle Pain" 
              checked={selected.includes('muscle')} 
              onChange={() => toggle('muscle')}
            />
          </CheckboxGroup>
        </section>

        {/* With Descriptions */}
        <section>
          <h2 className="text-xl font-semibold mb-6">With Descriptions</h2>
          <CheckboxGroup label="Privacy Settings" className="max-w-md">
            <Checkbox 
              label="Share Health Data" 
              description="Allow AI to analyze your health trends for better insights."
            />
            <Checkbox 
              label="Public Profile" 
              description="Make your profile visible to other community members."
            />
            <Checkbox 
              label="Marketing Emails" 
              description="Receive updates about new features and health tips."
            />
          </CheckboxGroup>
        </section>

        {/* Orientation */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Orientation</h2>
          <div className="space-y-10">
            <CheckboxGroup label="Vertical (Default)" orientation="vertical">
              <Checkbox label="Option 1" />
              <Checkbox label="Option 2" />
            </CheckboxGroup>

            <CheckboxGroup label="Horizontal" orientation="horizontal">
              <Checkbox label="Option 1" />
              <Checkbox label="Option 2" />
              <Checkbox label="Option 3" />
            </CheckboxGroup>
          </div>
        </section>

        {/* States */}
        <section>
          <h2 className="text-xl font-semibold mb-6">States</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CheckboxGroup label="Error State" error="Please accept the terms to continue">
              <Checkbox label="Accept Terms & Conditions" error />
              <Checkbox label="Accept Privacy Policy" error />
            </CheckboxGroup>

            <CheckboxGroup label="Disabled State">
              <Checkbox label="Disabled Unchecked" disabled />
              <Checkbox label="Disabled Checked" disabled checked readOnly />
            </CheckboxGroup>
          </div>
        </section>

        {/* Code Example */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Implementation</h2>
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl text-sm font-mono overflow-x-auto">
{`import { Checkbox, CheckboxGroup } from "@/src/components/ui";

// Basic usage
<CheckboxGroup label="Symptoms">
  <Checkbox 
    label="Fatigue" 
    checked={selected} 
    onChange={toggle} 
  />
</CheckboxGroup>

// With description
<Checkbox 
  label="Notifications" 
  description="Receive daily health updates" 
/>

// Horizontal orientation
<CheckboxGroup orientation="horizontal">
  <Checkbox label="Option A" />
  <Checkbox label="Option B" />
</CheckboxGroup>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
