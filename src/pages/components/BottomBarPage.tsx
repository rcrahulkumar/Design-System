import React from 'react';
import { BottomBar, Button, Heading } from "@/src/components/ui";

export default function BottomBarPage() {
  return (
    <div className="p-10 max-w-4xl pb-40">
      <Heading 
        title="Bottom Action System" 
        description="The bottom bar is the conversion layer, designed to drive final actions and completion flows."
        className="mb-10"
      />

      <div className="space-y-16">
        {/* Row Layout */}
        <section>
          <Heading size="md" title="Row Layout (Side-by-Side)" className="mb-6" />
          <div className="relative h-40 border border-dashed border-gray-200 rounded-xl bg-gray-50 overflow-hidden">
            <BottomBar sticky={false}>
              <Button variant="tertiary" className="flex-1">Cancel</Button>
              <Button variant="primary" className="flex-1">Confirm Booking</Button>
            </BottomBar>
          </div>
        </section>

        {/* Column Layout */}
        <section>
          <Heading size="md" title="Column Layout (Stacked)" className="mb-6" />
          <div className="relative h-48 border border-dashed border-gray-200 rounded-xl bg-gray-50 overflow-hidden">
            <BottomBar layout="column" sticky={false}>
              <Button variant="primary" className="w-full">Create Account</Button>
              <Button variant="tertiary" className="w-full">Already have an account? Log in</Button>
            </BottomBar>
          </div>
        </section>

        {/* Price Layout */}
        <section>
          <Heading size="md" title="Price + CTA Layout" className="mb-6" />
          <div className="relative h-40 border border-dashed border-gray-200 rounded-xl bg-gray-50 overflow-hidden">
            <BottomBar layout="price" price="$49.00" priceLabel="Total Amount" sticky={false}>
              <Button variant="primary" className="px-8">Pay Now</Button>
            </BottomBar>
          </div>
        </section>

        {/* Implementation */}
        <section>
          <Heading size="md" title="Implementation" className="mb-6" />
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl text-sm font-mono overflow-x-auto">
{`import { BottomBar, Button } from "@/src/components/ui";

// Standard Row (Side-by-Side)
<BottomBar>
  <Button variant="tertiary">Back</Button>
  <Button variant="primary">Next Step</Button>
</BottomBar>

// Checkout Style
<BottomBar 
  layout="price" 
  price="$99.00" 
  priceLabel="Subscription"
>
  <Button variant="primary">Subscribe</Button>
</BottomBar>

// Stacked Actions (Column)
<BottomBar layout="column">
  <Button variant="primary" className="w-full">Primary Action</Button>
  <Button variant="tertiary" className="w-full">Secondary Action</Button>
</BottomBar>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
