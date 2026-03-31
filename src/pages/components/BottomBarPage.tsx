import React from 'react';
import { BottomBar, Button, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function BottomBarPage() {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12 pb-40">
      <Heading 
        title="Bottom Action System" 
        description="The bottom bar is the conversion layer, designed to drive final actions and completion flows."
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Row Layout (Side-by-Side)"
          description="A bottom bar with actions placed side-by-side."
          code={`<BottomBar sticky={false}>
  <Button variant="tertiary" className="flex-1">Cancel</Button>
  <Button variant="primary" className="flex-1">Confirm Booking</Button>
</BottomBar>`}
        >
          <div className="w-full relative h-40 border border-dashed border-gray-200 rounded-xl bg-gray-50 overflow-hidden">
            <BottomBar sticky={false}>
              <Button variant="tertiary" className="flex-1">Cancel</Button>
              <Button variant="primary" className="flex-1">Confirm Booking</Button>
            </BottomBar>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Column Layout (Stacked)"
          description="A bottom bar with actions stacked vertically."
          code={`<BottomBar layout="column" sticky={false}>
  <Button variant="primary" className="w-full">Create Account</Button>
  <Button variant="tertiary" className="w-full">Already have an account? Log in</Button>
</BottomBar>`}
        >
          <div className="w-full relative h-48 border border-dashed border-gray-200 rounded-xl bg-gray-50 overflow-hidden">
            <BottomBar layout="column" sticky={false}>
              <Button variant="primary" className="w-full">Create Account</Button>
              <Button variant="tertiary" className="w-full">Already have an account? Log in</Button>
            </BottomBar>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Price + CTA Layout"
          description="A bottom bar displaying a price alongside a primary call-to-action."
          code={`<BottomBar layout="price" price="$49.00" priceLabel="Total Amount" sticky={false}>
  <Button variant="primary" className="px-8">Pay Now</Button>
</BottomBar>`}
        >
          <div className="w-full relative h-40 border border-dashed border-gray-200 rounded-xl bg-gray-50 overflow-hidden">
            <BottomBar layout="price" price="$49.00" priceLabel="Total Amount" sticky={false}>
              <Button variant="primary" className="px-8">Pay Now</Button>
            </BottomBar>
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
