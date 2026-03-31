import React from 'react';
import { DoctorCard, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function DoctorCardPage() {
  return (
    <div className="space-y-12">
      <Heading 
        title="Doctor Card" 
        description="Core JIVI component for displaying doctor profiles in search results or lists." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Standard Doctor Card"
          description="Displays a doctor's name, specialty, image, and optional consultation price."
          code={`<DoctorCard 
  name="Dr. Sarah Jenkins" 
  specialty="Cardiologist" 
  image="https://i.pravatar.cc/150?img=47" 
  price={120} 
/>`}
        >
          <div className="w-full max-w-sm">
            <DoctorCard 
              name="Dr. Sarah Jenkins" 
              specialty="Cardiologist" 
              image="https://i.pravatar.cc/150?img=47" 
              price={120} 
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Without Price"
          description="Doctor card without the price indicator."
          code={`<DoctorCard 
  name="Dr. Michael Chen" 
  specialty="General Practitioner" 
  image="https://i.pravatar.cc/150?img=11" 
/>`}
        >
          <div className="w-full max-w-sm">
            <DoctorCard 
              name="Dr. Michael Chen" 
              specialty="General Practitioner" 
              image="https://i.pravatar.cc/150?img=11" 
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
