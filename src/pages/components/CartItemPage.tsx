import React, { useState } from 'react';
import { CartItem, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function CartItemPage() {
  const [qty1, setQty1] = useState(2);
  const [qty2, setQty2] = useState(1);

  return (
    <div className="space-y-12">
      <Heading 
        title="Cart Item" 
        description="Commerce layer component for displaying items in a shopping cart or prescription order." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Interactive Cart Item"
          description="Supports increment, decrement, and remove actions."
          code={`<CartItem 
  name="Vitamin C 1000mg" 
  price="24.99" 
  quantity={qty} 
  image="..." 
  onIncrement={() => setQty(q => q + 1)}
  onDecrement={() => setQty(q => Math.max(1, q - 1))}
  onRemove={() => handleRemove()}
/>`}
        >
          <div className="w-full max-w-md space-y-3">
            <CartItem 
              name="Vitamin C 1000mg" 
              price="24.99" 
              quantity={qty1} 
              image="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=150&q=80" 
              onIncrement={() => setQty1(q => q + 1)}
              onDecrement={() => setQty1(q => Math.max(1, q - 1))}
              onRemove={() => alert('Remove item')}
            />
            <CartItem 
              name="Digital Thermometer" 
              price="15.50" 
              quantity={qty2} 
              onIncrement={() => setQty2(q => q + 1)}
              onDecrement={() => setQty2(q => Math.max(1, q - 1))}
              onRemove={() => alert('Remove item')}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Compact Variant"
          description="A denser layout for sidebars or smaller screens."
          code={`<CartItem 
  variant="compact"
  name="Vitamin C 1000mg" 
  price="24.99" 
  quantity={1} 
  image="..." 
/>`}
        >
          <div className="w-full max-w-sm space-y-3">
            <CartItem 
              variant="compact"
              name="Vitamin C 1000mg" 
              price="24.99" 
              quantity={1} 
              image="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=150&q=80" 
            />
            <CartItem 
              variant="compact"
              name="Digital Thermometer" 
              price="15.50" 
              quantity={1} 
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
