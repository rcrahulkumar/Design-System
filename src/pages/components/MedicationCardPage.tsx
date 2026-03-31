import React from 'react';
import { MedicationCard, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function MedicationCardPage() {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
      <Heading 
        title="Medication Card" 
        description="Card for tracking prescriptions and pill reminders." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Pending Medication"
          description="Displays a medication reminder that needs to be taken."
          code={`<MedicationCard 
  name="Lisinopril" 
  dosage="10mg" 
  schedule="8:00 AM, Daily" 
  onTake={() => {}} 
  onSkip={() => {}}
/>`}
        >
          <div className="w-full max-w-md">
            <MedicationCard 
              name="Lisinopril" 
              dosage="10mg" 
              schedule="8:00 AM, Daily" 
              onTake={() => {}} 
              onSkip={() => {}}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Taken Medication"
          description="Displays a medication that has already been taken."
          code={`<MedicationCard 
  name="Atorvastatin" 
  dosage="20mg" 
  schedule="8:00 PM, Daily" 
  taken 
/>`}
        >
          <div className="w-full max-w-md">
            <MedicationCard 
              name="Atorvastatin" 
              dosage="20mg" 
              schedule="8:00 PM, Daily" 
              taken 
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
