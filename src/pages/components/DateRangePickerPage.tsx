import React from 'react';
import { DateRangePicker, Heading, Card } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

export default function DateRangePickerPage() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12 pb-40">
      <Heading 
        title="Date Range Picker" 
        description="A specialized input for selecting a span of time, optimized for health data filtering and scheduling."
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Basic Usage"
          description="A standard date range picker with a selected range."
          code={`const [date, setDate] = React.useState<DateRange | undefined>({
  from: new Date(),
  to: addDays(new Date(), 7),
});

<DateRangePicker 
  date={date} 
  onDateChange={setDate} 
/>`}
        >
          <div className="max-w-md w-full">
            <DateRangePicker 
              date={date} 
              onDateChange={setDate} 
            />
            <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Selected Range</p>
              <p className="text-sm font-medium text-gray-900">
                {date?.from?.toLocaleDateString()} — {date?.to?.toLocaleDateString() || "Selecting..."}
              </p>
            </div>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="States"
          description="Date range picker in empty and pre-filled states."
          code={`<DateRangePicker placeholder="Pick a range" />

<DateRangePicker 
  date={{ from: new Date(2024, 0, 1), to: new Date(2024, 0, 15) }} 
/>`}
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Empty State</span>
              <DateRangePicker placeholder="Pick a range" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Pre-filled</span>
              <DateRangePicker 
                date={{ from: new Date(2024, 0, 1), to: new Date(2024, 0, 15) }} 
              />
            </div>
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
