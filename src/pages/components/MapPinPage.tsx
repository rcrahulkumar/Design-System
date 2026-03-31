import React, { useState } from 'react';
import { MapPin, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function MapPinPage() {
  const [activePin, setActivePin] = useState<number | null>(2);

  return (
    <div className="space-y-12">
      <Heading 
        title="Map Pin" 
        description="Future-ready component for displaying doctors or clinics on a map interface." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Interactive Map Pins"
          description="Map pins with labels and active states."
          code={`<MapPin 
  image="https://i.pravatar.cc/150?img=32" 
  label="Dr. Smith"
  isActive={true}
/>`}
        >
          <div className="p-16 bg-gray-100 rounded-xl flex justify-center gap-12 relative overflow-hidden">
            {/* Fake map background */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            
            <MapPin 
              image="https://i.pravatar.cc/150?img=32" 
              label="Dr. Sarah"
              isActive={activePin === 1}
              onClick={() => setActivePin(1)}
              className="mt-8"
            />
            <MapPin 
              image="https://i.pravatar.cc/150?img=47" 
              label="Dr. Michael"
              isActive={activePin === 2}
              onClick={() => setActivePin(2)}
              className="-mt-4"
            />
            <MapPin 
              image="https://i.pravatar.cc/150?img=12" 
              label="City Clinic"
              isActive={activePin === 3}
              onClick={() => setActivePin(3)}
              className="mt-12"
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
