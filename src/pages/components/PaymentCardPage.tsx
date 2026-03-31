import React, { useState } from 'react';
import { PaymentCard, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function PaymentCardPage() {
  const [selectedMethod, setSelectedMethod] = useState<string>('visa');

  return (
    <div className="space-y-12">
      <Heading 
        title="Payment Card" 
        description="Component for selecting payment methods during checkout or booking." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Interactive Payment Methods"
          description="Selectable payment method cards with disabled states."
          code={`<div className="space-y-3">
  <PaymentCard 
    method="Visa" 
    last4="4242" 
    selected={selected === 'visa'} 
    onSelect={() => setSelected('visa')} 
  />
  <PaymentCard 
    method="Mastercard" 
    last4="8888" 
    selected={selected === 'mc'} 
    onSelect={() => setSelected('mc')} 
  />
  <PaymentCard 
    method="Expired Card" 
    last4="1111" 
    disabled 
  />
</div>`}
        >
          <div className="w-full max-w-sm space-y-3">
            <PaymentCard 
              method="Visa" 
              last4="4242" 
              selected={selectedMethod === 'visa'} 
              onSelect={() => setSelectedMethod('visa')}
            />
            <PaymentCard 
              method="Mastercard" 
              last4="8888" 
              selected={selectedMethod === 'mc'} 
              onSelect={() => setSelectedMethod('mc')}
            />
            <PaymentCard 
              method="Expired Card" 
              last4="1111" 
              disabled 
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
