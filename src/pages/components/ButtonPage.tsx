import React from 'react';
import { Button, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function ButtonPage() {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
      <Heading 
        title="Button System" 
        description="Buttons are used to trigger actions and events." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Variants"
          description="Different button styles for various levels of emphasis."
          code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>`}
        >
          <div className="flex flex-wrap gap-4 items-center w-full">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Sizes"
          description="Buttons come in three sizes."
          code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
        >
          <div className="flex flex-wrap gap-4 items-end w-full">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="States"
          description="Buttons can be disabled or show a loading state."
          code={`<Button isLoading>Loading</Button>
<Button disabled>Disabled Primary</Button>
<Button variant="secondary" disabled>Disabled Secondary</Button>
<Button variant="tertiary" disabled>Disabled Tertiary</Button>`}
        >
          <div className="flex flex-wrap gap-4 items-center w-full">
            <Button isLoading>Loading</Button>
            <Button disabled>Disabled Primary</Button>
            <Button variant="secondary" disabled>Disabled Secondary</Button>
            <Button variant="tertiary" disabled>Disabled Tertiary</Button>
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
