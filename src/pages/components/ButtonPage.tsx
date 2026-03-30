import React from 'react';
import { Button } from "@/src/components/ui";

export default function ButtonPage() {
  return (
    <div className="p-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">Button</h1>
      <p className="text-gray-500 mb-10">Buttons are used to trigger actions and events.</p>

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-6">Variants</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-6">Sizes</h2>
          <div className="flex flex-wrap gap-4 items-end">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-6">States</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button isLoading>Loading</Button>
            <Button disabled>Disabled Primary</Button>
            <Button variant="secondary" disabled>Disabled Secondary</Button>
            <Button variant="tertiary" disabled>Disabled Tertiary</Button>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-6">Code Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl text-sm font-mono overflow-x-auto">
{`<Button variant="primary" size="md">
  Click Me
</Button>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
