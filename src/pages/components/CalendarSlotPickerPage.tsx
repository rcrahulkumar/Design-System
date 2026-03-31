import React, { useState } from 'react';
import { CalendarSlotPicker, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function CalendarSlotPickerPage() {
  const [selectedSlot, setSelectedSlot] = useState<string>("10:00 AM");

  return (
    <div className="space-y-12">
      <Heading 
        title="Calendar Slot Picker" 
        description="Component for selecting time slots for appointments." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Interactive Slot Picker"
          description="Grid of selectable time slots."
          code={`<CalendarSlotPicker 
  slots={["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"]} 
  selected={selectedSlot} 
  onSelect={setSelectedSlot} 
/>`}
        >
          <div className="w-full max-w-md p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <CalendarSlotPicker 
              slots={["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"]} 
              selected={selectedSlot} 
              onSelect={setSelectedSlot} 
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
