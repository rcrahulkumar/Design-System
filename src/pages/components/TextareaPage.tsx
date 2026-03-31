import React from 'react';
import { Textarea, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function TextareaPage() {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
      <Heading 
        title="Textarea" 
        description="Multi-line text input component for longer form content." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Basic Textarea"
          description="A standard textarea component with a label and placeholder."
          code={`<Textarea label="Description" placeholder="Enter your description here..." />`}
        >
          <div className="max-w-md w-full">
            <Textarea label="Description" placeholder="Enter your description here..." />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="With Error"
          description="A textarea component displaying an error state."
          code={`<Textarea label="With Error" error="This field is required" />`}
        >
          <div className="max-w-md w-full">
            <Textarea label="With Error" error="This field is required" />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Disabled"
          description="A disabled textarea component."
          code={`<Textarea label="Disabled" disabled placeholder="You cannot edit this" />`}
        >
          <div className="max-w-md w-full">
            <Textarea label="Disabled" disabled placeholder="You cannot edit this" />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
