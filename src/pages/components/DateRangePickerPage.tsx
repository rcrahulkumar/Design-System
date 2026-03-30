import React from 'react';
import { DateRangePicker, Heading, Card } from "@/src/components/ui";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

export default function DateRangePickerPage() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <div className="p-10 max-w-5xl pb-40">
      <Heading 
        title="Date Range Picker" 
        description="A specialized input for selecting a span of time, optimized for health data filtering and scheduling."
        className="mb-10"
      />

      <div className="space-y-16">
        {/* Basic Usage */}
        <section>
          <Heading size="md" title="Basic Usage" className="mb-6" />
          <div className="max-w-md">
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
        </section>

        {/* States */}
        <section>
          <Heading size="md" title="States" className="mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        </section>

        {/* Implementation */}
        <section>
          <Heading size="md" title="Implementation" className="mb-6" />
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl text-sm font-mono overflow-x-auto">
{`import { DateRangePicker } from "@/src/components/ui";
import { DateRange } from "react-day-picker";

const [date, setDate] = React.useState<DateRange | undefined>({
  from: new Date(),
  to: addDays(new Date(), 7),
});

<DateRangePicker 
  date={date} 
  onDateChange={setDate} 
  placeholder="Select dates"
/>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
