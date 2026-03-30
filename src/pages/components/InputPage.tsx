import React from 'react';
import { Input, Textarea, Upload } from "@/src/components/ui";

export default function InputPage() {
  return (
    <div className="p-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">Input System</h1>
      <p className="text-gray-500 mb-10">A complete set of form inputs with all states and sizes.</p>

      <div className="space-y-16">
        {/* Text Fields */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Text Fields</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Input label="Default" placeholder="Enter your name" />
            <Input label="Focused" placeholder="Active state" autoFocus />
            <Input label="With Helper Text" placeholder="Enter email" helperText="We'll never share your email." />
            <Input label="Error State" placeholder="Invalid input" error="This field is required" />
            <Input label="Disabled" placeholder="Cannot edit" disabled value="John Doe" />
            <Input label="Read Only" placeholder="View only" readOnly value="john@example.com" />
          </div>
        </section>

        {/* Sizes */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Sizes</h2>
          <div className="space-y-6 max-w-md">
            <Input sizeVariant="sm" label="Small" placeholder="Filter..." />
            <Input sizeVariant="md" label="Medium (Default)" placeholder="Standard form field" />
            <Input sizeVariant="lg" label="Large" placeholder="Onboarding field" />
          </div>
        </section>

        {/* Text Area */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Text Area</h2>
          <div className="space-y-6">
            <Textarea label="Journal Entry" placeholder="How are you feeling today?" />
            <Textarea label="Error State" placeholder="Invalid input" error="Message is too long" />
          </div>
        </section>

        {/* Upload */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Upload</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Upload label="Upload Profile Picture" helperText="JPG, PNG or GIF (max. 10MB)" />
            <Upload label="Error State" error="File size exceeds 10MB" />
          </div>
        </section>

        {/* Code Example */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Implementation</h2>
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl text-sm font-mono overflow-x-auto">
{`import { Input, Textarea, Upload } from "@/src/components/ui";

// Usage
<Input 
  label="Email" 
  placeholder="Enter email" 
  error={errors.email} 
/>

<Textarea 
  label="Bio" 
  placeholder="Tell us about yourself" 
/>

<Upload 
  label="Resume" 
  onFileSelect={(file) => console.log(file)} 
/>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
