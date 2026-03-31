import React from 'react';
import { Input, Textarea, Upload, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function InputPage() {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
      <Heading 
        title="Input System" 
        description="A complete set of form inputs with all states and sizes." 
      />

      <div className="space-y-12">
        <ComponentPreview 
          title="Text Fields" 
          description="Standard text inputs with various states."
          code={`<Input label="Default" placeholder="Enter your name" />\n<Input label="With Helper Text" helperText="We'll never share your email." />\n<Input label="Error State" error="This field is required" />`}
        >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <Input label="Default" placeholder="Enter your name" />
          <Input label="Focused" placeholder="Active state" autoFocus />
          <Input label="With Helper Text" placeholder="Enter email" helperText="We'll never share your email." />
          <Input label="Error State" placeholder="Invalid input" error="This field is required" />
          <Input label="Disabled" placeholder="Cannot edit" disabled value="John Doe" />
          <Input label="Read Only" placeholder="View only" readOnly value="john@example.com" />
        </div>
      </ComponentPreview>

      <ComponentPreview 
        title="Sizes" 
        description="Inputs come in three sizes."
        code={`<Input sizeVariant="sm" label="Small" />\n<Input sizeVariant="md" label="Medium" />\n<Input sizeVariant="lg" label="Large" />`}
      >
        <div className="space-y-6 w-full max-w-md">
          <Input sizeVariant="sm" label="Small" placeholder="Filter..." />
          <Input sizeVariant="md" label="Medium (Default)" placeholder="Standard form field" />
          <Input sizeVariant="lg" label="Large" placeholder="Onboarding field" />
        </div>
      </ComponentPreview>

      <ComponentPreview 
        title="Text Area" 
        description="Multi-line text inputs."
        code={`<Textarea label="Journal Entry" placeholder="How are you feeling today?" />`}
      >
        <div className="space-y-6 w-full max-w-md">
          <Textarea label="Journal Entry" placeholder="How are you feeling today?" />
          <Textarea label="Error State" placeholder="Invalid input" error="Message is too long" />
        </div>
      </ComponentPreview>

      <ComponentPreview 
        title="Upload" 
        description="File upload component."
        code={`<Upload label="Upload Profile Picture" helperText="JPG, PNG or GIF (max. 10MB)" />`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <Upload label="Upload Profile Picture" helperText="JPG, PNG or GIF (max. 10MB)" />
          <Upload label="Error State" error="File size exceeds 10MB" />
        </div>
      </ComponentPreview>
      </div>
    </div>
  );
}
