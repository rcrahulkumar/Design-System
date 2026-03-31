import React from 'react';
import { AppointmentCard, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function AppointmentCardPage() {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
      <Heading 
        title="Appointment Card" 
        description="Card for displaying upcoming or past appointments." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Upcoming Appointment"
          description="Displays details for a scheduled future appointment with actions."
          code={`<AppointmentCard 
  doctorName="Dr. Sarah Smith" 
  specialty="Cardiologist" 
  date="Oct 24, 2026" 
  time="10:00 AM" 
  location="123 Medical Center Dr." 
  status="upcoming"
  onReschedule={() => {}}
  onJoin={() => {}}
/>`}
        >
          <div className="w-full max-w-md">
            <AppointmentCard 
              doctorName="Dr. Sarah Smith" 
              specialty="Cardiologist" 
              date="Oct 24, 2026" 
              time="10:00 AM" 
              location="123 Medical Center Dr." 
              status="upcoming"
              onReschedule={() => alert('Reschedule clicked')}
              onJoin={() => alert('Join clicked')}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Completed Video Appointment"
          description="Displays details for a past video consultation."
          code={`<AppointmentCard 
  doctorName="Dr. John Doe" 
  specialty="General Practice" 
  date="Oct 20, 2026" 
  time="2:30 PM" 
  isVideo 
  status="completed"
/>`}
        >
          <div className="w-full max-w-md">
            <AppointmentCard 
              doctorName="Dr. John Doe" 
              specialty="General Practice" 
              date="Oct 20, 2026" 
              time="2:30 PM" 
              isVideo 
              status="completed"
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Canceled Appointment"
          description="Displays details for a canceled appointment."
          code={`<AppointmentCard 
  doctorName="Dr. Emily Chen" 
  specialty="Dermatologist" 
  date="Oct 15, 2026" 
  time="11:15 AM" 
  location="456 Skin Care Ave." 
  status="canceled"
/>`}
        >
          <div className="w-full max-w-md">
            <AppointmentCard 
              doctorName="Dr. Emily Chen" 
              specialty="Dermatologist" 
              date="Oct 15, 2026" 
              time="11:15 AM" 
              location="456 Skin Care Ave." 
              status="canceled"
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
