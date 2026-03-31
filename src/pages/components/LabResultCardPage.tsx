import React from 'react';
import { LabResultCard, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function LabResultCardPage() {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
      <Heading 
        title="Lab Result Card" 
        description="Card for displaying medical test results." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Normal Result"
          description="Displays a lab result within the normal reference range."
          code={`<LabResultCard 
  testName="Cholesterol, Total" 
  date="Oct 15, 2026" 
  value="180" 
  unit="mg/dL" 
  referenceRange="< 200" 
  status="normal" 
/>`}
        >
          <div className="w-full max-w-md">
            <LabResultCard 
              testName="Cholesterol, Total" 
              date="Oct 15, 2026" 
              value="180" 
              unit="mg/dL" 
              referenceRange="< 200" 
              status="normal" 
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Abnormal Result"
          description="Displays a lab result outside the normal reference range."
          code={`<LabResultCard 
  testName="LDL Cholesterol" 
  date="Oct 15, 2026" 
  value="145" 
  unit="mg/dL" 
  referenceRange="< 100" 
  status="abnormal" 
/>`}
        >
          <div className="w-full max-w-md">
            <LabResultCard 
              testName="LDL Cholesterol" 
              date="Oct 15, 2026" 
              value="145" 
              unit="mg/dL" 
              referenceRange="< 100" 
              status="abnormal" 
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
