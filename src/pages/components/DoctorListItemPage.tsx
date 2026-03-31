import React from 'react';
import { DoctorListItem, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function DoctorListItemPage() {
  return (
    <div className="space-y-12">
      <Heading 
        title="Doctor List Item" 
        description="Production-level component for displaying doctors in a list." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Standard Doctor Item"
          description="Displays doctor profile, rating, and availability."
          code={`<DoctorListItem 
  name="Dr. Sarah Smith" 
  specialty="Cardiologist" 
  rating={4.8} 
  distance="1.2 km" 
  availability="Available Today" 
  avatar="https://i.pravatar.cc/150?img=32" 
  onSelect={() => {}} 
/>`}
        >
          <div className="w-full max-w-md space-y-4">
            <DoctorListItem 
              name="Dr. Sarah Smith" 
              specialty="Cardiologist" 
              rating={4.8} 
              distance="1.2 km" 
              availability="Available Today" 
              avatar="https://i.pravatar.cc/150?img=32" 
              onSelect={() => alert('Selected Dr. Sarah Smith')} 
            />
            <DoctorListItem 
              name="Dr. Michael Chen" 
              specialty="Dermatologist" 
              rating={4.9} 
              distance="3.5 km" 
              availability="Next Available: Tomorrow" 
              avatar="https://i.pravatar.cc/150?img=11" 
              onSelect={() => alert('Selected Dr. Michael Chen')} 
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
