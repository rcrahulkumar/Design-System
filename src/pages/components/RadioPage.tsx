import React from 'react';
import { Radio, RadioGroup, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function RadioPage() {
  const [value, setValue] = React.useState('daily');

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
      <Heading 
        title="Radio Button System" 
        description="Radio buttons allow users to select one option from a set." 
      />

      <div className="space-y-12">
        <ComponentPreview 
          title="Basic Usage" 
          description="Standard radio group."
          code={`<RadioGroup label="Notification Frequency">\n  <Radio name="freq" label="Daily Digest" value="daily" checked={value === 'daily'} onChange={() => setValue('daily')} />\n</RadioGroup>`}
        >
        <div className="w-full">
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
        </div>
      </ComponentPreview>

      <ComponentPreview 
        title="With Descriptions" 
        description="Radio options with additional context."
        code={`<Radio name="goal" label="Weight Loss" description="Focus on calorie deficit." />`}
      >
        <div className="w-full max-w-md">
          <RadioGroup label="Health Goal">
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
        </div>
      </ComponentPreview>

      <ComponentPreview 
        title="Orientation" 
        description="Vertical or horizontal layout."
        code={`<RadioGroup orientation="horizontal">...</RadioGroup>`}
      >
        <div className="space-y-10 w-full">
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
      </ComponentPreview>

      <ComponentPreview 
        title="States" 
        description="Error and disabled states."
        code={`<RadioGroup error="Please select an option">...</RadioGroup>`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <RadioGroup label="Error State" error="Please select a valid option">
            <Radio name="err" label="Invalid Option 1" error />
            <Radio name="err" label="Invalid Option 2" error />
          </RadioGroup>

          <RadioGroup label="Disabled State">
            <Radio name="dis" label="Disabled Unchecked" disabled />
            <Radio name="dis" label="Disabled Checked" disabled checked readOnly />
          </RadioGroup>
        </div>
      </ComponentPreview>
      </div>
    </div>
  );
}
