import React from 'react';
import { Radio, RadioGroup } from "@/src/components/ui";

export default function RadioPage() {
  const [value, setValue] = React.useState('daily');

  return (
    <div className="p-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">Radio Button System</h1>
      <p className="text-gray-500 mb-10">Radio buttons allow users to select one option from a set.</p>

      <div className="space-y-16">
        {/* Basic Usage */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Basic Usage</h2>
          <RadioGroup label="Notification Frequency">
            <Radio 
              name="freq" 
              label="Daily Digest" 
              value="daily" 
              checked={value === 'daily'} 
              onChange={() => setValue('daily')}
            />
            <Radio 
              name="freq" 
              label="Weekly Summary" 
              value="weekly" 
              checked={value === 'weekly'} 
              onChange={() => setValue('weekly')}
            />
            <Radio 
              name="freq" 
              label="Real-time Alerts" 
              value="realtime" 
              checked={value === 'realtime'} 
              onChange={() => setValue('realtime')}
            />
          </RadioGroup>
        </section>

        {/* With Descriptions */}
        <section>
          <h2 className="text-xl font-semibold mb-6">With Descriptions</h2>
          <RadioGroup label="Health Goal" className="max-w-md">
            <Radio 
              name="goal" 
              label="Weight Loss" 
              description="Focus on calorie deficit and cardio exercises."
            />
            <Radio 
              name="goal" 
              label="Muscle Gain" 
              description="High protein intake and strength training focus."
            />
            <Radio 
              name="goal" 
              label="Maintenance" 
              description="Balanced diet and consistent activity levels."
            />
          </RadioGroup>
        </section>

        {/* Orientation */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Orientation</h2>
          <div className="space-y-10">
            <RadioGroup label="Vertical (Default)" orientation="vertical">
              <Radio name="v" label="Option 1" />
              <Radio name="v" label="Option 2" />
            </RadioGroup>

            <RadioGroup label="Horizontal" orientation="horizontal">
              <Radio name="h" label="Option 1" />
              <Radio name="h" label="Option 2" />
              <Radio name="h" label="Option 3" />
            </RadioGroup>
          </div>
        </section>

        {/* States */}
        <section>
          <h2 className="text-xl font-semibold mb-6">States</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RadioGroup label="Error State" error="Please select a valid option">
              <Radio name="err" label="Invalid Option 1" error />
              <Radio name="err" label="Invalid Option 2" error />
            </RadioGroup>

            <RadioGroup label="Disabled State">
              <Radio name="dis" label="Disabled Unchecked" disabled />
              <Radio name="dis" label="Disabled Checked" disabled checked readOnly />
            </RadioGroup>
          </div>
        </section>

        {/* Code Example */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Implementation</h2>
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl text-sm font-mono overflow-x-auto">
{`import { Radio, RadioGroup } from "@/src/components/ui";

// Basic usage
<RadioGroup label="Plan">
  <Radio 
    name="plan" 
    label="Free" 
    description="Basic features" 
  />
  <Radio 
    name="plan" 
    label="Pro" 
    description="Advanced features" 
    checked 
  />
</RadioGroup>

// Horizontal orientation
<RadioGroup orientation="horizontal">
  <Radio name="choice" label="Yes" />
  <Radio name="choice" label="No" />
</RadioGroup>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
