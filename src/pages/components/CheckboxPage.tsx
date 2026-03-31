import React from 'react';
import { Checkbox, CheckboxGroup, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function CheckboxPage() {
  const [selected, setSelected] = React.useState<string[]>(['fatigue']);

  const toggle = (val: string) => {
    setSelected(prev => 
      prev.includes(val) ? prev.filter(i => i !== val) : [...prev, val]
    );
  };

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
      <Heading 
        title="Checkbox System" 
        description="Checkboxes allow users to select multiple options from a set." 
      />

      <div className="space-y-12">
        <ComponentPreview 
          title="Basic Usage" 
          description="Standard checkbox group."
          code={`<CheckboxGroup label="Symptoms">\n  <Checkbox label="Fatigue" checked={selected} onChange={toggle} />\n</CheckboxGroup>`}
        >
        <div className="w-full">
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
        </div>
      </ComponentPreview>

      <ComponentPreview 
        title="With Descriptions" 
        description="Checkboxes with additional context."
        code={`<Checkbox label="Notifications" description="Receive daily health updates" />`}
      >
        <div className="w-full max-w-md">
          <CheckboxGroup label="Privacy Settings">
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
        </div>
      </ComponentPreview>

      <ComponentPreview 
        title="Orientation" 
        description="Vertical or horizontal layout."
        code={`<CheckboxGroup orientation="horizontal">...</CheckboxGroup>`}
      >
        <div className="space-y-10 w-full">
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
      </ComponentPreview>

      <ComponentPreview 
        title="States" 
        description="Error and disabled states."
        code={`<CheckboxGroup error="Please accept the terms">...</CheckboxGroup>`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <CheckboxGroup label="Error State" error="Please accept the terms to continue">
            <Checkbox label="Accept Terms & Conditions" error />
            <Checkbox label="Accept Privacy Policy" error />
          </CheckboxGroup>

          <CheckboxGroup label="Disabled State">
            <Checkbox label="Disabled Unchecked" disabled />
            <Checkbox label="Disabled Checked" disabled checked readOnly />
          </CheckboxGroup>
        </div>
      </ComponentPreview>
      </div>
    </div>
  );
}
